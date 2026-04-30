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
        imageAlt="Bright modern primary bathroom remodel in a Placer County foothill home — freestanding soaker tub beneath a window framing oak trees and Sierra foothills, rift oak double vanity, frameless glass walk-in shower"
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
              <Link
                key={area.slug}
                href={area.href}
                id={area.slug}
                className="group block scroll-mt-24 rounded-[var(--radius-card)] border border-line/80 bg-cream p-6 shadow-soft transition-shadow hover:shadow-lift"
              >
                <h2 className="font-display text-xl text-soft-black">
                  Bathroom remodeling in {area.name}
                </h2>
                <p className="mt-3 text-sm leading-7 text-charcoal">
                  {area.blurb}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-forest">
                  {area.slug === "auburn"
                    ? "View Auburn services"
                    : `View ${area.name} page`}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12l-7.5 7.5M3 12h18"
                    />
                  </svg>
                </span>
              </Link>
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
