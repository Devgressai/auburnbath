/**
 * Rich, hand-written content for each non-Auburn service-area city.
 * Auburn proper lives on the main /bathroom-remodeling-auburn-ca service
 * page — these pages cover the surrounding foothill towns.
 *
 * Each entry deliberately includes city-specific notes (housing stock,
 * plumbing era, drive distance, common project mix) so pages don't read
 * as templated doorway copy.
 */

import type { ServiceKey } from "./site";

export type CityFAQ = { q: string; a: string };

export type City = {
  /** Short slug used in routing (citySlug = `bathroom-remodeling-${slug}-ca`). */
  slug: string;
  /** Display name. */
  name: string;
  /** Full URL slug (single segment): "bathroom-remodeling-{slug}-ca". */
  fullSlug: string;
  /** Used as <h1>. */
  h1: string;
  /** Meta title (rendered absolutely; no template suffix). */
  metaTitle: string;
  /** Meta description, ≤160 chars. */
  metaDescription: string;
  /** Eyebrow above the H1. */
  eyebrow: string;
  /** 1–2 sentence hero description. */
  heroDescription: string;
  /** Existing photo slug from public/images/ to use for the hero. */
  imageSlug: string;
  /** Hero <img> alt text. */
  imageAlt: string;
  /** Lead paragraphs (rendered as <p>'s in the intro section). */
  intro: string[];
  /** Local context block (housing stock, foothill quirks, etc). */
  localContext: { title: string; paragraphs: string[] };
  /** Common project types in this city. */
  commonProjects: { title: string; intro: string; items: string[] };
  /** Short drive-note + serviceability paragraph. */
  driveNote: string;
  /** 3–4 city-specific FAQs (also fed to FAQ schema). */
  faqs: CityFAQ[];
  /** Top 4 services to feature on the city's "Related" tile row. */
  featuredServices?: ServiceKey[];
};

const FEATURED_DEFAULT: ServiceKey[] = [
  "bathroom-remodeling",
  "shower-remodeling",
  "tub-to-shower",
  "walk-in-showers",
];

