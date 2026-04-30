import Link from "next/link";

import type { ServiceKey } from "@/lib/site";

const accentByKey: Record<ServiceKey, React.ReactNode> = {
  "bathroom-remodeling": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
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
      strokeWidth="1.4"
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
      strokeWidth="1.4"
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
      strokeWidth="1.4"
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
      className="group card card-accent relative flex h-full flex-col p-7"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sage-light text-forest ring-1 ring-sage/30">
        <span className="h-5 w-5">{accentByKey[serviceKey]}</span>
      </span>
      <h3 className="mt-6 font-display text-xl text-soft-black">
        <span className="bg-[linear-gradient(currentColor,currentColor)] bg-no-repeat bg-bottom bg-[length:0%_1px] pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
          {title}
        </span>
      </h3>
      <p className="mt-2 text-sm leading-6 text-muted">{blurb}</p>
      <span className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-medium text-forest">
        Explore service
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
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
