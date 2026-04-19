import type { Metadata } from "next";
import "./globals.css";
import { SEO } from "@/lib/data";
import Navbar from "@/components/layout/Navbar";
import StickyButton from "@/components/layout/StickyButton";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title:       SEO.title,
  description: SEO.description,
  metadataBase: new URL(SEO.url),
  openGraph: {
    title:       SEO.title,
    description: SEO.description,
    url:         SEO.url,
    siteName:    "Fernando Rico Medina",
    locale:      "es_CO",
    type:        "website",
  },
  twitter: {
    card:        "summary_large_image",
    title:       SEO.title,
    description: SEO.description,
  },
  robots: {
    index:  true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
        <StickyButton />
        <WhatsAppButton />
      </body>
    </html>
  );
}
