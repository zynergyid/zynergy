import { CheckCircle2 } from "lucide-react";
import { pricing } from "@/content/landing";
import { siteConfig } from "@/content/site";
import { waLink } from "@/lib/wa";
import { cn } from "@/lib/cn";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CtaLink } from "@/components/ui/CtaLink";

export function Pricing() {
  return (
    <Section id="paket">
      <SectionHeading badge={pricing.badge} title={pricing.title} subtitle={pricing.subtitle} />
      <div className="grid items-start gap-6 lg:grid-cols-3">
        {pricing.tiers.map((tier, index) => (
          <Reveal key={tier.name} delay={index * 0.07}>
            <article
              className={cn(
                "relative h-full rounded-2xl border p-7",
                tier.highlighted
                  ? "border-primary bg-white shadow-xl shadow-primary/10 lg:-mt-4 lg:mb-4"
                  : tier.premium
                    ? "border-navy bg-gradient-to-br from-navy to-navy-light shadow-lg shadow-navy/20"
                    : "border-line bg-white",
              )}
            >
              {tier.badge && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-white">
                  {tier.badge}
                </span>
              )}
              <h3 className={cn("text-lg font-bold", tier.premium ? "text-white" : "text-ink")}>
                Paket {tier.name}
              </h3>
              <p className={cn("mt-1.5 text-sm", tier.premium ? "text-navy-ink" : "text-muted")}>
                {tier.description}
              </p>
              <p
                className={cn(
                  "mt-3 rounded-lg px-3 py-2 text-xs font-medium leading-relaxed",
                  tier.premium ? "bg-white/10 text-navy-ink" : "bg-surface-soft text-muted",
                )}
              >
                <span className={cn("font-bold", tier.premium ? "text-white" : "text-ink")}>
                  Cocok untuk:
                </span>{" "}
                {tier.bestFor}
              </p>
              <p className="mt-5 flex items-baseline gap-1.5">
                <span className={cn("text-sm font-semibold", tier.premium ? "text-navy-ink" : "text-muted")}>
                  Rp
                </span>
                <span
                  className={cn(
                    "text-4xl font-extrabold tracking-tight",
                    tier.premium ? "text-white" : "text-ink",
                  )}
                >
                  {tier.price}
                </span>
                <span className={cn("text-sm", tier.premium ? "text-navy-ink" : "text-muted")}>
                  {tier.period}
                </span>
              </p>
              <ul
                className={cn(
                  "mt-6 space-y-2.5 border-t pt-6",
                  tier.premium ? "border-white/10" : "border-line",
                )}
              >
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className={cn(
                      "flex items-start gap-2.5 text-sm",
                      tier.premium ? "text-navy-ink" : "text-muted",
                    )}
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <CtaLink
                track="whatsapp"
                place={`harga-${tier.name.toLowerCase()}`}
                href={waLink(siteConfig.waMessages.package(tier.name))}
                variant={tier.highlighted ? "primary" : "outline"}
                className={cn(
                  "mt-7 w-full",
                  tier.premium &&
                    "border-transparent bg-white text-navy hover:border-transparent hover:bg-surface-soft hover:text-navy",
                )}
              >
                Pilih Paket {tier.name}
              </CtaLink>
            </article>
          </Reveal>
        ))}
      </div>
      {/* Lane custom: engagement per scope, harga lewat diskusi */}
      <Reveal>
        <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-2xl border border-dashed border-primary/40 bg-primary-soft/50 p-7 text-center sm:flex-row sm:text-left">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-dark">
              {pricing.customTier.badge}
            </span>
            <h3 className="mt-2.5 text-lg font-extrabold text-ink">{pricing.customTier.title}</h3>
            <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted">
              {pricing.customTier.description}
            </p>
          </div>
          <CtaLink
            href={waLink(siteConfig.waMessages.custom)}
            variant="whatsapp"
            track="whatsapp"
            place="harga-custom"
            className="shrink-0"
          >
            {pricing.customTier.cta}
          </CtaLink>
        </div>
      </Reveal>

      <p className="mt-10 text-center text-sm text-muted">{pricing.closing}</p>
    </Section>
  );
}
