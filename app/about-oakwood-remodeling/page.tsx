import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

const PATH = "/about-oakwood-remodeling";

export const metadata = buildMetadata({
  title: "About Oakwood Remodeling Group | Auburn Bath",
  description:
    "Auburn Bath is a local bathroom remodeling service brand operated by Oakwood Remodeling Group, serving Auburn and nearby Placer County homeowners.",
  path: PATH,
});

export default function Page() {
  return (
    <>
      <div className="bg-cream">
        <div className="mx-auto w-full max-w-6xl px-5 pt-6 sm:px-8">
          <Breadcrumbs
            trail={[
              { name: "Home", href: "/" },
              { name: "About Oakwood", href: PATH },
            ]}
          />
        </div>
      </div>

      <Hero
        eyebrow="About"
        title="About Oakwood Remodeling Group"
        description={`${site.name} is a local bathroom remodeling service brand operated by ${site.parent}, focused on Auburn-area homeowners.`}
        imageSlug="about-hero"
        imageAlt="Auburn Bath bathroom remodel crew installing sage stone tile in an Auburn, CA foothill home primary bathroom — operated by Oakwood Remodeling Group"
      />

      <article className="py-20 sm:py-24">
        <Container size="narrow" className="prose-local">
          <p>
            Auburn Bath is a local bathroom remodeling service brand
            operated by {site.parent}. This Auburn-focused site was created
            to better serve homeowners in Auburn, North Auburn, Meadow
            Vista, Loomis, Newcastle, Rocklin, and Roseville who are
            looking for bathroom remodels, shower replacements, and walk-in
            shower solutions.
          </p>
          <p>
            By focusing exclusively on bathrooms — rather than mixing
            them in with kitchens, additions, and general repairs — the
            team can give the room the attention it actually deserves.
            That focus shows up in the details that matter most over
            time: waterproofing systems behind the tile, ventilation that
            actually moves moisture out of the home, layouts designed
            around how families really use the space, and finishes
            chosen to age well in foothill conditions.
          </p>

          <h2>Services we deliver</h2>
          <p>
            Across the Auburn area we focus on four core services, each
            with its own design and build playbook:
          </p>
          <ul>
            <li>
              <Link href="/services/bathroom-remodeling">
                bathroom remodeling
              </Link>{" "}
              — full primary, guest, and powder room remodels;
            </li>
            <li>
              <Link href="/services/shower-remodeling">
                shower remodeling
              </Link>{" "}
              — custom tile showers, frameless glass, niches, and
              durable waterproofing;
            </li>
            <li>
              <Link href="/services/walk-in-showers">walk-in showers</Link>{" "}
              — curbless and low-threshold designs with linear drains and
              built-in benches;
            </li>
            <li>
              <Link href="/services/tub-to-shower">
                tub-to-shower conversions
              </Link>{" "}
              — replacing unused or outdated tubs with modern walk-in
              showers.
            </li>
          </ul>

          <h2>Where we work</h2>
          <p>
            Auburn Bath is set up to serve Auburn first and the
            surrounding Placer County foothills closely after that. Our
            crews routinely work in Auburn, North Auburn, Meadow Vista,
            Loomis, Newcastle, Rocklin, Roseville, and the smaller
            communities in between. Each of those neighborhoods has its
            own housing stock and remodel realities — that's part of why
            this Auburn-focused site exists at all, instead of trying to
            serve every California zip code from one generic page.
          </p>

          <h2>The relationship to Oakwood Remodeling Group</h2>
          <p>
            Auburn Bath is operated by {site.parent}, which gives this
            local brand the depth of a wider remodeling operation —
            licensed contractor oversight (CA #{site.license}), an
            established crew, and a stand-behind workmanship policy that
            most newly-launched microsites can't credibly offer.
          </p>
          <p>
            <a href={site.parentUrl} rel="noopener">
              Learn more about Oakwood Remodeling Group
            </a>
            .
          </p>

          <p>
            For an Auburn-area bathroom remodel,{" "}
            <Link href="/contact">request a free quote</Link> and we'll
            follow up with a clear next step.
          </p>
        </Container>
      </article>

      <CTASection
        title="Plan your Auburn bathroom remodel."
        description="Tell us about your space — we'll set up a free on-site consultation and write you a clear, line-item estimate. Calls and forms stay local."
      />
    </>
  );
}
