import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nishant.top";
  const lastModified = new Date("2026-08-17");
  const identityUpdatedAt = new Date("2026-10-01");
  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: identityUpdatedAt, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/resume`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contact`, lastModified: identityUpdatedAt, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/labs/ai-tts`, lastModified, changeFrequency: "monthly", priority: 0.5 },
  ];

  return [
    ...staticPages,
    ...projects.map((project) => ({
      url: `${base}/work/${project.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
