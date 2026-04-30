import Link from "next/link";

import { site } from "@/lib/site";
import { Container } from "./container";

export function CTASection({
  title = "Ready to plan your Auburn bathroom remodel?",
  description = "Tell us a little about your space and how you'd like it to feel — we'll follow up with a clear next step, no pressure.",
  variant = "forest",
}: {
  title?: string;
  description?: string;
  variant?: "forest" | "sage";
}) {
  const isSage = variant === "sage";
  return (
    <section
      className={
        isSage
          ? "py-20 bg-sage-light"
          : "py-20 bg-forest text-cream"
      }
    >
      <Container className="text-center">
        <h2
          className={
            isSage
              ? "font-display text-3xl sm:text-4xl text-soft-black"
              : "font-display text-3xl sm:text-4xl text-cream"
          }
        >
          {title}
        </h2>
        <p
          className={
            "mx-auto mt-4 max-w-2xl text-base leading-7 sm:text-lg " +
            (isSage ? "text-muted" : "text-cream/85")
          }
        >
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className={
              isSage
                ? "inline-flex items-center justify-center rounded-full bg-forest px-7 py-3 text-sm font-medium text-cream hover:bg-forest-dark"
                : "inline-flex items-center justify-center rounded-full bg-cream px-7 py-3 text-sm font-medium text-forest-dark hover:bg-stone"
            }
          >
            Get Free Quote
          </Link>
          <a
            href={site.phoneHref}
            className={
              isSage
                ? "inline-flex items-center justify-center rounded-full border border-forest/30 px-7 py-3 text-sm font-medium text-forest hover:bg-cream"
                : "inline-flex items-center justify-center rounded-full border border-cream/40 px-7 py-3 text-sm font-medium text-cream hover:bg-forest-dark"
            }
          >
            Call {site.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}
