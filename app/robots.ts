import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Search engines + good citizens — full access.
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        // Be explicit with the major engines so the directives are
        // never ambiguous.
        userAgent: ["Googlebot", "Googlebot-Image", "Bingbot", "DuckDuckBot"],
        allow: "/",
      },
    ],
    sitemap: new URL("/sitemap.xml", site.url).toString(),
    host: site.url,
  };
}
