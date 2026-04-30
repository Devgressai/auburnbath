import type { MetadataRoute } from "next";

import { cities } from "@/lib/cities";
import { site } from "@/lib/site";

type Route = {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
  imageSlugs?: string[];
};

const baseRoutes: Route[] = [
  {
    path: "/",
    changeFrequency: "monthly",
    priority: 1,
    imageSlugs: ["home-hero", "home-why-us"],
  },
  {
    path: "/bathroom-remodeling-auburn-ca",
    changeFrequency: "monthly",
    priority: 0.95,
    imageSlugs: ["bath-hero", "bath-primary"],
  },
  {
    path: "/shower-remodeling-auburn-ca",
    changeFrequency: "monthly",
    priority: 0.9,
    imageSlugs: ["shower-hero", "shower-stone"],
  },
  {
    path: "/tub-to-shower-conversion-auburn-ca",
    changeFrequency: "monthly",
    priority: 0.9,
    imageSlugs: ["tub-hero", "tub-conversion"],
  },
  {
    path: "/walk-in-showers-auburn-ca",
    changeFrequency: "monthly",
    priority: 0.9,
    imageSlugs: ["walkin-hero", "walkin-curbless"],
  },
  {
    path: "/bathroom-remodeling-cost-auburn-ca",
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

const cityRoutes: Route[] = cities.map((c) => ({
  path: `/${c.fullSlug}`,
  changeFrequency: "monthly",
  priority: 0.85,
  imageSlugs: [c.imageSlug],
}));

const routes: Route[] = [...baseRoutes, ...cityRoutes];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((r) => ({
    url: new URL(r.path, site.url).toString(),
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
    images: r.imageSlugs?.map(
      (slug) => new URL(`/images/${slug}.webp`, site.url).toString()
    ),
  }));
}
