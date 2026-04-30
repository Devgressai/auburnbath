import Link from "next/link";

import { navLinks, serviceAreas, services, site } from "@/lib/site";
import { Container } from "./container";
import { LogoMark } from "./logo-mark";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-24 border-t border-line/70 bg-sand">
      <span
        aria-hidden
        className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-sage/40 to-transparent"
      />
      <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-10 w-10" />
            <div className="leading-tight">
              <div className="font-display text-lg font-medium tracking-tight text-soft-black">
                Auburn Bath
              </div>
              <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
                Bathroom Remodeling · Auburn, CA
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-6 text-muted">
            {site.parentLine}
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted">
            CA License <span className="text-charcoal">#{site.license}</span>
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-line/80 bg-cream px-3 py-1.5 text-xs text-muted">
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full bg-forest"
            />
            Designed and built in Auburn, CA
          </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className="font-display text-xs uppercase tracking-[0.2em] text-muted">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="text-charcoal hover:text-forest transition-colors"
                >
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/bathroom-remodeling-cost-auburn-ca"
                className="text-charcoal hover:text-forest transition-colors"
              >
                Cost Guide
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="font-display text-xs uppercase tracking-[0.2em] text-muted">
            Service Areas
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
            {serviceAreas.map((a) => (
              <li key={a.slug}>
                <Link
                  href={a.href}
                  className="text-charcoal hover:text-forest transition-colors"
                >
                  {a.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="font-display text-xs uppercase tracking-[0.2em] text-muted">
            Contact
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 text-charcoal hover:text-forest transition-colors"
              >
                <span
                  aria-hidden
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-sage-light text-forest"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="h-3.5 w-3.5"
                    aria-hidden
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
            </li>
            <li className="text-muted">
              Auburn, {site.region} & nearby foothill communities
            </li>
          </ul>
          <Link href="/contact" className="btn btn-primary mt-6">
            Request Free Quote
          </Link>
        </div>
      </Container>

      <div className="border-t border-line/70 bg-cream">
        <Container className="flex flex-col gap-4 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.name}. A bathroom service brand of{" "}
            {site.parent}.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap gap-5">
            <Link
              href="/privacy-policy"
              className="hover:text-forest transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-forest transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/about"
              className="hover:text-forest transition-colors"
            >
              About
            </Link>
            <Link
              href="/areas-we-serve"
              className="hover:text-forest transition-colors"
            >
              Service Areas
            </Link>
          </nav>
        </Container>
      </div>
    </footer>
  );
}
