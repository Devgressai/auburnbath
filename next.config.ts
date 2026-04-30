import type { NextConfig } from "next";

import { cities } from "./lib/cities";

/**
 * 301 redirects from the legacy flat URL structure to the new
 * hierarchical /services/{service}/{city} layout.
 *
 * The site was launched on the flat structure ("/bathroom-remodeling-
 * newcastle-ca", "/shower-remodeling-auburn-ca", etc.). We migrated
 * to a hierarchical structure under /services for clearer site
 * architecture, deeper internal-linking, and to support future
 * service × city combinations cleanly.
 *
 * Google had not yet indexed the legacy URLs, but external links from
 * the parent brand site or social profiles may exist — these
 * permanent redirects ensure no link is ever broken.
 */
const nextConfig: NextConfig = {
  async redirects() {
    const cityRedirects = cities.map((city) => ({
      // Pre-migration shape: /bathroom-remodeling-{slug}-ca
      source: `/bathroom-remodeling-${city.slug}-ca`,
      destination: `/services/bathroom-remodeling/${city.slug}`,
      permanent: true,
    }));

    return [
      {
        source: "/bathroom-remodeling-auburn-ca",
        destination: "/services/bathroom-remodeling",
        permanent: true,
      },
      {
        source: "/shower-remodeling-auburn-ca",
        destination: "/services/shower-remodeling",
        permanent: true,
      },
      {
        source: "/tub-to-shower-conversion-auburn-ca",
        destination: "/services/tub-to-shower",
        permanent: true,
      },
      {
        source: "/walk-in-showers-auburn-ca",
        destination: "/services/walk-in-showers",
        permanent: true,
      },
      {
        source: "/bathroom-remodeling-cost-auburn-ca",
        destination: "/services/cost-guide",
        permanent: true,
      },
      ...cityRedirects,
    ];
  },
};

export default nextConfig;
