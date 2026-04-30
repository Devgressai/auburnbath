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
          ? "relative overflow-hidden py-20 bg-sage-light sm:py-24"
          : "relative overflow-hidden py-20 bg-forest text-cream sm:py-24"
      }
    >
      {!isSage ? (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_120%_at_50%_-20%,rgba(122,158,142,0.25),transparent_60%)]"
        />
      ) : (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_120%_at_50%_120%,rgba(47,93,80,0.18),transparent_70%)]"
        />
      )}
      <Container className="relative text-center">
        <span
          className={
            "mx-auto mb-4 flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] " +
            (isSage ? "text-forest" : "text-cream/80")
          }
        >
          <span
            aria-hidden
            className={
              "h-px w-8 " +
              (isSage ? "bg-forest/40" : "bg-cream/40")
            }
          />
          Free quote · Local Auburn, CA
          <span
            aria-hidden
            className={
              "h-px w-8 " +
              (isSage ? "bg-forest/40" : "bg-cream/40")
            }
          />
        </span>
        <h2
          className={
            isSage
              ? "mx-auto max-w-3xl font-display text-3xl text-soft-black sm:text-[2.5rem]"
              : "mx-auto max-w-3xl font-display text-3xl text-cream sm:text-[2.5rem]"
          }
        >
          {title}
        </h2>
        <p
          className={
            "mx-auto mt-5 max-w-2xl text-base leading-7 sm:text-lg " +
            (isSage ? "text-muted" : "text-cream/85")
          }
        >
          {description}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className={isSage ? "btn btn-primary" : "btn btn-on-forest"}
          >
            Get Free Quote
            <ArrowRight />
          </Link>
          <a
            href={site.phoneHref}
            className={
              isSage ? "btn btn-secondary" : "btn btn-on-forest-outline"
            }
          >
            Call {site.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-3.5 w-3.5"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12l-7.5 7.5M3 12h18"
      />
    </svg>
  );
}
