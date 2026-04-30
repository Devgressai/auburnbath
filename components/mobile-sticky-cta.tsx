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
      className="fixed bottom-0 inset-x-0 z-40 lg:hidden border-t border-line/70 bg-cream/95 backdrop-blur"
      role="region"
      aria-label="Quick contact"
    >
      <div className="grid grid-cols-2 gap-2 p-3">
        <a
          href={site.phoneHref}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-forest/30 bg-cream px-4 py-3 text-sm font-medium text-forest"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
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
          className="inline-flex items-center justify-center rounded-full bg-forest px-4 py-3 text-sm font-medium text-cream"
        >
          Free Quote
        </Link>
      </div>
    </div>
  );
}
