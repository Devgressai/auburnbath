import Image from "next/image";
import Link from "next/link";

import { site } from "@/lib/site";
import { Container } from "./container";

/**
 * Full-bleed homepage hero — bright, modern bathroom photograph with
 * a clean cream-card text composition on the left. No heavy color
 * grading or forest overlay; the photo is the main event and the
 * copy lives inside its own subtle premium card so it stays
 * readable without darkening the image.
 */
export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-cream">
      {/* Full-bleed background photo — no tint. */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/home-hero-people.webp"
          alt="Happy Auburn, CA homeowners admiring their newly remodeled primary bathroom — bright modern space with frameless walk-in shower, freestanding soaker tub, warm rift oak vanity, brushed brass fixtures, and abundant natural light"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Soft cream wash on the left so the text card reads cleanly
            without darkening the photo. Fades to transparent across the
            image; barely there on the right where the bathroom shows. */}
        <span
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-cream via-cream/45 to-transparent lg:via-cream/20 lg:to-transparent"
        />
      </div>

      <Container className="relative grid min-h-[640px] py-14 sm:min-h-[720px] sm:py-20 lg:min-h-[760px] lg:py-24 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7 xl:col-span-6">
          <div className="rounded-[var(--radius-card)] border border-line/80 bg-cream/92 p-7 shadow-[0_4px_8px_rgba(17,17,17,0.04),0_24px_60px_rgba(17,17,17,0.10)] backdrop-blur-sm sm:p-9 lg:p-10">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-forest/15 bg-cream px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-forest">
              <span
                aria-hidden
                className="h-1.5 w-1.5 rounded-full bg-stone-warm"
              />
              Bathroom Remodeling Specialists · Auburn, CA
            </div>

            <h1 className="mt-5 font-display text-4xl leading-[1.04] text-soft-black sm:text-5xl lg:text-[clamp(3rem,4.6vw,3.75rem)]">
              Custom bathrooms,
              <br className="hidden sm:inline" /> built for{" "}
              <em className="text-forest">Auburn homes</em>.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">
              Walk-in showers, tub-to-shower conversions, and full
              primary-bath rebuilds — designed and installed by a
              bathroom-only crew that understands foothill homes.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-cream shadow-[0_4px_10px_rgba(35,72,62,0.22),0_18px_36px_rgba(35,72,62,0.26)] hover:bg-forest-dark hover:scale-[1.02] transition-all duration-200"
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
                className="inline-flex items-center justify-center gap-2 rounded-full border border-forest/30 bg-cream px-7 py-3.5 text-sm font-medium text-forest hover:bg-sage-light/60 hover:border-forest/50 transition-colors"
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

            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-charcoal">
              {[
                "Free in-home consultation",
                "Line-item written estimate",
                "Response within 1 business day",
              ].map((item) => (
                <li key={item} className="inline-flex items-center gap-2">
                  <span
                    aria-hidden
                    className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-stone-warm/30 text-forest-dark"
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
        </div>

        {/* Floating consult card on lg+ — small, premium accent that
            works against the bright bathroom photo. */}
        <aside className="hidden lg:col-span-5 xl:col-span-6 lg:flex lg:items-end lg:justify-end">
          <div className="rounded-2xl border border-cream/15 bg-forest-dark/90 p-5 text-cream shadow-[0_4px_8px_rgba(17,17,17,0.10),0_24px_60px_rgba(17,17,17,0.18)] backdrop-blur">
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
