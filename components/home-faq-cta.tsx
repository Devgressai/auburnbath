import Image from "next/image";
import Link from "next/link";

import { faqSchema, jsonLdScript } from "@/lib/schema";
import { site } from "@/lib/site";
import { Container } from "./container";

export type FAQ = { q: string; a: string };

export function HomeFaqCta({ items }: { items: FAQ[] }) {
  return (
    <section className="py-20 sm:py-24" aria-labelledby="home-faq-heading">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        {/* FAQ */}
        <div className="lg:col-span-7">
          <span className="eyebrow">FAQ</span>
          <h2
            id="home-faq-heading"
            className="mt-3 font-display text-3xl text-soft-black sm:text-[2.5rem]"
          >
            Frequently asked questions.
          </h2>
          <div className="mt-8 overflow-hidden rounded-[var(--radius-card)] border border-line/80 bg-cream divide-y divide-line/70 shadow-soft">
            {items.map((item, idx) => (
              <details
                key={item.q}
                className="group [&_summary::-webkit-details-marker]:hidden"
                {...(idx === 0 ? { open: true } : {})}
              >
                <summary className="flex cursor-pointer items-start justify-between gap-6 list-none px-6 py-5 text-base font-medium text-soft-black hover:bg-sage-light/40 transition-colors">
                  <span>{item.q}</span>
                  <span
                    aria-hidden
                    className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-forest transition-transform group-open:rotate-45"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      className="h-3.5 w-3.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm leading-7 text-muted">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-forest hover:text-forest-dark"
          >
            Have a different question? Ask us
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
          </Link>
        </div>

        {/* CTA card */}
        <aside className="relative lg:col-span-5 overflow-hidden rounded-[var(--radius-card)] bg-forest-dark text-cream shadow-lift min-h-[460px]">
          <Image
            src="/images/home-hero.webp"
            alt=""
            fill
            sizes="(min-width: 1024px) 480px, 100vw"
            className="object-cover opacity-35"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-tr from-forest-dark/90 via-forest/80 to-forest/40"
          />
          <div className="relative flex h-full flex-col p-8 sm:p-10">
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-warm">
              Free in-home consultation
            </span>
            <h2 className="mt-3 font-display text-3xl leading-tight text-cream sm:text-[2.25rem]">
              Ready to start your Auburn bathroom remodel?
            </h2>
            <p className="mt-4 text-sm leading-6 text-cream/85 sm:text-base">
              Tell us about your space and we'll set up a free on-site
              consultation. No pressure, no obligation — just a clear
              line-item plan you can hold us to.
            </p>
            <div className="mt-auto pt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-stone-warm px-6 py-3 text-sm font-medium text-soft-black hover:bg-cream transition-colors"
              >
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
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/35 px-6 py-3 text-sm font-medium text-cream hover:bg-forest transition-colors"
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
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372a1.125 1.125 0 0 0-.964-1.113l-4.114-.62a1.125 1.125 0 0 0-1.155.564l-.928 1.546a13.514 13.514 0 0 1-6.13-6.13l1.547-.928a1.125 1.125 0 0 1 .564-1.155l-.62-4.114A1.125 1.125 0 0 0 8.872 3H7.5A4.25 4.25 0 0 0 2.25 7.25v-.5Z"
                  />
                </svg>
                Call {site.phone}
              </a>
            </div>
          </div>
        </aside>
      </Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(faqSchema(items))}
      />
    </section>
  );
}
