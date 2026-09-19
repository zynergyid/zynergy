import { pageMetadata } from "@/lib/seo";
import type { Media, Project } from "@/payload-types";
import { projectCategories } from "@/collections/Projects";
import { getPayloadClient } from "@/lib/payload";
import { cn } from "@/lib/cn";
import { CtaLink } from "@/components/ui/CtaLink";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const revalidate = 3600;

export const generateMetadata = () => pageMetadata("portofolio");

const categoryLabels = new Map<string, string>(
  projectCategories.map((category) => [category.value, category.label]),
);

const categoryGradients: Record<string, string> = {
  umkm: "from-amber-400 to-orange-600",
  personal: "from-fuchsia-400 to-purple-600",
  "bisnis-lokal": "from-sky-400 to-blue-600",
  sekolah: "from-emerald-400 to-teal-600",
  "company-profile": "from-slate-500 to-slate-700",
  jasa: "from-rose-400 to-red-600",
};

function ProjectCard({ project }: { project: Project }) {
  const thumbnail = project.thumbnail as Media | null;
  const card = (
    <article className="group h-full overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-lg">
      {thumbnail?.url ? (
        <div className="relative h-44">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumbnail.sizes?.card?.url ?? thumbnail.url}
            alt={thumbnail.alt ?? project.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-ink">
            {categoryLabels.get(project.category)}
          </span>
        </div>
      ) : (
        <div
          className={cn(
            "relative flex h-44 items-end bg-gradient-to-br p-5",
            categoryGradients[project.category] ?? "from-primary to-primary-dark",
          )}
        >
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-ink">
            {categoryLabels.get(project.category)}
          </span>
          <p className="text-xl font-extrabold text-white drop-shadow">{project.client}</p>
        </div>
      )}
      <div className="p-5">
        <h2 className="text-base font-bold text-ink group-hover:text-primary">{project.title}</h2>
        <p className="mt-1 text-xs font-medium text-muted">{project.client}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
      </div>
    </article>
  );

  if (project.siteUrl) {
    return (
      <a href={project.siteUrl} target="_blank" rel="noopener noreferrer">
        {card}
      </a>
    );
  }
  return card;
}

export default async function PortfolioPage() {
  const payload = await getPayloadClient();
  const { docs: projects } = await payload.find({
    collection: "projects",
    sort: "order",
    depth: 1,
    limit: 60,
  });

  return (
    <div className="pt-16">
      <Section>
        <SectionHeading
          badge="Portofolio"
          title="Karya yang Berbicara Lewat Hasil"
          subtitle="Website yang kami bangun untuk membantu bisnis klien tampil kredibel dan mendapatkan lebih banyak pelanggan."
        />
        {projects.length === 0 ? (
          <p className="text-center text-muted">
            Portofolio sedang kami siapkan. Sementara itu, lihat paket kami atau konsultasi gratis.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
        <div className="mt-12 flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-muted">Punya proyek yang ingin diwujudkan?</p>
          <CtaLink href="/brief-project">Ceritakan Kebutuhan Anda</CtaLink>
        </div>
      </Section>
    </div>
  );
}
