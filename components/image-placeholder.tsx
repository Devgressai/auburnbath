import { cn } from "@/lib/cn";

export function ImagePlaceholder({
  alt,
  caption,
  className,
  ratio = "4/3",
  tone = "sage",
}: {
  alt: string;
  caption?: string;
  className?: string;
  ratio?: "4/3" | "16/9" | "1/1" | "3/4" | "5/4";
  tone?: "sage" | "stone" | "forest";
}) {
  const ratioClass =
    ratio === "16/9"
      ? "aspect-[16/9]"
      : ratio === "1/1"
      ? "aspect-square"
      : ratio === "3/4"
      ? "aspect-[3/4]"
      : ratio === "5/4"
      ? "aspect-[5/4]"
      : "aspect-[4/3]";

  const toneClass =
    tone === "stone"
      ? "from-stone/40 via-sand to-cream"
      : tone === "forest"
      ? "from-forest/30 via-sage/30 to-sage-light"
      : "from-sage-light via-cream to-sand";

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
      {caption ? (
        <figcaption className="absolute left-6 top-6 max-w-[70%] text-xs font-medium text-soft-black/80">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
