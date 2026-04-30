import { cn } from "@/lib/cn";

/**
 * Auburn Bath emblem — water drop nestled into a foothill ridge.
 *
 * - `tone="dark"`  (default): cream disc with forest details — for
 *   light backgrounds (footer, fallback).
 * - `tone="light"`: discless mark rendered directly on a dark surface,
 *   with a stone-warm highlight on the drop. Used on the dark header
 *   so the lockup reads as part of the bar instead of a pasted-on
 *   sticker.
 */
export function LogoMark({
  className,
  ariaLabel,
  tone = "dark",
}: {
  className?: string;
  ariaLabel?: string;
  tone?: "dark" | "light";
}) {
  if (tone === "light") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 40"
        role="img"
        aria-label={ariaLabel ?? "Auburn Bath emblem"}
        className={cn("inline-block shrink-0 overflow-visible", className)}
      >
        {/* Subtle ground halo so the mark doesn't feel detached. */}
        <ellipse
          cx="20"
          cy="34"
          rx="15"
          ry="2"
          fill="#7a9e8e"
          opacity="0.18"
        />
        {/* Foothill ridge — softly glowing sage */}
        <path
          d="M3 27 L11 19 L17 24 L23 18 L30 25 L37 22 L37 33 L3 33 Z"
          fill="#7a9e8e"
          opacity="0.55"
        />
        <path
          d="M3 29.5 L10 24 L16 27 L23 22 L30 28 L37 25 L37 33.5 L3 33.5 Z"
          fill="#e7efea"
          opacity="0.32"
        />
        {/* Water drop in cream — slightly larger for confidence */}
        <path
          d="M20 5 C 23.2 9.5, 26 13.4, 26 17 a 6 6 0 1 1 -12 0 c 0 -3.6, 2.8 -7.5, 6 -12 Z"
          fill="#fafaf7"
        />
        {/* Soft inner gradient to give the drop dimension */}
        <path
          d="M20 5 C 23.2 9.5, 26 13.4, 26 17 a 6 6 0 1 1 -12 0 c 0 -3.6, 2.8 -7.5, 6 -12 Z"
          fill="url(#abLightInner)"
          opacity="0.6"
        />
        {/* Stone-warm highlight glint near the drop's top-left */}
        <circle cx="17.6" cy="11.5" r="1.05" fill="#c8a973" opacity="0.85" />
        <defs>
          <radialGradient
            id="abLightInner"
            cx="0.35"
            cy="0.35"
            r="0.7"
          >
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="65%" stopColor="#e7efea" stopOpacity="0.0" />
          </radialGradient>
        </defs>
      </svg>
    );
  }

  // Dark variant — cream disc, forest details (used on light surfaces).
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      role="img"
      aria-label={ariaLabel ?? "Auburn Bath emblem"}
      className={cn("inline-block shrink-0", className)}
    >
      <defs>
        <linearGradient id="abMarkBgDark" x1="0" y1="0" x2="40" y2="40">
          <stop offset="0%" stopColor="#fafaf7" />
          <stop offset="100%" stopColor="#e7efea" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="20" fill="url(#abMarkBgDark)" />
      <path
        d="M5 26 L13 19 L18 23 L24 17 L31 24 L35 22 L35 30 L5 30 Z"
        fill="#2f5d50"
        opacity="0.78"
      />
      <path
        d="M5 28.5 L12 23 L17 26 L23 21 L30 27 L35 25 L35 32 L5 32 Z"
        fill="#7a9e8e"
        opacity="0.6"
      />
      <path
        d="M20 8.5 C 22.6 12.4, 25 15.2, 25 18 a 5 5 0 1 1 -10 0 c 0 -2.8, 2.4 -5.6, 5 -9.5 Z"
        fill="#2f5d50"
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
