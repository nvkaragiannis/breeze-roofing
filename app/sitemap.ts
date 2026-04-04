import type { MetadataRoute } from "next";
import { services } from "@/lib/data/services";
import { areas } from "@/lib/data/areas";
import { getAllPosts } from "@/lib/blog";

const BASE_URL = "https://breezeroofingnc.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // Use fixed date for all static pages (last content update: Phase 2 completion)
  const staticLastModified = new Date("2026-04-04");

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: staticLastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/areas`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/estimate`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/financing`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/roofing-products`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/leaf-solutions`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: staticLastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: staticLastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: staticLastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: staticLastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const areaPages: MetadataRoute.Sitemap = areas.map((area) => ({
    url: `${BASE_URL}/areas/${area.slug}`,
    lastModified: staticLastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const posts = getAllPosts();
  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...areaPages, ...blogPages];
}
