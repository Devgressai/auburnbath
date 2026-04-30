import { site } from "@/lib/site";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";

/**
 * Big-numeral stat block. Different visual register from the dark
 * TrustRibbon — light background, oversized serif numerals, magazine
 * stat-page feel. Every stat is verifiable; no invented numbers.
 */

const stats: Array<{ value: string; label: string; sublabel: string }> = [
  {
    value: "100%",
    label: "Bathroom focus",
    sublabel: "We don't do kitchens, additions, or general repairs.",
  },
  {
    value: "10",
    label: "Foothill towns served",
    sublabel: "Auburn + 9 surrounding Placer & Nevada Co. communities.",
  },
  {
    value: "$0",
    label: "In-home consultation",
    sublabel: "Free, on-site, with a line-item estimate.",
  },
  {
    value: `#${site.license}`,
    label: "CA contractor license",
    sublabel: "Insured + permitted, on file for every project.",
  },
];

export function HomeStats() {
  return (
    <section className="relative py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Why Auburn homeowners pick us"
          title="The numbers behind a focused local crew."
          align="center"
        />
        <ul className="mt-14 grid grid-cols-2 gap-x-2 gap-y-10 sm:gap-x-6 lg:grid-cols-4 lg:divide-x lg:divide-line/70 lg:gap-0">
          {stats.map((stat) => (
            <li
              key={stat.label}
              className="flex flex-col items-center text-center lg:px-6"
            >
              <span className="font-display text-[2.75rem] font-medium leading-none text-soft-black sm:text-[3.5rem] lg:text-[clamp(3rem,5vw,4rem)] tracking-tight">
                {stat.value}
              </span>
              <span className="mt-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-forest">
                {stat.label}
              </span>
              <span className="mt-2 max-w-[16ch] text-xs leading-5 text-muted sm:text-[13px]">
                {stat.sublabel}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
