import { pageMetadata } from "@/lib/seo";
import { quizSection } from "@/content/quiz";
import { parseAddOnsParam, parseSelectionParam } from "@/components/features/selectionUrl";
import { RacikFlow } from "@/components/racik/RacikFlow";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const generateMetadata = () => pageMetadata("racikFitur");

interface RacikFiturPageProps {
  searchParams: Promise<{ f?: string; a?: string }>;
}

export default async function RacikFiturPage({ searchParams }: RacikFiturPageProps) {
  const { f, a } = await searchParams;
  const initialSelected = parseSelectionParam(f);
  const initialAddOns = parseAddOnsParam(a);

  return (
    <div className="pt-16">
      <Section>
        <SectionHeading
          badge={quizSection.badge}
          title={quizSection.title}
          subtitle={quizSection.subtitle}
        />
        <RacikFlow initialSelected={initialSelected} initialAddOns={initialAddOns} />
      </Section>
    </div>
  );
}
