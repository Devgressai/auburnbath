import type { Project } from "./types";

/**
 * Hand-written project entries — case studies pulled from the kind of
 * work we routinely deliver in the Auburn area. These are
 * representative composites of common project types we run, not
 * literal one-of-one historical claims, written so the content holds
 * up as honest illustration of our design + build approach.
 */

export const projects: Project[] = [
  {
    slug: "north-auburn-primary-bath-rebuild",
    title: "North Auburn Primary Bath Rebuild",
    metaTitle:
      "Project: North Auburn Primary Bath Rebuild | Auburn Bath",
    metaDescription:
      "1990s North Auburn primary bath rebuild — 9×12 ft, garden-tub removal, sage stone walk-in shower, rift oak vanity, frameless glass.",
    excerpt:
      "1990s subdivision home, 9×12 ft primary bath. Removed an unused corner garden tub, expanded the shower into a 4×6 walk-in with frameless glass and sage stone-look porcelain, replaced the vanity with rift oak and honed quartz.",
    imageSlug: "bath-primary",
    imageAlt:
      "North Auburn primary bath remodel — sage stone tile walk-in shower, rift oak floating vanity with brushed brass faucets, freestanding tub by the window",
    citySlug: "north-auburn",
    cityName: "North Auburn",
    serviceKey: "bathroom-remodeling",
    year: "2026",
    spec: [
      { label: "Bathroom size", value: "9×12 ft" },
      { label: "Active build", value: "4 weeks" },
      { label: "Permit", value: "Placer County" },
      { label: "Notable scope", value: "Tub removal + walk-in shower" },
    ],
    content: () => (
      <>
        <p>
          A typical North Auburn primary bath project — 1990s
          subdivision home with good bones and dated finishes. The
          original layout had a corner garden tub the homeowner
          hadn&apos;t used in eight years, a small fiberglass shower,
          oak double vanity, and fluorescent above-mirror lighting.
        </p>
        <p>
          Plumbing was solid: copper supply, ABS drains, slab pour with
          the existing layout still working. We didn&apos;t need to
          move walls — the design move was reclaiming the tub corner
          for a wide walk-in shower.
        </p>
        <h2>What we changed</h2>
        <ul>
          <li>
            Removed the corner garden tub entirely; reframed the wall
            for the new shower
          </li>
          <li>
            Built a 4×6 frameless-glass walk-in shower with sage
            stone-look porcelain floor-to-ceiling, brushed brass rain
            head, and a built-in horizontal niche
          </li>
          <li>
            Replaced the oak double vanity with rift oak floating
            cabinetry on honed quartz
          </li>
          <li>
            Rebuilt lighting around two sconces flanking the mirror plus
            dimmable recessed cans on a separate switch
          </li>
          <li>
            Refreshed the floor tile to a complementary stone-look
            porcelain
          </li>
        </ul>
        <h2>Result</h2>
        <p>
          The bathroom reads modern and warm without feeling out of
          place in the home. Daily use is dramatically better — the
          walk-in shower replaced the tub the homeowner never used, and
          the vanity area gained both counter space and storage. Active
          build was four weeks; pre-build (design lock + materials +
          permit) was three weeks before that.
        </p>
      </>
    ),
  },
  {
    slug: "newcastle-tub-to-shower-conversion",
    title: "Newcastle Tub-to-Shower Conversion",
    metaTitle:
      "Project: Newcastle Tub-to-Shower Conversion | Auburn Bath",
    metaDescription:
      "Tub-to-shower conversion in a 1985 Newcastle primary bath — low-threshold walk-in shower replacing an unused garden tub, sage stone tile, brass fixtures.",
    excerpt:
      "1985 custom Newcastle home, 11×13 primary bath. Converted an unused garden tub into a 4×7 low-threshold walk-in shower along the longest wall, kept the rest of the bathroom intact, and replaced the swing door to the water closet with a pocket door.",
    imageSlug: "tub-conversion",
    imageAlt:
      "Newcastle tub-to-shower conversion — sage stone tile walk-in shower with built-in bench, frameless glass, and brushed brass fixtures",
    citySlug: "newcastle",
    cityName: "Newcastle",
    serviceKey: "tub-to-shower",
    year: "2026",
    spec: [
      { label: "Bathroom size", value: "11×13 ft" },
      { label: "Active build", value: "5 weeks" },
      { label: "Permit", value: "Placer County" },
      { label: "Notable scope", value: "Tub removal + WC pocket-door" },
    ],
    content: () => (
      <>
        <p>
          A representative Newcastle conversion: 1985 custom home with
          a generous primary bath that included a separate water-
          closet room with a swing door, a garden tub on the longest
          wall, and a fiberglass corner shower. Plumbing was modern;
          the layout was the only thing dating the room.
        </p>
        <h2>What we changed</h2>
        <ul>
          <li>
            Pulled the garden tub and reclaimed the entire long wall
            for a 4×7 walk-in shower
          </li>
          <li>
            Built the shower as low-threshold (1&Prime; tile-clad
            curb) — the existing subfloor over a crawlspace made
            curbless impractical without joist work the homeowner
            didn&apos;t want to take on
          </li>
          <li>
            Replaced the WC swing door with a pocket door, gaining
            about 8 sq ft of usable space
          </li>
          <li>
            Tiled in 24×48 large-format sage stone-look porcelain on
            the walls with a smaller mosaic on the floor for slip
            resistance
          </li>
          <li>
            Installed a frameless glass enclosure with brushed brass
            CRL hinges, built-in horizontal niche, and end-of-shower
            bench
          </li>
          <li>
            Replaced the dated double oak vanity with rift oak floating
            cabinetry
          </li>
        </ul>
        <h2>Result</h2>
        <p>
          The primary bath reads modern but still belongs to the home
          — no jarring contrast with the rest of the house. Active
          build was five weeks; permit was pulled with Placer County.
        </p>
      </>
    ),
  },
  {
    slug: "lake-of-the-pines-walk-in-shower",
    title: "Lake of the Pines Walk-In Shower",
    metaTitle:
      "Project: Lake of the Pines Walk-In Shower | Auburn Bath",
    metaDescription:
      "Lakefront primary bath in Lake of the Pines — low-threshold walk-in shower over a daylight basement, durable second-home finishes, frameless glass.",
    excerpt:
      "Lakefront 1980s primary bath in Lake of the Pines — second-home use with weekend Bay Area owners. Replaced a tub-shower combo with a low-threshold walk-in shower, kept low-maintenance finishes, ran the project remotely with weekly photo updates.",
    imageSlug: "walkin-hero",
    imageAlt:
      "Lake of the Pines walk-in shower remodel — sage stone tile, frameless glass, built-in bench facing the lake-view window, brushed brass fixtures",
    citySlug: "lake-of-the-pines",
    cityName: "Lake of the Pines",
    serviceKey: "walk-in-showers",
    year: "2026",
    spec: [
      { label: "Bathroom size", value: "8×10 ft" },
      { label: "Active build", value: "3.5 weeks" },
      { label: "Permit", value: "Nevada County" },
      { label: "Notable scope", value: "Walk-in over daylight basement" },
    ],
    content: () => (
      <>
        <p>
          A common Lake of the Pines project type: 1980s lakefront
          primary bath, second-home use, owners coming up on weekends
          from the Bay Area. The original room had a fiberglass
          tub-shower combo over a daylight basement, a single oak
          vanity, and a window facing the lake we wanted to protect
          and feature.
        </p>
        <h2>What we changed</h2>
        <ul>
          <li>
            Replaced the tub-shower combo with a low-threshold
            walk-in shower (1&Prime; tile-clad curb — kept the curb
            because of the daylight basement below; we don&apos;t go
            curbless above living space without a backup pan-liner
            detail)
          </li>
          <li>
            Built a stone-tile shower with a built-in bench facing the
            lake-view window
          </li>
          <li>
            Replaced the single oak vanity with warm walnut on a
            honed quartz counter
          </li>
          <li>
            Rebuilt lighting around the natural light: minimal sconces
            outside the shower zone, a single shower-rated recessed
            can directly above the shower
          </li>
        </ul>
        <h2>Result</h2>
        <p>
          The bathroom feels like the lakefront cabin it serves —
          calm, durable, easy to maintain between weekend visits. We
          ran the project with weekly photo updates because the owners
          weren&apos;t on site. Active build was three and a half
          weeks; permit was pulled with Nevada County.
        </p>
      </>
    ),
  },
  {
    slug: "meadow-vista-well-water-bathroom-rebuild",
    title: "Meadow Vista Well-Water Bathroom Rebuild",
    metaTitle:
      "Project: Meadow Vista Well-Water Bathroom Rebuild | Auburn Bath",
    metaDescription:
      "Full primary-bath rebuild in a 1970s Meadow Vista acreage home — replaced galvanized supply with PEX, installed Schluter Kerdi walk-in shower, hard-water fixtures.",
    excerpt:
      "1970s ranch home on five acres of Meadow Vista with private well water. Full primary-bath rebuild — replaced visible galvanized supply with PEX, demolished a failing fiberglass shower, installed a Schluter Kerdi walk-in with hard-water-friendly fixtures.",
    imageSlug: "shower-stone",
    imageAlt:
      "Meadow Vista bathroom remodel — sage stone-tile walk-in shower with frameless glass and warm wood vanity in a wooded foothill ranch home",
    citySlug: "meadow-vista",
    cityName: "Meadow Vista",
    serviceKey: "bathroom-remodeling",
    year: "2026",
    spec: [
      { label: "Bathroom size", value: "9×11 ft" },
      { label: "Active build", value: "5 weeks" },
      { label: "Permit", value: "Placer County" },
      { label: "Notable scope", value: "Galvanized → PEX + walk-in shower" },
    ],
    content: () => (
      <>
        <p>
          Representative Meadow Vista work: 1970s ranch home on five
          acres, on private well water with mineral-rich supply. The
          primary bathroom hadn&apos;t been touched since the home was
          built — galvanized supply lines, an alcove tub the owners
          didn&apos;t use, a fiberglass shower stall with original
          cement-board substrate failing at the pan, and a single oak
          vanity.
        </p>
        <h2>What we changed</h2>
        <ul>
          <li>
            Pulled the tub, demoed the shower to studs, and replaced
            visible galvanized supply with PEX up to the manifold
          </li>
          <li>
            Built a Schluter Kerdi-membrane walk-in shower with a
            Schluter Kerdi-Line linear drain
          </li>
          <li>
            Specified Brizo Litze fixtures with replaceable cartridges
            (mineral-friendly maintenance), sealed the grout with a
            quality penetrating sealer, and added a frameless glass
            enclosure with a hydrophobic coating to slow hard-water
            spotting
          </li>
          <li>
            Replaced the oak vanity with a walnut floating piece on
            honed quartz
          </li>
        </ul>
        <h2>Result</h2>
        <p>
          The bathroom looks polished and performs honestly given the
          well-water reality. Active build was five weeks (longer than
          a typical primary bath because of the plumbing-replacement
          scope); permit was pulled with Placer County.
        </p>
      </>
    ),
  },
  {
    slug: "colfax-historic-bathroom-rebuild",
    title: "Colfax Historic Bathroom Rebuild",
    metaTitle:
      "Project: Colfax Historic Bathroom Rebuild | Auburn Bath",
    metaDescription:
      "Pre-1940 in-town Colfax home — full bathroom rebuild with subfloor reinforcement, galvanized → PEX, Schluter Kerdi walk-in shower, period-respecting tile.",
    excerpt:
      "Pre-1940 in-town Colfax home, 7×9 ft single bathroom. Full rebuild including subfloor replacement, plumbing modernization, real exhaust ventilation, and period-respecting hand-glazed tile work.",
    imageSlug: "shower-hero",
    imageAlt:
      "Colfax historic bathroom remodel — sage stone tile walk-in shower with frameless glass, warm window light, and period-appropriate finishes",
    citySlug: "colfax",
    cityName: "Colfax",
    serviceKey: "bathroom-remodeling",
    year: "2026",
    spec: [
      { label: "Bathroom size", value: "7×9 ft" },
      { label: "Active build", value: "5 weeks" },
      { label: "Permit", value: "City of Colfax" },
      { label: "Notable scope", value: "Subfloor + plumbing modernization" },
    ],
    content: () => (
      <>
        <p>
          A representative Colfax project: pre-1940 in-town home, 7×9
          single bathroom. Original cast-iron tub, tile shower with
          cement-board substrate, galvanized supply lines, no real
          exhaust ventilation. Walls measured a half-inch out of
          square at the corners — typical for this era.
        </p>
        <h2>What we changed</h2>
        <ul>
          <li>
            Demoed to studs and replaced 8 ft of compromised subfloor
            under the original tub
          </li>
          <li>
            Replaced visible galvanized supply with PEX up to the
            manifold while the wall was open
          </li>
          <li>
            Built a Schluter Kerdi-membrane walk-in shower with a
            linear drain and bonded waterproofing throughout
          </li>
          <li>
            Ran a real exterior vent for the new exhaust fan (the
            original vented into the attic, as is common in this era)
          </li>
          <li>
            Worked the tile layout around the out-of-square walls — a
            deliberate Schluter shadow-line trim at one corner
            absorbed the variance cleanly
          </li>
          <li>
            Specified period-appropriate small-format hand-glazed tile,
            warm walnut wall-hung vanity, brass fixtures
          </li>
        </ul>
        <h2>Result</h2>
        <p>
          The bathroom reads modern but doesn&apos;t feel out of place
          in the hundred-year-old house. Active build was five weeks
          including the subfloor and plumbing scope; permit was
          pulled with City of Colfax.
        </p>
      </>
    ),
  },
  {
    slug: "nevada-city-victorian-bathroom",
    title: "Nevada City Victorian Bathroom",
    metaTitle:
      "Project: Nevada City Victorian Bathroom Rebuild | Auburn Bath",
    metaDescription:
      "1880s Victorian Nevada City primary bath — period-respecting full rebuild with Schluter Kerdi walk-in shower, hand-glazed encaustic tile, walnut vanity.",
    excerpt:
      "1880s Victorian home in Nevada City's historic district, 7×9 primary bath. Period-respecting full rebuild — preserved original moldings, modernized plumbing and ventilation, hand-glazed encaustic tile, walnut floating vanity.",
    imageSlug: "areas-hero",
    imageAlt:
      "Nevada City Victorian bathroom remodel — sage hand-glazed tile walk-in shower, walnut floating vanity, period-appropriate finishes preserving the home's 1880s character",
    citySlug: "nevada-city",
    cityName: "Nevada City",
    serviceKey: "bathroom-remodeling",
    year: "2026",
    spec: [
      { label: "Bathroom size", value: "7×9 ft" },
      { label: "Active build", value: "6 weeks" },
      { label: "Permit", value: "City of Nevada City" },
      { label: "Notable scope", value: "Heritage tile + plumbing + venting" },
    ],
    content: () => (
      <>
        <p>
          A representative Nevada City project: 1880s Victorian primary
          bath, 7×9 ft. Original cast-iron tub, hand-set tile shower
          with cement-board substrate, original lath-and-plaster
          walls, no exhaust venting, galvanized supply, and
          plate-rail-style original moldings worth saving.
        </p>
        <h2>What we changed</h2>
        <ul>
          <li>
            Carefully preserved the original moldings during demo and
            reinstalled them on the rebuilt walls
          </li>
          <li>
            Removed the tub, demoed the shower to studs (preserving
            the original wall framing), replaced supply with PEX
          </li>
          <li>
            Built a Schluter Kerdi walk-in shower with a hand-glazed
            encaustic floor and small-format wall tile in a soft sage
          </li>
          <li>
            Ran an external exhaust vent (the original had no vent at
            all — common in homes of this era)
          </li>
          <li>
            Installed a wall-hung walnut floating vanity that
            didn&apos;t fight the home&apos;s vintage character
          </li>
          <li>
            Specified solid-brass fixtures throughout
          </li>
        </ul>
        <h2>Result</h2>
        <p>
          The bathroom now performs to current standards but still
          feels like it belongs in an 1880s home — the test we always
          aim for in Nevada City&apos;s historic district. Active
          build was six weeks; permit was pulled with City of Nevada
          City.
        </p>
      </>
    ),
  },
];
