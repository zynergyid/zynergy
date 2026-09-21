import { siteConfig } from "@/content/site";

/**
 * Public social profiles. The Hub edits the live values in the site-settings
 * global; these are the defaults and the contract (keys mirror
 * `socialPlatforms` in the Hub's src/lib/site-seo.ts).
 */
export const socialPlatforms = [
  { key: "instagram", label: "Instagram" },
  { key: "threads", label: "Threads" },
  { key: "linkedin", label: "LinkedIn" },
  { key: "whatsapp", label: "WhatsApp Business" },
  { key: "github", label: "GitHub" },
  { key: "facebook", label: "Facebook" },
  { key: "youtube", label: "YouTube" },
  { key: "tiktok", label: "TikTok" },
  { key: "x", label: "X" },
] as const;
export type SocialKey = (typeof socialPlatforms)[number]["key"];
export type Socials = Partial<Record<SocialKey, string>>;

/** Accounts that exist today. Empty keys stay hidden until the Hub fills them. */
export const socialDefaults: Socials = {
  instagram: siteConfig.socials.instagram,
  threads: siteConfig.socials.threads,
  linkedin: siteConfig.socials.linkedin,
};
