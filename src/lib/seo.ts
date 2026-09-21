import type { Metadata } from "next";
import { getPayloadClient } from "@/lib/payload";
import { seoPages, shareDefaults, type SeoPageKey } from "@/content/seo";
import { socialDefaults, socialPlatforms, type SocialKey } from "@/content/socials";

type SeoPair = { title?: string | null; description?: string | null } | null | undefined;

/** The global, or null when the database is unreachable (the defaults still render). */
async function loadSettings() {
  try {
    const payload = await getPayloadClient();
    return await payload.findGlobal({ slug: "site-settings", depth: 0 });
  } catch (error) {
    console.error("site-settings unavailable, using defaults:", error);
    return null;
  }
}

const pick = (edited: SeoPair, fallback: { title: string; description: string }) => ({
  title: edited?.title?.trim() || fallback.title,
  description: edited?.description?.trim() || fallback.description,
});

/** Title and description for one page: the Hub's edit when present, else the code default. */
export async function pageMetadata(key: SeoPageKey): Promise<Metadata> {
  const page = seoPages.find((p) => p.key === key)!;
  const settings = await loadSettings();
  const seo = pick(settings?.pages?.[key], page);
  // The home page carries the full site title; other pages get the "| Zynergy" template from the layout.
  return key === "home" ? { title: { absolute: seo.title }, description: seo.description } : seo;
}

/** Site-wide share preview text for the root layout. */
export async function shareMetadata() {
  const settings = await loadSettings();
  return pick(settings?.share, shareDefaults);
}

/** Social profiles in display order: the Hub's values when the group was ever saved, else the code defaults. */
export async function getSocials(): Promise<{ key: SocialKey; label: string; href: string }[]> {
  const settings = await loadSettings();
  const edited = settings?.socials as Partial<Record<SocialKey, string | null>> | null | undefined;
  const touched = Boolean(edited && Object.values(edited).some((v) => v && v.trim()));
  return socialPlatforms
    .map((p) => ({ key: p.key, label: p.label, href: (touched ? edited?.[p.key] : socialDefaults[p.key])?.trim() ?? "" }))
    .filter((p) => p.href);
}

/** `sameAs` for the Organization structured data. */
export const sameAsLinks = async () => (await getSocials()).map((p) => p.href);
