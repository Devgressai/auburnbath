import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: As = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <div
          className={cn(
            "mb-3 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-forest",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-px w-8 bg-forest/50" aria-hidden />
          {eyebrow}
        </div>
      ) : null}
      <As className="font-display text-3xl text-soft-black sm:text-4xl">
        {title}
      </As>
      {description ? (
        <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
