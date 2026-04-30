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

const PATH = "/tub-to-shower-conversion-auburn-ca";

export const metadata = buildMetadata({
  title: "Tub-to-Shower Conversion Auburn CA | Auburn Bath",
  description:
    "Convert your old bathtub into a modern walk-in shower with Auburn Bath. Serving Auburn, North Auburn, Meadow Vista, Newcastle, and nearby areas.",
  path: PATH,
});

const faqs = [
  {
    q: "Will I lose home value by removing my only tub?",
    a: "If your home has at least one other tub somewhere in the house, removing an unused tub usually has neutral or positive impact — most buyers prefer a great walk-in shower in the primary bath. If your home would be left without any tub, we'll talk through tradeoffs first.",
  },
  {
    q: "How long does a tub-to-shower conversion take?",
    a: "Most conversions run two to three weeks of active work. The schedule depends on plumbing rerouting, tile complexity, and whether the surrounding flooring or vanity is being touched as well.",
  },
  {
    q: "Can you keep the existing footprint?",
    a: "Often yes. Many tub-to-shower conversions stay within the original tub footprint, which simplifies plumbing and waterproofing. Sometimes we extend slightly into the room for a more comfortable shower — we'll show you both options during design.",
  },
  {
    q: "What about accessibility?",
    a: "Conversions are a natural fit for aging in place. Low-threshold or curbless entries, built-in benches, and grab-bar blocking can all be planned in without making the shower look clinical.",
  },
];

