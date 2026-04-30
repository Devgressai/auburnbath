import { Container } from "./container";

const items = [
  { label: "Licensed California contractor", icon: ShieldIcon },
  { label: "Bathroom-focused remodeling", icon: TileIcon },
  { label: "Local Placer County crew", icon: PinIcon },
  { label: "Durable waterproofing systems", icon: DropIcon },
];

export function TrustBar() {
  return (
    <section
      aria-label="Trust"
      className="border-y border-line/70 bg-gradient-to-b from-sand to-cream"
    >
      <Container className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-6">
        {items.map(({ label, icon: Icon }) => (
          <span
            key={label}
            className="inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-charcoal/80"
          >
            <Icon />
            {label}
          </span>
        ))}
      </Container>
    </section>
  );
}

function ShieldIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-4 w-4 text-forest"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}
function TileIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      className="h-4 w-4 text-forest"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 5.25h6.75v6.75H3.75zM13.5 5.25h6.75v6.75H13.5zM3.75 15h6.75v6.75H3.75zM13.5 15h6.75v6.75H13.5z"
      />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-4 w-4 text-forest"
      aria-hidden
    >
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
}
function DropIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      className="h-4 w-4 text-forest"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2.5c4 6 7 9.2 7 13a7 7 0 1 1-14 0c0-3.8 3-7 7-13Z"
      />
    </svg>
  );
}
