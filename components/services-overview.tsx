import Link from "next/link";

import { homeServiceTiles } from "@/lib/site";
import { Container } from "./container";
import { ImagePlaceholder } from "./image-placeholder";
import { SectionHeading } from "./section-heading";

export function ServicesOverview() {
  return (
    <section className="relative py-20 sm:py-28 bg-sage-light/45">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sage/45 to-transparent"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sage/40 to-transparent"
      />
      <Container>
        <SectionHeading
          eyebrow="What we remodel"
          title="Our Auburn Bathroom Remodeling Services"
          description="From a single shower rebuild to a full primary bath remodel, every project is designed and built by a bathroom-only crew."
          align="center"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {homeServiceTiles.map((tile) => (
            <Link
              key={`${tile.title}-${tile.imageSlug}`}
              href={tile.href}
              className="group card flex h-full flex-col overflow-hidden p-0"
            >
              <div className="relative">
                <ImagePlaceholder
                  slug={tile.imageSlug}
                  alt={`${tile.title} in Auburn, CA — Auburn Bath project example`}
                  ratio="4/3"
                  tone="sage"
                  sizes="(min-width: 1280px) 380px, (min-width: 768px) 50vw, 100vw"
                  className="rounded-none border-0 shadow-none"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg text-soft-black">
                  <span className="bg-[linear-gradient(currentColor,currentColor)] bg-no-repeat bg-bottom bg-[length:0%_1px] pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
                    {tile.title}
                  </span>
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {tile.blurb}
                </p>
                <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-forest">
                  Learn more
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
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link href="/contact" className="btn btn-primary">
            Get a free service quote
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              className="h-3.5 w-3.5"
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
      </Container>
    </section>
  );
}
