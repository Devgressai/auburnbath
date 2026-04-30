import { trustPoints } from "@/lib/site";
import { Container } from "./container";
import { ImagePlaceholder } from "./image-placeholder";
import { SectionHeading } from "./section-heading";

export function WhyUs() {
  return (
    <section className="py-20">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Why Auburn homeowners choose Auburn Bath"
            title="A bathroom-only specialist that takes the foothills seriously."
            description="Bathrooms involve waterproofing, ventilation, layout, tile, plumbing, lighting, and daily wear. We focus on this one room so the work holds up — and looks the part — for years."
          />
          <ul className="mt-8 grid gap-3">
            {trustPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-sm leading-6 text-charcoal"
              >
                <span
                  aria-hidden
                  className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-light text-forest"
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
        <ImagePlaceholder
          alt="Sage-toned Auburn bathroom remodel with stone-tile shower, frameless glass enclosure, and warm wood vanity"
          caption="Calm tones, durable materials"
          ratio="5/4"
          tone="sage"
        />
      </Container>
    </section>
  );
}
