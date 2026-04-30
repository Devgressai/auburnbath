import Image from "next/image";
import Link from "next/link";

import { site } from "@/lib/site";
import { Container } from "./container";

/**
 * Full-bleed homepage hero — single dramatic photograph behind a
 * cream-on-dark editorial overlay. Replaces the split-layout hero on
 * the homepage only; the standard <Hero> still drives every other
 * page (consistent SEO templating, lower visual bombast on inner
 * pages).
 *
 * The photo should carry warmth (people / lifestyle) so the visitor
 * sees an outcome, not just a room.
 */
export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden text-cream">
      {/* Full-bleed background photo. */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/home-hero-people.webp"
          alt="Happy Auburn, CA homeowners admiring their newly remodeled primary bathroom — sage stone tile walk-in shower, freestanding soaker tub, warm rift oak vanity with brushed brass fixtures, oak trees in the morning window light"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Layered gradients for legibility without flattening the image. */}
        <span
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-soft-black/85 via-soft-black/55 to-soft-black/15"
        />
        <span
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-soft-black/55 via-transparent to-soft-black/10"
        />
        {/* Subtle sage tint to keep the brand palette in the lighting. */}
        <span
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(60%_70%_at_15%_45%,rgba(47,93,80,0.45),transparent_70%)]"
        />
      </div>

      <Container className="relative grid min-h-[640px] py-16 sm:min-h-[720px] sm:py-20 lg:min-h-[760px] lg:py-28 lg:grid-cols-12 lg:items-end">
        <div className="max-w-2xl lg:col-span-8">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-stone-warm/40 bg-soft-black/30 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-warm backdrop-blur">
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full bg-stone-warm"
            />
            Bathroom Remodeling Specialists · Auburn, CA
          </div>

          <h1 className="mt-6 font-display text-4xl leading-[1.04] text-cream sm:text-5xl lg:text-[clamp(3.25rem,5.6vw,4.75rem)]">
            Custom bathrooms,
            <br className="hidden sm:inline" /> built for{" "}
            <em className="text-stone-warm">Auburn homes</em>.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-cream/85 sm:text-lg">
            Walk-in showers, tub-to-shower conversions, and full primary
            bath rebuilds — designed and installed by a bathroom-only crew
            that understands foothill homes.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-warm px-7 py-4 text-sm font-semibold text-soft-black shadow-[0_4px_12px_rgba(200,169,115,0.35),0_18px_36px_rgba(200,169,115,0.30)] hover:bg-cream hover:scale-[1.02] transition-all duration-200"
            >
              Get Free Quote
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
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
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 bg-soft-black/30 px-7 py-4 text-sm font-medium text-cream backdrop-blur hover:bg-soft-black/50 transition-colors"
            >
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
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372a1.125 1.125 0 0 0-.964-1.113l-4.114-.62a1.125 1.125 0 0 0-1.155.564l-.928 1.546a13.514 13.514 0 0 1-6.13-6.13l1.547-.928a1.125 1.125 0 0 0 .564-1.155l-.62-4.114A1.125 1.125 0 0 0 8.872 3H7.5A4.25 4.25 0 0 0 2.25 7.25v-.5Z"
                />
              </svg>
              Call {site.phone}
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-cream/85">
            {[
              "Free in-home consultation",
              "Line-item written estimate",
              "Response within 1 business day",
            ].map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <span
                  aria-hidden
                  className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-stone-warm/30 text-stone-warm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    className="h-3 w-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Floating consult card on lg+ — small, premium accent. */}
        <aside className="hidden lg:col-span-4 lg:flex lg:items-end lg:justify-end">
          <div className="rounded-2xl border border-cream/15 bg-forest-dark/85 p-5 text-cream shadow-lift backdrop-blur">
            <div className="flex items-start gap-3">
              <span
                aria-hidden
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-warm text-forest-dark"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="h-5 w-5"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
              </span>
              <div>
                <div className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/80">
                  Free Consultation
                </div>
                <div className="mt-1 font-display text-base font-medium leading-snug text-cream">
                  No pressure. No obligation.
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs leading-5 text-cream/80">
              Just a clear plan for your Auburn bathroom remodel.
            </p>
          </div>
        </aside>
      </Container>
    </section>
  );
}
