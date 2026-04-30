import Link from "next/link";

import { Container } from "./container";
import { SectionHeading } from "./section-heading";

/**
 * 3-step buyer-journey mini-section. Lives between TrustRibbon and
 * HomeGallery so visitors see the path to a finished bathroom before
 * they even read the rest of the page. CRO purpose: collapses the
 * "what happens if I click?" friction into 30 seconds of clarity.
 */

const steps: Array<{ kicker: string; title: string; body: string }> = [
  {
    kicker: "Step 1",
    title: "Tell us about your bathroom",
    body: "Share a few details — takes about 2 minutes. We respond within one business day, usually faster.",
  },
  {
    kicker: "Step 2",
    title: "Free in-home consultation",
    body: "We come to you, look at the space, and walk through layout + finish ideas. No pressure, no obligation.",
  },
  {
    kicker: "Step 3",
    title: "Line-item estimate, then build",
    body: "Clear written estimate with no surprise add-ons. Once approved, our crew handles design, demo, and finish.",
  },
];

export function HomeHow() {
  return (
    <section className="relative py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From first message to finished bathroom."
          description="Three clear steps. No high-pressure sales calls, no surprise charges, no commitment until the estimate is in writing and you say yes."
          align="center"
        />
        <ol className="relative mt-14 grid gap-5 sm:grid-cols-3">
          <span
            aria-hidden
            className="pointer-events-none absolute left-12 right-12 top-9 hidden h-px bg-gradient-to-r from-sage/0 via-sage/45 to-sage/0 sm:block"
          />
          {steps.map((step, idx) => (
            <li key={step.title} className="relative flex flex-col card p-6">
              <span
                aria-hidden
                className="font-display flex h-9 w-9 items-center justify-center rounded-full bg-forest text-cream text-base shadow-cta"
              >
                {idx + 1}
              </span>
              <span className="mt-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-forest">
                {step.kicker}
              </span>
              <h3 className="mt-2 font-display text-lg text-soft-black leading-snug">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12 text-center">
          <Link href="/contact" className="btn btn-primary">
            Start with step 1
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
