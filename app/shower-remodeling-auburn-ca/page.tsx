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
        imageAlt="Shower remodeling in Auburn, CA — custom walk-in tile shower with frameless low-iron glass, linear drain, and sage stone tile"
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
            alt="Sage stone-tile walk-in shower remodel with built-in niche and frameless glass in an Auburn, CA bathroom"
            ratio="5/4"
            tone="forest"
          />
        </Container>
      </section>

      <section className="py-16 bg-sage-light/45">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Materials & systems we actually use"
              title="What's behind the tile matters more than the tile."
              description="Specific brands, specific systems. We're happy to talk through alternatives — these are our defaults because they hold up."
            />
          </div>
          <div className="prose-local lg:col-span-7">
            <h3>Waterproofing</h3>
            <p>
              <strong>Schluter Kerdi</strong> bonded sheet membranes are
              our default for tile shower walls and pans. For curbless or
              pre-sloped pans, we use Schluter Kerdi-Shower trays sized to
              the room. On rebuilds where a fully bonded sheet membrane
              isn't practical, we'll fall back to <strong>RedGard</strong>{" "}
              or <strong>Hydro Ban</strong> liquid-applied membranes,
              applied at the manufacturer-specified mil thickness with
              full corner detailing.
            </p>
            <h3>Drains</h3>
            <p>
              <strong>Schluter Kerdi-Line</strong> linear drains with
              tile-in covers for curbless and modern walk-in showers;{" "}
              <strong>Infinity Drain</strong> for higher-end specifications
              where the cover finish needs to match a specific hardware
              line. Standard center drains where the layout calls for it,
              always with the membrane lapped properly into the drain
              flange.
            </p>
            <h3>Tile</h3>
            <p>
              For most Auburn projects we lean into stone-look porcelain
              in 12×24 or 24×48 large-format — durable, low-maintenance,
              forgiving in foothill humidity. Lines we've returned to
              repeatedly: <strong>MSI Surface Group</strong>{" "}
              (stone-look ranges), <strong>Daltile</strong>,{" "}
              <strong>Florida Tile</strong>, and{" "}
              <strong>Bedrosians</strong> for hand-glazed and zellige
              accents.
            </p>
            <h3>Glass</h3>
            <p>
              <strong>3/8&Prime; low-iron</strong> glass for panels up to
              about 36&Prime;; <strong>1/2&Prime;</strong> for wider
              panels and door spans. We seal edges and use sturdy hinges
              (CRL or equivalent), with a hydrophobic coating in
              hard-water areas to slow mineral spotting. Frameless is the
              default; semi-frameless when a tight enclosure or layout
              quirk calls for it.
            </p>
            <h3>Fixtures</h3>
            <p>
              <strong>Brizo</strong>, higher-tier{" "}
              <strong>Kohler</strong>, <strong>California Faucets</strong>,{" "}
              <strong>Riobel</strong>, and <strong>Rohl</strong> for
              brass and quality plated finishes — all with replaceable
              cartridges and ceramic discs. Pressure-balanced or
              thermostatic valves where the home's plumbing pressure
              warrants it.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="What can go wrong"
              title="Most failed showers fail in the same five places."
            />
          </div>
          <div className="prose-local lg:col-span-7">
            <p>
              When we open up a shower that's failed within ten years of
              install, the same five mistakes show up over and over. None
              of them are about tile pattern.
            </p>
            <ul>
              <li>
                <strong>Improperly lapped membrane corners.</strong> The
                walls and pan need to be tied together with overlapping
                waterproofing — water finds the smallest gap.
              </li>
              <li>
                <strong>Pan not bonded to the drain flange.</strong>{" "}
                Without a proper bond, water runs sideways under the tile.
              </li>
              <li>
                <strong>Slope too shallow toward the drain.</strong> 1/4
                inch per foot is the minimum; we pour 1/4 to 3/8 so water
                has somewhere to actually go.
              </li>
              <li>
                <strong>Niches set without back-pan waterproofing.</strong>{" "}
                The niche is a five-sided box — every face needs the
                membrane.
              </li>
              <li>
                <strong>Underpowered or improperly vented exhaust fan.</strong>{" "}
                Humidity that sits against grout for years degrades it
                regardless of how well the membrane was installed.
              </li>
            </ul>
            <p>
              We treat all five as non-negotiable. The bathroom you can't
              see is what makes the bathroom you can see hold up.
            </p>
          </div>
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
