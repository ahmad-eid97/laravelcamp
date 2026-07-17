import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tagline?: string;
  title: string;
  description?: string;
  align?: "center" | "start";
  className?: string;
}

export function SectionHeading({
  tagline,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "mb-12 max-w-2xl",
        centered ? "mx-auto text-center" : "text-start",
        className,
      )}
    >
      {tagline && (
        <span className="mb-4 inline-block rounded-full bg-primary/10 px-3.5 py-1 text-sm font-semibold text-primary">
          {tagline}
        </span>
      )}
      <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className={cn("mt-3 text-muted-foreground", centered && "mx-auto")}>
          {description}
        </p>
      )}
    </div>
  );
}
