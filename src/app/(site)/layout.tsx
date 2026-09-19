import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans } from "next/font/google";
import { siteConfig } from "@/content/site";
import { shareMetadata } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

/** Edits from the Hub reach every page within five minutes without a deploy. */
export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  const share = await shareMetadata();
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: share.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: share.description,
    openGraph: {
      type: "website",
      locale: "id_ID",
      url: siteConfig.url,
      siteName: siteConfig.name,
      title: share.title,
      description: share.description,
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${jakarta.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        {/* Umami (self-hosted at stats.zynergy.co.id): no cookies, no personal data. Off until both vars are set. */}
        {process.env.NEXT_PUBLIC_UMAMI_SRC && process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <Script src={process.env.NEXT_PUBLIC_UMAMI_SRC} data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID} strategy="afterInteractive" />
        )}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
