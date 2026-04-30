import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { FAQSection } from "@/components/faq-section";
import { Hero } from "@/components/hero";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { SectionHeading } from "@/components/section-heading";
import { ServiceAreasGrid } from "@/components/service-areas";
import { jsonLdScript, serviceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/shower-remodeling-auburn-ca";

export const metadata = buildMetadata({
  title: "Shower Remodeling Auburn CA | Custom Walk-In Showers",
  description:
    "Upgrade your bathroom with custom shower remodeling in Auburn, CA. Walk-in showers, tile showers, waterproofing, glass enclosures, and more.",
  path: PATH,
});

const faqs = [
  {
    q: "How long does a shower remodel take in Auburn?",
    a: "Most custom shower remodels run two to four weeks of active build time, plus a tile-cure period before sealing. Schedule depends on tile complexity, plumbing changes, and glass lead times.",
  },
  {
    q: "What kind of tile holds up best in Auburn bathrooms?",
    a: "Porcelain tile (especially stone-look porcelain) tends to be our default — it's harder than natural stone, more stain-resistant, and forgiving in homes with humidity swings. We still use natural stone for accents where the look really matters.",
  },
  {
    q: "Curb or curbless?",
    a: "Curbless walk-in showers feel more open and modern, and they're great for accessibility. They require careful subfloor and waterproofing work, which is why we plan them carefully on older floors. Traditional curbed showers are still a great choice — especially for guest baths.",
  },
  {
    q: "Can you replace just the shower?",
    a: "Yes. Many of our projects are shower-only remodels: rebuild the shower, leave the rest of the bathroom alone. We'll be honest if we think a wider remodel makes more sense given the existing layout.",
  },
];

export default function Page() {
  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs
          trail={[
            { name: "Home", href: "/" },
            { name: "Shower Remodeling Auburn CA", href: PATH },
          ]}
        />
      </Container>
      <Hero
        eyebrow="Shower Remodeling"
        title="Shower Remodeling Auburn CA"
        description="Custom tile showers, walk-in showers, glass enclosures, and modern waterproofing built for Auburn and Placer County homes."
        imageSlug="shower-hero"
        imageAlt="Custom walk-in tile shower remodel in Auburn CA with frameless glass and warm sage stone"
      />

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="What we build"
              title="Showers designed for daily use, not the showroom."
              description="A great shower has to look right and work right — every day, for years. Our designs balance both."
              as="h2"
            />
          </div>
          <div className="prose-local lg:col-span-7">
            <h3>Custom tile showers</h3>
            <p>
              Tile is the foundation of most of our shower remodels. We work
              in stone-look porcelain, large-format slabs, classic subway,
              hand-glazed zellige, and quiet patterned floors. Layout
              decisions — niche placement, accent walls, ceiling tile —
              happen during design, not on the fly.
            </p>
            <h3>Glass enclosures</h3>
            <p>
              Frameless low-iron glass is our standard. It feels invisible,
              shows the tile, and keeps the bathroom feeling open. Clear,
              fluted, and lightly textured glass are all options depending
              on the look you want.
            </p>
            <h3>Niches, benches, and curbless thresholds</h3>
            <p>
              Built-in niches keep counters clear. A small built-in bench
              changes how a shower is used — for shaving, for kids, for
              older family members. Curbless walk-in entries simplify the
              look and improve accessibility.
            </p>
            <h3>Waterproofing systems</h3>
            <p>
              We use bonded waterproofing membranes (sheet or liquid) over
              the substrate before tile, with proper drain integration and
              corner detailing. This is the layer no one ever sees — and
              the one that determines whether the shower lasts.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-sand">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Why Auburn showers fail early"
              title="It's almost never the tile."
            />
            <div className="prose-local mt-6">
              <p>
                When we open up a failed Auburn shower, we usually find one
                of three issues: missing or improperly lapped waterproofing,
                a shower pan that wasn't bonded to the drain correctly, or
                an underpowered exhaust fan that let humidity sit against
                grout for years.
              </p>
              <p>
                Our rebuilds focus on the parts you can't see. By the time
                we set the first tile, the system underneath is already
                doing its job — that's what makes the finished shower hold
                up.
              </p>
            </div>
          </div>
          <ImagePlaceholder
            slug="shower-stone"
            alt="Stone tile walk-in shower with niche and frameless glass in an Auburn CA home"
            caption="Stone-tile walk-in, Auburn foothills"
            ratio="5/4"
            tone="forest"
          />
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Related services"
            title="Pair your shower remodel with the rest of the bathroom."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/walk-in-showers-auburn-ca"
              className="rounded-[var(--radius-card)] border border-line/80 bg-cream p-6 hover:border-forest/40"
            >
              <span className="font-display text-lg text-soft-black">
                Walk-In Showers
              </span>
              <p className="mt-2 text-sm text-muted">
                Curbless and low-threshold walk-in shower designs.
              </p>
            </Link>
            <Link
              href="/tub-to-shower-conversion-auburn-ca"
              className="rounded-[var(--radius-card)] border border-line/80 bg-cream p-6 hover:border-forest/40"
            >
              <span className="font-display text-lg text-soft-black">
                Tub-to-Shower
              </span>
              <p className="mt-2 text-sm text-muted">
                Replace a tub with a modern walk-in shower.
              </p>
            </Link>
            <Link
              href="/bathroom-remodeling-auburn-ca"
              className="rounded-[var(--radius-card)] border border-line/80 bg-cream p-6 hover:border-forest/40"
            >
              <span className="font-display text-lg text-soft-black">
                Full Bathroom Remodels
              </span>
              <p className="mt-2 text-sm text-muted">
                Complete primary and guest bathroom remodels.
              </p>
            </Link>
          </div>
        </Container>
      </section>

      <ServiceAreasGrid />
      <FAQSection items={faqs} />
      <CTASection
        variant="sage"
        title="Get a custom shower remodel quote for your Auburn home."
        description="Tell us about your existing shower — size, layout, what's failing, and the look you have in mind. We'll plan a build that holds up."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          serviceSchema({
            name: "Shower Remodeling",
            description:
              "Custom shower remodeling in Auburn, CA — tile showers, walk-in showers, glass enclosures, and durable waterproofing systems.",
            path: PATH,
          })
        )}
      />
    </>
  );
}
