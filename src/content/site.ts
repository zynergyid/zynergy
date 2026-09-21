export interface NavItem {
  label: string;
  href: string;
}

/**
 * Single source of truth for business data.
 * Everything a non-dev might need to change lives here or in landing.ts.
 */
export const siteConfig = {
  name: "Zynergy",
  legalName: "PT Sinergi Mitra Abadi Jaya",
  endorsement: "Unit bisnis digital & kreatif dari PT Sinergi Mitra Abadi Jaya.",
  domain: "zynergy.co.id",
  url: "https://zynergy.co.id",
  tagline: "Digital growth partner untuk bisnis Indonesia: website, branding, dan marketing dalam satu tim.",
  description:
    "Zynergy membangun website profesional yang cepat, mobile-friendly, dan siap iklan, membantu bisnis Anda dipercaya pelanggan dan mendapatkan lebih banyak leads via WhatsApp.",

  whatsappNumber: "6281931603815",
  email: "halo@zynergy.co.id",
  /** Alamat korporat (Supply, compro, tender); alias ke inbox yang sama. */
  corporateEmail: "info@zynergy.co.id",
  serviceArea: "Melayani seluruh Indonesia (online)",

  // Defaults only; the live list is edited from the Hub (site-settings global, see content/socials.ts).
  socials: {
    instagram: "https://instagram.com/zynergyid",
    threads: "https://www.threads.net/@zynergyid",
    linkedin: "https://linkedin.com/company/zynergyid",
  },

  waMessages: {
    default:
      "Halo Zynergy! Saya ingin konsultasi gratis mengenai pembuatan website. Bisa dibantu?",
    package: (packageName: string) =>
      `Halo Zynergy! Saya tertarik dengan paket ${packageName}. Mohon info lebih lanjut ya.`,
    features: (featureList: string, addOnList?: string) =>
      `Halo Zynergy! Saya ingin website dengan fitur: ${featureList}.${addOnList ? ` Tambahan: ${addOnList}.` : ""} Bisa dibantu rekomendasinya?`,
    design:
      "Halo Zynergy Design! Saya butuh desain untuk usaha saya (logo/kemasan/cetak/company profile). Bisa dibantu?",
    custom:
      "Halo Zynergy! Saya punya kebutuhan aplikasi/sistem yang lebih kompleks. Bisa diskusi scope-nya?",
    pengadaan:
      "Halo, saya ingin menghubungi tim pengadaan PT Sinergi Mitra Abadi Jaya terkait kebutuhan barang.",
  },

  nav: [
    { label: "Beranda", href: "/" },
    { label: "Digitalin", href: "/digital" },
    { label: "Design", href: "/design" },
    { label: "Racik Fitur", href: "/racik-fitur" },
    { label: "Paket Harga", href: "/digital#paket" },
    { label: "Portofolio", href: "/portofolio" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/digital#faq" },
    { label: "Kontak", href: "/digital#kontak" },
  ] satisfies NavItem[],
} as const;
