import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "site_settings" ADD COLUMN "socials_instagram" varchar;
  ALTER TABLE "site_settings" ADD COLUMN "socials_threads" varchar;
  ALTER TABLE "site_settings" ADD COLUMN "socials_linkedin" varchar;
  ALTER TABLE "site_settings" ADD COLUMN "socials_whatsapp" varchar;
  ALTER TABLE "site_settings" ADD COLUMN "socials_github" varchar;
  ALTER TABLE "site_settings" ADD COLUMN "socials_facebook" varchar;
  ALTER TABLE "site_settings" ADD COLUMN "socials_youtube" varchar;
  ALTER TABLE "site_settings" ADD COLUMN "socials_tiktok" varchar;
  ALTER TABLE "site_settings" ADD COLUMN "socials_x" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "site_settings" DROP COLUMN "socials_instagram";
  ALTER TABLE "site_settings" DROP COLUMN "socials_threads";
  ALTER TABLE "site_settings" DROP COLUMN "socials_linkedin";
  ALTER TABLE "site_settings" DROP COLUMN "socials_whatsapp";
  ALTER TABLE "site_settings" DROP COLUMN "socials_github";
  ALTER TABLE "site_settings" DROP COLUMN "socials_facebook";
  ALTER TABLE "site_settings" DROP COLUMN "socials_youtube";
  ALTER TABLE "site_settings" DROP COLUMN "socials_tiktok";
  ALTER TABLE "site_settings" DROP COLUMN "socials_x";`)
}
