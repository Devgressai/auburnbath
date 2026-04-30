import { Container } from "./container";

const items = [
  "Licensed California contractor",
  "Bathroom-focused remodeling",
  "Local Placer County crew",
  "Durable waterproofing systems",
];

export function TrustBar() {
  return (
    <section
      aria-label="Trust"
      className="border-y border-line/70 bg-cream/60"
    >
      <Container className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5 text-xs uppercase tracking-[0.18em] text-muted sm:text-[11px]">
        {items.map((item) => (
          <span
            key={item}
            className="inline-flex items-center gap-2"
          >
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full bg-forest/60"
            />
            {item}
          </span>
        ))}
      </Container>
    </section>
  );
}
