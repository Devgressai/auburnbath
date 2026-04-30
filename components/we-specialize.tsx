import { specialtyPillars } from "@/lib/site";
import { Container } from "./container";
import { ImagePlaceholder } from "./image-placeholder";
import { SectionHeading } from "./section-heading";

export function WeSpecialize() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <ImagePlaceholder
            slug="home-why-us"
            alt="Auburn, CA bathroom remodel with sage stone-tile walk-in shower, frameless low-iron glass enclosure, and rift oak vanity"
            ratio="4/3"
            tone="sage"
            sizes="(min-width: 1024px) 540px, 100vw"
          />
        </div>
        <div className="lg:col-span-6">
          <SectionHeading
            eyebrow="We don't remodel everything"
            title="We specialize in bathrooms."
            description="Most contractors split their crews between kitchens, additions, flooring, and repairs. Auburn Bath focuses 100% on bathrooms — which means cleaner timelines, better planning, and a crew that understands waterproofing, tile, vents, vanities, permits, and finish details."
          />
          <ul className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {specialtyPillars.map((p) => (
              <li key={p.title} className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-warm/25 text-forest-dark"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-3 w-3"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </span>
                <div>
                  <div className="font-display text-base font-medium text-soft-black">
                    {p.title}
                  </div>
                  <div className="mt-1 text-sm leading-6 text-muted">
                    {p.subtitle}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
