import type { Metadata } from "next";
import "./globals.css";
import { SEO, LINKS } from "@/lib/data";
import Navbar from "@/components/layout/Navbar";
import StickyButton from "@/components/layout/StickyButton";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title:       SEO.title,
  description: SEO.description,
  metadataBase: new URL(SEO.url),
  alternates: {
    canonical: "/",
  },
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

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Fernando Rico Medina",
  url: SEO.url,
  image: `${SEO.url}/fernando-rico-hero.png`,
  jobTitle: "Consultor en Estrategia Comercial, Marketing y Inteligencia Artificial",
  description: SEO.description,
  email: LINKS.email.replace("mailto:", ""),
  sameAs: [LINKS.linkedin],
  worksFor: [
    { "@type": "Organization", name: "Grupo Diforma" },
    { "@type": "Organization", name: "Digitalli" },
    { "@type": "Organization", name: "Marketeros Agencia" },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "CO",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <StickyButton />
        <WhatsAppButton />
      </body>
    </html>
  );
}
