import { faq } from "@/content/landing";
import { siteConfig } from "@/content/site";
import { waLink } from "@/lib/wa";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CtaLink } from "@/components/ui/CtaLink";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function Faq() {
  return (
    <Section id="faq">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <SectionHeading
            badge={faq.badge}
            title={faq.title}
            subtitle={faq.subtitle}
            align="left"
          />
          <Reveal className="rounded-2xl border border-line bg-surface-soft p-6">
            <h3 className="text-base font-bold text-ink">Masih ada pertanyaan?</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Tim {siteConfig.name} siap menjawab semua pertanyaan Anda. Konsultasi gratis, tanpa
              kewajiban.
            </p>
            <CtaLink
              href={waLink(siteConfig.waMessages.default)}
              variant="whatsapp"
              track="whatsapp"
              place="faq"
              className="mt-5"
            >
              <WhatsAppIcon className="size-4" />
              Chat via WhatsApp
            </CtaLink>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <FaqAccordion items={faq.items} />
        </Reveal>
      </div>
    </Section>
  );
}
