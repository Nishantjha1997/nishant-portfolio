import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nishant.top";
  return ["", "/resume", "/contact", "/labs/ai-tts", ...projects.map((project) => `/work/${project.slug}`)].map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: "monthly", priority: path === "" ? 1 : 0.7 }));
}
