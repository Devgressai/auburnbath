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
        <span className={cn("eyebrow mb-3", align === "center" && "")}>
          {eyebrow}
        </span>
      ) : null}
      <As className="font-display text-3xl text-soft-black sm:text-[2.5rem] sm:leading-[1.05]">
        {title}
      </As>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-7 text-muted sm:text-[1.075rem]",
            align === "center" && "mx-auto max-w-2xl"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
