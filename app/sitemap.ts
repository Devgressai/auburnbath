import type { MetadataRoute } from "next";

import { allPosts } from "@/lib/blog";
import { cities } from "@/lib/cities";
import { allProjects } from "@/lib/projects";
import { services as servicesRegistry, site } from "@/lib/site";

/**
 * Highly scalable, hierarchical-aware sitemap generator.
 *
 * Pulls from a single source of truth in `lib/site.ts` (services),
 * `lib/cities.ts` (city pages under /services/bathroom-remodeling),
 * `lib/blog/index.ts` (long-form content), and `lib/projects/index.ts`
 * (case studies). Adding a new entity = drop it in the registry and
 * its URL is automatically picked up here, on the next build.
 *
 * SEO rationale:
 * - Single canonical sitemap.xml at /sitemap.xml (referenced by
 *   robots.txt) so Search Console has a clean entrypoint.
 * - Stable `lastmod` (CONTENT_LAST_UPDATED) — Google demotes
 *   sitemaps that show a fresh lastmod on every build without the
 *   underlying content actually changing. Bump this constant only
 *   when content meaningfully updates.
 * - Image entries (image:image schema) per route — strong signal
 *   for image-rich result eligibility.
 * - Per-route `priority` reflects intent strength, not vanity:
 *   home > primary money pages > city/blog content > legal.
 */

/** Bump only when content actually changes meaningfully. */
const CONTENT_LAST_UPDATED = new Date("2026-04-30T00:00:00Z");

type Route = {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
  imageSlugs?: string[];
};

/** Static + content-bearing routes that don't iterate. */
const staticRoutes: Route[] = [
  {
    path: "/",
    changeFrequency: "monthly",
    priority: 1,
    imageSlugs: ["home-hero-people", "home-why-us"],
  },
  {
    path: "/services",
    changeFrequency: "monthly",
    priority: 0.9,
    imageSlugs: ["bath-hero", "shower-hero"],
  },
  {
    path: "/services/cost-guide",
    changeFrequency: "monthly",
    priority: 0.85,
    imageSlugs: ["cost-hero"],
  },
  {
    path: "/areas-we-serve",
    changeFrequency: "monthly",
    priority: 0.7,
    imageSlugs: ["areas-hero"],
  },
  {
    path: "/projects",
    changeFrequency: "weekly",
    priority: 0.75,
    imageSlugs: ["bath-primary", "walkin-hero"],
  },
  {
    path: "/blog",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    path: "/about",
    changeFrequency: "yearly",
    priority: 0.5,
    imageSlugs: ["about-hero", "about-crew"],
  },
  {
    path: "/about-oakwood-remodeling",
    changeFrequency: "yearly",
    priority: 0.45,
    imageSlugs: ["about-hero"],
  },
  {
    path: "/contact",
    changeFrequency: "yearly",
    priority: 0.6,
    imageSlugs: ["contact-hero"],
  },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.2 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.2 },
];

/**
 * Service detail pages — iterate `services` registry. Per-service
 * imageSlugs map to representative photos in public/images/.
 */
const serviceImages: Record<string, string[]> = {
  "bathroom-remodeling": ["bath-hero", "bath-primary"],
  "shower-remodeling": ["shower-hero", "shower-stone"],
  "tub-to-shower": ["tub-hero", "tub-conversion"],
  "walk-in-showers": ["walkin-hero", "walkin-curbless"],
};

const serviceRoutes: Route[] = servicesRegistry.map((s) => ({
  path: s.href,
  changeFrequency: "monthly",
  priority: 0.95,
  imageSlugs: serviceImages[s.key] ?? [],
}));

/**
 * Service × City combination pages: currently bathroom-remodeling × 9
 * cities. The structure supports adding shower-remodeling × city,
 * tub-to-shower × city, and walk-in-showers × city when we author
 * unique content for them.
 */
const serviceCityRoutes: Route[] = cities.map((c) => ({
  path: `/${c.fullSlug}`,
  changeFrequency: "monthly",
  priority: 0.85,
  imageSlugs: [c.imageSlug],
}));

/** Long-form content (blog) and case studies (projects). */
const blogPostRoutes: Route[] = allPosts.map((p) => ({
  path: `/blog/${p.meta.slug}`,
  changeFrequency: "monthly",
  priority: 0.75,
  imageSlugs: [p.meta.imageSlug],
}));

const projectRoutes: Route[] = allProjects.map((p) => ({
  path: `/projects/${p.slug}`,
  changeFrequency: "monthly",
  priority: 0.7,
  imageSlugs: [p.imageSlug],
}));

const routes: Route[] = [
  ...staticRoutes,
  ...serviceRoutes,
  ...serviceCityRoutes,
  ...blogPostRoutes,
  ...projectRoutes,
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: new URL(r.path, site.url).toString(),
    lastModified: CONTENT_LAST_UPDATED,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
    images: r.imageSlugs?.map((slug) =>
      new URL(`/images/${slug}.webp`, site.url).toString()
    ),
  }));
}