export const cities: City[] = [
  {
    slug: "north-auburn",
    name: "North Auburn",
    fullSlug: "bathroom-remodeling-north-auburn-ca",
    h1: "Bathroom Remodeling in North Auburn, CA",
    metaTitle: "Bathroom Remodeling North Auburn CA | Auburn Bath",
    metaDescription:
      "Custom bathroom remodels in North Auburn, CA — primary bath rebuilds, walk-in showers, tub-to-shower conversions, and modern tile work for foothill homes.",
    eyebrow: "North Auburn, CA",
    heroDescription:
      "Custom bathroom remodels in North Auburn — primary bath rebuilds, walk-in showers, tub-to-shower conversions, and tile work tailored to the area's mid-century and newer foothill homes.",
    imageSlug: "bath-primary",
    imageAlt:
      "Bathroom remodeling in North Auburn, CA — primary bathroom with sage stone tile shower, double rift oak vanity, and brushed brass hardware",
    intro: [
      "North Auburn isn't 'Auburn proper' — but if you live here, that distinction matters less than the practical realities of remodeling a bathroom. Most North Auburn homes were built between the 1970s and the early 2000s, on lots that tend to be more generous than what you'll find in Old Town Auburn, with primary bathrooms that have room to breathe and plumbing infrastructure that's more uniform across the neighborhood.",
      "What we see most often is homeowners who've been in the house long enough that the original builder-grade bathroom feels tired — beige tile, oak vanities, fiberglass tub-shower combos, fluorescent lighting. The bones are good; the finish is dated. The work usually starts with one question: \"Can we keep the layout but make this feel modern?\" In North Auburn, the answer is almost always yes.",
    ],
    localContext: {
      title: "Why North Auburn bathrooms remodel well",
      paragraphs: [
        "North Auburn's housing stock is forgiving. Slab foundations are common, supply lines tend to be properly sized copper or PEX, drains run where you'd expect them, and primary bathrooms are usually large enough to absorb a real walk-in shower without sacrificing storage. That's a different starting point than the historic homes a few miles south, where original cast-iron drains and undersized supply lines are still common.",
        "The catch is that the original layouts often included design choices that haven't aged well — corner garden tubs no one uses, glass-block showers, water-closet rooms that eat square footage, and fluorescent strip lights that flatten everything. Most of our North Auburn projects involve removing one of those features and rethinking the room around it.",
      ],
    },
    commonProjects: {
      title: "Most-requested North Auburn projects",
      intro:
        "These are the bathroom projects we deliver most often in this part of Placer County:",
      items: [
        "Primary bath rebuilds with double vanity and a wide walk-in shower",
        "Removing oversized garden tubs in favor of usable square footage",
        "Tile shower upgrades replacing original fiberglass enclosures",
        "Adding a freestanding tub when the layout allows it",
        "Lighting and ventilation modernization on top of cosmetic finishes",
      ],
    },
    driveNote:
      "From our Auburn shop we typically reach North Auburn projects in 10–15 minutes. That's close enough that we can run materials and trades through the day without losing time, which keeps the schedule honest and the punch list short.",
    faqs: [
      {
        q: "Is the plumbing in North Auburn easier to work with than Old Town Auburn?",
        a: "Generally, yes. North Auburn homes built from the 1970s onward typically have copper or PEX supply lines and ABS drains in standard locations. Older Auburn homes often have galvanized supply lines or cast-iron drains hidden in original walls — perfectly workable, but they take more careful demo and planning.",
      },
      {
        q: "Should I keep my garden tub or remove it?",
        a: "If you're using it weekly, keep it. If it's been a place to set laundry baskets for two years, removing it almost always opens up the bathroom dramatically — wider vanity, larger walk-in shower, or both. We'll talk through the resale tradeoffs during the consultation; most North Auburn primary baths gain more than they lose.",
      },
      {
        q: "Do North Auburn HOAs require approval for interior remodels?",
        a: "Most North Auburn HOAs only review exterior changes. Interior bathroom remodels rarely require HOA approval, but Placer County does require permits for plumbing, electrical, and structural work — we pull those for you and coordinate inspections.",
      },
      {
        q: "How long does a North Auburn primary bathroom remodel take?",
        a: "Three to five weeks of active build is typical for a full primary bath remodel here. Material lead times (especially custom glass and certain tile) are usually the long pole — we order those at design sign-off so the build runs cleanly once demo starts.",
      },
    ],
    featuredServices: FEATURED_DEFAULT,
  },
  {
    slug: "lake-of-the-pines",
    name: "Lake of the Pines",
    fullSlug: "bathroom-remodeling-lake-of-the-pines-ca",
    h1: "Bathroom Remodeling in Lake of the Pines, CA",
    metaTitle: "Bathroom Remodeling Lake of the Pines CA | Auburn Bath",
    metaDescription:
      "Bathroom remodels for Lake of the Pines, CA homes — clean, low-maintenance finishes for primary baths, guest baths, and second homes around the lake.",
    eyebrow: "Lake of the Pines, CA",
    heroDescription:
      "Bathroom remodels designed for Lake of the Pines homes — calm, low-maintenance finishes for primary baths, guest bathrooms, and second-home settings around the lake.",
    imageSlug: "walkin-curbless",
    imageAlt:
      "Bathroom remodeling in Lake of the Pines, CA — frameless walk-in shower with sage stone tile, linear drain, and warm wood vanity in a lakeside foothill home",
    intro: [
      "Lake of the Pines is its own world — a gated community of roughly 2,300 homes wrapped around a private lake, with a mix of full-time residents and second-home owners who use the place on weekends. The homes range from 1970s lakefront originals to newer custom builds on the back loops, and the bathroom remodels we do there reflect that range.",
      "Two practical realities shape every Lake of the Pines bathroom project we plan: sloped lots and seasonal-use schedules. Sloped lots mean primary bathrooms often sit above daylight basements, which affects how we approach drain runs and shower-pan slope. Seasonal use means low-maintenance finishes matter — surfaces that won't stain, drains that won't clog from sitting, and tile that doesn't need babying.",
    ],
    localContext: {
      title: "What's different about a Lake of the Pines bathroom",
      paragraphs: [
        "Compared to flat-valley homes, Lake of the Pines bathrooms often have one of two layout quirks: tight guest baths that try to do too much, or oversized primary baths with awkward dead corners. The community's mid-century cabin-style homes lean toward the first; the newer custom builds often have the second.",
        "Either way, the design move is usually the same: stop trying to fit a tub no one uses, give the shower its proper share of the room, and pick finishes that hold up to occasional use. We lean into stone-look porcelain, real wood vanities, sealed grout, and frameless glass — all of which take care of themselves between visits.",
      ],
    },
    commonProjects: {
      title: "What we build most often around the lake",
      intro:
        "The bathroom projects we deliver most often for Lake of the Pines homeowners:",
      items: [
        "Primary bath rebuilds in lakeside originals, opening up cabin-era layouts",
        "Tub-to-shower conversions in unused primary tubs",
        "Guest bath refreshes for second-home owners — clean, durable, low-touch",
        "Walk-in shower rebuilds that handle sloped subfloors over daylight basements",
        "Tile and waterproofing replacements on showers that have leaked into the floor below",
      ],
    },
    driveNote:
      "Lake of the Pines is roughly a 30-minute drive from our Auburn shop. We typically schedule our Lake of the Pines projects with on-site days that bundle multiple trades together, so a remote homeowner can plan around fewer visits.",
    faqs: [
      {
        q: "Can you work on second homes when the owner isn't there?",
        a: "Yes — many of our Lake of the Pines projects are for owners who live in the Bay Area or Sacramento and only come up on weekends. We send a weekly written progress note with photos so you can track the build remotely, and we coordinate access through whatever method works best (gate code, a designated friend, etc.).",
      },
      {
        q: "Do sloped lots and daylight basements complicate a bathroom remodel?",
        a: "They can, especially when you want a curbless walk-in shower. A recessed shower pan over a daylight basement requires careful joist planning and waterproofing detailing. We've done plenty of these — we just don't pretend they're as simple as a slab-on-grade install.",
      },
      {
        q: "What kind of finishes hold up best in a second home?",
        a: "Stone-look porcelain tile, sealed natural stone counters, real wood (not laminate) vanities, frameless glass, and quality fixture brands. We avoid anything that needs frequent attention — open-pore stone, untreated brass that wants polishing, tile patterns that show every grout shadow.",
      },
    ],
    featuredServices: FEATURED_DEFAULT,
  },
  {
    slug: "meadow-vista",
    name: "Meadow Vista",
    fullSlug: "bathroom-remodeling-meadow-vista-ca",
    h1: "Bathroom Remodeling in Meadow Vista, CA",
    metaTitle: "Bathroom Remodeling Meadow Vista CA | Auburn Bath",
    metaDescription:
      "Custom bathroom remodels for Meadow Vista, CA — bathrooms designed around well water, older plumbing, and the rural character of foothill properties.",
    eyebrow: "Meadow Vista, CA",
    heroDescription:
      "Custom bathroom remodels designed around the realities of Meadow Vista properties — well water, older plumbing, larger lots, and foothill character.",
    imageSlug: "shower-stone",
    imageAlt:
      "Bathroom remodeling in Meadow Vista, CA — sage stone-tile walk-in shower with frameless glass and warm wood vanity in a wooded foothill home",
    intro: [
      "Meadow Vista is rural in a way that shapes every bathroom project we do there — wooded lots, well water, mature trees, and homes that sit on more land than infrastructure. A lot of Meadow Vista properties were built in the 1970s and 1980s and have been on private wells the whole time, which means the plumbing, water chemistry, and pressure considerations all start a little differently than a city-water bathroom remodel.",
      "We don't treat that as a problem; we treat it as a starting point. Well water often comes with mineral content that's hard on fixtures, supply lines that don't always match modern standards, and pressure that varies seasonally. Designing around those realities is how we keep a Meadow Vista bathroom looking polished five years after the build.",
    ],
    localContext: {
      title: "Designing for Meadow Vista's quirks",
      paragraphs: [
        "Most older Meadow Vista homes still have copper or galvanized supply lines, single-handle valves that struggle with pressure swings, and original cast-iron drains that have done their job but might be due for partial replacement when we open the walls. We always inspect what's behind the existing tile before quoting the rest of the work — what we find usually adjusts the plumbing line item up or down by a real amount.",
        "Hard water also makes a difference at the fixture level. We tend to specify shower valves with cleanable cartridges, glass-protectant treatments on frameless enclosures, and grout sealers that handle mineral deposits. Small choices, big difference over years of use.",
      ],
    },
    commonProjects: {
      title: "Most-requested Meadow Vista projects",
      intro:
        "The bathroom work we deliver most often around the Meadow Vista area:",
      items: [
        "Full primary bath remodels with attention to plumbing replacement",
        "Tub-to-shower conversions with hard-water-friendly fixtures",
        "Tile shower rebuilds where the original failed at the pan or membrane",
        "Vent and fan upgrades — older homes often have undersized ventilation",
        "Pressure-balanced valve installs where the original was struggling",
      ],
    },
    driveNote:
      "Meadow Vista is about 20 minutes from our Auburn shop. The drive is routine — we run materials in and out throughout the build day without it adding cost or schedule.",
    faqs: [
      {
        q: "Does well water affect the kind of fixtures and tile I should choose?",
        a: "Yes. Hard water and minerals are tough on chrome plating, fragile finishes, and untreated grout. We specify quality brass and chrome with replaceable cartridges, sealed grout, and glass with hydrophobic coatings — small upgrades that make a noticeable difference over years.",
      },
      {
        q: "Will you replace my old plumbing while you're remodeling?",
        a: "If we open a wall and find galvanized or compromised supply lines, we'll quote the replacement as a line-item add. We'd rather replace problem plumbing while the wall is open than reseal it and have you call us in two years.",
      },
      {
        q: "Do you handle septic-system considerations for fixture upgrades?",
        a: "We design around your existing septic system — choosing flow rates and fixture types that don't push beyond what the system was sized for. If we ever recommend a high-flow rain head or two-shower setup, we make sure the septic side is OK with it first.",
      },
    ],
    featuredServices: FEATURED_DEFAULT,
  },
  {
    slug: "newcastle",
    name: "Newcastle",
    fullSlug: "bathroom-remodeling-newcastle-ca",
    h1: "Bathroom Remodeling in Newcastle, CA",
    metaTitle: "Bathroom Remodeling Newcastle CA | Auburn Bath",
    metaDescription:
      "Custom bathroom remodels in Newcastle, CA — full primary bath rebuilds, walk-in showers, and tub-to-shower conversions for established Placer County homes.",
    eyebrow: "Newcastle, CA",
    heroDescription:
      "Custom bathroom remodels for Newcastle homes — modernizing established primary baths with walk-in showers, custom tile, and updated layouts.",
    imageSlug: "tub-conversion",
    imageAlt:
      "Bathroom remodeling in Newcastle, CA — low-threshold tub-to-shower conversion with sage stone tile and built-in shower bench",
    intro: [
      "Newcastle sits at one of those Placer County crossroads where mid-century ranches, 1980s custom homes, and newer rural builds all share the same zip code. That mix is reflected in the bathroom remodels we do there — no single template fits, but a few patterns repeat. Most of our Newcastle projects modernize a primary bath that was last touched fifteen or twenty years ago, in a home where the rest of the floor plan still works fine.",
      "What that usually looks like: replacing a tub no one uses, redesigning the shower as a clean walk-in, updating the vanity (often double), modernizing the lighting and ventilation, and refreshing the tile work top-to-bottom. The structural bones stay; the bathroom comes out feeling like it belongs in the house all along.",
    ],
    localContext: {
      title: "What's typical about Newcastle bathrooms",
      paragraphs: [
        "Newcastle homes tend to have larger primary bathrooms than the older Auburn stock, which gives us room to design without compromising. Layouts often include a separate water closet, a tub niche, and a shower stall — three rooms inside one bathroom. Modernizing usually involves opening at least one of those walls and rebalancing the space.",
        "Plumbing here is generally good. Most homes have copper or PEX supply lines and standard drain layouts. The exception is newer rural builds where the original contractor was working fast and we sometimes find minor surprises behind the tile. We plan for that during demo so the schedule doesn't bend.",
      ],
    },
    commonProjects: {
      title: "What we build most often in Newcastle",
      intro:
        "The bathroom remodels we deliver most often for Newcastle homeowners:",
      items: [
        "Full primary bath rebuilds — opening up cramped layouts, removing unused tubs",
        "Tub-to-shower conversions, often inside the original tub footprint",
        "Walk-in showers with built-in benches and frameless glass",
        "Double-vanity replacements with custom rift oak or walnut wood",
        "Lighting and tile refreshes alongside the larger work",
      ],
    },
    driveNote:
      "Newcastle is about 15–20 minutes from our Auburn shop, depending on traffic on Highway 193. That's close enough that we run a normal build cadence — full crew on site, material runs as needed.",
    faqs: [
      {
        q: "Should I open up my Newcastle bathroom's separate water-closet room?",
        a: "Often, yes. The 1980s-era water-closet rooms inside a primary bathroom usually feel cramped and dated to current buyers. Opening that wall (or replacing the door with a pocket door) typically reads cleaner and gains visual square footage without requiring real construction.",
      },
      {
        q: "Do you handle tile-only refreshes or just full remodels?",
        a: "We do both — but we'll be honest if a tile-only refresh isn't the right move. Sometimes the existing tile is hiding waterproofing issues that need to be addressed; sometimes it's genuinely just cosmetic.",
      },
      {
        q: "How long do Newcastle remodels typically take?",
        a: "Three to six weeks of active build for a full primary bath remodel, two to three for a tub-to-shower conversion. Material lead times (custom glass, certain tile) usually drive the schedule, so we order at design sign-off.",
      },
    ],
    featuredServices: FEATURED_DEFAULT,
  },
  {
    slug: "colfax",
    name: "Colfax",
    fullSlug: "bathroom-remodeling-colfax-ca",
    h1: "Bathroom Remodeling in Colfax, CA",
    metaTitle: "Bathroom Remodeling Colfax CA | Auburn Bath",
    metaDescription:
      "Bathroom remodels for Colfax, CA homes — careful subfloor prep, durable waterproofing, and finishes that respect the foothill character of older houses.",
    eyebrow: "Colfax, CA",
    heroDescription:
      "Bathroom remodels for Colfax homes — careful subfloor prep, durable waterproofing, and finishes that respect the foothill character of older houses.",
    imageSlug: "shower-hero",
    imageAlt:
      "Bathroom remodeling in Colfax, CA — custom walk-in tile shower with sage stone, frameless glass, and warm window light in a historic foothill home",
    intro: [
      "Colfax is one of those Placer County towns that wears its history on its sleeve — gold-rush bones, railroad-town architecture, and a housing stock that mostly predates modern building codes. That makes Colfax bathroom remodels distinctive work. The walls aren't always square, the subfloors aren't always level, and the plumbing has stories. None of that is a problem when you plan for it.",
      "Most of our Colfax projects start with a careful demo and a candid conversation about what we find behind the tile. Older Colfax homes often need subfloor reinforcement before any new shower pan goes in, ventilation upgrades the original house never had, and supply-line updates that should have happened decades ago. We do that work as part of the bathroom remodel — not as an afterthought.",
    ],
    localContext: {
      title: "What an older Colfax bathroom usually needs",
      paragraphs: [
        "When we open up a typical pre-1970 Colfax bathroom, three issues are common: a soft subfloor under a tub or shower (water has been finding its way through over decades), a vent fan that either doesn't exist or vents into the attic, and supply lines that have outlived their useful life. Each adds time and cost, but each is also non-negotiable if you want the new bathroom to last.",
        "On the design side, we usually lean into the home's existing character. Period-respecting tile (small-format, hand-glazed), warm wood vanities, brass and matte black hardware, and frameless glass that disappears against good tile. The result is a bathroom that reads modern but doesn't feel out of place in a hundred-year-old house.",
      ],
    },
    commonProjects: {
      title: "What we build most often in Colfax",
      intro: "Common Colfax bathroom projects:",
      items: [
        "Full bathroom rebuilds with subfloor reinforcement",
        "Tile shower replacements where the original pan failed",
        "Tub-to-shower conversions in primary baths",
        "Vent and exhaust fan installations (or replacements)",
        "Plumbing supply-line replacements while walls are open",
        "Heritage-respecting tile work in older homes",
      ],
    },
    driveNote:
      "Colfax is about 25 minutes from our Auburn shop on I-80. We schedule our Colfax projects with full days on site rather than half-days, so the drive doesn't eat into productive build time.",
    faqs: [
      {
        q: "How do you handle older Colfax homes with non-square walls?",
        a: "We measure carefully during design and plan tile layouts that accommodate the reality of the room — sometimes that means a shadow-line trim detail at a corner, sometimes a deliberate accent wall that absorbs an out-of-square wall. Our tile setters know how to work with old houses, not pretend they're new construction.",
      },
      {
        q: "Will you find rotten subfloor when you remove my old tub?",
        a: "Sometimes — and we plan for it. We hold a small contingency in every Colfax estimate for subfloor replacement and frame reinforcement. If we don't need it, you don't pay it. If we do, we have it ready and the schedule doesn't bend.",
      },
      {
        q: "Do you respect period details in older Colfax homes?",
        a: "Yes. We've done plenty of bathrooms where the homeowner wanted modern function without losing the home's character — small-format tile, warm wood, brass hardware, period-appropriate light fixtures. We're happy to design that direction when it fits.",
      },
    ],
    featuredServices: FEATURED_DEFAULT,
  },
  {
    slug: "loomis",
    name: "Loomis",
    fullSlug: "bathroom-remodeling-loomis-ca",
    h1: "Bathroom Remodeling in Loomis, CA",
    metaTitle: "Bathroom Remodeling Loomis CA | Auburn Bath",
    metaDescription:
      "Custom bathroom remodels in Loomis, CA — clean, timeless finishes for rural acreage homes and newer subdivisions across South Placer County.",
    eyebrow: "Loomis, CA",
    heroDescription:
      "Custom bathroom remodels for Loomis homes — clean, timeless finishes that work as well in a rural acreage home as they do in a newer subdivision.",
    imageSlug: "bath-hero",
    imageAlt:
      "Bathroom remodeling in Loomis, CA — primary bathroom with sage tile shower, freestanding tub, double rift oak vanity, and brushed brass hardware",
    intro: [
      "Loomis sits in the comfortable transition zone between Auburn's foothills and the flatter Sacramento Valley — close enough to the country to have rural acreage, close enough to suburbia to have newer subdivisions on smaller lots. The bathroom remodels we do in Loomis reflect both worlds: rural-acreage homes that want timeless finishes, and newer subdivision homes upgrading from builder-grade.",
      "Loomis homeowners we work with tend to share one preference: they don't want a bathroom that's going to look dated in five years. Our most-requested look — calm green and stone tones, warm wood, frameless glass, brushed brass or matte black hardware — is exactly that kind of project: distinctive enough to feel intentional, restrained enough to age well.",
    ],
    localContext: {
      title: "What's typical for Loomis bathrooms",
      paragraphs: [
        "Compared to the older foothill towns north of Auburn, Loomis homes are generally newer and easier to remodel. Plumbing is mostly modern, drains run where you'd expect, and primary bathrooms tend to be the right size for a real walk-in shower without sacrificing storage or counter space.",
        "The most common ask is to remove or shrink an oversized garden tub and give that square footage back to the shower or vanity. The second most common is replacing builder-grade tile and lighting with finishes that match the rest of the home. Both are work we deliver well.",
      ],
    },
    commonProjects: {
      title: "Most-requested Loomis projects",
      intro: "Bathroom remodels we deliver most often in Loomis:",
      items: [
        "Removing or shrinking oversized garden tubs",
        "Walk-in shower upgrades from builder-grade fiberglass enclosures",
        "Tub-to-shower conversions in unused primary tubs",
        "Double-vanity replacements with custom wood",
        "Tile, lighting, and ventilation refreshes",
      ],
    },
    driveNote:
      "Loomis is about 25 minutes from our Auburn shop on I-80. The drive is straightforward — we run materials and trades through the day without it affecting build cadence.",
    faqs: [
      {
        q: "Can you keep my Loomis bathroom usable during a remodel?",
        a: "If you have another bathroom in the home, yes — we isolate the work zone with dust barriers, protect floors and surrounding rooms, and keep the rest of the house livable. If yours is a single-bath household, we'll talk through scheduling so you have a workable plan during the build.",
      },
      {
        q: "Do you work on rural-acreage homes outside of town?",
        a: "Yes. We regularly do bathroom remodels on Loomis acreage properties — well water, septic, and longer driveways are all fine. The drive from Auburn doesn't change the build cost; we just plan the schedule a little more deliberately.",
      },
      {
        q: "What styles work best for Loomis homes?",
        a: "Most of our Loomis remodels lean transitional or warm-modern — clean lines, stone-look tile, real wood, soft hardware. That style ages well in both rural homes and newer subdivisions, which is why we keep coming back to it.",
      },
    ],
    featuredServices: FEATURED_DEFAULT,
  },
  {
    slug: "penryn",
    name: "Penryn",
    fullSlug: "bathroom-remodeling-penryn-ca",
    h1: "Bathroom Remodeling in Penryn, CA",
    metaTitle: "Bathroom Remodeling Penryn CA | Auburn Bath",
    metaDescription:
      "Custom bathroom remodels in Penryn, CA — careful tile work, quality fixtures, and bathrooms designed to age gracefully in established Placer County homes.",
    eyebrow: "Penryn, CA",
    heroDescription:
      "Custom bathroom remodels in Penryn — careful tile work, quality fixtures, and bathrooms designed to age gracefully alongside the home.",
    imageSlug: "walkin-hero",
    imageAlt:
      "Bathroom remodeling in Penryn, CA — curbless walk-in shower with sage stone tile, linear drain, and frameless glass enclosure in a quiet foothill home",
    intro: [
      "Penryn is small, established, and quietly proud of itself — a pocket of Placer County where craftsmanship and longevity tend to matter more than trends. The Penryn homeowners we work with usually share that mindset: they're not interested in a bathroom that's going to feel dated when their kids are in college. They want it done right, with the right materials, by people who care about the details.",
      "That perspective shapes every project. We tend to spend more time on tile selection in Penryn than we do in some other communities — flipping samples in the actual bathroom light, walking through layout decisions a second time, choosing grout colors that read warm instead of cold. The finished bathrooms feel inevitable, like they were always going to look this way.",
    ],
    localContext: {
      title: "Designing for Penryn's pace",
      paragraphs: [
        "Penryn has a mix of older farmhouses, mid-century ranches, and newer custom homes on larger lots. Each comes with its own bathroom layout history. Older farmhouses tend to have small primary bathrooms with surprising amounts of original plumbing still in place. Custom homes often have generous primary bathrooms with layout choices that have aged differently than the homeowner expected.",
        "Either way, our approach in Penryn leans into restraint — fewer materials in the room, but each one chosen carefully. Stone-look porcelain. Honed quartz. Real wood vanities. Frameless glass. Brass or matte black hardware. The bathroom doesn't shout; it settles in.",
      ],
    },
    commonProjects: {
      title: "Most-requested Penryn projects",
      intro: "Common Penryn bathroom remodels:",
      items: [
        "Heritage-respecting full bathroom remodels in older farmhouses",
        "Custom walk-in showers with hand-glazed tile or large-format slab",
        "Tub-to-shower conversions designed to feel intentional, not retrofitted",
        "Quality fixture upgrades — solid brass, replaceable cartridges, ceramic discs",
        "Tile work that takes time and reads better for it",
      ],
    },
    driveNote:
      "Penryn is about 25 minutes from our Auburn shop. We schedule Penryn projects with longer on-site days so the drive doesn't shorten productive build hours.",
    faqs: [
      {
        q: "Do you do tile work that respects older Penryn farmhouse character?",
        a: "Yes. We've done plenty of bathrooms in older Penryn homes where the goal was modern function without losing the home's voice — small-format hand-glazed tile, warm wood, brass hardware, period-appropriate light fixtures. That's a different design path than a contemporary remodel, and we're comfortable on both.",
      },
      {
        q: "Will you spend the time to get tile selection right?",
        a: "Yes — and it's usually worth it. Tile is the dominant visual material in any bathroom, and choosing it well takes a couple of conversations and at least one in-the-room sample review. We build that time into our process; we don't rush it.",
      },
      {
        q: "What fixture brands do you specify in Penryn projects?",
        a: "We tend to specify quality brands with replaceable cartridges and solid metal construction — Brizo, Kohler higher tier, Riobel, Rohl, sometimes California Faucets. We avoid plated finishes that flake and cartridges that aren't user-serviceable.",
      },
    ],
    featuredServices: FEATURED_DEFAULT,
  },
  {
    slug: "grass-valley",
    name: "Grass Valley",
    fullSlug: "bathroom-remodeling-grass-valley-ca",
    h1: "Bathroom Remodeling in Grass Valley, CA",
    metaTitle: "Bathroom Remodeling Grass Valley CA | Auburn Bath",
    metaDescription:
      "Bathroom remodels in Grass Valley, CA — opening up older bathroom layouts, redesigning showers, and modernizing ventilation in historic Nevada County homes.",
    eyebrow: "Grass Valley, CA",
    heroDescription:
      "Bathroom remodels for Grass Valley homes — opening up older layouts, redesigning showers, and modernizing ventilation in historic Nevada County housing stock.",
    imageSlug: "tub-hero",
    imageAlt:
      "Bathroom remodeling in Grass Valley, CA — primary bathroom rebuilt with sage stone tile, low-threshold walk-in shower, and frameless glass",
    intro: [
      "Grass Valley is gold-rush historic — a Nevada County town with bathroom stock that often dates to the early 1900s, mid-century post-war additions, or 1970s-era updates that have run their course. The bathrooms we work on in Grass Valley are usually small, original-layout rooms that need a thoughtful rethink rather than a cosmetic refresh.",
      "Our most common Grass Valley project is removing an unused tub, redesigning the shower, and modernizing the ventilation in one coordinated build. The result feels twice as big as the original room without adding any actual square footage. That's the leverage of good design in older homes.",
    ],
    localContext: {
      title: "What's typical for older Grass Valley bathrooms",
      paragraphs: [
        "Pre-1970 Grass Valley bathrooms often have one or more of: a small alcove tub on a skirted wall, a tile shower with original cement-board substrate, a fan that vents into the attic instead of outside, supply lines that should have been replaced thirty years ago, and a layout that doesn't quite fit how anyone uses a bathroom today.",
        "We approach those projects in stages: open the walls carefully, document what we find, plan the layout around what's actually possible, and rebuild with modern waterproofing, real ventilation, and finishes that respect the home's age without freezing it in time. The result is a bathroom that lasts.",
      ],
    },
    commonProjects: {
      title: "Most-requested Grass Valley projects",
      intro:
        "Bathroom remodels we deliver most often in the Grass Valley area:",
      items: [
        "Tub removals and walk-in shower replacements in primary baths",
        "Layout rebuilds in small original-footprint bathrooms",
        "Ventilation upgrades where the original fan vented improperly",
        "Plumbing supply-line replacements in walls open during demo",
        "Heritage-aware tile work in older homes",
      ],
    },
    driveNote:
      "Grass Valley is about 30 minutes from our Auburn shop via Highway 49. We bundle Grass Valley project days into longer on-site stretches so the drive doesn't reduce build productivity.",
    faqs: [
      {
        q: "How do you remodel a tiny Grass Valley bathroom without making it feel cramped?",
        a: "Smart layout decisions help most. Removing an alcove tub, swapping a swing-door for a pocket door, choosing a wall-hung vanity that visually frees floor space, picking lighter tile and grout that bounces window light — small choices that compound. We rarely add square footage; we just use the existing footage better.",
      },
      {
        q: "Are old Grass Valley homes hard to remodel?",
        a: "They take more careful planning, not more guesswork. Older walls aren't always square, original plumbing isn't always where the prints suggest, and substrate condition varies. We plan for that during the design phase so demo doesn't surprise anyone.",
      },
      {
        q: "Do you respect period character in historic Grass Valley homes?",
        a: "Yes. We've done remodels where the homeowner specifically wanted the bathroom to feel like it belongs in a hundred-year-old house — small-format tile, period-appropriate hardware, warm-toned grout, soft lighting. We're comfortable working in that direction when it fits the home.",
      },
    ],
    featuredServices: FEATURED_DEFAULT,
  },
  {
    slug: "nevada-city",
    name: "Nevada City",
    fullSlug: "bathroom-remodeling-nevada-city-ca",
    h1: "Bathroom Remodeling in Nevada City, CA",
    metaTitle: "Bathroom Remodeling Nevada City CA | Auburn Bath",
    metaDescription:
      "Bathroom remodels in Nevada City, CA — preserving historic character while quietly improving function, waterproofing, and finish in older foothill homes.",
    eyebrow: "Nevada City, CA",
    heroDescription:
      "Bathroom remodels for Nevada City homes — preserving historic character while quietly improving function, waterproofing, and finish.",
    imageSlug: "areas-hero",
    imageAlt:
      "Bathroom remodeling in Nevada City, CA — historic foothill home with oak trees and Sierra Nevada terrain, served by Auburn Bath",
    intro: [
      "Nevada City is one of the most distinctive small towns in California — a gold-rush historic district with Victorian homes, mid-century cottages, and a housing stock where character is part of the deal. The bathroom remodels we do in Nevada City reflect that. Owners here usually aren't looking to erase the home's history; they want to update what's failing, modernize what's awkward, and keep what makes the house feel like Nevada City.",
      "That balance is genuinely difficult to do well. Most contractors either over-modernize (a glossy contemporary bathroom dropped into a Victorian) or under-design (no real updates, just new finishes on tired layouts). We aim for the middle: modern function, period-aware finishes, and tile work that takes the home's age seriously.",
    ],
    localContext: {
      title: "What working in Nevada City requires",
      paragraphs: [
        "Older Nevada City bathrooms often need real work behind the tile — substrate replacement, plumbing updates, vent installation, sometimes minor framing reinforcement. We plan that work into the build rather than treating it as an afterthought, because skipping it is what causes a 'remodeled' Victorian bathroom to look tired again in five years.",
        "The fun part is the design. Period-appropriate tile (small-format, hand-glazed, sometimes encaustic), warm wood vanities sized to the room, soft glass, period-correct lighting, and hardware that doesn't fight the rest of the house. A well-designed Nevada City bathroom looks like it grew there.",
      ],
    },
    commonProjects: {
      title: "Most-requested Nevada City projects",
      intro: "Bathroom work we deliver most often in Nevada City:",
      items: [
        "Period-respecting full bathroom remodels in Victorian homes",
        "Heritage-aware tile work — small format, hand-glazed, encaustic",
        "Walk-in shower replacements where the original tile shower failed",
        "Tub-to-shower conversions designed to feel intentional in older homes",
        "Plumbing, vent, and substrate updates while walls are open",
      ],
    },
    driveNote:
      "Nevada City is about 35 minutes from our Auburn shop via Highway 49. We schedule Nevada City projects with longer on-site days and minimize drive cycles so the build cadence stays steady.",
    faqs: [
      {
        q: "Can you remodel a Nevada City Victorian without making it look modern?",
        a: "Yes — that's most of what we do up there. Period-appropriate tile, warm wood, brass or matte black hardware, soft lighting, and careful detailing. The bathroom comes out feeling current without erasing the home's history.",
      },
      {
        q: "Do you do encaustic tile or other heritage tile work?",
        a: "Yes. We've installed encaustic, hand-glazed zellige, small-format Moroccan, and traditional subway in older Nevada City homes. Each takes more setting time than mass-produced porcelain, but the result is worth it in a home this distinctive.",
      },
      {
        q: "Will you handle plumbing and vent upgrades in a historic home?",
        a: "Yes — and we recommend doing them while the walls are open. Older Nevada City bathrooms often have undersized supply lines, problematic vents, and original cast-iron drains. The bathroom remodel is the right time to fix those things, not after.",
      },
    ],
    featuredServices: FEATURED_DEFAULT,
  },
];

export const cityBySlug = (slug: string) =>
  cities.find((c) => c.slug === slug || c.fullSlug === slug);
