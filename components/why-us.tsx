import { trustPoints } from "@/lib/site";
import { Container } from "./container";
import { ImagePlaceholder } from "./image-placeholder";
import { SectionHeading } from "./section-heading";

export function WhyUs() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <SectionHeading
            eyebrow="Why Auburn homeowners choose Auburn Bath"
            title="A bathroom-only specialist that takes the foothills seriously."
            description="Bathrooms involve waterproofing, ventilation, layout, tile, plumbing, lighting, and daily wear. We focus on this one room so the work holds up — and looks the part — for years."
          />
          <ul className="mt-9 grid gap-3.5">
            {trustPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-[0.95rem] leading-6 text-charcoal"
              >
                <span
                  aria-hidden
                  className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage-light text-forest ring-1 ring-sage/30"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-3 w-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative lg:col-span-6">
          <ImagePlaceholder
            slug="home-why-us"
            alt="Auburn, CA bathroom remodel with sage stone-tile walk-in shower, frameless low-iron glass enclosure, and rift oak vanity"
            caption="Calm tones, durable materials"
            ratio="5/4"
            tone="sage"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-5 -right-5 hidden h-24 w-24 rounded-full bg-stone/30 sm:block"
          />
        </div>
      </Container>
    </section>
  );
}
