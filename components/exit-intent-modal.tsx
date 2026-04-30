"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { site } from "@/lib/site";

const SESSION_KEY = "auburnbath:exit-intent-shown";
const ARM_DELAY_MS = 5_000; // wait 5s before arming so it doesn't fire on quick bounce
const HIDDEN_PATHS = new Set(["/contact"]);

/**
 * Desktop-only exit-intent modal. Fires once per session when the
 * cursor leaves the viewport via the top edge — a classic intent-to-
 * leave signal. Premium-styled (no flashing, no shouting); reads as
 * a quiet last offer rather than a pop-up. Easy to dismiss with the
 * × button, the backdrop, or Escape.
 */
export function ExitIntentModal() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (pathname && HIDDEN_PATHS.has(pathname)) return;

    // Desktop only — touch devices don't have a hover-to-leave signal.
    if (!window.matchMedia("(min-width: 1024px)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      // sessionStorage unavailable (e.g. private mode) — ok to skip
      return;
    }
    if (alreadyShown) return;

    let armed = false;
    const armTimer = window.setTimeout(() => {
      armed = true;
    }, ARM_DELAY_MS);

    const onLeave = (e: MouseEvent) => {
      if (!armed) return;
      // Only top-edge exits (heading toward tabs / address bar / close).
      if (e.clientY > 0) return;
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {}
      setOpen(true);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.clearTimeout(armTimer);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [pathname]);

  // Body-scroll lock + Esc close while open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-title"
      className="fixed inset-0 z-50 hidden lg:flex items-center justify-center p-6"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={() => setOpen(false)}
        className="absolute inset-0 cursor-default bg-soft-black/50 backdrop-blur-sm fade-up"
      />
      <div
        className="fade-up relative w-full max-w-md overflow-hidden rounded-[var(--radius-card)] bg-cream shadow-lift"
        role="document"
      >
        <div className="relative bg-forest-dark px-7 py-5 text-cream">
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-warm">
            Before you go
          </span>
          <h2
            id="exit-intent-title"
            className="mt-1.5 font-display text-xl font-medium leading-tight"
          >
            Talk to a real person — five-minute call.
          </h2>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Dismiss"
            className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-cream/25 text-cream/85 hover:bg-cream/10 transition-colors"
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
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="px-7 py-6 sm:px-8 sm:py-7">
          <p className="text-sm leading-7 text-charcoal sm:text-[15px]">
            If a form isn&apos;t the right fit right now, that&apos;s
            fine. We&apos;re happy to walk through your bathroom over the
            phone — no pressure, no obligation, no pushy follow-up.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-charcoal">
            {[
              "We answer in person during business hours",
              "Five-minute conversation, not thirty",
              "We&apos;ll know if we&apos;re a fit by the end of the call",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span
                  aria-hidden
                  className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-stone-warm/30 text-forest-dark"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    className="h-3 w-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.phoneHref}
              onClick={() => setOpen(false)}
              className="btn btn-primary w-full sm:flex-1"
            >
              Call {site.phone}
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn btn-secondary w-full sm:flex-1"
            >
              Use the form
            </Link>
          </div>
          <p className="mt-4 text-center text-[11px] text-muted">
            We won&apos;t show this again.
          </p>
        </div>
      </div>
    </div>
  );
}
