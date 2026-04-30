import Link from "next/link";

import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { FAQSection } from "@/components/faq-section";
import { Hero } from "@/components/hero";
import { ProcessSteps } from "@/components/process-steps";
import { SectionHeading } from "@/components/section-heading";
import { ServiceAreasGrid } from "@/components/service-areas";
import { ServicesOverview } from "@/components/services-overview";
import { TrustBar } from "@/components/trust-bar";
import { WhyUs } from "@/components/why-us";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Bathroom Remodeling Auburn CA | Auburn Bath",
  description:
    "Auburn Bath specializes in bathroom remodeling, shower remodels, walk-in showers, and tub-to-shower conversions in Auburn, CA. Request a free quote today.",
  path: "/",
});

const homeFaqs = [
  {
    q: "How much does a bathroom remodel cost in Auburn, CA?",
    a: "Most Auburn bathroom remodels fall into a wide range depending on size, layout changes, plumbing work, tile selection, and finish level. Smaller refresh projects come in lower; full primary-bath rebuilds with custom showers, tile, vanities, and lighting come in higher. We share clear, line-item pricing during your consultation rather than a one-size-fits-all number.",
  },
  {
    q: "Do you offer tub-to-shower conversions?",
    a: "Yes — converting an unused or outdated tub into a modern walk-in shower is one of our most-requested projects. We handle layout planning, plumbing rerouting, waterproofing, tile, glass, and trim so the finished shower feels intentional, not retrofitted.",
  },
  {
    q: "Do you remodel small bathrooms?",
    a: "Absolutely. Older Auburn homes often have compact guest baths, and small spaces tend to benefit the most from thoughtful design — better lighting, smarter storage, and tile that visually opens the room.",
  },
  {
    q: "Do you serve areas outside Auburn?",
    a: "Yes. We regularly remodel bathrooms across North Auburn, Lake of the Pines, Meadow Vista, Newcastle, Colfax, Loomis, Penryn, Grass Valley, and Nevada City. If your town isn't on the list, ask — we cover much of the I-80 and Highway 49 corridor.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Auburn Bath operates as a bathroom remodeling service brand of Oakwood Remodeling Group, a licensed California contractor. License details are available on request and listed in our footer.",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Auburn, CA"
        title="Bathroom Remodeling in Auburn, CA"
        description="Custom bathroom remodels, walk-in showers, shower upgrades, and tub-to-shower conversions built for Auburn and Placer County homes — calm, durable, and quietly premium."
        imageSlug="home-hero"
        imageAlt="Premium Auburn, CA primary bathroom remodel with sage stone tile shower, freestanding tub, and warm wood vanity"
      />
      <TrustBar />
      <ServicesOverview />
      <WhyUs />
      <LocalSection />
      <ProcessSteps />
      <ServiceAreasGrid />
      <FAQSection items={homeFaqs} />
      <CTASection
        title="Plan your Auburn bathroom remodel with a focused local crew."
        description="Tell us about your space — size, layout, what's working, what isn't — and we'll come back with a clear next step. No pressure, no boilerplate."
      />
    </>
  );
}

function LocalSection() {
  return (
    <section className="py-20 bg-sage-light">
      <Container className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Auburn-built bathrooms"
            title="Designed around foothill homes, not generic floor plans."
            description="Auburn's homes range from gold-rush originals to mid-century ranches and newer hillside builds. Each one approaches bathrooms differently, and the smartest remodels start with that context."
          />
        </div>
        <div className="prose-local lg:col-span-7">
          <p>
            We see a lot of older floor plans where the original bathroom was
            never really designed — it was simply <em>fit in</em>. Tubs end up
            in awkward corners, showers feel cramped, and ventilation often
            wasn't on the radar when the home was built. A good remodel
            doesn't just swap finishes; it quietly reorganizes the room so it
            works better every day.
          </p>
          <p>
            On the materials side, foothill homes face their own conditions:
            warm, dry summers, real winter humidity, well water in some
            pockets, and plenty of dust during fire-season cleanup. We choose
            tile, grout, hardware, and finishes that hold up to all of that —
            and look the part of a home set into the trees, not a developer
            spec home in a flat suburb.
          </p>
          <p>
            Our work leans calm: green and sage tones, warm stone, real wood,
            soft glass, and quiet hardware. It pairs naturally with Auburn's
            landscape and ages well. <Link href="/about">Learn more about
            Auburn Bath</Link>.
          </p>
        </div>
      </Container>
    </section>
  );
}
