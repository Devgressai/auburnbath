"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { site } from "@/lib/site";

const HIDDEN_PATHS = new Set(["/contact"]);

export function MobileStickyCTA() {
  const pathname = usePathname();
  if (pathname && HIDDEN_PATHS.has(pathname)) return null;

  return (
    <div
      className="fixed bottom-3 inset-x-3 z-40 lg:hidden rounded-full border border-line/70 bg-cream/95 backdrop-blur-md shadow-[0_8px_28px_rgba(17,17,17,0.12),0_2px_4px_rgba(17,17,17,0.04)]"
      role="region"
      aria-label="Quick contact"
    >
      <div className="grid grid-cols-2 gap-1 p-1">
        <a
          href={site.phoneHref}
          className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-forest hover:bg-sage-light transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            className="h-4 w-4"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372a1.125 1.125 0 0 0-.964-1.113l-4.114-.62a1.125 1.125 0 0 0-1.155.564l-.928 1.546a13.514 13.514 0 0 1-6.13-6.13l1.547-.928a1.125 1.125 0 0 0 .564-1.155l-.62-4.114A1.125 1.125 0 0 0 8.872 3H7.5A4.25 4.25 0 0 0 2.25 7.25v-.5Z"
            />
          </svg>
          Call now
        </a>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-1.5 rounded-full bg-forest px-4 py-3 text-sm font-medium text-cream shadow-cta hover:bg-forest-dark transition-colors"
        >
          Free Quote
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
        </Link>
      </div>
    </div>
  );
}
