import Link from "next/link";

import { Container } from "@/components/container";
import { services } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container size="narrow" className="text-center">
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-forest">
          404 — Not found
        </span>
        <h1 className="mt-3 font-display text-4xl text-soft-black sm:text-5xl">
          That page slipped through a grout line.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
          The link you followed doesn't exist (or doesn't anymore). Try one
          of these instead — they're the most useful pages on the site.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.key}
              href={s.href}
              className="rounded-[var(--radius-card)] border border-line/80 bg-cream p-6 text-left hover:border-forest/40"
            >
              <span className="font-display text-lg text-soft-black">
                {s.title}
              </span>
              <p className="mt-2 text-sm text-muted">{s.blurb}</p>
            </Link>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-forest px-7 py-3 text-sm font-medium text-cream hover:bg-forest-dark"
          >
            Back to home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-forest/30 bg-cream px-7 py-3 text-sm font-medium text-forest hover:bg-sage-light"
          >
            Request a quote
          </Link>
        </div>
      </Container>
    </section>
  );
}
