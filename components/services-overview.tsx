import { services } from "@/lib/site";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";
import { ServiceCard } from "./service-card";

export function ServicesOverview({
  eyebrow = "What we remodel",
  title = "Bathroom-focused services for Auburn & nearby foothill homes",
  description = "Whether you're replacing a tired primary bath, dropping the tub for a clean walk-in shower, or rethinking a guest bathroom from the studs out, we approach each project the same way: durable, calm, and built to last.",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard
              key={s.key}
              serviceKey={s.key}
              href={s.href}
              title={s.title}
              blurb={s.blurb}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
