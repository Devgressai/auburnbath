import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

import { cn } from "@/lib/cn";

const PUBLIC_IMAGES = path.join(process.cwd(), "public", "images");
const EXTS = ["webp", "jpg", "jpeg", "png"] as const;

function resolvePhoto(slug?: string): string | null {
  if (!slug) return null;
  for (const ext of EXTS) {
    const candidate = path.join(PUBLIC_IMAGES, `${slug}.${ext}`);
    try {
      if (fs.existsSync(candidate)) return `/images/${slug}.${ext}`;
    } catch {}
  }
  return null;
}

const RATIO_CLASS: Record<NonNullable<Props["ratio"]>, string> = {
  "16/9": "aspect-[16/9]",
  "1/1": "aspect-square",
  "3/4": "aspect-[3/4]",
  "5/4": "aspect-[5/4]",
  "4/3": "aspect-[4/3]",
};

const TONE_CLASS: Record<NonNullable<Props["tone"]>, string> = {
  stone: "from-stone/40 via-sand to-cream",
  forest: "from-forest/30 via-sage/30 to-sage-light",
  sage: "from-sage-light via-cream to-sand",
};

type Props = {
  alt: string;
  /** Filename (no extension) inside `public/images/`. Falls back to gradient. */
  slug?: string;
  className?: string;
  ratio?: "4/3" | "16/9" | "1/1" | "3/4" | "5/4";
  tone?: "sage" | "stone" | "forest";
  priority?: boolean;
  sizes?: string;
  /** Renders a small caption pill in the bottom-left of the gradient placeholder only. */
  placeholderCaption?: string;
  /** Render children absolutely-positioned inside the figure (e.g. an overlay card). */
  children?: React.ReactNode;
};

export function ImagePlaceholder({
  alt,
  slug,
  className,
  ratio = "4/3",
  tone = "sage",
  priority,
  sizes = "(min-width: 1024px) 480px, 100vw",
  placeholderCaption,
  children,
}: Props) {
  const ratioClass = RATIO_CLASS[ratio];
  const toneClass = TONE_CLASS[tone];
  const photo = resolvePhoto(slug);

  if (photo) {
    return (
      <figure
        className={cn(
          "relative overflow-hidden rounded-[var(--radius-card)] border border-line/80 shadow-lift bg-sand",
          ratioClass,
          className
        )}
      >
        <Image
          src={photo}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
        {children}
      </figure>
    );
  }

  return (
    <figure
      role="img"
      aria-label={alt}
      className={cn(
        "relative overflow-hidden rounded-[var(--radius-card)] border border-line/80 bg-gradient-to-br shadow-soft",
        ratioClass,
        toneClass,
        className
      )}
    >
      <span
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.5),transparent_50%),radial-gradient(circle_at_85%_80%,rgba(47,93,80,0.18),transparent_60%)]"
      />
      <span
        aria-hidden
        className="absolute inset-x-6 bottom-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-forest/80"
      >
        <span className="h-px flex-1 bg-forest/40" />
        Auburn Bath
      </span>
      {placeholderCaption ? (
        <figcaption className="absolute left-6 top-6 max-w-[70%] text-xs font-medium text-soft-black/80">
          {placeholderCaption}
        </figcaption>
      ) : null}
      {children}
    </figure>
  );
}
