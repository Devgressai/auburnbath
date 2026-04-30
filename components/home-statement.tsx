import Link from "next/link";

import { Container } from "./container";

/**
 * Editorial pull-quote moment between content blocks. Big serif, lots
 * of whitespace, no decorative noise. The point: a single line that
 * captures the brand stance, presented like a magazine spread.
 */
export function HomeStatement() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-32 mx-auto h-[420px] max-w-3xl bg-[radial-gradient(60%_60%_at_50%_50%,rgba(122,158,142,0.16),transparent_70%)]"
      />
      <Container size="narrow" className="relative text-center">
        <div className="section-rule mb-10">
          <span className="dot" />
        </div>
        <p className="font-display text-[1.85rem] leading-[1.18] text-soft-black sm:text-[2.4rem] sm:leading-[1.16] lg:text-[clamp(2.5rem,4vw,3.25rem)]">
          The bathroom you{" "}
          <em className="text-forest">can&apos;t see</em>
          <br className="hidden sm:inline" /> is what makes the bathroom
          you <em className="text-forest">can see</em> last.
        </p>
        <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-muted sm:text-base">
          Bonded waterproofing systems, real ventilation, plumbing where
          it should be, and tile set so it actually holds up. We design
          the visible bathroom carefully — and build the invisible one
          the same way.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/contact" className="btn btn-primary">
            Get free quote
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
          <Link
            href="/services/bathroom-remodeling"
            className="btn btn-secondary"
          >
            See how we build
          </Link>
        </div>
        <div className="section-rule mt-10">
          <span className="dot" />
        </div>
      </Container>
    </section>
  );
}
