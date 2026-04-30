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
    <section className="relative py-20 sm:py-24 bg-sand">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sage/40 to-transparent"
      />
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <ol className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          <span
            aria-hidden
            className="absolute left-6 right-6 top-12 hidden h-px bg-gradient-to-r from-sage/0 via-sage/50 to-sage/0 lg:block"
          />
          {processSteps.map((step, idx) => (
            <li
              key={step.title}
              className="relative flex flex-col card p-6"
            >
              <div className="flex items-center gap-3">
                <span className="font-display flex h-9 w-9 items-center justify-center rounded-full bg-forest text-cream text-sm">
                  {idx + 1}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-forest">
                  Step {idx + 1}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg text-soft-black">
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
