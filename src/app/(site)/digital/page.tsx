import { pageMetadata } from "@/lib/seo";
import { faq } from "@/content/landing";
import { siteConfig } from "@/content/site";
import { JsonLd } from "@/components/ui/JsonLd";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { Problems } from "@/components/sections/Problems";
import { Services } from "@/components/sections/Services";
import { RacikTeaser } from "@/components/sections/RacikTeaser";
import { WhyUs } from "@/components/sections/WhyUs";
import { Capabilities } from "@/components/sections/Capabilities";
import { Pricing } from "@/components/sections/Pricing";
import { Process } from "@/components/sections/Process";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

export const generateMetadata = () => pageMetadata("digital");

export default function DigitalPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: siteConfig.name,
          url: siteConfig.url,
          email: siteConfig.email,
          description: siteConfig.description,
          areaServed: "ID",
          sameAs: Object.values(siteConfig.socials),
          parentOrganization: { "@type": "Organization", name: siteConfig.legalName },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.items.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }}
      />
      <Hero />
      <StatsBar />
      <Problems />
      <Services />
      <RacikTeaser />
      <WhyUs />
      <Capabilities />
      <Pricing />
      <Process />
      <Portfolio />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  );
}
