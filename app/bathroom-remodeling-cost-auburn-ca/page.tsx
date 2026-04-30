import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { FAQSection } from "@/components/faq-section";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { articleSchema, jsonLdScript } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/bathroom-remodeling-cost-auburn-ca";

export const metadata = buildMetadata({
  title: "Bathroom Remodeling Cost Auburn CA | 2026 Local Pricing Guide",
  description:
    "Learn what bathroom remodeling costs in Auburn, CA, including shower remodels, tub-to-shower conversions, tile, labor, and design factors.",
  path: PATH,
});

const faqs = [
  {
    q: "Why won't you give me an exact price online?",
    a: "Because every bathroom is different — square footage, plumbing access, layout changes, tile selection, and finish level all move the number significantly. We'd rather give you a clear, line-item estimate after seeing the space than a fake range that won't hold up.",
  },
  {
    q: "Do you offer financing?",
    a: "We can talk through financing options during your consultation. Many homeowners use a mix of savings, HELOC, or contractor financing through a third-party partner.",
  },
  {
    q: "What drives bathroom remodel costs the most?",
    a: "Labor and tile work are the two biggest line items in most projects. Plumbing changes (especially moving drains), custom shower glass, and high-end fixtures are the next tier. Cosmetic refreshes that keep the layout intact tend to cost the least.",
  },
  {
    q: "Can a less expensive remodel still look premium?",
    a: "Yes — when the design is intentional. A well-planned bathroom with restrained finishes, careful tile choices, and clean tile work can look more expensive than a flashy bathroom built without a plan.",
  },
];

