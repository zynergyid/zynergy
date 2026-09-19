import { siteConfig } from "@/content/site";
import { waLink } from "@/lib/wa";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

/** Sticky WhatsApp button, the primary conversion path, always reachable. */
export function WhatsAppFloat() {
  return (
    <a
      href={waLink(siteConfig.waMessages.default)}
      data-umami-event="whatsapp"
      data-umami-event-place="tombol-melayang"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid size-13 place-items-center rounded-full bg-secondary text-white shadow-xl shadow-secondary/30 transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="size-6" />
    </a>
  );
}
