import {
  Boxes,
  Cable,
  Factory,
  HardHat,
  type LucideIcon,
  MonitorSmartphone,
  LayoutGrid,
  PenTool,
  Router,
  Wrench,
  Zap,
} from "lucide-react";

/**
 * Group-level content: the root page presents the three business lines of
 * Zynergy (under PT Sinergi Mitra Abadi Jaya). Line-specific funnels live on
 * their own pages; the root stays a thin gateway.
 */

export interface BusinessLine {
  value: string;
  name: string;
  tagline: string;
  description: string;
  points: string[];
  href: string;
  cta: string;
  icon: LucideIcon;
  /** Flagship line gets visual priority on the root page. */
  flagship?: boolean;
  /** Announced but not yet open; renders a "Segera Hadir" card without CTA. */
  upcoming?: boolean;
}

export const companyHome = {
  eyebrow: "PT Sinergi Mitra Abadi Jaya",
  title: "Membantu Bisnis Bertumbuh lewat Teknologi, Desain, dan Pemasaran.",
  subtitle:
    "Zynergy adalah rumah bagi empat lini bisnis PT Sinergi Mitra Abadi Jaya: digital, desain, produk software, dan pengadaan barang industri.",
} as const;

export const businessLines: BusinessLine[] = [
  {
    value: "digital",
    name: "Digitalin",
    tagline: "Technology, Creative & Marketing",
    description:
      "Satu tim untuk bisnis Anda bertumbuh online: website dan aplikasi, branding dan konten, sampai SEO dan iklan.",
    points: ["Website, web app & mobile", "Branding, design & motion", "SEO, ads & social media"],
    href: "/digital",
    cta: "Jelajahi Digitalin",
    icon: MonitorSmartphone,
    flagship: true,
  },
  {
    value: "design",
    name: "Zynergy Design",
    tagline: "Branding, Packaging & Print",
    description:
      "Tim desain untuk usaha yang ingin tampil meyakinkan: logo dan identitas brand, kemasan, materi cetak, sampai company profile.",
    points: ["Logo & identitas brand", "Kemasan & materi cetak", "Company profile & deck"],
    href: "/design",
    cta: "Jelajahi Design",
    icon: PenTool,
  },
  {
    value: "apps",
    name: "Zynergy Apps",
    tagline: "Aplikasi Siap Pakai",
    description:
      "Aplikasi berlangganan yang lahir dari kebutuhan nyata klien kami, sedang dalam pengembangan.",
    points: ["Asisten WhatsApp AI", "Menu digital QR + pesanan", "PPDB & pendaftaran online"],
    href: "#",
    cta: "",
    icon: LayoutGrid,
    upcoming: true,
  },
  {
    value: "pengadaan",
    name: "Zynergy Supply",
    tagline: "Pengadaan Electrical, Industri & Mining",
    description:
      "Lini pengadaan barang PT Sinergi Mitra Abadi Jaya sejak 2008: komponen jaringan, kelistrikan, dan infrastruktur industri.",
    points: ["Networking & konektivitas", "Structured cabling", "Kelistrikan & MRO"],
    href: "/supply",
    cta: "Jelajahi Supply",
    icon: Boxes,
  },
];

export interface SupplyCategory {
  icon: LucideIcon;
  title: string;
  description: string;
  examples: string;
}

