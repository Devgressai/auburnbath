"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { navLinks, site } from "@/lib/site";
import { Container } from "./container";
import { LogoMark } from "./logo-mark";

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
    <header className="sticky top-0 z-40 border-b border-line/70 bg-cream/85 backdrop-blur-md supports-[backdrop-filter]:bg-cream/65">
      <Container className="flex h-16 items-center justify-between gap-6 lg:h-[72px]">
        <Link
          href="/"
          aria-label="Auburn Bath — Home"
          className="group flex items-center gap-2.5"
        >
          <LogoMark className="h-9 w-9 transition-transform group-hover:rotate-[-4deg]" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-medium tracking-tight text-soft-black">
              Auburn Bath
            </span>
            <span className="hidden sm:inline text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
              Bathroom Remodeling · Auburn, CA
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-6 text-sm"
        >
          {navLinks.slice(0, -1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-charcoal/85 hover:text-forest transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4 text-sm">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-1.5 text-charcoal hover:text-forest transition-colors"
            aria-label={`Call ${site.name}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="h-3.5 w-3.5 text-forest"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372a1.125 1.125 0 0 0-.964-1.113l-4.114-.62a1.125 1.125 0 0 0-1.155.564l-.928 1.546a13.514 13.514 0 0 1-6.13-6.13l1.547-.928a1.125 1.125 0 0 0 .564-1.155l-.62-4.114A1.125 1.125 0 0 0 8.872 3H7.5A4.25 4.25 0 0 0 2.25 7.25v-.5Z"
              />
            </svg>
            {site.phone}
          </a>
          <Link href="/contact" className="btn btn-primary">
            Get Free Quote
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-full border border-line/80 p-2 text-charcoal hover:bg-sage-light transition-colors"
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
            className="h-5 w-5"
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
            <div className="flex items-center gap-2.5">
              <LogoMark className="h-9 w-9" />
              <span className="font-display text-lg font-medium tracking-tight text-soft-black">
                Auburn Bath
              </span>
            </div>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full border border-line/80 p-2 text-charcoal hover:bg-sage-light transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-5 w-5"
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
            className="flex flex-col gap-0.5 p-5 text-base"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3.5 text-charcoal hover:bg-sage-light transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3 border-t border-line/70 p-5">
            <a href={site.phoneHref} className="btn btn-secondary">
              Call {site.phone}
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
