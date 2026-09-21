import {
  BarChart3,
  Briefcase,
  Building2,
  Gauge,
  GraduationCap,
  type LucideIcon,
  MapPin,
  MessagesSquare,
  SearchX,
  ShieldCheck,
  Store,
  UserRound,
  Waves,
  Wrench,
} from "lucide-react";

export interface Stat {
  value: string;
  label: string;
}

export interface IconCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

export type ServiceCard = IconCard;

export interface PricingTier {
  name: string;
  /** Satu kalimat tujuan: paket ini untuk mencapai apa. */
  description: string;
  /** Siapa yang cocok, bahasa sehari-hari. */
  bestFor: string;
  /** Angka saja, tanpa "Rp", dirender terpisah. */
  price: string;
  period: string;
  highlighted: boolean;
  /** Deep Navy card treatment untuk tier paling eksklusif. */
  premium?: boolean;
  badge?: string;
  /** HANYA pembeda vs tier di bawahnya; kesamaan masuk ke closing. */
  features: string[];
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface PortfolioItem {
  title: string;
  client: string;
  category: string;
  description: string;
  /** Kelas gradient Tailwind untuk thumbnail placeholder (sebelum ada screenshot asli). */
  thumbnailGradient: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const hero = {
  badge: "Digital Growth Partner",
  titleLead: "Website, Konten, Iklan.",
  titleHighlight: "Satu Tim. Beres.",
  titleTail: "",
  subtitle:
    "Digitalin adalah tim di belakang pertumbuhan bisnis Anda: dibangun cepat, diurus jangka panjang, terhubung langsung ke penjualan. Bagian dari grup yang dipercaya industri sejak 2008.",
  trustPoints: [
    "Satu tim: tech, creative & marketing",
    "Diurus jangka panjang",
    "Dipercaya industri sejak 2008",
  ],
};

// TODO(launch): perbarui angka dengan data asli seiring bertambahnya klien.
export const stats: Stat[] = [
  { value: "5+", label: "Proyek Selesai" },
  { value: "98%", label: "Klien Puas" },
  { value: "4.9/5", label: "Rating Klien" },
  { value: "3-7", label: "Hari Online" },
];

export const problems = {
  badge: "Sering Kejadian",
  title: "Bisnis Bagus, Tapi Susah Dipercaya?",
  subtitle:
    "Tanpa rumah digital yang jelas, peluang bocor setiap hari tanpa Anda sadari.",
  cards: [
    {
      icon: SearchX,
      title: "Tak Terlihat di Google",
      description: "Calon pelanggan mencari, yang muncul justru kompetitor.",
    },
    {
      icon: MessagesSquare,
      title: "Balas Chat Itu-Itu Saja",
      description: "Harga, alamat, jam buka. Setiap hari, satu per satu.",
    },
    {
      icon: ShieldCheck,
      title: "Diragukan Calon Pembeli",
      description: "Tanpa website resmi, bisnis terlihat kurang meyakinkan.",
    },
    {
      icon: Waves,
      title: "Promo Tenggelam 24 Jam",
      description: "Story hilang sehari. Promo di website tinggal selamanya.",
    },
  ] satisfies IconCard[],
  closing: "Saatnya punya satu rumah digital yang bekerja untuk Anda 24/7.",
};

export const services = {
  badge: "Layanan Zynergy",
  title: "Solusi Website untuk Setiap Jenis Bisnis",
  subtitle: "Kami rancang sesuai cara Anda menjual.",
  cards: [
    {
      icon: Store,
      title: "UMKM & Toko Online",
      description: "Katalog produk dengan tombol pesan langsung ke WhatsApp.",
    },
    {
      icon: UserRound,
      title: "Personal Branding",
      description: "Profil profesional agar konsultan, trainer, dan kreator mudah dipercaya.",
    },
    {
      icon: MapPin,
      title: "Bisnis Lokal",
      description: "Agar resto, klinik, dan salon mudah ditemukan pelanggan sekitar.",
    },
    {
      icon: GraduationCap,
      title: "Sekolah & Lembaga",
      description: "Profil institusi, pendaftaran, dan agenda dalam satu website resmi.",
    },
    {
      icon: Building2,
      title: "Company Profile",
      description: "Visi, layanan, tim, dan portofolio perusahaan tampil profesional.",
    },
    {
      icon: Briefcase,
      title: "Jasa Profesional",
      description: "Sistem booking dan kredibilitas untuk dokter, pengacara, arsitek.",
    },
  ] satisfies ServiceCard[],
};

export const whyUs = {
  badge: "Kenapa Zynergy",
  title: "Bukan Sekadar Tampil Bagus",
  subtitle:
    "Setiap website Zynergy dibangun untuk satu hal: mengubah pengunjung jadi pelanggan.",
  cards: [
    {
      icon: MessagesSquare,
      title: "Terhubung WhatsApp",
      description: "Setiap halaman mengarahkan pengunjung ke chat Anda.",
    },
    {
      icon: Gauge,
      title: "Cepat di Semua HP",
      description: "Loading ringan, tampilan rapi di layar mana pun.",
    },
    {
      icon: BarChart3,
      title: "Siap Iklan & SEO",
      description: "Pixel, Analytics, dan struktur SEO terpasang sejak awal.",
    },
    {
      icon: Wrench,
      title: "Maintenance Termasuk",
      description: "Update, backup, dan perbaikan selama berlangganan, tanpa biaya tambahan.",
    },
  ] satisfies IconCard[],
};

/** Kapabilitas agency (gaya Whitebox: tiga kolom dalam satu tim). */
export const capabilities = {
  badge: "Kapabilitas",
  title: "Satu Tim, Tiga Kapabilitas",
  subtitle:
    "Technology, creative, dan marketing dikerjakan satu tim, jadi hasilnya nyambung dari desain sampai penjualan.",
  columns: [
    {
      title: "Technology",
      items: [
        "Website Development",
        "Web App",
        "UI & UX",
        "Wireframing & Prototypes",
        "Custom CMS",
        "Servers & Databases",
        "Infrastructure",
        "Android Mobile App",
        "iOS Mobile App",
        "Desktop Apps",
      ],
    },
    {
      title: "Creative",
      items: [
        "Logo Design",
        "Branding",
        "Social Media Contents",
        "Video & Photography",
        "3D & Motion Graphics",
        "Copywriting",
        "Collateral Design",
        "Strategy",
      ],
    },
    {
      title: "Marketing",
      items: [
        "Search Engine Optimization (SEO)",
        "Search Engine Marketing (SEM)",
        "Social Media Management (SMM)",
        "Social Media Ads (SMA)",
        "Influencer Management",
        "Campaign Management",
        "Public Relations (PR)",
        "Out of Home (OOH)",
        "Sales Pipeline Development",
      ],
    },
  ],
};

export const pricing = {
  badge: "Paket Harga",
  title: "Investasi yang Sesuai Skala Bisnis Anda",
  subtitle:
    "Harga transparan per tahun, sudah termasuk domain, hosting, SSL, dan maintenance. Tanpa biaya kejutan.",
  // TODO(launch): finalisasi harga & benefit sebelum publikasi.
  tiers: [
    {
      name: "Starter",
      description: "Supaya bisnis Anda ditemukan dan dipercaya.",
      bestFor: "Baru mulai online, butuh alamat resmi di internet.",
      price: "500K",
      period: "/ tahun",
      highlighted: false,
      features: [
        "Profil bisnis 1 halaman yang rapi",
        "Domain .my.id gratis",
        "Tombol chat WhatsApp",
        "Info harga, lokasi & jam buka jelas",
      ],
    },
    {
      name: "Business",
      description: "Supaya pengunjung jadi pesanan.",
      bestFor: "Aktif jualan via WhatsApp dan ingin leads masuk teratur.",
      price: "950K",
      period: "/ tahun",
      highlighted: true,
      badge: "Paling Populer",
      features: [
        "Semua yang ada di Starter",
        "Domain .com atau .id",
        "Halaman lengkap: katalog, testimoni, FAQ",
        "Form leads langsung ke WhatsApp Anda",
        "Copywriting ditulis tim kami",
        "Meta Pixel & Google Analytics terpasang",
      ],
    },
    {
      name: "Premium",
      description: "Supaya iklan Anda menghasilkan maksimal.",
      bestFor: "Siap beriklan serius atau butuh website multi-halaman.",
      price: "1.5JT",
      period: "/ tahun",
      highlighted: false,
      premium: true,
      features: [
        "Semua yang ada di Business",
        "Multi-halaman: profil, layanan, blog",
        "Desain eksklusif dirancang khusus",
        "Balasan WhatsApp otomatis",
        "Leads tersimpan ke database",
        "Support prioritas",
      ],
    },
  ] satisfies PricingTier[],
  /** Lane terpisah untuk kebutuhan kompleks: harga per scope, bukan per paket. */
  customTier: {
    badge: "Custom",
    title: "Butuh yang lebih kompleks?",
    description:
      "Web app, mobile app, dashboard internal, atau integrasi khusus. Kami scoping kebutuhan Anda dulu, lalu ajukan proposal dengan timeline dan harga transparan.",
    cta: "Diskusikan Kebutuhan Anda",
  },
  closing:
    "Semua paket sudah termasuk hosting, SSL, desain responsive, SEO dasar, dan maintenance selama berlangganan.",
};

export const processSection = {
  badge: "Proses Kerja",
  title: "6 Langkah Sampai Website Anda Online",
  subtitle:
    "Proses transparan dan terarah. Anda selalu tahu progres website di setiap tahap.",
  steps: [
    {
      title: "Konsultasi & Brief",
      description: "Diskusi via WhatsApp untuk memahami bisnis, target, dan tujuan website Anda.",
    },
    {
      title: "Rekomendasi Paket",
      description: "Kami sarankan paket paling sesuai kebutuhan dan budget, tanpa memaksa.",
    },
    {
      title: "Pengumpulan Materi",
      description: "Anda kirim logo, foto, dan teks. Kami pandu sampai materinya lengkap.",
    },
    {
      title: "Desain & Development",
      description: "Tim kami membangun website sesuai brief. Progres dilaporkan berkala.",
    },
    {
      title: "Review & Revisi",
      description: "Kita cek tampilan, fungsi, dan kecepatan bersama. Revisi sampai sesuai brief.",
    },
    {
      title: "Launching",
      description: "Website online dengan domain & hosting aktif. Siap dipromosikan!",
    },
  ] satisfies ProcessStep[],
};

export const portfolio = {
  badge: "Portofolio",
  title: "Karya yang Berbicara Lewat Hasil",
  subtitle:
    "Beberapa contoh website yang kami bangun untuk membantu bisnis klien berkembang.",
  // TODO(launch): ganti dengan proyek asli + screenshot begitu tersedia.
  items: [
    {
      title: "Toko Online Kopi",
      client: "Kopi Nusantara",
      category: "UMKM",
      description:
        "Katalog produk kopi dengan pemesanan langsung via WhatsApp dan halaman promo musiman.",
      thumbnailGradient: "from-amber-400 to-orange-600",
    },
    {
      title: "Website Klinik",
      client: "Klinik Sehat Prima",
      category: "Bisnis Lokal",
      description:
        "Profil klinik dengan jadwal dokter, reservasi online, dan integrasi Google Maps.",
      thumbnailGradient: "from-sky-400 to-blue-600",
    },
    {
      title: "Company Profile",
      client: "PT Sinergi Karya",
      category: "Company",
      description:
        "Website perusahaan dengan halaman layanan, tim, dan portofolio proyek yang elegan.",
      thumbnailGradient: "from-emerald-400 to-teal-600",
    },
  ] satisfies PortfolioItem[],
};

export const testimonials = {
  badge: "Testimoni",
  title: "Apa Kata Klien Kami",
  subtitle: "Cerita dari pemilik bisnis yang sudah mempercayakan website-nya kepada Zynergy.",
  // TODO(launch): WAJIB ganti dengan testimoni asli dari klien nyata sebelum website dipublikasikan.
  items: [
    {
      quote:
        "Sejak punya website, pelanggan lebih percaya dan pesanan via WhatsApp meningkat. Prosesnya cepat dan komunikatif.",
      name: "Nama Klien",
      role: "Pemilik · Nama Bisnis",
    },
    {
      quote:
        "Iklan jadi jauh lebih efektif karena diarahkan ke landing page. Tim Zynergy sangat membantu dari awal sampai launching.",
      name: "Nama Klien",
      role: "Founder · Nama Bisnis",
    },
    {
      quote:
        "Desainnya profesional dan sesuai brand kami. Maintenance juga responsif setiap kali ada kebutuhan update.",
      name: "Nama Klien",
      role: "Direktur · Nama Bisnis",
    },
  ] satisfies Testimonial[],
};

export const faq = {
  badge: "FAQ",
  title: "Pertanyaan yang Sering Diajukan",
  subtitle: "Belum menemukan jawaban? Tim kami siap membantu via WhatsApp.",
  items: [
    {
      question: "Berapa lama proses pembuatan website?",
      answer:
        "Rata-rata 3-7 hari kerja setelah materi lengkap, tergantung paket yang dipilih. Untuk kebutuhan multi-halaman bisa sampai 10 hari kerja. Progres selalu kami laporkan via WhatsApp.",
    },
    {
      question: "Apakah ada biaya bulanan?",
      answer:
        "Tidak ada. Biaya dihitung per tahun dan sudah termasuk domain, hosting, SSL, serta maintenance. Anda hanya membayar perpanjangan tahunan.",
    },
    {
      question: "Domain dan hosting benar-benar gratis?",
      answer:
        "Ya, setiap paket sudah termasuk domain dan hosting untuk tahun pertama serta perpanjangannya selama berlangganan, sesuai jenis domain pada masing-masing paket.",
    },
    {
      question: "Apakah website terhubung ke WhatsApp saya?",
      answer:
        "Tentu. Semua tombol CTA diarahkan ke nomor WhatsApp bisnis Anda dengan pesan otomatis yang sudah disiapkan, sehingga leads langsung masuk tanpa hambatan.",
    },
    {
      question: "Apakah website siap untuk iklan Meta dan Google?",
      answer:
        "Ya. Paket Business ke atas sudah termasuk pemasangan Meta Pixel dan Google Analytics, sehingga konversi iklan terlacak akurat dan retargeting bisa berjalan maksimal.",
    },
    {
      question: "Bagaimana sistem revisinya?",
      answer:
        "Revisi bebas selama masih sesuai brief awal yang disepakati. Perubahan di luar brief (misalnya ganti konsep total) akan didiskusikan terlebih dahulu.",
    },
    {
      question: "Apa saja yang perlu saya siapkan?",
      answer:
        "Cukup logo, foto produk/bisnis, dan deskripsi singkat usaha Anda. Belum punya materi lengkap? Tim kami akan memandu langkah demi langkah.",
    },
    {
      question: "Apakah melayani klien dari luar kota?",
      answer:
        "Bisa! Seluruh proses berjalan online via WhatsApp: dari konsultasi, pengiriman materi, hingga revisi. Kami melayani seluruh Indonesia.",
    },
  ] satisfies FaqItem[],
};

export const finalCta = {
  badge: "Mulai Sekarang",
  title: "Siap Punya Website yang Mendatangkan Pelanggan?",
  subtitle:
    "Konsultasikan kebutuhan Anda. Gratis, tanpa kewajiban. Kami bantu rekomendasikan solusi terbaik untuk bisnis Anda.",
  points: [
    "Konsultasi gratis via WhatsApp",
    "Rekomendasi paket sesuai budget",
    "Website online dalam 3-7 hari kerja",
  ],
};
