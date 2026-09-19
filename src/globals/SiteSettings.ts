import type { GlobalConfig } from "payload";
import { seoPages } from "@/content/seo";

const seoFields = (label: string) => [
  { name: "title", type: "text" as const, label: `${label}: judul`, maxLength: 70 },
  { name: "description", type: "textarea" as const, label: `${label}: deskripsi`, maxLength: 200 },
];

/**
 * Site-wide settings the team edits from the Hub (through the REST API with
 * a user API key). Empty fields fall back to the defaults in src/content/seo.ts,
 * so the global can stay half-filled without breaking anything.
 */
export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Pengaturan situs",
  access: {
    read: () => true,
    update: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: "businessProfileUrl",
      type: "text",
      label: "Tautan Google Business Profile",
      admin: { description: "Tautan profil bisnis di Google Maps; dipakai untuk penilaian SEO dan structured data." },
    },
    {
      name: "share",
      type: "group",
      label: "Pratinjau bagi-pakai (WhatsApp, LinkedIn)",
      fields: seoFields("Bagi-pakai"),
    },
    {
      name: "pages",
      type: "group",
      label: "SEO per halaman",
      fields: seoPages.map((p) => ({
        name: p.key,
        type: "group" as const,
        label: `${p.label} (${p.path})`,
        fields: seoFields(p.label),
      })),
    },
  ],
};
