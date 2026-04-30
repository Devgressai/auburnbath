"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { navLinks, site } from "@/lib/site";
import { Container } from "./container";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-cream/85 backdrop-blur supports-[backdrop-filter]:bg-cream/70">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          aria-label="Auburn Bath — Home"
          className="flex items-center gap-2"
        >
          <span
            aria-hidden
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-forest text-cream font-display text-sm tracking-tight"
          >
            A
          </span>
          <span className="font-display text-lg font-medium tracking-tight text-soft-black">
            Auburn Bath
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-7 text-sm"
        >
          {navLinks.slice(0, -1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-charcoal/80 hover:text-forest transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4 text-sm">
          <a
            href={site.phoneHref}
            className="text-charcoal hover:text-forest"
            aria-label={`Call ${site.name}`}
          >
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-cream shadow-soft hover:bg-forest-dark transition-colors"
          >
            Get Free Quote
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-charcoal hover:bg-sage-light"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            className="h-6 w-6"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
            />
          </svg>
        </button>
      </Container>

      {open ? (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col bg-cream">
          <div className="flex h-16 items-center justify-between border-b border-line/70 px-5">
            <span className="font-display text-lg font-medium tracking-tight text-soft-black">
              Auburn Bath
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-md p-2 text-charcoal hover:bg-sage-light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-6 w-6"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav
            aria-label="Mobile"
            className="flex flex-col gap-1 p-5 text-base"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-charcoal hover:bg-sage-light"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3 border-t border-line/70 p-5">
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center rounded-full border border-line bg-cream px-5 py-3 text-sm font-medium text-charcoal"
            >
              Call {site.phone}
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-forest px-5 py-3 text-sm font-medium text-cream"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
