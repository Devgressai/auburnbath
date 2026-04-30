import Link from "next/link";

import { site } from "@/lib/site";
import { Container } from "./container";

/**
 * Honest urgency block. Not "limited spots" or fake scarcity — just a
 * factual booking-window message that nudges the user toward acting
 * this month rather than next quarter.
 */
export function HomeAvailability() {
  return (
    <section className="relative overflow-hidden bg-forest text-cream py-20 sm:py-24">
      <span
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-[80%] w-[480px] bg-[radial-gradient(circle,rgba(122,158,142,0.28),transparent_65%)]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-[60%] w-[360px] bg-[radial-gradient(circle,rgba(200,169,115,0.20),transparent_65%)]"
      />
      <Container className="relative grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-stone-warm/40 bg-cream/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-warm">
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full bg-stone-warm"
            />
            Now booking
          </span>
          <h2 className="mt-5 font-display text-3xl text-cream sm:text-[2.5rem] lg:text-[clamp(2.5rem,4.4vw,3.25rem)] leading-tight">
            Booking primary bath remodels for late-spring & summer 2026.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-cream/85 sm:text-lg">
            We schedule a small number of bathroom projects per quarter so
            each one gets real attention — design time, on-site quality
            control, and a clean punch list. If you're aiming for a
            spring or early-summer build start, this is the month to talk.
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-[var(--radius-card)] border border-cream/15 bg-forest-dark/70 p-7 backdrop-blur shadow-lift">
            <div className="space-y-3 text-sm leading-6 text-cream/85">
              <div className="flex items-start gap-3">
                <CheckGold />
                <span>
                  <strong className="text-cream">Free in-home consultation.</strong>{" "}
                  We come to you.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckGold />
                <span>
                  <strong className="text-cream">
                    Line-item written estimate.
                  </strong>{" "}
                  No surprise add-ons.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckGold />
                <span>
                  <strong className="text-cream">
                    Response within one business day.
                  </strong>{" "}
                  Usually faster.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckGold />
                <span>
                  <strong className="text-cream">No pressure.</strong>{" "}
                  No obligation. Ever.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckGold />
                <span>
                  <strong className="text-cream">
                    Workmanship stand-behind.
                  </strong>{" "}
                  If something we installed isn&apos;t right, we come
                  back and make it right.
                </span>
              </div>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-stone-warm px-6 py-3 text-sm font-semibold text-soft-black hover:bg-cream transition-colors"
              >
                Reserve your consultation
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
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-5 py-3 text-sm font-medium text-cream hover:bg-cream/10 transition-colors"
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
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CheckGold() {
  return (
    <span
      aria-hidden
      className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-stone-warm/25 text-stone-warm"
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
  );
}
