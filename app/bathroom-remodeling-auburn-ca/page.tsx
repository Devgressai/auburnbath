import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { FAQSection } from "@/components/faq-section";
import { Hero } from "@/components/hero";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { ProcessSteps } from "@/components/process-steps";
import { SectionHeading } from "@/components/section-heading";
import { ServiceAreasGrid } from "@/components/service-areas";
import { jsonLdScript, serviceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/bathroom-remodeling-auburn-ca";

export const metadata = buildMetadata({
  title: "Bathroom Remodeling Auburn CA | Local Bathroom Remodel Contractor",
  description:
    "Planning a bathroom remodel in Auburn, CA? Auburn Bath designs and builds custom bathrooms, showers, tile upgrades, and modern remodels for Placer County homes.",
  path: PATH,
});

const faqs = [
  {
    q: "How long does a full bathroom remodel take in Auburn?",
    a: "Most full bathroom remodels we do in Auburn take roughly three to six weeks of active work after demo, depending on layout changes, tile complexity, and material lead times. We share a project schedule before starting so you know what to expect each week.",
  },
  {
    q: "Do you handle plumbing and electrical changes during the remodel?",
    a: "Yes. Bathroom remodels almost always involve some plumbing and electrical work — relocating drains, adjusting supply lines, adding GFCI circuits, upgrading lighting, ventilation, and outlets. Our crew handles those changes alongside the finish work.",
  },
  {
    q: "Can you keep my home livable during the remodel?",
    a: "We protect floors, isolate the work zone with dust barriers, and keep the rest of the home livable. If yours is a single-bath household, we'll talk through scheduling so you have a workable bathing plan during the build.",
  },
  {
    q: "Do I need permits for a bathroom remodel in Auburn?",
    a: "Most bathroom remodels that involve plumbing, electrical, or layout changes require permits in Placer County. We pull permits and coordinate inspections so the project meets current code and is documented properly for resale down the road.",
  },
  {
    q: "What styles do you work in?",
    a: "We design across a wide range — modern foothill spa, transitional, warm-modern, classic farmhouse, and clean-line contemporary. Our most-requested look right now is calm and green-toned: sage walls, stone tile, warm wood vanities, and soft brass or matte black hardware.",
  },
];

export default function Page() {
  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs
          trail={[
            { name: "Home", href: "/" },
            { name: "Bathroom Remodeling Auburn CA", href: PATH },
          ]}
        />
      </Container>
      <Hero
        eyebrow="Bathroom Remodeling"
        title="Bathroom Remodeling Auburn CA"
        description="Custom bathroom remodels in Auburn, CA — full primary baths, guest bathrooms, and powder rooms designed and built with foothill homes in mind."
        imageSlug="bath-hero"
        imageAlt="Custom bathroom remodel in Auburn, CA — sage-toned tile shower, freestanding tub, double rift oak vanity, and brushed brass hardware"
        imageCaption="Custom Auburn primary bath remodel"
      />

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="What we remodel"
              title="From light refreshes to full studs-out remodels."
              description="We work on every level of bathroom project — but our specialty is custom remodels where layout, materials, and craftsmanship all matter."
              as="h2"
            />
          </div>
          <div className="prose-local lg:col-span-7">
            <h3>Full primary bathroom remodels</h3>
            <p>
              Primary baths get the most use, and they age fastest. We rework
              the layout where it makes sense — opening up a tight shower,
              repositioning a vanity, swapping a corner tub for a clean walk-
              in shower — and rebuild around durable waterproofing, modern
              ventilation, and tile that's built to last.
            </p>
            <h3>Guest and hall bathrooms</h3>
            <p>
              Guest bathrooms in Auburn homes are often compact and dated.
              Smart layout changes, better storage, and lighter, calmer
              finishes can make a small bathroom feel noticeably bigger
              without adding square footage.
            </p>
            <h3>Powder rooms</h3>
            <p>
              Powder rooms are the easiest place to be expressive — moody
              tile, a sculptural vanity, statement lighting. We help
              homeowners pick a direction that fits the rest of the house, so
              the powder room reads intentional, not novelty.
            </p>
            <h3>Tile, vanities, showers, and lighting</h3>
            <p>
              Most Auburn remodels we deliver include some combination of
              custom tile (floor, shower, accent), a new vanity sized for the
              space, a redesigned shower, updated lighting, and improved
              ventilation. The mix depends on what your home actually needs.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-sand">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <ImagePlaceholder
            slug="bath-primary"
            alt="Auburn, CA primary bathroom remodel — large-format sage stone tile shower, warm wood floating vanity, matte black shower fixture"
            caption="Sage-tile primary bath, Auburn"
            ratio="5/4"
            tone="sage"
          />
          <div>
            <SectionHeading
              eyebrow="Auburn-specific considerations"
              title="Why bathroom remodels here aren't one-size-fits-all."
            />
            <div className="prose-local mt-6">
              <p>
                Older Auburn homes often have undersized supply lines,
                galvanized plumbing, or original cast-iron drains hidden
                inside walls. We plan around those realities so the
                remodeled bathroom doesn't just look new — it actually
                performs better than the one it replaces.
              </p>
              <p>
                Foothill homes also tend to have humidity swings, dust during
                wildfire season, and well water in some neighborhoods. Tile,
                grout, hardware, and ventilation choices all matter more
                here than they do in milder, flatter markets.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Waterproofing & ventilation"
              title="What separates a bathroom that lasts from one that doesn't."
            />
            <div className="prose-local mt-6">
              <p>
                A well-built bathroom is mostly invisible work: the
                membrane behind the tile, the bonded shower pan, the proper
                slope to the drain, the vapor management above the
                ceiling. We treat that layer as carefully as the tile
                pattern.
              </p>
              <p>
                Ventilation is the second piece. Foothill homes that aren't
                vented well end up with peeling paint, premature grout
                failure, and door-jamb mildew. We size and locate exhaust
                fans so moisture actually leaves the house.
              </p>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Materials we lean on"
              title="Calm, durable, foothill-appropriate."
            />
            <ul className="prose-local mt-6">
              <li>Stone-look porcelain tile — heat-tolerant and forgiving</li>
              <li>Honed quartz and soapstone counters</li>
              <li>Warm-grain wood vanities (rift oak, walnut)</li>
              <li>Matte black, brushed nickel, and aged brass hardware</li>
              <li>Frameless glass with low-iron clarity</li>
              <li>Linear drains for curbless walk-in showers</li>
            </ul>
          </div>
        </Container>
      </section>

      <ProcessSteps
        eyebrow="How we work"
        title="A bathroom remodel that's clear from day one."
      />

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Related"
            title="Other Auburn bathroom services"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/shower-remodeling-auburn-ca"
              className="rounded-[var(--radius-card)] border border-line/80 bg-cream p-6 hover:border-forest/40"
            >
              <span className="font-display text-lg text-soft-black">
                Shower Remodeling
              </span>
              <p className="mt-2 text-sm text-muted">
                Custom tile showers, niches, glass, and waterproofing.
              </p>
            </Link>
            <Link
              href="/tub-to-shower-conversion-auburn-ca"
              className="rounded-[var(--radius-card)] border border-line/80 bg-cream p-6 hover:border-forest/40"
            >
              <span className="font-display text-lg text-soft-black">
                Tub-to-Shower Conversions
              </span>
              <p className="mt-2 text-sm text-muted">
                Replace an unused tub with a modern walk-in shower.
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
                What bathroom remodels actually cost in Auburn, CA.
              </p>
            </Link>
          </div>
        </Container>
      </section>

      <ServiceAreasGrid />
      <FAQSection items={faqs} />
      <CTASection
        title="Ready to start a bathroom remodel in Auburn?"
        description="Share your address, layout, and a sense of the finish you want. We'll schedule an on-site consultation and write you a clear, line-item estimate."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          serviceSchema({
            name: "Bathroom Remodeling",
            description:
              "Full bathroom remodeling in Auburn, CA — primary, guest, and powder room remodels with custom tile, vanities, showers, and lighting.",
            path: PATH,
          })
        )}
      />
    </>
  );
}
