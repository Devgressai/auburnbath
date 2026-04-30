import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { SectionHeading } from "@/components/section-heading";
import { services, site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

const PATH = "/about";

export const metadata = buildMetadata({
  title: "About Auburn Bath | Local Bathroom Remodeling in Auburn, CA",
  description:
    "Auburn Bath is a bathroom-focused remodeling brand backed by Oakwood Remodeling Group, serving Auburn, CA and nearby Placer County foothill communities.",
  path: PATH,
});

const beliefs = [
  {
    title: "Specialists, not generalists",
    body: "We do bathrooms. That focus is what lets us care about the parts most contractors skim — waterproofing, slope, vent design, tile setting.",
  },
  {
    title: "Quiet, durable materials",
    body: "Stone-look porcelain, warm wood, soft glass, and matte hardware. The bathrooms that age well aren't the loudest ones in the magazine.",
  },
  {
    title: "Local, foothill-aware",
    body: "Older plumbing, well water, humidity swings, dust. We've dialed in details that hold up in Auburn homes across decades, not seasons.",
  },
  {
    title: "Clear from day one",
    body: "Real schedules, line-item estimates, and on-site protection. Most surprises during a bathroom remodel come from poor communication, not the work.",
  },
];

export default function Page() {
  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs
          trail={[
            { name: "Home", href: "/" },
            { name: "About", href: PATH },
          ]}
        />
      </Container>
      <Hero
        eyebrow="About"
        title="About Auburn Bath"
        description="A local bathroom remodeling brand built around one idea: bathrooms deserve a focused approach, not the generalist treatment most contractors give them."
        imageSlug="about-hero"
        imageAlt="Auburn Bath bathroom remodel crew installing sage stone tile in an Auburn, CA foothill home primary bathroom"
      />

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="prose-local lg:col-span-7">
            <p>
              Auburn Bath focuses exclusively on{" "}
              <Link href="/bathroom-remodeling-auburn-ca">
                bathroom remodeling
              </Link>
              ,{" "}
              <Link href="/shower-remodeling-auburn-ca">
                shower remodeling
              </Link>
              ,{" "}
              <Link href="/walk-in-showers-auburn-ca">walk-in showers</Link>,
              and{" "}
              <Link href="/tub-to-shower-conversion-auburn-ca">
                tub-to-shower conversions
              </Link>{" "}
              for Auburn and nearby Placer County homeowners. We exist
              because bathrooms — small as they are — get more wrong by
              general contractors than almost any other room in the house.
            </p>
            <p>
              Bathrooms involve waterproofing, ventilation, layout, tile,
              plumbing, lighting, and daily wear. A bathroom that looks
              great on day one but fails three winters later wasn't a
              bargain. Our work treats the invisible layer — the membrane,
              the slope, the venting — with the same care as the tile and
              fixtures.
            </p>
            <p>
              Auburn Bath is backed by {site.parent}, giving homeowners the
              benefit of a focused local bathroom brand with licensed
              California contractor oversight. Our crew lives and works in
              the area, knows the building stock, and has dialed in
              materials and methods that hold up in foothill homes.
            </p>
          </div>
          <ImagePlaceholder
            slug="about-crew"
            alt="Auburn Bath tile setter installing large-format sage stone tile in an Auburn, CA bathroom remodel"
            ratio="3/4"
            tone="forest"
            className="lg:col-span-5"
          />
        </Container>
      </section>

      <section className="py-16 bg-sand">
        <Container>
          <SectionHeading
            eyebrow="What we believe"
            title="The principles that shape every Auburn bathroom we build."
            description="None of these are radical — they're just the things easy to skip when bathrooms are a side project. We treat them as the project."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {beliefs.map((b) => (
              <article
                key={b.title}
                className="rounded-[var(--radius-card)] border border-line/80 bg-cream p-6 shadow-soft"
              >
                <h2 className="font-display text-lg text-soft-black">
                  {b.title}
                </h2>
                <p className="mt-2 text-sm leading-7 text-charcoal">
                  {b.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="What we cover"
              title="A focused service list — designed, built, and stood behind."
            />
            <p className="mt-5 text-sm leading-7 text-muted">
              Every project is licensed, insured, and permitted where
              required by Placer County. Each job ends with a walkthrough
              and a documented handoff so anything that comes up later is
              easy to address.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {services.map((s) => (
              <li key={s.key}>
                <Link
                  href={s.href}
                  className="block rounded-[var(--radius-card)] border border-line/80 bg-cream p-5 hover:border-forest/40"
                >
                  <span className="font-display text-lg text-soft-black">
                    {s.title}
                  </span>
                  <p className="mt-2 text-sm text-muted">{s.blurb}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTASection
        title="Talk through your bathroom remodel with a local specialist."
        description="A short consultation is the easiest way to see whether Auburn Bath is the right fit. We're happy to walk through ideas before you commit to anything."
      />
    </>
  );
}
