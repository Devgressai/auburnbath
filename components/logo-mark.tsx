import { cn } from "@/lib/cn";

/**
 * Auburn Bath mark — a small, custom emblem combining a stylized
 * water drop (bath) with foothill ridge lines (Auburn) on a forest
 * disc. Pure inline SVG for perf + crisp at any density.
 */
export function LogoMark({
  className,
  ariaLabel,
}: {
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      role="img"
      aria-label={ariaLabel ?? "Auburn Bath emblem"}
      className={cn("inline-block shrink-0", className)}
    >
      <defs>
        <linearGradient id="abMarkBg" x1="0" y1="0" x2="40" y2="40">
          <stop offset="0%" stopColor="#2f5d50" />
          <stop offset="100%" stopColor="#23483e" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="20" fill="url(#abMarkBg)" />
      {/* Foothill ridge */}
      <path
        d="M5 26 L13 19 L18 23 L24 17 L31 24 L35 22 L35 30 L5 30 Z"
        fill="#7a9e8e"
        opacity="0.75"
      />
      <path
        d="M5 28.5 L12 23 L17 26 L23 21 L30 27 L35 25 L35 32 L5 32 Z"
        fill="#e7efea"
        opacity="0.6"
      />
      {/* Water drop highlight */}
      <path
        d="M20 8.5 C 22.6 12.4, 25 15.2, 25 18 a 5 5 0 1 1 -10 0 c 0 -2.8, 2.4 -5.6, 5 -9.5 Z"
        fill="#fafaf7"
      />
      <path
        d="M18.5 13 C 17.5 14.6, 16.8 15.8, 16.8 17"
        stroke="#7a9e8e"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
    </svg>
  );
}
