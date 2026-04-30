import type { BlogPost } from "./types";

import { post as timelinePost } from "./posts/bathroom-remodel-timeline-auburn";
import { post as curblessPost } from "./posts/curbless-vs-low-threshold-walk-in-shower";
import { post as resalePost } from "./posts/tub-to-shower-resale-value-auburn";
import { post as permitPost } from "./posts/placer-county-bathroom-remodel-permits";
import { post as designPost } from "./posts/foothill-bathroom-design-sage-stone-wood";

/**
 * Registry of all published posts, sorted newest-first by publishedAt.
 * Adding a new post = drop a new file under lib/blog/posts/<slug>.tsx
 * and import + push it into this array.
 */
export const allPosts: BlogPost[] = [
  permitPost,
  designPost,
  timelinePost,
  curblessPost,
  resalePost,
].sort(
  (a, b) =>
    new Date(b.meta.publishedAt).valueOf() -
    new Date(a.meta.publishedAt).valueOf()
);

export const findPost = (slug: string) =>
  allPosts.find((p) => p.meta.slug === slug);

export const allPostSlugs = () => allPosts.map((p) => p.meta.slug);

export const relatedPosts = (slug: string, limit = 3): BlogPost[] => {
  const target = findPost(slug);
  if (!target) return allPosts.slice(0, limit);
  return allPosts
    .filter((p) => p.meta.slug !== slug)
    .sort((a, b) => {
      const aMatch = a.meta.category === target.meta.category ? 0 : 1;
      const bMatch = b.meta.category === target.meta.category ? 0 : 1;
      return aMatch - bMatch;
    })
    .slice(0, limit);
};
