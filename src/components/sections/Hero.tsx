import { ArrowRight, CheckCircle2, Gauge, MessagesSquare } from "lucide-react";
import { hero } from "@/content/landing";
import { siteConfig } from "@/content/site";
import { waLink } from "@/lib/wa";
import { CtaLink } from "@/components/ui/CtaLink";
import { GridPattern } from "@/components/ui/GridPattern";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-40 lg:px-8">
      {/* Latar gradient lembut + grid halus */}
      <GridPattern
        id="hero-grid"
        className="text-primary/[0.06] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black_25%,transparent_100%)]"
      />
      <div className="pointer-events-none absolute -left-40 -top-40 size-[28rem] rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-40 top-24 size-[28rem] rounded-full bg-secondary/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary-soft px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-dark">
            <span className="size-1.5 rounded-full bg-secondary" aria-hidden />
            {hero.badge}
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-6xl">
            {hero.titleLead} <span className="text-primary">{hero.titleHighlight}</span>{" "}
            {hero.titleTail}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <CtaLink href={waLink(siteConfig.waMessages.default)} variant="whatsapp" track="whatsapp" place="hero">
              <WhatsAppIcon className="size-4" />
              Konsultasi Gratis
            </CtaLink>
            <CtaLink href="#paket" variant="outline">
              Lihat Paket Harga
              <ArrowRight className="size-4" />
            </CtaLink>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {hero.trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-muted">
                <CheckCircle2 className="size-4 text-secondary" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Mock jendela browser, placeholder visual sampai ada screenshot proyek asli */}
        <Reveal delay={0.15} className="relative hidden lg:block">
          <div className="rounded-2xl border border-line bg-white shadow-2xl shadow-ink/10">
            <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
              <span className="size-2.5 rounded-full bg-red-400" />
              <span className="size-2.5 rounded-full bg-amber-400" />
              <span className="size-2.5 rounded-full bg-emerald-400" />
              <span className="ml-3 flex-1 rounded-md bg-surface-soft px-3 py-1 text-xs text-muted">
                {siteConfig.domain}
              </span>
            </div>
            <div className="space-y-4 p-6">
              <div className="h-32 rounded-xl bg-gradient-to-br from-primary to-primary-dark p-5 text-white">
                <div className="h-2.5 w-2/3 rounded-full bg-white/70" />
                <div className="mt-2.5 h-2.5 w-1/2 rounded-full bg-white/40" />
                <div className="mt-5 inline-flex rounded-lg bg-secondary px-4 py-2 text-xs font-semibold">
                  Chat WhatsApp
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="rounded-xl border border-line p-3">
                    <div className="size-8 rounded-lg bg-primary-soft" />
                    <div className="mt-2.5 h-2 rounded-full bg-surface-soft" />
                    <div className="mt-1.5 h-2 w-2/3 rounded-full bg-surface-soft" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Kartu mengambang: sinyal benefit */}
          <div className="absolute -left-6 bottom-16 flex items-center gap-2.5 rounded-2xl border border-line bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
            <span className="grid size-9 place-items-center rounded-xl bg-secondary-soft text-secondary-dark">
              <MessagesSquare className="size-4" />
            </span>
            <div>
              <p className="text-xs font-bold text-ink">Leads Baru Masuk</p>
              <p className="text-[11px] text-muted">via WhatsApp otomatis</p>
            </div>
          </div>
          <div className="absolute -right-4 top-20 flex items-center gap-2.5 rounded-2xl border border-line bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
            <span className="grid size-9 place-items-center rounded-xl bg-primary-soft text-primary">
              <Gauge className="size-4" />
            </span>
            <div>
              <p className="text-xs font-bold text-ink">Loading Cepat</p>
              <p className="text-[11px] text-muted">Skor performa tinggi</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
