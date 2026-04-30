import Link from "next/link";

import { pricingPreview, processSteps, serviceAreas } from "@/lib/site";
import { Container } from "./container";

export function HomeInfoRow() {
  return (
    <section className="relative py-20 sm:py-24">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sage/40 to-transparent"
      />
      <Container className="grid gap-12 lg:grid-cols-3 lg:gap-10">
        {/* Pricing */}
        <div>
          <span className="eyebrow">Pricing</span>
          <h2 className="mt-3 font-display text-2xl text-soft-black sm:text-[1.75rem]">
            Transparent ranges you can plan around.
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Typical Auburn starting points. Final pricing depends on
            layout, plumbing, materials, and waterproofing scope.
          </p>
          <ul className="mt-6 divide-y divide-line/70 rounded-[var(--radius-card)] border border-line/80 bg-cream">
            {pricingPreview.map((row) => (
              <li
                key={row.label}
                className="flex items-center justify-between gap-4 px-4 py-3 text-sm"
              >
                <span className="text-charcoal">{row.label}</span>
                <span className="whitespace-nowrap text-muted">
                  {row.range}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs leading-5 text-muted">
            Every project is unique — we line-item your estimate after an
            on-site walkthrough.
          </p>
          <Link
            href="/bathroom-remodeling-cost-auburn-ca"
            className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-forest hover:text-forest-dark"
          >
            See full cost guide
            <ArrowSm />
          </Link>
        </div>

        {/* Process */}
        <div>
          <span className="eyebrow">Process</span>
          <h2 className="mt-3 font-display text-2xl text-soft-black sm:text-[1.75rem]">
            Our proven process.
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            A clear, simple path from first conversation to final
            walkthrough.
          </p>
          <ol className="mt-6 space-y-4">
            {processSteps.map((step, idx) => (
              <li key={step.title} className="flex items-start gap-3">
                <span className="font-display flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest text-cream text-xs">
                  {idx + 1}
                </span>
                <div className="min-w-0">
                  <div className="font-display text-base font-medium text-soft-black">
                    {step.title}
                  </div>
                  <div className="mt-0.5 text-sm leading-6 text-muted">
                    {step.body}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Areas */}
        <div>
          <span className="eyebrow">Service areas</span>
          <h2 className="mt-3 font-display text-2xl text-soft-black sm:text-[1.75rem]">
            Serving Auburn & nearby foothill communities.
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Local crew, real coverage of the I-80 and Highway 49 corridor
            across Placer and Nevada counties.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-x-3 gap-y-2.5 text-sm">
            {serviceAreas.map((a) => (
              <li key={a.slug}>
                <Link
                  href={a.href}
                  className="group inline-flex items-center gap-2 text-charcoal hover:text-forest transition-colors"
                >
                  <PinSm />
                  {a.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/areas-we-serve"
            className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-forest hover:text-forest-dark"
          >
            View all service areas
            <ArrowSm />
          </Link>
        </div>
      </Container>
    </section>
  );
}

function ArrowSm() {
  return (
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
  );
}

function PinSm() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-3.5 w-3.5 text-forest/70"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z"
      />
    </svg>
  );
}
