import { processSteps } from "@/lib/site";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";

export function ProcessSteps({
  eyebrow = "Our process",
  title = "A calm, organized bathroom remodel — start to finish",
  description = "We've structured the project around the moments most homeowners care about most: clarity up front, clean execution, and a finished bathroom that feels right.",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className="py-20 bg-sand">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, idx) => (
            <li
              key={step.title}
              className="flex flex-col rounded-[var(--radius-card)] border border-line/80 bg-cream p-6 shadow-soft"
            >
              <span className="font-display text-sm uppercase tracking-[0.18em] text-forest">
                Step {idx + 1}
              </span>
              <h3 className="mt-3 font-display text-lg text-soft-black">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