export default function Page() {
  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs
          trail={[
            { name: "Home", href: "/" },
            { name: "Tub-to-Shower Conversion Auburn CA", href: PATH },
          ]}
        />
      </Container>
      <Hero
        eyebrow="Tub-to-Shower"
        title="Tub-to-Shower Conversion Auburn CA"
        description="Replace an outdated or unused tub with a clean, modern walk-in shower. Built for Auburn primary baths, guest bathrooms, and aging-in-place upgrades."
        imageSlug="tub-hero"
        imageAlt="Tub-to-shower conversion in Auburn, CA — primary bathroom rebuilt with sage stone tile, low threshold, and frameless glass walk-in shower"
      />

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why convert"
              title="The unused tub is one of the most common bathroom design problems."
              description="In a lot of Auburn homes, the primary bath tub never gets used — but it takes up the best wall in the room. A conversion reclaims that space."
            />
          </div>
          <div className="prose-local lg:col-span-7">
            <p>
              When a tub becomes a place to set laundry baskets and bottles
              of dust, it's costing you the most valuable real estate in
              the bathroom. Replacing it with a properly designed walk-in
              shower changes how the room is used every day — better
              showers, more usable square footage, and a much cleaner
              look.
            </p>
            <p>
              Most Auburn homeowners we work with want one or two of these
              upgrades together: a wider walk-in entry, a curbless or
              low-threshold floor, a built-in bench, a hidden niche, and
              clear frameless glass. We tailor the combination to the room
              and to how you actually use the bathroom.
            </p>
            <p>
              Conversions are also one of the smarter moves for staying
              put as life changes. A well-designed low-step shower works
              for kids today and aging knees later — without ever looking
              like a hospital.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-sand">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <ImagePlaceholder
            slug="tub-conversion"
            alt="Low-threshold tub-to-shower conversion in Auburn, CA with sage stone tile, built-in shower bench, and frameless glass door"
            ratio="5/4"
            tone="sage"
          />
          <div>
            <SectionHeading
              eyebrow="What's involved"
              title="More than swapping fixtures."
            />
            <div className="prose-local mt-6">
              <ul>
                <li>
                  Demo of the tub, surround, and any compromised subfloor
                </li>
                <li>
                  Plumbing rework — moving the drain, valve, and supply
                  lines for the new shower layout
                </li>
                <li>
                  Bonded waterproofing system over the new shower pan and
                  walls
                </li>
                <li>Tile installation, glass enclosure, and trim out</li>
                <li>
                  New ventilation, lighting, and outlets where they make
                  sense
                </li>
                <li>Final walkthrough and sealing</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Layout choices"
              title="Three common Auburn conversion layouts."
            />
            <div className="prose-local mt-6">
              <p>
                <strong>Footprint-for-footprint replacement.</strong> The
                simplest and most common option — the new shower stays
                inside the original tub footprint. Plumbing changes are
                contained, and the room reads cleaner immediately.
              </p>
              <p>
                <strong>Extended walk-in.</strong> When the wall opposite the
                tub allows it, we push the shower a foot or two further
                into the room for a more comfortable bathing space and a
                bench. This is our most-requested option in primary
                bathrooms.
              </p>
              <p>
                <strong>Curbless wet-room.</strong> The shower opens
                directly into the rest of the bathroom with no curb, sloped
                to a linear drain. Stunning, accessible, and the most
                involved on the waterproofing side.
              </p>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="What we plan around"
              title="The hidden details that make a conversion last."
            />
            <div className="prose-local mt-6">
              <p>
                <strong>Subfloor condition.</strong> Tubs hide a lot. We
                often find compromised subfloor under old fiberglass tubs
                — that gets replaced or reinforced before any new
                waterproofing goes down.
              </p>
              <p>
                <strong>Drain relocation.</strong> Moving a drain a few
                inches changes the joist and pipe layout below. We map
                that during design so demo day doesn't surprise anyone.
              </p>
              <p>
                <strong>Vent and light upgrades.</strong> Many older Auburn
                bathrooms vent into the attic instead of outside, or have
                no vent at all. A conversion is the right time to fix it,
                along with adding shower-rated lighting if needed.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-sage-light/45">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Materials & systems we use"
              title="The systems behind a conversion that lasts."
              description="Specific brands and methods. The materials decide whether the shower performs in five years."
            />
          </div>
          <div className="prose-local lg:col-span-7">
            <h3>Subfloor + framing</h3>
            <p>
              Conversions often expose compromised subfloor under the old
              tub. Our default repair: replace down to the joists with{" "}
              <strong>3/4&Prime; tongue-and-groove plywood</strong>{" "}
              fastened with construction adhesive plus screws. We
              reinforce or sister joists where rot has reduced bearing
              capacity before any new pan goes down.
            </p>
            <h3>Waterproofing</h3>
            <p>
              <strong>Schluter Kerdi</strong> bonded sheet membrane on
              the walls and pan, lapped properly into the drain flange.
              For curbless conversions, <strong>Schluter Kerdi-Shower
              ST</strong> pre-sloped trays sized to the new opening, set
              into a recessed subfloor so the floor surface stays
              continuous.
            </p>
            <h3>Drains + thresholds</h3>
            <p>
              <strong>Schluter Kerdi-Line</strong> linear drains for
              modern conversions; standard 2&Prime; center drains where
              the layout calls for it. Threshold options range from a
              clean curbless approach to a 1-2&Prime; low-threshold
              built up with mortar-bed and tile, depending on subfloor
              condition and accessibility needs.
            </p>
            <h3>Plumbing rework</h3>
            <p>
              We move the valve, rough-in, and drain to fit the new
              shower layout. Where original galvanized supply is
              encountered, we replace with PEX up to the manifold while
              the wall is already open — it's the right time, and it
              avoids a callback five years later.
            </p>
            <h3>Tile + fixtures</h3>
            <p>
              Stone-look porcelain in 12×24 or 24×48 large-format on
              walls, with a smaller mosaic on the shower floor for slip
              resistance. <strong>Brizo</strong>, higher-tier{" "}
              <strong>Kohler</strong>, or <strong>California Faucets</strong>{" "}
              for valves and trim — replaceable cartridges, solid brass.
              Frameless 3/8&Prime; or 1/2&Prime; low-iron glass with CRL
              hinges.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="What can go wrong"
              title="The mistakes that turn a conversion into a callback."
            />
          </div>
          <div className="prose-local lg:col-span-7">
            <p>
              Conversions fail in predictable ways. Skipping any of these
              is what causes a homeowner to call a different contractor
              two years later.
            </p>
            <ul>
              <li>
                <strong>Subfloor not assessed at demo.</strong> If the
                old tub leaked even slowly, the wood under it is usually
                compromised — and any new waterproofing on a soft
                subfloor moves and fails.
              </li>
              <li>
                <strong>Drain offset improperly relocated.</strong> A drain
                moved a few inches needs the joist layout below to be
                planned for it. Routing through a joist instead of around
                it weakens framing and risks leaks.
              </li>
              <li>
                <strong>Curbless threshold without a recessed subfloor.</strong>{" "}
                If the shower floor isn't recessed below the surrounding
                floor, water has nowhere to slope to and finds its way
                out.
              </li>
              <li>
                <strong>Original supply lines kept in place.</strong>{" "}
                Galvanized pipes lose internal diameter over decades.
                Patching new shower work onto failing supply just delays
                the next problem.
              </li>
              <li>
                <strong>Vent fan vented into the attic.</strong> A
                conversion is the right time to vent the fan exterior —
                doing it later means opening the wall again.
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Related"
            title="Plan ahead with the rest of your bathroom."
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
                Modern, low-step walk-in shower designs.
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
                Custom tile showers, glass, niches, and waterproofing.
              </p>
            </Link>
            <Link
              href="/bathroom-remodeling-cost-auburn-ca"
              className="rounded-[var(--radius-card)] border border-line/80 bg-cream p-6 hover:border-forest/40"
            >
              <span className="font-display text-lg text-soft-black">
                Cost Guide
              </span>
              <p className="mt-2 text-sm text-muted">
                Tub-to-shower conversion pricing factors.
              </p>
            </Link>
          </div>
        </Container>
      </section>

      <ServiceAreasGrid />
      <FAQSection items={faqs} />
      <CTASection
        title="Replace that unused tub with a clean walk-in shower."
        description="Send a quick note and we'll talk through whether a conversion makes sense for your bathroom — and what it would actually look like."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          serviceSchema({
            name: "Tub-to-Shower Conversion",
            description:
              "Tub-to-shower conversion in Auburn, CA — replace an outdated bathtub with a modern walk-in shower, custom tile, and a low-threshold or curbless entry.",
            path: PATH,
          })
        )}
      />
    </>
  );
}
