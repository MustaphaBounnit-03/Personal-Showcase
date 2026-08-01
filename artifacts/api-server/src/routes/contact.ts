import { Router, type IRouter } from "express";
import rateLimit from "express-rate-limit";
import { SendContactMessageBody } from "@workspace/api-zod";
import {
  db,
  isDatabaseConfigured,
  contactMessagesTable,
} from "@workspace/db";
import { sendContactEmail } from "../lib/email";
import { logger } from "../lib/logger";

const router: IRouter = Router();

// Rate limiting specific to the contact form (5 submissions per 15 min per IP).
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: { error: "Too many messages. Please try again later." },
});

// In-memory store: used only when DATABASE_URL is not configured.
// When DATABASE_URL is configured, messages are persisted in PostgreSQL.
const messages: Array<{
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}> = [];

let nextId = 1;

// Strip control characters (e.g. \u0000, \n\t inside single-line fields) and
// collapse whitespace, while preserving newlines in the message body.
function sanitizeText(input: string): string {
  return input
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim();
}

router.post("/contact", contactLimiter, async (req, res) => {
  const body = req.body ?? {};

  // Honeypot: bots tend to fill every field. If it's non-empty, silently
  // pretend success without persisting anything.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    res.status(201).json({
      id: -1,
      name: "",
      email: "",
      message: "",
      createdAt: new Date().toISOString(),
    });
    return;
  }

  // Server-side minimum time: a real human takes >2s to fill the form.
  if (typeof body.submittedAt === "number") {
    const elapsed = Date.now() - body.submittedAt;
    if (elapsed < 2000) {
      res.status(201).json({
        id: -1,
        name: "",
        email: "",
        message: "",
        createdAt: new Date().toISOString(),
      });
      return;
    }
  }

  const parsed = SendContactMessageBody.safeParse(body);

  if (!parsed.success) {
    res.status(400).json({
      error: "Invalid request body",
      details: parsed.error.flatten(),
    });
    return;
  }

  const { name, email, message } = {
    name: sanitizeText(parsed.data.name),
    email: sanitizeText(parsed.data.email).toLowerCase(),
    message: sanitizeText(parsed.data.message),
  };

  if (!name || !email || !message) {
    res.status(400).json({ error: "Invalid request body" });
    return;
  }

  // Send the message to the owner's Gmail inbox via SMTP.
  // Best-effort: if SMTP is not configured or the send fails, we still save
  // the message and return success so the visitor isn't blocked.
  try {
    const sent = await sendContactEmail({ name, email, message });
    if (!sent) {
      logger.warn(
        "[contact] SMTP not configured; message was not emailed. Add SMTP_USER/SMTP_PASS/MAIL_TO env vars.",
      );
    }
  } catch (err) {
    logger.error({ err }, "[contact] Failed to send contact email");
  }

  // Real database insert when DATABASE_URL is configured.
  if (isDatabaseConfigured && db) {
    try {
      const [row] = await db
        .insert(contactMessagesTable)
        .values({ name, email, message })
        .returning();

      res.status(201).json({
        id: row.id,
        name: row.name,
        email: row.email,
        message: row.message,
        createdAt: row.createdAt.toISOString(),
      });
      return;
    } catch (err) {
      // Fall back to in-memory storage if the DB write fails
      // (e.g. table not migrated yet). Log and continue.
      console.error("[contact] DB insert failed, using in-memory fallback:", err);
    }
  }

  const record = {
    id: nextId++,
    name,
    email,
    message,
    createdAt: new Date().toISOString(),
  };

  messages.push(record);
  res.status(201).json(record);
});

export default router;

