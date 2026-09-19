import { ArrowRight, CheckCircle2 } from "lucide-react";
import { finalCta } from "@/content/landing";
import { siteConfig } from "@/content/site";
import { waLink } from "@/lib/wa";
import { Reveal } from "@/components/ui/Reveal";
import { CtaLink } from "@/components/ui/CtaLink";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function FinalCta() {
  return (
    <section id="kontak" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <Reveal className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark px-6 py-14 text-center sm:px-12 sm:py-16">
        <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-white/10 blur-2xl" aria-hidden />
        <div className="pointer-events-none absolute -bottom-12 -left-8 size-40 rounded-full bg-secondary/30 blur-2xl" aria-hidden />

        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
          {finalCta.badge}
        </span>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {finalCta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85">
          {finalCta.subtitle}
        </p>

        <ul className="mx-auto mt-7 flex max-w-2xl flex-wrap justify-center gap-x-8 gap-y-2.5">
          {finalCta.points.map((point) => (
            <li key={point} className="flex items-center gap-2 text-sm text-white/90">
              <CheckCircle2 className="size-4 text-secondary" />
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <CtaLink
            href={waLink(siteConfig.waMessages.default)}
            variant="whatsapp"
            track="whatsapp"
            place="penutup"
            className="shadow-black/10"
          >
            <WhatsAppIcon className="size-4" />
            Konsultasi Gratis Sekarang
          </CtaLink>
          <CtaLink
            href="#paket"
            className="bg-white text-primary-dark shadow-black/10 hover:bg-white/90"
          >
            Lihat Paket Harga
            <ArrowRight className="size-4" />
          </CtaLink>
        </div>
      </Reveal>
    </section>
  );
}
