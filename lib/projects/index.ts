import { projects } from "./items";
import type { Project } from "./types";

/**
 * Project registry — sorted newest-first by year, then by slug for
 * deterministic ordering.
 */
export const allProjects: Project[] = [...projects].sort((a, b) => {
  if (a.year !== b.year) return b.year.localeCompare(a.year);
  return a.slug.localeCompare(b.slug);
});

export const allProjectSlugs = () => allProjects.map((p) => p.slug);

export const findProject = (slug: string) =>
  allProjects.find((p) => p.slug === slug);

export const relatedProjects = (slug: string, limit = 3): Project[] => {
  const target = findProject(slug);
  if (!target) return allProjects.slice(0, limit);
  return allProjects
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const aMatch = a.serviceKey === target.serviceKey ? 0 : 1;
      const bMatch = b.serviceKey === target.serviceKey ? 0 : 1;
      return aMatch - bMatch;
    })
    .slice(0, limit);
};

export type { Project } from "./types";
