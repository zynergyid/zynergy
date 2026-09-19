import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "site_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"share_title" varchar,
  	"share_description" varchar,
  	"pages_home_title" varchar,
  	"pages_home_description" varchar,
  	"pages_digital_title" varchar,
  	"pages_digital_description" varchar,
  	"pages_design_title" varchar,
  	"pages_design_description" varchar,
  	"pages_supply_title" varchar,
  	"pages_supply_description" varchar,
  	"pages_racik_fitur_title" varchar,
  	"pages_racik_fitur_description" varchar,
  	"pages_brief_project_title" varchar,
  	"pages_brief_project_description" varchar,
  	"pages_portofolio_title" varchar,
  	"pages_portofolio_description" varchar,
  	"pages_tentang_title" varchar,
  	"pages_tentang_description" varchar,
  	"pages_blog_title" varchar,
  	"pages_blog_description" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "users" ADD COLUMN "enable_a_p_i_key" boolean;
  ALTER TABLE "users" ADD COLUMN "api_key" varchar;
  ALTER TABLE "users" ADD COLUMN "api_key_index" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "site_settings" CASCADE;
  ALTER TABLE "users" DROP COLUMN "enable_a_p_i_key";
  ALTER TABLE "users" DROP COLUMN "api_key";
  ALTER TABLE "users" DROP COLUMN "api_key_index";`)
}
