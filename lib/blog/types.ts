import type { ReactNode } from "react";

export type BlogCategory =
  | "Cost & Planning"
  | "Design"
  | "Process"
  | "Permits & Code"
  | "Local";

export type BlogPostMeta = {
  /** URL slug — also used for the route /blog/<slug>. */
  slug: string;
  /** Card + page title. */
  title: string;
  /** SEO meta title (rendered absolute, no template suffix). */
  metaTitle: string;
  /** SEO meta description, ≤160 chars. */
  metaDescription: string;
  /** Card excerpt + opening framing on the post. */
  excerpt: string;
  /** Editorial category, used as eyebrow + filter. */
  category: BlogCategory;
  /** Hero image slug from public/images/. */
  imageSlug: string;
  /** Hero image alt — keyword-relevant, descriptive. */
  imageAlt: string;
  /** ISO date strings. */
  publishedAt: string;
  updatedAt?: string;
  /** Reading-time minutes (rounded). */
  readingMinutes: number;
};

export type BlogPost = {
  meta: BlogPostMeta;
  /** Function that renders the post body. Allows JSX (links, lists,
   *  inline emphasis) without serializing markdown. */
  content: () => ReactNode;
};
