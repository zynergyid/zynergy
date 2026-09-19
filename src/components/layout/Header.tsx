"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/content/site";
import { waLink } from "@/lib/wa";
import { cn } from "@/lib/cn";
import { BrandMark } from "@/components/ui/BrandMark";
import { CtaLink } from "@/components/ui/CtaLink";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  // Pages that open on a dark hero (navy gateway, steel supply) get light header text.
  const darkHeroRoutes = ["/", "/supply"];
  const onDark = darkHeroRoutes.includes(pathname) && !scrolled && !menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || menuOpen
          ? "border-b border-line bg-white/90 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label={siteConfig.name}>
          <BrandMark
            className={cn("transition-colors", onDark ? "text-white" : "text-navy")}
          />
          <span
            className={cn(
              "text-lg font-extrabold tracking-tight transition-colors",
              onDark ? "text-white" : "text-ink",
            )}
          >
            {siteConfig.name}
            <span className={onDark ? "text-navy-accent" : "text-primary"}>.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navigasi utama">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors",
                onDark ? "text-navy-ink hover:text-white" : "text-muted hover:text-primary",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CtaLink href={waLink(siteConfig.waMessages.default)} className="px-5 py-2.5" track="whatsapp" place="header">
            Konsultasi Gratis
          </CtaLink>
        </div>

        <button
          type="button"
          className={cn(
            "grid size-10 place-items-center rounded-lg lg:hidden",
            onDark ? "text-white" : "text-ink",
          )}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {menuOpen && (
        <nav
          className="border-t border-line bg-white px-4 pb-6 pt-2 lg:hidden"
          aria-label="Navigasi mobile"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-surface-soft"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <CtaLink
            href={waLink(siteConfig.waMessages.default)}
            className="mt-3 w-full"
            track="whatsapp"
            place="menu"
          >
            Konsultasi Gratis
          </CtaLink>
        </nav>
      )}
    </header>
  );
}
