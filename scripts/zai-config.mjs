#!/usr/bin/env node
/**
 * SANATAN HI — connect your z.ai API key.
 *
 * The backend uses `z-ai-web-dev-sdk` (server-side only). The SDK does NOT
 * read ZAI_API_KEY-style environment variables — it reads a JSON config file
 * called `.z-ai-config`, checked in this order:
 *
 *   1. <current working dir>/.z-ai-config   (project root when started there)
 *   2. ~/.z-ai-config                       (user home)
 *   3. /etc/.z-ai-config                    (system-wide)
 *
 * This script builds that file from plain environment variables so you never
 * hand-edit JSON or risk committing your key to git.
 *
 * USAGE
 *   ZAI_API_KEY=xxxxx  npm run zai:config
 *   ZAI_API_KEY=xxxxx  node scripts/zai-config.mjs
 *
 * VARIABLES
 *   ZAI_API_KEY    (required)  Your active z.ai API key.
 *   ZAI_BASE_URL   (optional)  Defaults to the public z.ai open platform:
 *                                https://api.z.ai/api/paas/v4
 *                              China mainland (bigmodel.cn):
 *                                https://open.bigmodel.cn/api/paas/v4
 *                              Or your full Z.ai web-dev environment base URL.
 *   ZAI_CHAT_ID    (optional)  From your Z.ai web-dev environment config.
 *   ZAI_USER_ID    (optional)  From your Z.ai web-dev environment config.
 *   ZAI_TOKEN      (optional)  From your Z.ai web-dev environment config.
 *   ZAI_CONFIG_PATH (optional) Write to one custom path instead.
 *
 * FLAGS
 *   --project-only   Write only <project>/.z-ai-config (skip ~/.z-ai-config).
 *   --quiet         Print less.
 *
 * SECURITY
 *   The file is written with chmod 600 (owner read/write only).
 *   `.z-ai-config` is listed in .gitignore — never commit it.
 */

import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { homedir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

const args = process.argv.slice(2);
const projectOnly = args.includes("--project-only");
const quiet = args.includes("--quiet");

const DEFAULT_PUBLIC_BASE = "https://api.z.ai/api/paas/v4";

const apiKey = (process.env.ZAI_API_KEY ?? "").trim();
const baseUrl = (process.env.ZAI_BASE_URL ?? DEFAULT_PUBLIC_BASE).trim().replace(/\/+$/, "");

if (!apiKey) {
  console.error("✖  ZAI_API_KEY is not set.");
  console.error("");
  console.error("   Example:");
  console.error("     ZAI_API_KEY=your_key_here npm run zai:config");
  console.error("");
  console.error("   Optional overrides: ZAI_BASE_URL, ZAI_CHAT_ID, ZAI_USER_ID, ZAI_TOKEN");
  console.error("   See DEPLOY-HOSTINGER.md for the full deployment guide.");
  process.exit(1);
}

/* Build the config object the SDK expects. baseUrl + apiKey are the only
   required fields; chatId / userId / token are added only when provided —
   the SDK treats them as optional headers. */
const config = { baseUrl, apiKey };
if (process.env.ZAI_CHAT_ID) config.chatId = process.env.ZAI_CHAT_ID.trim();
if (process.env.ZAI_USER_ID) config.userId = process.env.ZAI_USER_ID.trim();
if (process.env.ZAI_TOKEN) config.token = process.env.ZAI_TOKEN.trim();

const json = JSON.stringify(config, null, 2) + "\n";

/* Decide where to write. */
const targets = [];
if (process.env.ZAI_CONFIG_PATH) {
  targets.push(path.resolve(process.env.ZAI_CONFIG_PATH));
} else {
  targets.push(path.join(projectRoot, ".z-ai-config"));
  if (!projectOnly) targets.push(path.join(homedir(), ".z-ai-config"));
}

for (const file of targets) {
  mkdirSync(path.dirname(file), { recursive: true });
  writeFileSync(file, json, { mode: 0o600 });
  chmodSync(file, 0o600);
}

console.log("✔  z.ai credentials connected.");
for (const t of targets) console.log("   wrote: " + t);
console.log("   baseUrl: " + config.baseUrl);

if (!quiet) {
  console.log("");
  console.log("Next steps:");
  console.log("  1. Restart the app server so the SDK picks up the config:");
  console.log("       pm2 restart sanatan-hi    (or however you run it)");
  console.log("  2. The file is chmod 600 and git-ignored — safe on the server.");
  console.log("  3. Full guide: DEPLOY-HOSTINGER.md");
}
