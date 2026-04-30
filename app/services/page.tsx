import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { PageHeader } from "@/components/page-header";
import { jsonLdScript } from "@/lib/schema";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

const PATH = "/services";

export const metadata = buildMetadata({
  title: "Bathroom Remodeling Services in Auburn, CA | Auburn Bath",
  description:
    "Bathroom remodeling, shower remodeling, walk-in showers, and tub-to-shower conversions for Auburn and Placer County homes — by a bathroom-only crew.",
  path: PATH,
});

const primaryServices = [
  {
    title: "Bathroom Remodeling",
    href: "/services/bathroom-remodeling",
    blurb:
      "Full primary, guest, and powder room remodels — layout, plumbing, tile, vanities, lighting, and finish. Custom design, durable systems.",
    imageSlug: "bath-hero",
  },
  {
    title: "Shower Remodeling",
    href: "/services/shower-remodeling",
    blurb:
      "Custom tile showers, frameless glass, niches, benches, linear drains, and bonded waterproofing built to last decades.",
    imageSlug: "shower-hero",
  },
  {
    title: "Tub-to-Shower Conversions",
    href: "/services/tub-to-shower",
    blurb:
      "Replace an unused or outdated tub with a modern walk-in shower — curbless, low-threshold, or footprint-for-footprint.",
    imageSlug: "tub-hero",
  },
  {
    title: "Walk-In Showers",
    href: "/services/walk-in-showers",
    blurb:
      "Curbless and low-threshold walk-in showers with frameless low-iron glass, large-format tile, and architectural detailing.",
    imageSlug: "walkin-hero",
  },
] as const;

export default function Page() {
  // ItemList JSON-LD for the services index — helps Google understand
  // this is a hub page connecting multiple offerings.
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Auburn Bath services",
    itemListElement: primaryServices.map((s, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `${site.url}${s.href}`,
      name: s.title,
    })),
  };

  return (
    <>
      <div className="bg-cream">
        <div className="mx-auto w-full max-w-6xl px-5 pt-6 sm:px-8">
          <Breadcrumbs
            trail={[
              { name: "Home", href: "/" },
              { name: "Services", href: PATH },
            ]}
          />
        </div>
      </div>

      <PageHeader
        eyebrow="Services"
        title="Bathroom remodeling services for Auburn and the foothills."
        description="Four core services, each handled by a bathroom-focused crew. Every project starts with a free in-home consultation and a clear, line-item written estimate."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {primaryServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group card flex h-full flex-col overflow-hidden p-0"
              >
                <ImagePlaceholder
                  slug={s.imageSlug}
                  alt={`${s.title} — Auburn Bath project example`}
                  ratio="4/3"
                  tone="sage"
                  sizes="(min-width: 1024px) 540px, (min-width: 640px) 50vw, 100vw"
                  className="!rounded-none !border-0 !shadow-none"
                />
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h2 className="font-display text-xl text-soft-black sm:text-2xl">
                    <span className="bg-[linear-gradient(currentColor,currentColor)] bg-no-repeat bg-bottom bg-[length:0%_1px] pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
                      {s.title}
                    </span>
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted">{s.blurb}</p>
                  <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-forest">
                    Explore service
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12l-7.5 7.5M3 12h18"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-sand">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="eyebrow">Cost & timing</span>
            <h2 className="mt-3 font-display text-2xl text-soft-black sm:text-[1.85rem]">
              The numbers + the schedule, in plain language.
            </h2>
          </div>
          <div className="prose-local lg:col-span-7">
            <p>
              Most homeowners ask the same two questions first: what does
              it cost, and how long does it take? Both answers are
              project-specific, but we&apos;ve published deeper write-ups
              on each so you can plan with realistic expectations.
            </p>
            <ul>
              <li>
                <Link href="/services/cost-guide">Cost guide for Auburn bathroom remodels</Link>{" "}
                — typical starting ranges by project type, what drives
                pricing, why we share line-item estimates after a
                walkthrough.
              </li>
              <li>
                <Link href="/blog/how-long-does-a-bathroom-remodel-take-auburn-ca">
                  Realistic bathroom remodel timeline
                </Link>{" "}
                — week-by-week build cadence, what extends timelines, how
                we plan around material lead times.
              </li>
              <li>
                <Link href="/blog/placer-county-bathroom-remodel-permits">
                  Placer County permit guide
                </Link>{" "}
                — what permits a bathroom remodel needs in our area, what
                gets inspected when, and why permitted work matters for
                resale.
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <CTASection
        title="Plan your Auburn bathroom remodel."
        description="Tell us about your space — we'll set up a free in-home consultation and walk through scope, timeline, and pricing in person."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(itemList)}
      />
    </>
  );
}
