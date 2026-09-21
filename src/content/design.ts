import {
  FileText,
  Image as ImageIcon,
  type LucideIcon,
  Package,
  PenTool,
  Printer,
  Shirt,
} from "lucide-react";

/**
 * Zynergy Design line: standalone design deliverables (branding, packaging,
 * print). Growth-oriented creative work (website visuals, ad creative,
 * social content as a service) stays under Digitalin.
 */

export interface DesignService {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const designPage = {
  badge: "Zynergy Design",
  titleLead: "Branding, Packaging & Print.",
  titleHighlight: "Rapi, Konsisten, Siap Cetak.",
  subtitle:
    "Tim desain Zynergy untuk usaha yang ingin tampil meyakinkan: dari logo dan identitas brand, kemasan, sampai materi cetak dan company profile. Dikerjakan tim yang sama dengan Digitalin.",
  trustPoints: ["Konsep sesuai brief, bukan template", "Revisi sampai pas", "File final siap cetak & digital"],
  cta: "Konsultasi via WhatsApp",

  services: {
    badge: "Layanan Desain",
    title: "Apa yang Kami Desain",
    subtitle: "Semua yang membuat usaha Anda terlihat rapi dan dipercaya, di rak, di kertas, dan di layar.",
    cards: [
      {
        icon: PenTool,
        title: "Logo & Identitas Brand",
        description:
          "Logo, palet warna, tipografi, dan panduan pemakaian, supaya brand Anda konsisten di mana pun tampil.",
      },
      {
        icon: Package,
        title: "Desain Kemasan",
        description: "Kemasan produk, label, dan stiker yang menonjol di rak dan di foto marketplace.",
      },
      {
        icon: Printer,
        title: "Materi Cetak",
        description:
          "Brosur, spanduk, banner, kartu nama, menu, dan flyer promosi, lengkap dengan file siap cetak.",
      },
      {
        icon: FileText,
        title: "Company Profile & Deck",
        description:
          "Company profile PDF dan deck presentasi untuk penawaran, registrasi vendor, dan investor.",
      },
      {
        icon: ImageIcon,
        title: "Konten Visual Sosial Media",
        description: "Template feed, story, dan materi promo yang seragam dengan brand Anda.",
      },
      {
        icon: Shirt,
        title: "Merchandise & Seragam",
        description: "Desain kaos, seragam, tote bag, dan merchandise untuk tim dan promosi.",
      },
    ] satisfies DesignService[],
  },

  process: {
    badge: "Cara Kerja",
    title: "Tiga Langkah Sampai File Final",
    subtitle: "Tanpa formulir panjang. Semuanya lewat WhatsApp, dari brief sampai file jadi.",
    steps: [
      {
        title: "Brief via WhatsApp",
        description:
          "Ceritakan usaha, kebutuhan, dan referensi yang Anda suka. Kami bantu merumuskan brief-nya.",
      },
      {
        title: "Konsep & Revisi",
        description: "Kami kirim konsep awal, Anda beri masukan, kami sempurnakan sampai pas.",
      },
      {
        title: "File Final",
        description:
          "Anda terima file siap cetak dan versi digital, plus panduan singkat cara pakainya.",
      },
    ],
  },

  crossLink: {
    text: "Butuh website, konten, atau iklan juga?",
    linkLabel: "Lihat Digitalin",
    href: "/digital",
  },

  finalCta: {
    badge: "Mulai dari Brief",
    title: "Ceritakan Kebutuhan Desain Anda",
    subtitle:
      "Kirim gambaran singkat lewat WhatsApp. Kami balas dengan pertanyaan yang tepat dan perkiraan waktu pengerjaan.",
    cta: "Chat Zynergy Design",
  },
} as const;