export default function Page() {
  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs
          trail={[
            { name: "Home", href: "/" },
            { name: "Bathroom Remodeling Cost Auburn CA", href: PATH },
          ]}
        />
      </Container>
      <Hero
        eyebrow="Cost Guide"
        title="Bathroom Remodeling Cost in Auburn, CA"
        description="A practical, local breakdown of what bathroom remodels actually cost in Auburn — what drives pricing, what doesn't, and how to plan a project that fits your home."
        imageSlug="cost-hero"
        imageAlt="Layered tile, vanity, and fixture samples used in Auburn bathroom remodel pricing planning"
      />

      <article className="py-16">
        <Container size="narrow" className="prose-local">
          <p>
            Bathroom remodeling pricing in Auburn, CA is genuinely a moving
            target. The same square footage can deliver a clean, durable
            primary bath at one price — or a high-end custom build at three
            times that — depending on layout decisions, finish level, and
            how much existing infrastructure has to change.
          </p>
          <p>
            Below is a practical guide to how we think about pricing,
            written so you can plan your project with realistic
            expectations. Treat the ranges as direction, not promises:
            actual pricing depends on layout, materials, plumbing changes,
            waterproofing needs, tile selection, and project scope.
          </p>

          <h2>Small bathroom remodel cost</h2>
          <p>
            Powder rooms and tight guest baths are the most affordable
            tier. Layout often stays the same; the bulk of the work is new
            finishes, fixtures, lighting, and a properly waterproofed
            shower if there is one. These projects benefit enormously from
            small layout decisions — moving a vanity a few inches, adding a
            niche, or changing a door swing.
          </p>

          <h2>Mid-range bathroom remodel cost</h2>
          <p>
            Most Auburn primary bathrooms fall here. Layout typically gets
            adjusted, the shower is redesigned, the tub is either upgraded
            or removed, the vanity is replaced (often double), and the
            tile, lighting, and ventilation get rebuilt. Expect a real
            schedule, real permits, and finishes selected together rather
            than picked last-minute.
          </p>

          <h2>High-end / custom bathroom remodel cost</h2>
          <p>
            Custom primary baths with significant layout changes — walls
            moved, plumbing rerouted, large-format slab tile, freestanding
            tubs, multi-head showers, integrated lighting, and custom
            millwork — sit at the top of the range. The increase isn't
            just materials: it's the hours of careful design and
            craftsmanship those bathrooms require.
          </p>

          <h2>Shower remodel cost</h2>
          <p>
            Shower-only remodels can be a great value when the rest of the
            bathroom still works. Pricing tracks with shower size, tile
            selection, glass complexity, and whether the surrounding floor
            or walls need waterproofing repair. Custom tile showers with
            niches and frameless glass land in the mid range; large-format
            slab showers and curbless designs sit higher.
          </p>

          <h2>Tub-to-shower conversion cost</h2>
          <p>
            Conversions are usually priced between a shower-only remodel
            and a full bathroom remodel. The cost depends largely on
            plumbing changes, the size of the new walk-in shower, and
            whether you're going curbless or low-threshold. Curbless
            conversions on older floors require more subfloor and
            waterproofing work, which moves the number up.
          </p>

          <h2>Tile and waterproofing factors</h2>
          <p>
            Tile is one of the largest single line items in most bathrooms.
            Smaller mosaic floors and complex patterns take longer to set;
            large-format porcelain takes more careful prep but goes
            faster; natural stone often needs sealing and slab matching.
            Waterproofing — sheet or liquid membranes, properly integrated
            drains, sloped pans — is non-negotiable and worth pricing in
            properly.
          </p>

          <h2>Labor and material variables</h2>
          <p>
            Labor in Auburn reflects the local cost of doing skilled
            craftsmanship correctly: licensed plumbers and electricians
            for code-driven work, tile setters whose work holds up, and
            project supervision so the trades hand off cleanly. Materials
            can swing widely — fixtures alone can range from a few hundred
            dollars to several thousand depending on the brand and finish.
          </p>

          <h2>Plumbing and layout changes</h2>
          <p>
            Moving a drain is rarely a small line item, especially in
            older Auburn homes with cast iron or galvanized plumbing.
            We'll always tell you when a layout change is worth the cost
            — and when it isn't. Sometimes the best move is leaving the
            plumbing where it is and designing around it.
          </p>

          <h2>Why exact pricing requires a quote</h2>
          <p>
            Two bathrooms with identical square footage can have wildly
            different price tags depending on subfloor condition, plumbing
            access, and finish ambitions. Anyone who quotes you an exact
            number without seeing the space is either guessing or
            optimizing for clicks. We'd rather take the time to look,
            measure, and write a real estimate.
          </p>

          <p>
            <Link href="/contact">Request a free consultation</Link> and we'll
            put together a clear, line-item bathroom remodel estimate for
            your Auburn home.
          </p>
        </Container>
      </article>

      <section className="py-16 bg-sand">
        <Container>
          <SectionHeading
            eyebrow="Related"
            title="Plan around the work that actually applies."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/bathroom-remodeling-auburn-ca"
              className="rounded-[var(--radius-card)] border border-line/80 bg-cream p-6 hover:border-forest/40"
            >
              <span className="font-display text-lg text-soft-black">
                Bathroom Remodeling
              </span>
              <p className="mt-2 text-sm text-muted">
                Full bathroom remodels in Auburn.
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
                Custom shower remodels and rebuilds.
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
                Replace an unused tub with a walk-in shower.
              </p>
            </Link>
            <Link
              href="/walk-in-showers-auburn-ca"
              className="rounded-[var(--radius-card)] border border-line/80 bg-cream p-6 hover:border-forest/40"
            >
              <span className="font-display text-lg text-soft-black">
                Walk-In Showers
              </span>
              <p className="mt-2 text-sm text-muted">
                Curbless and low-threshold walk-in showers.
              </p>
            </Link>
          </div>
        </Container>
      </section>

      <FAQSection items={faqs} />
      <CTASection
        title="Get a real number for your Auburn bathroom remodel."
        description="A walkthrough is the only way to give you accurate pricing. Share a few details and we'll set up a free on-site consultation."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          articleSchema({
            headline:
              "Bathroom Remodeling Cost in Auburn, CA: 2026 Local Pricing Guide",
            description:
              "A practical breakdown of what bathroom remodels actually cost in Auburn, CA — factors that drive pricing for full remodels, shower remodels, tub-to-shower conversions, tile, and labor.",
            path: PATH,
            datePublished: "2026-01-15",
          })
        )}
      />
    </>
  );
}
