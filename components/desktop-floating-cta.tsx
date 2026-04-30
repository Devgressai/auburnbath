"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const HIDDEN_PATHS = new Set(["/contact"]);
const REVEAL_PX = 720;

/**
 * Desktop-only floating CTA that fades in after the hero scrolls
 * offscreen. Keeps a 1-click conversion path visible all the way
 * down long pages without crowding the hero. Hidden on /contact
 * (where the form already is), and hidden under lg (mobile already
 * has a sticky bottom bar).
 */
export function DesktopFloatingCTA() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handle = () => setVisible(window.scrollY > REVEAL_PX);
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  if (pathname && HIDDEN_PATHS.has(pathname)) return null;

  return (
    <div
      aria-hidden={!visible}
      className={`pointer-events-none fixed bottom-7 right-7 z-30 hidden lg:block transition-all duration-500 ease-out ${
        visible
          ? "translate-y-0 opacity-100 [&>*]:pointer-events-auto"
          : "translate-y-4 opacity-0"
      }`}
    >
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 text-sm font-semibold text-cream shadow-[0_4px_8px_rgba(35,72,62,0.22),0_18px_36px_rgba(35,72,62,0.30)] hover:bg-forest-dark hover:scale-[1.03] transition-all duration-200"
      >
        <span
          aria-hidden
          className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-stone-warm text-forest-dark"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-3 w-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </span>
        Free Quote
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
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
  );
}
