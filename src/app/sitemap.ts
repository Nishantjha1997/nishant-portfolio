import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { person, siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl;
  const lastModified = new Date("2026-08-17");
  const identityUpdatedAt = new Date("2026-11-12");
  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: identityUpdatedAt, changeFrequency: "monthly", priority: 1, images: [`${base}${person.image}`] },
    { url: `${base}/about`, lastModified: identityUpdatedAt, changeFrequency: "monthly", priority: 0.9, images: [`${base}${person.image}`] },
    { url: `${base}/resume`, lastModified: identityUpdatedAt, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contact`, lastModified: identityUpdatedAt, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/labs/ai-tts`, lastModified, changeFrequency: "monthly", priority: 0.5 },
  ];

  return [
    ...staticPages,
    ...projects.map((project) => ({
      url: `${base}/work/${project.slug}`,
      lastModified: project.updatedAt ? new Date(project.updatedAt) : lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
