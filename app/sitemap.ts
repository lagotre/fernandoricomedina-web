import type { MetadataRoute } from "next";
import { SEO } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SEO.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SEO.url}/testimonios`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SEO.url}/metodologia`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${SEO.url}/herramientas`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
