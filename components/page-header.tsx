import { Container } from "./container";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-line/70 bg-cream">
      <Container className="py-12 sm:py-16">
        {eyebrow ? (
          <div className="mb-3 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-forest">
            <span className="h-px w-8 bg-forest/50" aria-hidden />
            {eyebrow}
          </div>
        ) : null}
        <h1 className="font-display text-3xl text-soft-black sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
