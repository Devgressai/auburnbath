import { site } from "@/lib/site";
import { Container } from "./container";

/**
 * Subtle, conversion-safe attribution to the parent brand. Sits below
 * the main FAQ + CTA on the homepage so it never competes with the
 * primary lead-capture flow. Only the parent name is clickable.
 */
export function HomeOakwoodTrust() {
  return (
    <section
      className="border-t border-line/70 bg-cream"
      aria-label="Parent brand"
    >
      <Container className="py-12 sm:py-14 max-w-3xl text-center">
        <span className="eyebrow eyebrow-plain text-forest/80">
          Backed by
        </span>
        <h2 className="mt-3 font-display text-2xl text-soft-black sm:text-[1.75rem]">
          Backed by {site.parent}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
          {site.name} is locally focused on bathroom and shower remodels
          in the Auburn area, with projects completed by the team behind{" "}
          <a
            href={site.parentUrl}
            className="text-forest hover:text-forest-dark underline underline-offset-2"
            rel="noopener"
          >
            Oakwood Remodeling Group
          </a>
          .
        </p>
      </Container>
    </section>
  );
}
