import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/content/site";
import { services } from "@/content/landing";
import { waLink } from "@/lib/wa";
import { BrandMark } from "@/components/ui/BrandMark";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { FacebookIcon, GitHubIcon, LinkedInIcon, ThreadsIcon, TikTokIcon, XIcon, YouTubeIcon } from "@/components/ui/SocialIcons";
import { getSocials } from "@/lib/seo";
import type { SocialKey } from "@/content/socials";

const icons: Record<SocialKey, (p: { className?: string }) => React.JSX.Element> = {
  instagram: InstagramIcon,
  threads: ThreadsIcon,
  linkedin: LinkedInIcon,
  whatsapp: WhatsAppIcon,
  github: GitHubIcon,
  facebook: FacebookIcon,
  youtube: YouTubeIcon,
  tiktok: TikTokIcon,
  x: XIcon,
};

/** Server component: the social row follows what the Hub filled in. */
export async function Footer() {
  const socialLinks = (await getSocials()).map((s) => ({ ...s, Icon: icons[s.key] }));
  return (
    <footer className="border-t border-line bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2" aria-label={siteConfig.name}>
            <BrandMark className="text-navy" />
            <span className="text-lg font-extrabold tracking-tight text-ink">
              {siteConfig.name}
              <span className="text-primary">.</span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-muted">{siteConfig.tagline}</p>
          <ul className="mt-5 flex gap-2.5">
            {socialLinks.map(({ key, label, href, Icon }) => (
              <li key={key}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-9 place-items-center rounded-full border border-line text-muted transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Navigasi footer">
          <h3 className="text-sm font-bold text-ink">Navigasi</h3>
          <ul className="mt-4 space-y-2.5">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-muted transition-colors hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-bold text-ink">Layanan</h3>
          <ul className="mt-4 space-y-2.5">
            {services.cards.map((service) => (
              <li key={service.title} className="text-sm text-muted">
                {service.title}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold text-ink">Kontak</h3>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={waLink(siteConfig.waMessages.default)}
                data-umami-event="whatsapp"
                data-umami-event-place="footer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-primary"
              >
                <WhatsAppIcon className="size-4 text-secondary" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-primary"
              >
                <Mail className="size-4 text-primary" />
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-sm text-muted">
              <MapPin className="size-4 text-primary" />
              {siteConfig.serviceArea}
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 w-full max-w-6xl space-y-1.5 border-t border-line pt-6 text-center text-xs text-muted">
        <p>
          {siteConfig.endorsement}{" "}
          <Link href="/tentang" className="font-semibold text-primary hover:underline">
            Tentang kami
          </Link>
        </p>
        <p>
          © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
