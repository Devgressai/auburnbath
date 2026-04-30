import { cn } from "@/lib/cn";

/**
 * Auburn Bath emblem — water drop above a foothill ridge, set inside
 * a thin seal ring. Custom inline SVG, vector, scales perfectly at
 * any size, ships at <2KB.
 *
 * Two tones:
 *  - `tone="light"` (used on dark headers) — cream drop on transparent
 *    field, sage gradient ridge, thin sage outer seal, stone-warm
 *    gleam + soft halo.
 *  - `tone="dark"` (default — used on light surfaces) — cream disc
 *    background, forest details inside.
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
        viewBox="0 0 44 44"
        role="img"
        aria-label={ariaLabel ?? "Auburn Bath emblem"}
        className={cn("inline-block shrink-0 overflow-visible", className)}
      >
        <defs>
          <radialGradient
            id="abLightDropFill"
            cx="0.30"
            cy="0.26"
            r="0.85"
          >
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#fafaf7" />
            <stop offset="100%" stopColor="#e7efea" />
          </radialGradient>
          <linearGradient
            id="abLightRidge"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="0%" stopColor="#a3c0b1" />
            <stop offset="100%" stopColor="#3f6c5e" />
          </linearGradient>
          <radialGradient
            id="abLightGleam"
            cx="0.5"
            cy="0.5"
            r="0.5"
          >
            <stop offset="0%" stopColor="#e6c98e" />
            <stop offset="60%" stopColor="#c8a973" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#c8a973" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer thin seal ring — gives the mark a "stamp" quality */}
        <circle
          cx="22"
          cy="22"
          r="20.5"
          fill="none"
          stroke="#7a9e8e"
          strokeWidth="0.5"
          opacity="0.45"
        />
        <circle
          cx="22"
          cy="22"
          r="19"
          fill="none"
          stroke="#e7efea"
          strokeWidth="0.3"
          opacity="0.18"
        />

        {/* Foothill ridge — gradient sage, soft Q curve */}
        <path
          d="M5 31 Q 13 23 21 27 Q 29 31 39 24"
          stroke="url(#abLightRidge)"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />
        {/* Subtle ridge highlight */}
        <path
          d="M5 31 Q 13 23 21 27 Q 29 31 39 24"
          stroke="#e7efea"
          strokeWidth="0.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.4"
          transform="translate(0 -1.2)"
        />

        {/* Soft halo behind the gleam — barely-there warm glow */}
        <circle cx="18.5" cy="13" r="3.5" fill="url(#abLightGleam)" />

        {/* Cream water drop — refined silhouette */}
        <path
          d="M22 6.5
             C 25.4 11, 28.5 14.8, 28.5 18.4
             a 6.5 6.5 0 1 1 -13 0
             c 0 -3.6, 3.1 -7.4, 6.5 -11.9 Z"
          fill="url(#abLightDropFill)"
        />

        {/* Stone-warm gleam — confident dot */}
        <circle cx="18.6" cy="13.2" r="1.2" fill="#c8a973" />
        <circle cx="18.2" cy="12.8" r="0.45" fill="#fafaf7" opacity="0.75" />
      </svg>
    );
  }

  // Dark variant — cream disc, forest details (light surfaces).
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      role="img"
      aria-label={ariaLabel ?? "Auburn Bath emblem"}
      className={cn("inline-block shrink-0", className)}
    >
      <defs>
        <radialGradient id="abDarkDisc" cx="0.32" cy="0.28" r="0.85">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#fafaf7" />
          <stop offset="100%" stopColor="#e7efea" />
        </radialGradient>
        <linearGradient id="abDarkRidge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a6b5d" />
          <stop offset="100%" stopColor="#23483e" />
        </linearGradient>
      </defs>
      <circle cx="22" cy="22" r="22" fill="url(#abDarkDisc)" />
      {/* Inner thin sage ring */}
      <circle
        cx="22"
        cy="22"
        r="20"
        fill="none"
        stroke="#7a9e8e"
        strokeWidth="0.5"
        opacity="0.4"
      />
      <path
        d="M5 31 Q 13 23 21 27 Q 29 31 39 24"
        stroke="url(#abDarkRidge)"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M22 6.5
           C 25.4 11, 28.5 14.8, 28.5 18.4
           a 6.5 6.5 0 1 1 -13 0
           c 0 -3.6, 3.1 -7.4, 6.5 -11.9 Z"
        fill="#23483e"
      />
      <circle cx="18.6" cy="13.2" r="1.05" fill="#c8a973" />
    </svg>
  );
}
