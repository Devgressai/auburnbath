import { cn } from "@/lib/cn";

/**
 * Auburn Bath emblem — water drop over foothill ridges on a forest disc.
 * `tone="light"` flips to a cream disc with forest details for use on
 * dark headers/footers.
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
  const isLight = tone === "light";
  const id = isLight ? "abMarkBgLight" : "abMarkBgDark";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      role="img"
      aria-label={ariaLabel ?? "Auburn Bath emblem"}
      className={cn("inline-block shrink-0", className)}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="40" y2="40">
          {isLight ? (
            <>
              <stop offset="0%" stopColor="#fafaf7" />
              <stop offset="100%" stopColor="#e7efea" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#2f5d50" />
              <stop offset="100%" stopColor="#23483e" />
            </>
          )}
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="20" fill={`url(#${id})`} />
      {/* Foothill ridges */}
      <path
        d="M5 26 L13 19 L18 23 L24 17 L31 24 L35 22 L35 30 L5 30 Z"
        fill={isLight ? "#2f5d50" : "#7a9e8e"}
        opacity={isLight ? "0.78" : "0.75"}
      />
      <path
        d="M5 28.5 L12 23 L17 26 L23 21 L30 27 L35 25 L35 32 L5 32 Z"
        fill={isLight ? "#7a9e8e" : "#e7efea"}
        opacity={isLight ? "0.6" : "0.6"}
      />
      {/* Water drop */}
      <path
        d="M20 8.5 C 22.6 12.4, 25 15.2, 25 18 a 5 5 0 1 1 -10 0 c 0 -2.8, 2.4 -5.6, 5 -9.5 Z"
        fill={isLight ? "#2f5d50" : "#fafaf7"}
      />
      <path
        d="M18.5 13 C 17.5 14.6, 16.8 15.8, 16.8 17"
        stroke={isLight ? "#7a9e8e" : "#7a9e8e"}
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
    </svg>
  );
}
