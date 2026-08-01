// Load `.env` first so every other module sees the configured variables.
import "./env";

import app from "./app";
import { logger } from "./lib/logger";

// PORT is optional locally — defaults to 3000 so `pnpm run dev:api`
// works with zero configuration. On Vercel the platform injects its own PORT.
const rawPort = process.env["PORT"] ?? "3000";

const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

app.listen(port, (err) => {
  if (err) {
    logger.error({ err }, "Error listening on port");
    process.exit(1);
  }

  logger.info({ port }, "Server listening");
});
