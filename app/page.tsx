import { Hero } from "@/components/hero";
import { HomeAvailability } from "@/components/home-availability";
import { HomeCredentials } from "@/components/home-credentials";
import { HomeFaqCta } from "@/components/home-faq-cta";
import { HomeGallery } from "@/components/home-gallery";
import { HomeHow } from "@/components/home-how";
import { HomeInfoRow } from "@/components/home-info-row";
import { HomeOakwoodTrust } from "@/components/home-oakwood-trust";
import { HomeStatement } from "@/components/home-statement";
import { ServicesOverview } from "@/components/services-overview";
import { TrustRibbon } from "@/components/trust-ribbon";
import { WeSpecialize } from "@/components/we-specialize";
import {
  jsonLdScript,
  organizationSchema,
  websiteSchema,
} from "@/lib/schema";
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
    a: "Most Auburn bathroom remodels fall into a wide range depending on size, layout changes, plumbing work, tile selection, and finish level. Tub-to-shower conversions tend to start lower; full primary bathroom rebuilds with custom showers, tile, vanities, and lighting come in higher. We share clear, line-item pricing during your free consultation.",
  },
  {
    q: "Do you offer financing?",
    a: "We can talk through financing options during your consultation. Most homeowners we work with use a combination of savings, a HELOC, or contractor financing through a third-party partner. We won't push a financing product on you — it's information you can use however you'd like.",
  },
  {
    q: "Is there a warranty on the work?",
    a: "Yes. We carry a workmanship stand-behind on every project we deliver. If something we installed isn't right, we come back and make it right — no fine print. Materials are covered separately under the manufacturer's own warranties.",
  },
  {
    q: "What if I'm not sure exactly what I want yet?",
    a: "That's most of our consultations, honestly. We help with design direction — layout options, finish palettes, fixture choices — based on what's already working in your home. You don't need to arrive with a Pinterest board; we'll get there together during the in-home walkthrough.",
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
    a: "Yes. Auburn Bath operates as a bathroom remodeling service brand of Oakwood Remodeling Group, a licensed California contractor (CA #1125321). License details are available on request and listed in our footer.",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Bathroom Remodeling Specialists · Auburn, CA"
        title="Bathroom Remodeling in Auburn, CA"
        description="Custom bathroom remodels, walk-in showers, and tub-to-shower conversions for Auburn and Placer County homes — calm, durable, and quietly premium."
        imageSlug="home-hero"
        imageAlt="Bathroom remodeling in Auburn, CA — primary bathroom with sage stone tile shower, freestanding soaker tub, and rift oak vanity"
        showConsultCard
      />
      <TrustRibbon />
      <HomeHow />
      <HomeGallery />
      <WeSpecialize />
      <ServicesOverview />
      <HomeStatement />
      <HomeInfoRow />
      <HomeAvailability />
      <HomeCredentials />
      <HomeFaqCta items={homeFaqs} />
      <HomeOakwoodTrust />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(websiteSchema())}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(organizationSchema())}
      />
    </>
  );
}
