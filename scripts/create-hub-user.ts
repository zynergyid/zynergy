/**
 * Creates (or refreshes) the "hub" service user whose API key the Hub uses to
 * edit site settings. Idempotent. Writes the credentials to the file named by
 * HUB_USER_OUT (mode 0600) and prints nothing secret.
 *
 *   HUB_USER_OUT=~/.config/zynergy-site/env pnpm payload run scripts/create-hub-user.ts
 */
import { randomBytes, randomUUID } from "node:crypto";
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { getPayload } from "payload";
import config from "@payload-config";

const out = process.env.HUB_USER_OUT;
if (!out) throw new Error("HUB_USER_OUT is required");
const payload = await getPayload({ config });
const email = "hub@zynergy.co.id";
const password = randomBytes(24).toString("base64url");
const apiKey = randomUUID();
const existing = await payload.find({ collection: "users", where: { email: { equals: email } }, limit: 1 });
if (existing.totalDocs === 0) {
  await payload.create({ collection: "users", data: { email, password, name: "Zynergy Hub", enableAPIKey: true, apiKey } });
  payload.logger.info("Created hub user");
} else {
  await payload.update({ collection: "users", id: existing.docs[0].id, data: { password, enableAPIKey: true, apiKey } });
  payload.logger.info("Refreshed hub user password and API key");
}
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, `# User "hub" di CMS situs zynergy.co.id. Jangan commit.\nSITE_HUB_EMAIL=${email}\nSITE_HUB_PASSWORD=${password}\nSITE_API_KEY=${apiKey}\n`);
chmodSync(out, 0o600);
payload.logger.info(`Credentials written to ${out}`);
process.exit(0);
