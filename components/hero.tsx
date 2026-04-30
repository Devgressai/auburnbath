import Link from "next/link";

import { site } from "@/lib/site";
import { Container } from "./container";
import { ImagePlaceholder } from "./image-placeholder";

export function Hero({
  eyebrow,
  title,
  description,
  trustLine = site.trustLine,
  imageSlug,
  imageAlt = "Modern green-toned bathroom remodel in an Auburn, CA home with stone tile shower and warm wood vanity",
  imageCaption = "A calm, foothill-inspired bathroom palette",
  primaryHref = "/contact",
  primaryLabel = "Get Free Quote",
}: {
  eyebrow?: string;
  title: string;
  description: string;
  trustLine?: string;
  imageSlug?: string;
  imageAlt?: string;
  imageCaption?: string;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-48 mx-auto h-[520px] max-w-5xl bg-[radial-gradient(60%_60%_at_50%_50%,rgba(122,158,142,0.22),transparent_70%)]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-[20%] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(214,195,163,0.18),transparent_70%)]"
      />
      <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-12 lg:gap-14 lg:py-24">
        <div className="lg:col-span-7 lg:pr-6">
          {eyebrow ? <span className="eyebrow mb-5">{eyebrow}</span> : null}
          <h1 className="font-display text-[2.6rem] leading-[1.04] text-soft-black sm:text-5xl lg:text-[clamp(3rem,5.4vw,4rem)]">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">
            {description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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
              <Phone />
              Call {site.phone}
            </a>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted">
            {trustLine.split("|").map((piece, idx) => (
              <span key={idx} className="inline-flex items-center gap-2">
                {idx > 0 ? (
                  <span
                    aria-hidden
                    className="h-1 w-1 rounded-full bg-sage/70"
                  />
                ) : null}
                <span className="leading-5">{piece.trim()}</span>
              </span>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="relative">
            <ImagePlaceholder
              slug={imageSlug}
              alt={imageAlt}
              caption={imageCaption}
              ratio="5/4"
              tone="forest"
              priority
              sizes="(min-width: 1024px) 540px, 100vw"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-4 -left-4 hidden h-20 w-20 rounded-full bg-sage-light sm:block"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -top-4 -right-4 hidden h-16 w-16 rounded-full border border-stone-warm/40 sm:block"
            />
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

function Phone() {
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
