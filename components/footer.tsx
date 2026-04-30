import Link from "next/link";

import { navLinks, serviceAreas, services, site } from "@/lib/site";
import { Container } from "./container";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-line/70 bg-sand">
      <Container className="grid gap-10 py-14 lg:grid-cols-4 lg:gap-12">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2">
            <span
              aria-hidden
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-forest text-cream font-display text-sm"
            >
              A
            </span>
            <span className="font-display text-lg font-medium tracking-tight text-soft-black">
              Auburn Bath
            </span>
          </div>
          <p className="mt-4 text-sm leading-6 text-muted">
            {site.parentLine}
          </p>
          <p className="mt-3 text-sm text-muted">
            CA License #{site.license}
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-[0.16em] text-muted">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="text-charcoal hover:text-forest"
                >
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/bathroom-remodeling-cost-auburn-ca"
                className="text-charcoal hover:text-forest"
              >
                Cost Guide
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-[0.16em] text-muted">
            Service Areas
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {serviceAreas.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/areas-we-serve#${a.slug}`}
                  className="text-charcoal hover:text-forest"
                >
                  {a.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-[0.16em] text-muted">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={site.phoneHref}
                className="text-charcoal hover:text-forest"
              >
                {site.phone}
              </a>
            </li>
            <li className="text-charcoal">{site.email}</li>
            <li className="text-muted">
              Auburn, {site.region} & nearby foothill communities
            </li>
          </ul>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-cream hover:bg-forest-dark"
          >
            Request Free Quote
          </Link>
        </div>
      </Container>
      <div className="border-t border-line/70 bg-sand">
        <Container className="flex flex-col gap-4 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap gap-5">
            <Link href="/privacy-policy" className="hover:text-forest">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-forest">
              Terms
            </Link>
            <Link href="/about" className="hover:text-forest">
              About
            </Link>
          </nav>
        </Container>
      </div>
    </footer>
  );
}
