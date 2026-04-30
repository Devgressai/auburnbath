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
        imageAlt="Curbless walk-in shower in an Auburn CA bathroom with sage stone tile and frameless glass"
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
            alt="Walk-in shower with frameless glass, linear drain, and stone tile in an Auburn primary bathroom"
            caption="Curbless walk-in, primary bath"
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
