import { services } from "@/content/landing";
import { siteConfig } from "@/content/site";
import { waLink } from "@/lib/wa";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Services() {
  return (
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
        Tidak menemukan kebutuhan Anda?{" "}
        <a
          href={waLink(siteConfig.waMessages.default)}
          data-umami-event="whatsapp"
          data-umami-event-place="layanan"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-primary hover:underline"
        >
          Konsultasi gratis di sini
        </a>
      </p>
    </Section>
  );
}
