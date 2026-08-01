import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";

export interface ContactEmail {
  name: string;
  email: string;
  message: string;
}

// ---------------------------------------------------------------------------
// Gmail / SMTP configuration
//
// For Gmail you must use an App Password (not your normal account password):
//   1. Go to https://myaccount.google.com/security
//   2. Enable 2-Step Verification
//   3. Create an App Password under "App passwords"
//   4. Use that 16-character password here via SMTP_PASS
//
// Env vars:
//   SMTP_HOST   - default smtp.gmail.com
//   SMTP_PORT   - default 465 (SSL). Use 587 for STARTTLS.
//   SMTP_USER   - the Gmail account that *sends* the email
//   SMTP_PASS   - the Gmail App Password for SMTP_USER
//   SMTP_SECURE - "true" (SSL, port 465) or "false" (STARTTLS, port 587)
//   MAIL_TO     - the inbox that receives the contact-form messages
//                 (defaults to SMTP_USER if not set)
// ---------------------------------------------------------------------------

function getEnv(name: string): string | undefined {
  return process.env[name]?.trim();
}

const smtpHost = getEnv("SMTP_HOST") ?? "smtp.gmail.com";
const smtpPortRaw = getEnv("SMTP_PORT") ?? "465";
const smtpPort = Number.parseInt(smtpPortRaw, 10);
const smtpUser = getEnv("SMTP_USER");
const smtpPass = getEnv("SMTP_PASS");
const smtpSecure = (getEnv("SMTP_SECURE") ?? "true").toLowerCase() === "true";
const mailTo = getEnv("MAIL_TO") ?? smtpUser;

const isConfigured = Boolean(smtpUser && smtpPass);

let transporter: Transporter | null = null;

if (isConfigured && !Number.isNaN(smtpPort)) {
  transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: { user: smtpUser, pass: smtpPass },
  });
}

/**
 * Send the contact-form message to the configured Gmail inbox.
 * Returns `true` when delivered, `false` when SMTP is not configured.
 * Throws on delivery failure so the caller can decide how to handle it.
 */
export async function sendContactEmail({
  name,
  email,
  message,
}: ContactEmail): Promise<boolean> {
  if (!transporter || !mailTo) {
    return false;
  }

  await transporter.sendMail({
    from: `"Portfolio Contact" <${smtpUser}>`,
    to: mailTo,
    replyTo: email,
    subject: `New portfolio message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: [
      '<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;border:1px solid #eee;border-radius:8px;">',
      '<h2 style="color:#0ea5e9;margin-top:0;">New portfolio message</h2>',
      `<p><strong>Name:</strong> ${escapeHtml(name)}</p>`,
      `<p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>`,
      '<hr style="border:none;border-top:1px solid #eee;margin:20px 0;" />',
      `<p style="white-space:pre-wrap;line-height:1.6;">${escapeHtml(message)}</p>`,
      "</div>",
    ].join(""),
  });

  return true;
}

function escapeHtml(value: string): string {
  // Build entity strings dynamically to avoid literal entities in source.
  const amp = "&" + "amp;";
  const lt = "&" + "lt;";
  const gt = "&" + "gt;";
  const quot = "&" + "quot;";
  const apos = "&#39;";
  return value
    .replace(/&/g, amp)
    .replace(/</g, lt)
    .replace(/>/g, gt)
    .replace(/"/g, quot)
    .replace(/'/g, apos);
}

