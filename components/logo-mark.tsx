import { cn } from "@/lib/cn";

/**
 * Auburn Bath emblem — water drop above a single foothill ridge.
 *
 * - `tone="light"`: discless mark for dark surfaces (header). Sage
 *   ridge silhouette + cream drop with a stone-warm gleam.
 * - `tone="dark"` (default): cream disc with forest details — for
 *   light backgrounds (footer, fallbacks).
 *
 * Kept deliberately simple at small sizes: one ridge, one drop,
 * one accent. Reads cleanly at 40px.
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
        <defs>
          <radialGradient
            id="abDropInner"
            cx="0.32"
            cy="0.28"
            r="0.78"
          >
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="60%" stopColor="#e7efea" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Single foothill silhouette — soft Q-curve, sage on dark */}
        <path
          d="M2 30 Q 11 22 19 26 Q 27 30 38 23 L 38 39 L 2 39 Z"
          fill="#7a9e8e"
          opacity="0.55"
        />
        {/* Subtle highlight band along the ridge crest */}
        <path
          d="M2 30 Q 11 22 19 26 Q 27 30 38 23"
          stroke="#e7efea"
          strokeWidth="0.6"
          fill="none"
          opacity="0.45"
        />

        {/* Cream water drop */}
        <path
          d="M20 4.5 C 23.6 9.5, 26.5 13.6, 26.5 17.4 a 6.5 6.5 0 1 1 -13 0 c 0 -3.8, 2.9 -7.9, 6.5 -12.9 Z"
          fill="#fafaf7"
        />
        {/* Soft inner highlight */}
        <path
          d="M20 4.5 C 23.6 9.5, 26.5 13.6, 26.5 17.4 a 6.5 6.5 0 1 1 -13 0 c 0 -3.8, 2.9 -7.9, 6.5 -12.9 Z"
          fill="url(#abDropInner)"
          opacity="0.85"
        />
        {/* Stone-warm gleam — single confident dot */}
        <circle cx="17" cy="11.5" r="1.2" fill="#c8a973" opacity="0.92" />
      </svg>
    );
  }

  // Dark variant — cream disc, forest details (light surfaces).
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
      <circle cx="17.6" cy="13.4" r="0.95" fill="#c8a973" opacity="0.85" />
    </svg>
  );
}
