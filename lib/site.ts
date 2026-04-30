export const site = {
  name: "Auburn Bath",
  brand: "Auburn Bath",
  parent: "Oakwood Remodeling Group",
  parentLine:
    "Auburn Bath is a bathroom remodeling service brand of Oakwood Remodeling Group.",
  url: "https://auburnbath.com",
  city: "Auburn",
  region: "CA",
  county: "Placer County",
  phone: "{{PHONE_NUMBER}}",
  // Reserved 555-01XX range — guaranteed non-routable until real phone is set.
  phoneHref: "tel:+15305550100",
  // Approximate Auburn, CA city-center coordinates for LocalBusiness/geo.
  geo: { latitude: 38.8966, longitude: -121.0769 },
  email: "{{EMAIL}}",
  license: "{{LICENSE_NUMBER}}",
  defaultDescription:
    "Auburn Bath specializes in bathroom remodeling, walk-in showers, tub-to-shower conversions, and shower remodels in Auburn, CA and the surrounding Placer County foothills. Request a free quote.",
  ga4Id: "{{GA4_ID}}",
  gtmId: "",
  gscVerification: "{{GSC_VERIFICATION}}",
  trustLine:
    "Licensed California contractor | Bathroom-focused remodeling | Serving Auburn & nearby foothill communities",
} as const;

export type ServiceKey =
  | "bathroom-remodeling"
  | "shower-remodeling"
  | "tub-to-shower"
  | "walk-in-showers";

export const services: Array<{
  key: ServiceKey;
  title: string;
  shortTitle: string;
  href: string;
  blurb: string;
  navLabel: string;
}> = [
  {
    key: "bathroom-remodeling",
    title: "Bathroom Remodeling",
    shortTitle: "Bathroom Remodels",
    href: "/bathroom-remodeling-auburn-ca",
    blurb:
      "Full bathroom remodels for Auburn homes — layout, tile, vanities, lighting, plumbing, and modern finishes.",
    navLabel: "Bathroom Remodeling",
  },
  {
    key: "shower-remodeling",
    title: "Shower Remodeling",
    shortTitle: "Shower Remodels",
    href: "/shower-remodeling-auburn-ca",
    blurb:
      "Custom tile showers, glass enclosures, niches, benches, and durable waterproofing built for Placer County homes.",
    navLabel: "Shower Remodeling",
  },
  {
    key: "tub-to-shower",
    title: "Tub-to-Shower Conversions",
    shortTitle: "Tub-to-Shower",
    href: "/tub-to-shower-conversion-auburn-ca",
    blurb:
      "Replace an unused or outdated tub with a modern, low-step walk-in shower designed for daily use.",
    navLabel: "Tub-to-Shower",
  },
  {
    key: "walk-in-showers",
    title: "Walk-In Showers",
    shortTitle: "Walk-In Showers",
    href: "/walk-in-showers-auburn-ca",
    blurb:
      "Curbless and low-threshold walk-in showers with frameless glass, custom tile, and quiet, premium finishes.",
    navLabel: "Walk-In Showers",
  },
];

export const serviceAreas = [
  {
    slug: "auburn",
    name: "Auburn",
    blurb:
      "The heart of our service area. Auburn homes range from historic Old Town cottages to mid-century ranch homes and newer foothill builds, and each comes with its own bathroom layout quirks. We focus on durable waterproofing and finishes that match the character of the home.",
  },
  {
    slug: "north-auburn",
    name: "North Auburn",
    blurb:
      "Many North Auburn properties have larger primary bathrooms and good plumbing access, which opens up options for walk-in showers, double vanities, and reworked tub areas without major framing changes.",
  },
  {
    slug: "lake-of-the-pines",
    name: "Lake of the Pines",
    blurb:
      "Lake of the Pines homes often pair sloped lots with daylight basements and tighter guest baths. We design clean, low-maintenance bathrooms that hold up well in second homes and full-time foothill living alike.",
  },
  {
    slug: "meadow-vista",
    name: "Meadow Vista",
    blurb:
      "Wooded lots, well water, and older copper or galvanized plumbing are common in Meadow Vista. Our team plans around these realities so the new bathroom looks polished and functions reliably for years.",
  },
  {
    slug: "newcastle",
    name: "Newcastle",
    blurb:
      "Newcastle remodels often involve modernizing primary baths in established homes — replacing tubs, opening up cramped showers, and updating tile, lighting, and ventilation in one coordinated project.",
  },
  {
    slug: "colfax",
    name: "Colfax",
    blurb:
      "Colfax homes can sit on steep grades and older infrastructure. We take care with subfloor prep, ventilation, and waterproofing so the finished bathroom performs as well as it looks.",
  },
  {
    slug: "loomis",
    name: "Loomis",
    blurb:
      "From rural acreage to newer subdivisions, Loomis bathrooms tend to favor clean, timeless finishes. We help homeowners blend updated layouts with materials that complement the surrounding country setting.",
  },
  {
    slug: "penryn",
    name: "Penryn",
    blurb:
      "Penryn properties often value craftsmanship and longevity over trends. Our process leans into careful tile work, quality plumbing fixtures, and bathrooms designed to age gracefully.",
  },
  {
    slug: "grass-valley",
    name: "Grass Valley",
    blurb:
      "Many Grass Valley homes have older, smaller bathrooms with original layouts. We routinely remove tubs, redesign showers, and modernize ventilation to bring those baths up to today's standards.",
  },
  {
    slug: "nevada-city",
    name: "Nevada City",
    blurb:
      "Historic Nevada City homes deserve a bathroom remodel that respects character while quietly improving function — better waterproofing, cleaner layouts, and finishes that feel period-appropriate without looking dated.",
  },
];

export const navLinks = [
  { label: "Bathroom Remodeling", href: "/bathroom-remodeling-auburn-ca" },
  { label: "Shower Remodeling", href: "/shower-remodeling-auburn-ca" },
  { label: "Tub-to-Shower", href: "/tub-to-shower-conversion-auburn-ca" },
  { label: "Cost Guide", href: "/bathroom-remodeling-cost-auburn-ca" },
  { label: "Areas Served", href: "/areas-we-serve" },
  { label: "Contact", href: "/contact" },
];

export const processSteps = [
  {
    title: "Free consultation",
    body:
      "We listen first — how the bathroom is used today, what's working, what's not, and what kind of finish you have in mind.",
  },
  {
    title: "Design and scope",
    body:
      "We outline the layout, materials, plumbing changes, and timeline so the project is clear before any demo begins.",
  },
  {
    title: "Material selection",
    body:
      "Tile, vanities, fixtures, lighting, and glass — chosen together with a focus on durability and a calm, premium look.",
  },
  {
    title: "Professional installation",
    body:
      "Our crew handles framing, plumbing, waterproofing, tile, and finishes with the kind of cleanup that makes daily life easier.",
  },
  {
    title: "Final walkthrough",
    body:
      "We review the finished bathroom together, confirm everything is dialed in, and leave you with a clear handoff.",
  },
];

export const trustPoints = [
  "Bathroom-focused remodeling — not a generalist contractor",
  "Licensed, insured, and permitted where required by Placer County",
  "Durable, code-driven waterproofing systems",
  "Custom tile and shower designs tailored to your home",
  "Clean job sites, on-site protection, and a documented final walkthrough",
  `Local Placer County crew, backed by ${site.parent}`,
];
