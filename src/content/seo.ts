import { siteConfig } from "@/content/site";
import { companyHome, supplyPage } from "@/content/company";
import { designPage } from "@/content/design";
import { tentangSection } from "@/content/team";

/**
 * Pages whose title and description can be edited from the Hub. The keys
 * are the contract with the Hub's settings form and the `site-settings`
 * global; the defaults are what the site showed before the global existed.
 */
export const seoPages = [
  { key: "home", label: "Beranda", path: "/", title: `${siteConfig.name} | Digitalin, Design, Apps & Supply`, description: companyHome.subtitle },
  { key: "digital", label: "Digitalin", path: "/digital", title: "Website, Branding & Digital Marketing", description: siteConfig.description },
  { key: "design", label: "Design", path: "/design", title: "Branding, Packaging & Print", description: designPage.subtitle },
  { key: "supply", label: "Supply", path: "/supply", title: "Pengadaan Barang Industri | PT Sinergi Mitra Abadi Jaya", description: supplyPage.subtitle },
  { key: "racikFitur", label: "Cek & Racik Fitur", path: "/racik-fitur", title: "Cek & Racik Fitur Website", description: "Cek dalam 1 menit apakah bisnis Anda butuh website, lalu racik fitur yang dibutuhkan. Kirim hasilnya langsung via WhatsApp. Gratis, tanpa komitmen." },
  { key: "briefProject", label: "Brief Project", path: "/brief-project", title: "Brief Project", description: "Ceritakan kebutuhan website Anda. Tim Zynergy akan menghubungi Anda dengan rekomendasi dan penawaran terbaik." },
  { key: "portofolio", label: "Portofolio", path: "/portofolio", title: "Portofolio", description: "Website yang kami bangun untuk UMKM, personal brand, dan bisnis lokal di seluruh Indonesia." },
  { key: "tentang", label: "Tentang", path: "/tentang", title: "Tentang Kami", description: tentangSection.subtitle },
  { key: "blog", label: "Blog", path: "/blog", title: "Blog", description: "Tips website, digital marketing, dan studi kasus untuk membantu bisnis Anda berkembang online." },
] as const;
export type SeoPageKey = (typeof seoPages)[number]["key"];

/** What WhatsApp, LinkedIn, and other previews show for the site as a whole. */
export const shareDefaults = {
  title: `${siteConfig.name} | Digitalin, Design, Apps & Supply`,
  description: siteConfig.description,
};
