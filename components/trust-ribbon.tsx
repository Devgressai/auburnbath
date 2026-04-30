import { site } from "@/lib/site";
import { Container } from "./container";

/**
 * High-contrast dark forest ribbon rendered immediately below the
 * homepage hero. Acts as the page's primary attention anchor: locks
 * the eye after the hero, lays out 4 verifiable trust stats, and
 * carries the calm-luxury palette into a darker tonal range without
 * being aggressive.
 *
 * No invented numbers — every value is verifiable.
 */

const items: Array<{
  label: string;
  value: string;
  subtitle: string;
  iconKey: "specialty" | "license" | "service-area" | "parent";
}> = [
  {
    iconKey: "specialty",
    label: "Specialty",
    value: "Bathroom-Only",
    subtitle: "Focus, not generalist",
  },
  {
    iconKey: "license",
    label: "License",
    value: `CA #${site.license}`,
    subtitle: "Insured + permitted",
  },
  {
    iconKey: "service-area",
    label: "Service area",
    value: "10 Foothill Towns",
    subtitle: "Auburn + nearby Placer & Nevada Co.",
  },
  {
    iconKey: "parent",
    label: "Backed by",
    value: site.parent,
    subtitle: "Local parent brand",
  },
];

export function TrustRibbon() {
  return (
    <section
      aria-label="Trust"
      className="relative overflow-hidden bg-forest-dark text-cream"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-1/2 mx-auto h-[140%] max-w-5xl bg-[radial-gradient(50%_60%_at_50%_50%,rgba(122,158,142,0.16),transparent_75%)]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(200,169,115,0.10),transparent_65%)]"
      />
      <Container className="relative grid gap-8 py-10 sm:py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {items.map((item) => (
          <div
            key={item.value}
            className="flex items-start gap-4"
          >
            <span
              aria-hidden
              className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream/8 ring-1 ring-cream/20 text-cream/90"
            >
              <Icon iconKey={item.iconKey} />
            </span>
            <div className="min-w-0">
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/55">
                {item.label}
              </div>
              <div className="mt-1.5 font-display text-lg font-medium leading-snug text-cream sm:text-xl">
                {item.value}
              </div>
              <div className="mt-1 text-[12px] leading-snug text-cream/70">
                {item.subtitle}
              </div>
            </div>
          </div>
        ))}
      </Container>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cream/15 to-transparent"
      />
    </section>
  );
}

function Icon({ iconKey }: { iconKey: string }) {
  const common = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.5,
    className: "h-5 w-5",
    "aria-hidden": true as const,
  };
  switch (iconKey) {
    case "specialty":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5v6.75H3.75zM3.75 12h16.5v6.75H3.75zM7.5 5.25v13.5M16.5 5.25v13.5"
          />
        </svg>
      );
    case "license":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      );
    case "service-area":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z"
          />
        </svg>
      );
    case "parent":
    default:
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 21V8.25m0 0L12 3l9.75 5.25M2.25 8.25l9.75 5.25 9.75-5.25M21.75 8.25V21M9.75 21V13.5h4.5V21"
          />
        </svg>
      );
  }
}
