import type { Metadata } from "next";

import { site } from "./site";

type BuildMetadataInput = {
  /**
   * Final, fully-formed title rendered as-is. The root layout's
   * `title.template` is bypassed via `title.absolute`, so per-page titles
   * never end up double-suffixed with the brand.
   */
  title: string;
  description: string;
  path: string;
};

export function buildMetadata({
  title,
  description,
  path,
}: BuildMetadataInput): Metadata {
  const canonical = new URL(path, site.url).toString();
  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: site.name,
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${site.name} — Bathroom remodeling in Auburn, CA`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}
