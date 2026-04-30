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
        className="pointer-events-none absolute inset-x-0 -top-32 mx-auto h-[420px] max-w-5xl bg-[radial-gradient(60%_60%_at_50%_50%,rgba(122,158,142,0.18),transparent_70%)]"
      />
      <Container className="grid gap-10 py-14 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-7 lg:pr-6">
          {eyebrow ? (
            <div className="mb-5 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-forest">
              <span className="h-px w-8 bg-forest/50" aria-hidden />
              {eyebrow}
            </div>
          ) : null}
          <h1 className="font-display text-4xl leading-[1.05] text-soft-black sm:text-5xl lg:text-[3.5rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {primaryHref.startsWith("#") ? (
              <a
                href={primaryHref}
                className="inline-flex items-center justify-center rounded-full bg-forest px-7 py-3 text-sm font-medium text-cream shadow-soft hover:bg-forest-dark"
              >
                {primaryLabel}
              </a>
            ) : (
              <Link
                href={primaryHref}
                className="inline-flex items-center justify-center rounded-full bg-forest px-7 py-3 text-sm font-medium text-cream shadow-soft hover:bg-forest-dark"
              >
                {primaryLabel}
              </Link>
            )}
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center rounded-full border border-forest/25 bg-cream px-7 py-3 text-sm font-medium text-forest hover:bg-sage-light"
            >
              Call {site.phone}
            </a>
          </div>
          <p className="mt-6 max-w-lg text-xs leading-5 text-muted">
            {trustLine}
          </p>
        </div>
        <div className="lg:col-span-5">
          <ImagePlaceholder
            slug={imageSlug}
            alt={imageAlt}
            caption={imageCaption}
            ratio="5/4"
            tone="forest"
            priority
            sizes="(min-width: 1024px) 540px, 100vw"
          />
        </div>
      </Container>
    </section>
  );
}
