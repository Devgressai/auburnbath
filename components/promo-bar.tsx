import { site } from "@/lib/site";

/**
 * Thin sitewide promo strip rendered above the header. Subtle
 * sage-tinted band with phone + free-consult line — gets the phone
 * visible on first impression without competing with the hero.
 * Scrolls away with the page (not sticky) so the dark header below
 * stays the visible nav bar.
 */
export function PromoBar() {
  return (
    <div className="bg-sage-light/60 border-b border-line/70 text-charcoal">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-1 px-5 py-2 text-[12px] sm:px-8">
        <a
          href={site.phoneHref}
          className="inline-flex items-center gap-2 font-semibold hover:text-forest transition-colors"
          aria-label={`Call ${site.name}`}
        >
          <span
            aria-hidden
            className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-forest text-cream"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-2.5 w-2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372a1.125 1.125 0 0 0-.964-1.113l-4.114-.62a1.125 1.125 0 0 0-1.155.564l-.928 1.546a13.514 13.514 0 0 1-6.13-6.13l1.547-.928a1.125 1.125 0 0 0 .564-1.155l-.62-4.114A1.125 1.125 0 0 0 8.872 3H7.5A4.25 4.25 0 0 0 2.25 7.25v-.5Z"
              />
            </svg>
          </span>
          {site.phone}
        </a>
        <span aria-hidden className="hidden text-line sm:inline">
          ·
        </span>
        <span className="text-muted">
          Free in-home consultation
        </span>
        <span aria-hidden className="hidden text-line sm:inline">
          ·
        </span>
        <span className="hidden text-muted sm:inline">
          No pressure, no obligation
        </span>
      </div>
    </div>
  );
}
