import type { MetadataRoute } from "next";
import { getAllBlogSlugs } from "@/lib/blog-posts";
import { getAllCaseStudySlugs } from "@/lib/case-studies";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

const pages = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/use-cases", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/templates", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/integrations", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/features", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/customers", priority: 0.75, changeFrequency: "monthly" as const },
  { path: "/compare", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/security", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/pricing", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/privacy", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/changelog", priority: 0.65, changeFrequency: "weekly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages = pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const caseStudyPages = getAllCaseStudySlugs().map((slug) => ({
    url: `${baseUrl}/customers/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages = getAllBlogSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [...staticPages, ...caseStudyPages, ...blogPages];
}
