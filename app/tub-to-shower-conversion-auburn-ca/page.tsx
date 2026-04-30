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
