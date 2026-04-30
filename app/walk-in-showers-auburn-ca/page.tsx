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

const PATH = "/walk-in-showers-auburn-ca";

export const metadata = buildMetadata({
  title: "Walk-In Showers Auburn CA | Custom Shower Installation",
  description:
    "Custom walk-in showers for Auburn, CA homeowners. Modern designs, durable waterproofing, tile, glass doors, and free estimates.",
  path: PATH,
});

const faqs = [
  {
    q: "Do walk-in showers work in small bathrooms?",
    a: "Yes — and small bathrooms often benefit the most. A frameless glass walk-in shower visually opens the space and removes a hard tub edge that's been making the room feel cramped.",
  },
  {
    q: "What's the difference between curbless and low-threshold?",
    a: "Curbless showers have a continuous floor with no step at all, sloped subtly to a linear drain. Low-threshold showers have a small (1–2 inch) curb. Curbless is sleeker and better for accessibility but needs careful subfloor planning. Low-threshold is more forgiving in older homes.",
  },
  {
    q: "How wide should a walk-in shower be?",
    a: "We typically design walk-in showers between 36 and 60 inches wide, depending on the bathroom and how you use it. Wider showers feel more spa-like; narrower ones can still be excellent if the layout is right.",
  },
  {
    q: "Will I need to upgrade plumbing for a walk-in shower?",
    a: "Often, yes. Older Auburn homes sometimes have undersized supply lines or drain configurations that don't suit a modern shower. We plan plumbing changes during design so the finished shower performs the way it should.",
  },
];

