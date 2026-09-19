import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import type { Media } from "@/payload-types";
import { getPayloadClient } from "@/lib/payload";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatDate } from "@/lib/date";

export const revalidate = 3600;

export const generateMetadata = () => pageMetadata("blog");

export default async function BlogPage() {
  const payload = await getPayloadClient();
  const { docs: posts } = await payload.find({
    collection: "posts",
    where: { _status: { equals: "published" } },
    sort: "-publishedAt",
    depth: 1,
    limit: 24,
  });

  return (
    <div className="pt-16">
      <Section>
        <SectionHeading
          badge="Blog"
          title="Tips & Wawasan Digital"
          subtitle="Artikel seputar website, pemasaran online, dan cerita di balik proyek kami."
        />
        {posts.length === 0 ? (
          <p className="text-center text-muted">
            Belum ada artikel. Nantikan tulisan pertama kami!
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const cover = post.cover as Media | null;
              return (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-lg"
                >
                  {cover?.url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={cover.sizes?.card?.url ?? cover.url}
                      alt={cover.alt ?? post.title}
                      className="h-44 w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-44 w-full bg-gradient-to-br from-primary to-primary-dark" />
                  )}
                  <div className="flex flex-1 flex-col p-5">
                    {post.publishedAt && (
                      <time className="text-xs font-medium text-muted" dateTime={post.publishedAt}>
                        {formatDate(post.publishedAt)}
                      </time>
                    )}
                    <h2 className="mt-2 text-base font-bold text-ink group-hover:text-primary">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </Section>
    </div>
  );
}
