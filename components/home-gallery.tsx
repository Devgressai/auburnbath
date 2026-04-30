import Link from "next/link";

import { Container } from "./container";
import { ImagePlaceholder } from "./image-placeholder";
import { SectionHeading } from "./section-heading";

/**
 * Homepage project gallery — magazine-style asymmetric grid that
 * shows the actual work in a variety of crops and ratios. Built from
 * existing public/images photos so it ships immediately.
 */

type Tile = {
  slug: string;
  alt: string;
  caption: string;
  /** Tailwind grid spans on lg (the 4-col grid). */
  span: string;
  /** Aspect ratio for the figure. */
  ratio: "4/3" | "3/4" | "1/1" | "5/4" | "16/9";
};

const tiles: Tile[] = [
  {
    slug: "home-hero",
    alt: "Auburn primary bathroom remodel — sage stone tile shower, freestanding soaker tub, and rift oak vanity",
    caption: "Auburn primary bath",
    span: "lg:col-span-2 lg:row-span-2",
    ratio: "1/1",
  },
  {
    slug: "shower-hero",
    alt: "Custom walk-in tile shower with frameless glass and sage stone in an Auburn home",
    caption: "Walk-in shower",
    span: "lg:col-span-1 lg:row-span-1",
    ratio: "4/3",
  },
  {
    slug: "tub-conversion",
    alt: "Low-threshold tub-to-shower conversion with sage stone tile and built-in bench",
    caption: "Tub-to-shower conversion",
    span: "lg:col-span-1 lg:row-span-1",
    ratio: "4/3",
  },
  {
    slug: "walkin-curbless",
    alt: "Curbless walk-in shower with frameless glass and large-format sage stone tile in an Auburn primary bathroom",
    caption: "Curbless walk-in",
    span: "lg:col-span-2 lg:row-span-1",
    ratio: "16/9",
  },
  {
    slug: "bath-primary",
    alt: "Auburn primary bathroom remodel — sage tile shower, warm wood floating vanity, matte black hardware",
    caption: "Sage tile primary bath",
    span: "lg:col-span-1 lg:row-span-1",
    ratio: "4/3",
  },
  {
    slug: "shower-stone",
    alt: "Sage stone-tile walk-in shower remodel with built-in niche and frameless glass",
    caption: "Stone-tile walk-in",
    span: "lg:col-span-1 lg:row-span-1",
    ratio: "4/3",
  },
];

export function HomeGallery() {
  return (
    <section className="relative py-20 sm:py-28">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sage/40 to-transparent"
      />
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title="Bathrooms designed to age gracefully."
            description="A look at the kind of work we deliver across Auburn — calm tones, durable systems, careful tile work, and finishes that feel intentional in a foothill home."
          />
          <Link
            href="/contact"
            className="hidden shrink-0 lg:inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-forest hover:text-forest-dark"
          >
            Plan a project like these
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-3 w-3"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12l-7.5 7.5M3 12h18"
              />
            </svg>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:auto-rows-[1fr] lg:gap-5">
          {tiles.map((tile) => (
            <figure
              key={tile.slug}
              className={`group relative overflow-hidden rounded-[var(--radius-card)] border border-line/80 shadow-soft hover:shadow-lift transition-shadow duration-500 ${tile.span}`}
            >
              <ImagePlaceholder
                slug={tile.slug}
                alt={tile.alt}
                ratio={tile.ratio}
                tone="sage"
                sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                className="h-full w-full !rounded-none !border-0 !shadow-none transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-soft-black/55 via-soft-black/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <figcaption className="pointer-events-none absolute left-4 bottom-4 right-4 flex items-center gap-2 text-cream opacity-0 transition-all duration-500 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0">
                <span className="h-px w-6 bg-stone-warm" aria-hidden />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">
                  {tile.caption}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 lg:hidden">
          <Link
            href="/contact"
            className="btn btn-primary w-full sm:w-auto"
          >
            Plan a project like these
          </Link>
        </div>
      </Container>
    </section>
  );
}
