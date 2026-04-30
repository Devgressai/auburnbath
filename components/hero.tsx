import Link from "next/link";

import { heroTrustPillars, site } from "@/lib/site";
import { Container } from "./container";
import { ImagePlaceholder } from "./image-placeholder";

export function Hero({
  eyebrow,
  title,
  description,
  imageSlug,
  imageAlt = "Modern green-toned bathroom remodel in an Auburn, CA home with stone tile shower and warm wood vanity",
  primaryHref = "/contact",
  primaryLabel = "Get Free Quote",
  showTrustPillars = false,
  showConsultCard = false,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  imageSlug?: string;
  imageAlt?: string;
  primaryHref?: string;
  primaryLabel?: string;
  /** Render the 4-pillar trust strip below the CTAs (homepage). */
  showTrustPillars?: boolean;
  /** Overlay a "Free In-Home Consultation" card on the hero image (homepage). */
  showConsultCard?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-cream">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-32 mx-auto h-[520px] max-w-5xl bg-[radial-gradient(60%_60%_at_50%_50%,rgba(122,158,142,0.18),transparent_70%)]"
      />
      <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-12 lg:gap-14 lg:py-24">
        <div className="lg:col-span-6 xl:col-span-7 lg:pr-4">
          {eyebrow ? <span className="eyebrow mb-5">{eyebrow}</span> : null}
          <h1 className="font-display text-4xl leading-[1.04] text-soft-black sm:text-5xl lg:text-[clamp(3rem,5.4vw,4.25rem)]">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {primaryHref.startsWith("#") ? (
              <a href={primaryHref} className="btn btn-primary">
                {primaryLabel}
                <Arrow />
              </a>
            ) : (
              <Link href={primaryHref} className="btn btn-primary">
                {primaryLabel}
                <Arrow />
              </Link>
            )}
            <a href={site.phoneHref} className="btn btn-secondary">
              <PhoneSm />
              Call {site.phone}
            </a>
          </div>

          {showTrustPillars ? (
            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
              {heroTrustPillars.map((p) => (
                <div key={p.title} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-light text-forest ring-1 ring-sage/30"
                  >
                    <PillarIcon iconKey={p.iconKey} />
                  </span>
                  <div className="min-w-0">
                    <div className="font-display text-sm font-medium text-soft-black leading-tight">
                      {p.title}
                    </div>
                    <div className="mt-0.5 text-[11px] text-muted leading-snug">
                      {p.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-7 max-w-lg text-xs leading-5 text-muted">
              {site.trustLine}
            </p>
          )}
        </div>

        <div className="lg:col-span-6 xl:col-span-5">
          <div className="relative">
            <ImagePlaceholder
              slug={imageSlug}
              alt={imageAlt}
              ratio="4/3"
              tone="forest"
              priority
              sizes="(min-width: 1024px) 600px, 100vw"
            />
            {showConsultCard ? (
              <div className="pointer-events-auto absolute -bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:max-w-[280px] rounded-2xl bg-forest/96 p-5 text-cream shadow-lift backdrop-blur lg:-bottom-8 lg:right-8">
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-warm text-forest-dark"
                  >
                    <CalendarIcon />
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
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Arrow() {
  return (
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
  );
}

function PhoneSm() {
  return (
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
  );
}

function CalendarIcon() {
  return (
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
  );
}

function PillarIcon({ iconKey }: { iconKey: string }) {
  const common = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.5,
    className: "h-5 w-5",
    "aria-hidden": true as const,
  };
  switch (iconKey) {
    case "specialty":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5v6.75H3.75zM3.75 12h16.5v6.75H3.75zM7.5 5.25v13.5M16.5 5.25v13.5"
          />
        </svg>
      );
    case "license":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      );
    case "parent":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 21V8.25m0 0L12 3l9.75 5.25M2.25 8.25l9.75 5.25 9.75-5.25M21.75 8.25V21M9.75 21V13.5h4.5V21"
          />
        </svg>
      );
    case "foothill":
    default:
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 19.5 9 11l4 4 3-4 5 8.5"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 19.5h18"
          />
        </svg>
      );
  }
}