export const supplyPage = {
  badge: "Pengadaan Barang",
  title: "Mitra Pengadaan untuk Kebutuhan Industri",
  subtitle:
    "Sejak 2008, PT Sinergi Mitra Abadi Jaya memasok komponen jaringan, kelistrikan, dan infrastruktur untuk industri pertambangan dan manufaktur: berbasis SR/RFQ, sesuai spesifikasi dan part number, tepat waktu.",
  chips: ["Sejak 2008", "Berbasis SR / RFQ", "Sourcing Domestik & Impor"],
  clientsLabel: "Dipercaya oleh",
  clients: [
    { name: "PT Freeport Indonesia", logo: "/clients/freeport-indonesia.png", width: 213, height: 160 },
    { name: "PT Merdeka Copper Gold", logo: "/clients/merdeka-copper-gold.png", width: 365, height: 160 },
    { name: "PT Cogindo DayaBersama", logo: "/clients/cogindo.png", width: 466, height: 160 },
    { name: "PT Trakindo Utama", logo: "/clients/trakindo.png", width: 400, height: 104 },
    { name: "PT Sorikmas Mining", logo: "/clients/sorikmas-mining.png", width: 100, height: 100 },
    { name: "PT Gunung Madu Plantations", logo: "/clients/gunung-madu.png", width: 284, height: 160 },
    { name: "PT Trinitan Metals & Minerals", logo: "/clients/trinitan.png", width: 160, height: 160 },
    { name: "Hyundai Engineering & Construction", logo: "/clients/hyundai-enc.png", width: 898, height: 160 },
    { name: "Brunel Services Indonesia", logo: "/clients/brunel.png", width: 628, height: 158 },
    { name: "Fluor-Petrosea Joint Organization", logo: "/clients/fluor-petrosea.png", width: 746, height: 160 },
    { name: "PT Suprabakti Mandiri", logo: "/clients/suprabakti-mandiri.png", width: 180, height: 131 },
    { name: "Witteveen+Bos Indonesia", logo: "/clients/witteveen-bos.png", width: 400, height: 160 },
    { name: "PT Indoshe", logo: "/clients/indoshe.png", width: 472, height: 160 },
  ],
  categoriesBadge: "Kategori Supply",
  categoriesTitle: "Apa yang Kami Pasok",
  categories: [
    {
      icon: Router,
      title: "Networking & Konektivitas",
      description: "Komponen jaringan spesialis, termasuk modul impor yang sulit dicari.",
      examples: "SFP & GLC transceiver, Lantronix device server, Cisco AP",
    },
    {
      icon: Cable,
      title: "Structured Cabling",
      description: "Kabel terstruktur dan komponen fiber optic untuk infrastruktur site.",
      examples: "Commscope CAT6A, Netviel fiber optic, Panduit, First Cable",
    },
    {
      icon: Zap,
      title: "Kelistrikan",
      description: "Komponen instalasi listrik untuk panel dan distribusi daya.",
      examples: "MCB Schneider, panel box, kabel N2XY/NYY, Phoenix Contact",
    },
    {
      icon: Wrench,
      title: "MRO & Spare Part",
      description: "Komponen maintenance sesuai part number dan annual usage site.",
      examples: "V-belt & timing belt Bando, Optibelt, Gates; alat ukur Martindale",
    },
    {
      icon: HardHat,
      title: "Mining & Site Support",
      description: "Kebutuhan operasional site tambang, dari pengeboran sampai utilitas.",
      examples: "Drilling support Dancon, chemical & water treatment, baterai industri Nipress",
    },
    {
      icon: Factory,
      title: "Custom Fabrication",
      description: "Peralatan custom dirancang dan dibuat sesuai spesifikasi kebutuhan site.",
      examples: "Fabrikasi bespoke, contoh: custom cable winder",
    },
  ] satisfies SupplyCategory[],
  stepsTitle: "Cara Kerja Pengadaan",
  steps: [
    {
      title: "Terima SR / RFQ",
      description: "Kirim service request atau daftar kebutuhan lengkap dengan spesifikasi.",
    },
    {
      title: "Sourcing & Penawaran",
      description: "Kami cari barang sesuai part number, domestik maupun impor, lalu ajukan penawaran kompetitif.",
    },
    {
      title: "Pengiriman & Dokumen",
      description: "Barang dikirim tepat waktu ke site, lengkap dengan invoice dan dokumen pendukung.",
    },
  ],
  brands: [
    "Schneider Electric",
    "Cisco",
    "Commscope",
    "Lantronix",
    "Panduit",
    "Netviel",
    "Optibelt",
    "Gates",
    "Bando",
    "Phoenix Contact",
    "Nipress",
    "Martindale",
  ],
  brandsLabel: "Brand yang pernah kami pasok:",
  sourcingNote:
    "Didukung jaringan supplier internasional (Amerika Serikat, Inggris, Singapura) dan pemasok domestik.",
  identity: {
    title: "Informasi Perusahaan",
    rows: [
      { label: "Nama perusahaan", value: "PT Sinergi Mitra Abadi Jaya" },
      { label: "Berdiri", value: "2008" },
      { label: "Alamat", value: "Jl. Lapangan Tembak No. 1, Cilandak Timur, Jakarta Selatan 12560" },
      { label: "Email", value: "info@zynergy.co.id" },
      { label: "WhatsApp", value: "+62 819 3160 3815" },
    ],
    docNote:
      "Dokumen legalitas lengkap tersedia untuk kebutuhan registrasi vendor.",
    comproCta: "Download Company Profile (PDF)",
    comproHref: "/docs/zynergy-supply-company-profile.pdf",
  },
  ctaTitle: "Punya SR atau daftar kebutuhan barang?",
  ctaSubtitle:
    "Kirimkan detailnya, tim pengadaan kami balas dengan penawaran sesuai spesifikasi.",
  cta: "Hubungi Tim Pengadaan",
} as const;
