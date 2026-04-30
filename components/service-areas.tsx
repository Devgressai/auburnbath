import Link from "next/link";

import { serviceAreas } from "@/lib/site";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";

export function ServiceAreasGrid({
  eyebrow = "Service areas",
  title = "Bathroom remodeling across Auburn & the Placer County foothills",
  description = "Our crew works regularly across these communities. If your town isn't listed, ask — we cover much of the I-80 corridor and Highway 49.",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {serviceAreas.map((area) => (
            <li key={area.slug}>
              <Link
                href={area.href}
                className="group flex items-center gap-2 rounded-[var(--radius-card)] border border-line/80 bg-cream px-4 py-3.5 text-sm text-charcoal hover:border-forest/40 hover:text-forest transition-colors"
              >
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-sage transition-colors group-hover:bg-forest"
                />
                {area.name}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
