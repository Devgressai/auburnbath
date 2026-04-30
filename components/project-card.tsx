import Link from "next/link";

import type { Project } from "@/lib/projects/types";
import { ImagePlaceholder } from "./image-placeholder";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group card flex h-full flex-col overflow-hidden p-0"
    >
      <ImagePlaceholder
        slug={project.imageSlug}
        alt={project.imageAlt}
        ratio="4/3"
        tone="sage"
        sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
        className="!rounded-none !border-0 !shadow-none"
      />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-forest">
          <span>{project.cityName}</span>
          <span aria-hidden className="text-line">
            ·
          </span>
          <span className="text-muted">{project.year}</span>
        </div>
        <h3 className="mt-3 font-display text-lg text-soft-black leading-snug">
          <span className="bg-[linear-gradient(currentColor,currentColor)] bg-no-repeat bg-bottom bg-[length:0%_1px] pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
            {project.title}
          </span>
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted">{project.excerpt}</p>
        <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-forest">
          See project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12l-7.5 7.5M3 12h18"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
