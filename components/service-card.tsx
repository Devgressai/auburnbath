import Link from "next/link";

import type { ServiceKey } from "@/lib/site";

const accentByKey: Record<ServiceKey, React.ReactNode> = {
  "bathroom-remodeling": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 12h16v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-5Zm2-7a2 2 0 0 1 2-2h2v6H6V5Z"
      />
    </svg>
  ),
  "shower-remodeling": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 4h11M9 4v4m0 0h6a4 4 0 0 1 4 4M8 16v.01M11 18v.01M14 16v.01M11 21v.01"
      />
    </svg>
  ),
  "tub-to-shower": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 13h18m-1 0v3a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-3Zm3-7a2 2 0 0 1 2-2c1 0 2 .5 2 2v3"
      />
    </svg>
  ),
  "walk-in-showers": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 4h14v16H5zM5 9h14M9 13v2m6-2v2"
      />
    </svg>
  ),
};

export function ServiceCard({
  href,
  title,
  blurb,
  serviceKey,
}: {
  href: string;
  title: string;
  blurb: string;
  serviceKey: ServiceKey;
}) {
  return (
    <Link
      href={href}
      className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line/80 bg-cream p-7 shadow-soft transition-shadow hover:shadow-lift"
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sage to-transparent opacity-70"
      />
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sage-light text-forest">
        <span className="h-5 w-5">{accentByKey[serviceKey]}</span>
      </span>
      <h3 className="mt-5 font-display text-xl text-soft-black">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{blurb}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-forest">
        Explore service
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12l-7.5 7.5M3 12h18"
          />
        </svg>
      </span>
    </Link>
  );
}
