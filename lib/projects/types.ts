import type { ReactNode } from "react";

import type { ServiceKey } from "../site";

export type Project = {
  /** URL slug — used at /projects/<slug>. */
  slug: string;
  /** Display title. */
  title: string;
  /** SEO meta title (rendered absolute, no template suffix). */
  metaTitle: string;
  /** SEO meta description, ≤160 chars. */
  metaDescription: string;
  /** Card excerpt + opening framing on the project page. */
  excerpt: string;
  /** Hero image slug from public/images/. */
  imageSlug: string;
  /** Hero image alt — keyword-relevant, descriptive. */
  imageAlt: string;
  /** City the project was built in (matches lib/cities.ts slug or "auburn"). */
  citySlug: string;
  /** City display name for breadcrumbs and copy. */
  cityName: string;
  /** Primary service this project demonstrates. */
  serviceKey: ServiceKey;
  /** Year completed (string for flexibility). */
  year: string;
  /** Spec card rows shown on the project page. */
  spec: Array<{ label: string; value: string }>;
  /** Project body content as JSX. */
  content: () => ReactNode;
};
