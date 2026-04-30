import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

const routes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  {
    path: "/bathroom-remodeling-auburn-ca",
    changeFrequency: "monthly",
    priority: 0.95,
  },
  {
    path: "/shower-remodeling-auburn-ca",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/tub-to-shower-conversion-auburn-ca",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/walk-in-showers-auburn-ca",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/bathroom-remodeling-cost-auburn-ca",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  { path: "/areas-we-serve", changeFrequency: "monthly", priority: 0.7 },
  { path: "/about", changeFrequency: "yearly", priority: 0.5 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.2 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((r) => ({
    url: new URL(r.path, site.url).toString(),
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
