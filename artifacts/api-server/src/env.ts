/**
 * Loads environment variables from `.env` files automatically.
 *
 * Search order (first match wins):
 *   1. `ARTIFACTS_API_SERVER_ENV_FILE` — explicit override
 *   2. `<cwd>/.env`  (typically the monorepo root or the directory you run from)
 *   3. `<packageRoot>/.env` (next to this source tree, i.e. artifacts/api-server)
 *
 * This file must be imported as the very first import in `src/index.ts` so
 * variables are available before any other module reads `process.env`.
 *
 * Local run needs no setup at all — the server falls back to sensible
 * defaults (in-memory storage, SMTP skipped) when variables are missing.
 */

import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function tryLoadEnvFile(file: string): boolean {
  if (!file || !existsSync(file)) return false;
  try {
    // Node >= 20.12 / 21.7. No throw when the file exists.
    process.loadEnvFile(file);
    return true;
  } catch (err) {
    // Malformed .env files shouldn't crash the server at boot — log and continue.
    console.warn(`[env] Failed to load env file "${file}":`, err);
    return false;
  }
}

const candidates = [
  process.env.ARTIFACTS_API_SERVER_ENV_FILE,
  path.resolve(process.cwd(), ".env"),
  path.resolve(packageRoot, ".env"),
];

for (const candidate of candidates) {
  if (candidate && tryLoadEnvFile(candidate)) {
    break;
  }
}

