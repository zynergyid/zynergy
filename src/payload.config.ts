import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import sharp from "sharp";
import { LeadFiles } from "@/collections/LeadFiles";
import { Leads } from "@/collections/Leads";
import { Media } from "@/collections/Media";
import { Posts } from "@/collections/Posts";
import { Projects } from "@/collections/Projects";
import { Users } from "@/collections/Users";
import { SiteSettings } from "@/globals/SiteSettings";
import { briefUpload } from "@/content/brief";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default buildConfig({
  admin: {
    user: Users.slug,
    components: {
      graphics: {
        Logo: "@/components/admin/Branding#Logo",
        Icon: "@/components/admin/Branding#Icon",
      },
    },
    meta: {
      titleSuffix: " | Zynergy Admin",
    },
  },
  collections: [Posts, Projects, Media, Leads, LeadFiles, Users],
  globals: [SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  db: postgresAdapter({
    pool: {
      // DATABASE_URL/POSTGRES_URL are injected by the Neon marketplace
      // integration on Vercel; DATABASE_URI wins for local/manual setups.
      connectionString:
        process.env.DATABASE_URI ||
        process.env.DATABASE_URL ||
        process.env.POSTGRES_URL,
    },
  }),
  sharp,
  upload: {
    limits: {
      fileSize: briefUpload.maxFileSizeMB * 1024 * 1024,
    },
  },
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  plugins: [
    // Registered unconditionally so its admin components land in the
    // generated importMap; `enabled` toggles the actual storage backend
    // (disk locally, Vercel Blob when the token is present).
    vercelBlobStorage({
      enabled: Boolean(process.env.BLOB_READ_WRITE_TOKEN),
      collections: {
        media: true,
        "lead-files": true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || "",
    }),
  ],
});
