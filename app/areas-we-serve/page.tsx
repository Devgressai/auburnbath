import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { serviceAreas } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

const PATH = "/areas-we-serve";

export const metadata = buildMetadata({
  title: "Bathroom Remodeling Service Areas Near Auburn, CA",
  description:
    "Auburn Bath remodels bathrooms across Auburn, North Auburn, Lake of the Pines, Meadow Vista, Newcastle, Colfax, Loomis, Penryn, Grass Valley, and Nevada City.",
  path: PATH,
});

export default function Page() {
  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs
          trail={[
            { name: "Home", href: "/" },
            { name: "Areas Served", href: PATH },
          ]}
        />
      </Container>
      <Hero
        eyebrow="Service Areas"
        title="Bathroom Remodeling Service Areas Near Auburn, CA"
        description="Auburn Bath remodels bathrooms across Auburn and the surrounding Placer County and Nevada County foothill communities."
        imageSlug="areas-hero"
        imageAlt="Auburn, California foothill home at golden hour with oak trees, surrounded by Sierra foothill terrain served by Auburn Bath"
      />

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Where we work"
              title="A focused, local crew — not a national pop-up."
              description="Auburn Bath stays close to home. That keeps our scheduling clean, our quality consistent, and our follow-up genuinely available if a question comes up after the project."
            />
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-forest px-7 py-3 text-sm font-medium text-cream hover:bg-forest-dark"
            >
              Check your address
            </Link>
          </div>
          <div className="grid gap-6 lg:col-span-8 lg:grid-cols-2">
            {serviceAreas.map((area) => (
              <article
                key={area.slug}
                id={area.slug}
                className="rounded-[var(--radius-card)] border border-line/80 bg-cream p-6 shadow-soft"
              >
                <h2 className="font-display text-xl text-soft-black">
                  Bathroom remodeling in {area.name}
                </h2>
                <p className="mt-3 text-sm leading-7 text-charcoal">
                  {area.blurb}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-sand">
        <Container>
          <SectionHeading
            eyebrow="Don't see your town?"
            title="Reach out anyway."
            description="We cover much of the I-80 and Highway 49 corridor. If you're nearby, ask — most projects within a reasonable drive of Auburn are a fit."
          />
        </Container>
      </section>

      <CTASection
        title="Bathroom remodel quote for your foothill home."
        description="Share a few details about your home and project and we'll let you know whether your address fits our schedule, then take it from there."
      />
    </>
  );
}