export default function Page() {
  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs
          trail={[
            { name: "Home", href: "/" },
            { name: "Walk-In Showers Auburn CA", href: PATH },
          ]}
        />
      </Container>
      <Hero
        eyebrow="Walk-In Showers"
        title="Walk-In Showers Auburn CA"
        description="Custom walk-in shower installation across Auburn and the Placer County foothills — clean lines, durable waterproofing, and a calm, premium feel."
        imageSlug="walkin-hero"
        imageAlt="Walk-in shower in Auburn, CA — curbless sage stone tile floor, linear drain, frameless glass enclosure, and rain-head shower fixture"
      />

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="What makes a walk-in shower right"
              title="It's the small decisions that make it feel finished."
              description="A great walk-in shower is more than removing a curb. It's the way the floor pitches, where the niche lands, how the glass meets the tile, and how the light falls in the morning."
            />
          </div>
          <div className="prose-local lg:col-span-7">
            <h3>Curbless walk-in showers</h3>
            <p>
              Curbless showers use a slightly recessed subfloor and a linear
              drain to send water exactly where it should go. Done right,
              they're stunning and accessible. Done wrong, they leak. We
              design and waterproof them carefully so they perform.
            </p>
            <h3>Low-threshold walk-ins</h3>
            <p>
              A small one- to two-inch curb is a great compromise — it's
              forgiving on older subfloors, simpler to waterproof, and still
              looks clean with frameless glass. Most of our Auburn primary
              bath walk-in showers fall here.
            </p>
            <h3>Frameless glass enclosures</h3>
            <p>
              Frameless low-iron glass is what makes the tile do the
              talking. We size, shim, and seal these so the door swings
              cleanly for years and the panels feel as solid on day three
              hundred as they did on day one.
            </p>
            <h3>Built-in benches and niches</h3>
            <p>
              A bench changes how a shower is used. A niche keeps counters
              clear. Both should be detailed so they look intentional, not
              tacked on.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-sand">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <ImagePlaceholder
            slug="walkin-curbless"
            alt="Curbless walk-in shower with frameless glass, linear drain, and large-format sage stone tile in an Auburn, CA primary bathroom"
            ratio="5/4"
            tone="forest"
          />
          <div>
            <SectionHeading
              eyebrow="Common Auburn use cases"
              title="Where walk-in showers tend to shine."
            />
            <div className="prose-local mt-6">
              <ul>
                <li>
                  Primary bath upgrades replacing tight enclosed showers
                </li>
                <li>
                  Tub-to-shower conversions in unused primary baths
                </li>
                <li>
                  Aging-in-place updates that need to feel premium, not
                  clinical
                </li>
                <li>
                  Guest baths in newer homes where buyers value style and
                  function equally
                </li>
                <li>
                  Vacation homes around Lake of the Pines that need
                  low-maintenance finishes
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-sage-light/45">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Materials & systems we use"
              title="What makes a curbless walk-in actually work."
              description="The systems and materials we default to for walk-in showers — these decide whether the floor stays level and the water stays in the shower."
            />
          </div>
          <div className="prose-local lg:col-span-7">
            <h3>Recessed subfloor + tray</h3>
            <p>
              Curbless walk-ins need the shower floor recessed below the
              surrounding bathroom floor so the slope to the drain
              actually moves water. Our default: cut down the subfloor by
              1.5–2&Prime; over the shower footprint, sister joists where
              needed, and set a <strong>Schluter Kerdi-Shower ST</strong>{" "}
              pre-sloped tray. For low-threshold (non-curbless) builds we
              pour a sloped mud bed.
            </p>
            <h3>Waterproofing</h3>
            <p>
              <strong>Schluter Kerdi</strong> bonded sheet membrane on
              walls, pan, and curb (when present), with corner pieces and
              proper drain-flange integration. Where a sheet membrane
              isn't practical, <strong>Hydro Ban</strong> or{" "}
              <strong>RedGard</strong> liquid-applied at full
              manufacturer mil thickness with two coats minimum and full
              corner detailing.
            </p>
            <h3>Linear drain</h3>
            <p>
              <strong>Schluter Kerdi-Line</strong> with a tile-in cover so
              the floor reads as a continuous tile plane. Wall-side
              placement (against the back wall) typically gives the
              cleanest visual; center-line placement works when the
              layout calls for it. <strong>Infinity Drain</strong> for
              high-end specifications where a specific finish needs to
              match.
            </p>
            <h3>Glass — sizing matters</h3>
            <p>
              <strong>3/8&Prime; low-iron glass</strong> for fixed panels
              up to about 36&Prime; wide; <strong>1/2&Prime;</strong> for
              wider panels and door spans. Frameless is our default.
              Hinges by <strong>CRL</strong> or equivalent. We seal
              vertical glass-to-tile transitions with clear silicone
              rather than relying on gravity alone.
            </p>
            <h3>Fixtures + benches</h3>
            <p>
              <strong>Brizo</strong>, higher-tier{" "}
              <strong>Kohler</strong>, <strong>California Faucets</strong>,{" "}
              <strong>Riobel</strong>, or <strong>Rohl</strong> for
              valves and trim. Built-in benches: framed in pressure-
              treated lumber, bonded with the same membrane system as
              the walls and pan, tiled to match.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="What can go wrong"
              title="Why most curbless walk-ins fail."
            />
          </div>
          <div className="prose-local lg:col-span-7">
            <p>
              Curbless walk-ins are the most-elegant shower style and
              also the most-failure-prone when poorly built. The same
              issues come up over and over in failed installs.
            </p>
            <ul>
              <li>
                <strong>Subfloor not recessed.</strong> If the shower
                floor isn't physically lower than the surrounding floor,
                slope alone can't move water — it pools and migrates
                under the tile.
              </li>
              <li>
                <strong>Drain undersized for shower flow rate.</strong>{" "}
                A 2&Prime; drain works for most standard heads; high-
                flow rain heads or two-shower setups need a properly
                sized linear drain so water doesn't back up.
              </li>
              <li>
                <strong>Glass panels sized too thin.</strong> 1/4&Prime;
                glass on a wide panel flexes, fails seals at hinges, and
                eventually breaks. We won't spec under 3/8&Prime; on
                anything load-bearing.
              </li>
              <li>
                <strong>Threshold transition not waterproofed.</strong>{" "}
                The transition between shower floor and bathroom floor
                is where most curbless leaks start. The membrane has to
                continue under the threshold tile.
              </li>
              <li>
                <strong>Bench framing not waterproofed.</strong> A
                built-in bench is essentially a horizontal niche — it
                needs membrane on every face, not just the top.
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Related"
            title="Walk-in shower projects often pair with these."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/tub-to-shower-conversion-auburn-ca"
              className="rounded-[var(--radius-card)] border border-line/80 bg-cream p-6 hover:border-forest/40"
            >
              <span className="font-display text-lg text-soft-black">
                Tub-to-Shower
              </span>
              <p className="mt-2 text-sm text-muted">
                Convert an unused tub into a modern walk-in shower.
              </p>
            </Link>
            <Link
              href="/shower-remodeling-auburn-ca"
              className="rounded-[var(--radius-card)] border border-line/80 bg-cream p-6 hover:border-forest/40"
            >
              <span className="font-display text-lg text-soft-black">
                Shower Remodeling
              </span>
              <p className="mt-2 text-sm text-muted">
                Custom tile showers, glass, and waterproofing.
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
                Studs-out remodels for primary and guest baths.
              </p>
            </Link>
          </div>
        </Container>
      </section>

      <ServiceAreasGrid />
      <FAQSection items={faqs} />
      <CTASection
        variant="sage"
        title="Design a walk-in shower for your Auburn bathroom."
        description="Curbless, low-threshold, large or compact — share your space and we'll plan a walk-in shower that fits the home and the way you use it."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          serviceSchema({
            name: "Walk-In Showers",
            description:
              "Walk-in shower design and installation in Auburn, CA — curbless and low-threshold walk-in showers with frameless glass and durable waterproofing.",
            path: PATH,
          })
        )}
      />
    </>
  );
}
