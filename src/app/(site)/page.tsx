import { pageMetadata, sameAsLinks } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { businessLines, companyHome } from "@/content/company";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/cn";
import { ClientMarquee } from "@/components/ui/ClientMarquee";
import { CtaLink } from "@/components/ui/CtaLink";
import { GridPattern } from "@/components/ui/GridPattern";
import { JsonLd } from "@/components/ui/JsonLd";
import { Reveal } from "@/components/ui/Reveal";

export const generateMetadata = () => pageMetadata("home");

export default async function Home() {
  const sameAs = await sameAsLinks();
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: siteConfig.legalName,
          brand: { "@type": "Brand", name: siteConfig.name },
          url: siteConfig.url,
          email: siteConfig.email,
          sameAs,
        }}
      />
      {/* Deep Navy group treatment: gateway only; funnel pages stay light */}
      <div className="relative overflow-hidden bg-gradient-to-br from-navy to-navy-light">
        <GridPattern
          id="gateway-grid"
          className="text-white/[0.07] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,black_30%,transparent_100%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 -top-40 size-[30rem] rounded-full bg-primary/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 bottom-0 size-[30rem] rounded-full bg-secondary/10 blur-3xl"
        />
        <section id="beranda" className="relative px-4 pb-16 pt-36 text-center sm:px-6 sm:pt-44 lg:px-8">
          <div className="mx-auto w-full max-w-4xl">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-navy-accent">
                {companyHome.eyebrow}
              </p>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                {companyHome.title}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-navy-ink sm:text-lg">
                {companyHome.subtitle}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        {/* Row 1: Digitalin flagship (full width). Row 2: Design + Apps + Supply. */}
        <div className="mx-auto grid w-full max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {businessLines.map((line, index) => (
            <Reveal
              key={line.value}
              delay={index * 0.08}
              className={cn(
                "h-full",
                line.flagship ? "sm:col-span-2 lg:col-span-6" : "lg:col-span-2",
              )}
            >
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-3xl border p-6 transition-all",
                  line.flagship
                    ? "border-navy-accent/40 bg-white/10 shadow-lg shadow-black/20 backdrop-blur-sm"
                    : line.upcoming
                      ? "border-dashed border-white/15 bg-white/[0.03]"
                      : "border-white/10 bg-white/5 backdrop-blur-sm hover:border-navy-accent/40",
                )}
              >
                {line.upcoming && (
                  <span className="absolute right-4 top-4 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-navy-accent">
                    Segera
                  </span>
                )}
                <span
                  className={cn(
                    "grid size-12 place-items-center rounded-2xl",
                    line.flagship ? "bg-primary text-white" : "bg-white/10 text-navy-accent",
                  )}
                >
                  <line.icon className="size-6" />
                </span>
                <h2 className="mt-5 text-lg font-extrabold text-white">{line.name}</h2>
                <p className="text-sm font-semibold text-navy-accent">{line.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-navy-ink">{line.description}</p>
                <ul className={cn("mt-4 gap-1.5", line.flagship ? "grid sm:grid-cols-3" : "grid")}>
                  {line.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-navy-ink">
                      <Check className="size-3.5 shrink-0 text-secondary" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6">
                  {line.upcoming ? (
                    <span className="inline-flex w-full items-center justify-center rounded-xl border border-dashed border-white/15 px-6 py-3 text-sm font-semibold text-navy-ink">
                      Segera Hadir
                    </span>
                  ) : (
                    <CtaLink
                      href={line.href}
                      variant={line.flagship ? "primary" : "outline"}
                      className={cn(
                        line.flagship ? "w-full sm:w-auto" : "w-full",
                        !line.flagship &&
                          "border-white/20 bg-transparent text-white hover:border-navy-accent hover:bg-white/5 hover:text-white",
                      )}
                    >
                      {line.cta}
                      <ArrowRight className="size-4" />
                    </CtaLink>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
          <p className="mt-12 text-center text-sm text-navy-ink">
            Ingin kenal orang-orang di baliknya?{" "}
            <Link href="/tentang" className="font-semibold text-navy-accent hover:underline">
              Tentang kami
            </Link>
          </p>
        </section>
      </div>

      {/* Klien grup: aset kepercayaan lintas lini */}
      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <p className="text-center text-xs font-bold uppercase tracking-[0.15em] text-muted">
              Dipercaya oleh
            </p>
            <ClientMarquee className="mt-7" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
