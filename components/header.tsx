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
    <header className="sticky top-0 z-40 bg-forest-dark text-cream/95">
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-[72px] lg:gap-6">
        <Link
          href="/"
          aria-label="Auburn Bath — Home"
          className="group flex shrink-0 items-center gap-3"
        >
          <LogoMark
            tone="light"
            className="h-10 w-10 shrink-0 transition-transform duration-500 group-hover:-translate-y-[1px] group-hover:scale-[1.05]"
          />
          <span
            aria-hidden
            className="hidden h-7 w-px bg-gradient-to-b from-cream/0 via-cream/25 to-cream/0 sm:block"
          />
          <span className="flex flex-col leading-none">
            <span className="whitespace-nowrap font-display text-[1.18rem] font-medium tracking-[-0.012em] text-cream">
              Auburn Bath
            </span>
            <span className="mt-1 hidden items-center gap-1.5 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/55 2xl:inline-flex">
              <span className="text-cream/80">Bathroom Remodeling</span>
              <span
                aria-hidden
                className="inline-block h-1 w-1 rounded-full bg-stone-warm"
              />
              <span>Auburn, CA</span>
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-5 text-sm xl:gap-7"
        >
          {navLinks.slice(0, -1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-cream/85 hover:text-cream transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4 text-sm">
          <a
            href={site.phoneHref}
            className="hidden xl:inline-flex items-center gap-1.5 whitespace-nowrap text-stone-warm hover:text-cream transition-colors"
            aria-label={`Call ${site.name}`}
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
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-stone-warm px-5 py-2.5 text-sm font-medium text-soft-black hover:bg-cream hover:text-forest-dark transition-colors"
          >
            Get Free Quote
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-full border border-cream/30 p-2 text-cream/95 hover:bg-cream/10 transition-colors"
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
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col bg-forest-dark text-cream">
          <div className="flex h-16 items-center justify-between border-b border-cream/15 px-5">
            <div className="flex items-center gap-3">
              <LogoMark tone="light" className="h-10 w-10" />
              <span
                aria-hidden
                className="h-6 w-px bg-cream/25"
              />
              <span className="font-display text-[1.18rem] font-medium tracking-[-0.012em] text-cream">
                Auburn Bath
              </span>
            </div>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full border border-cream/30 p-2 text-cream hover:bg-cream/10 transition-colors"
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
                className="rounded-lg px-3 py-3.5 text-cream/90 hover:bg-cream/10 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3 border-t border-cream/15 p-5">
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/35 px-5 py-3 text-sm font-medium text-cream hover:bg-cream/10 transition-colors"
            >
              Call {site.phone}
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-stone-warm px-5 py-3 text-sm font-medium text-soft-black hover:bg-cream transition-colors"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
