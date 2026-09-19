import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { designPage } from "@/content/design";
import { siteConfig } from "@/content/site";
import { waLink } from "@/lib/wa";
import { CtaLink } from "@/components/ui/CtaLink";
import { GridPattern } from "@/components/ui/GridPattern";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Branding, Packaging & Print",
  description: designPage.subtitle,
};

const waHref = waLink(siteConfig.waMessages.design);

export default function DesignPage() {
  const { services, process, crossLink, finalCta } = designPage;

  return (
    <>
      <section
        id="beranda"
        className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-40 lg:px-8"
      >
        <GridPattern
          id="design-hero-grid"
          className="text-primary/[0.06] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black_25%,transparent_100%)]"
        />
        <div
          className="pointer-events-none absolute -left-40 -top-40 size-[28rem] rounded-full bg-primary/10 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-40 top-24 size-[28rem] rounded-full bg-secondary/10 blur-3xl"
          aria-hidden
        />

        <Reveal className="relative mx-auto w-full max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary-soft px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-dark">
            <span className="size-1.5 rounded-full bg-secondary" aria-hidden />
            {designPage.badge}
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-6xl">
            {designPage.titleLead} <span className="text-primary">{designPage.titleHighlight}</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {designPage.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaLink href={waHref} variant="whatsapp" track="whatsapp" place="design">
              <WhatsAppIcon className="size-4" />
              {designPage.cta}
            </CtaLink>
            <CtaLink href="#layanan" variant="outline">
              Lihat Layanan
              <ArrowRight className="size-4" />
            </CtaLink>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {designPage.trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-muted">
                <CheckCircle2 className="size-4 text-secondary" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <Section id="layanan">
        <SectionHeading badge={services.badge} title={services.title} subtitle={services.subtitle} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.05}>
              <article className="group flex h-full items-start gap-4 rounded-2xl border border-line bg-white p-6 transition-all hover:border-primary/30 hover:shadow-md">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <card.icon className="size-5" />
                </span>
                <span>
                  <h3 className="text-base font-bold text-ink">{card.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{card.description}</p>
                </span>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted">
          {crossLink.text}{" "}
          <Link href={crossLink.href} className="font-semibold text-primary hover:underline">
            {crossLink.linkLabel}
          </Link>
        </p>
      </Section>

      <Section id="proses" tone="soft">
        <SectionHeading badge={process.badge} title={process.title} subtitle={process.subtitle} />
        <ol className="grid gap-5 sm:grid-cols-3">
          {process.steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.05}>
              <li className="h-full list-none rounded-2xl border border-line bg-white p-6">
                <span className="text-3xl font-extrabold text-primary/20">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-base font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <section id="kontak" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark px-6 py-14 text-center sm:px-12 sm:py-16">
          <div
            className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-white/10 blur-2xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-12 -left-8 size-40 rounded-full bg-secondary/30 blur-2xl"
            aria-hidden
          />
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
            {finalCta.badge}
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {finalCta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85">
            {finalCta.subtitle}
          </p>
          <div className="mt-9 flex justify-center">
            <CtaLink href={waHref} variant="whatsapp" className="shadow-black/10" track="whatsapp" place="design-bawah">
              <WhatsAppIcon className="size-4" />
              {finalCta.cta}
            </CtaLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
