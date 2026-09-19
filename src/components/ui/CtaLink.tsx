import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "whatsapp" | "outline";

const variantClasses: Record<Variant, string> = {
  primary: "bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary-dark",
  whatsapp: "bg-secondary text-white shadow-lg shadow-secondary/25 hover:bg-secondary-dark",
  outline: "border border-line bg-white text-ink hover:border-primary/40 hover:text-primary",
};

interface CtaLinkProps {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  /** Umami event name, e.g. "whatsapp"; the tracker reads the data attribute. */
  track?: string;
  /** Where on the page the click happened, stored as an event property. */
  place?: string;
}

/** Button-styled link. External URLs (WhatsApp, socials) open in a new tab. */
export function CtaLink({ href, variant = "primary", className, children, track, place }: CtaLinkProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-colors",
    variantClasses[variant],
    className,
  );

  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} data-umami-event={track} data-umami-event-place={track ? place : undefined}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
