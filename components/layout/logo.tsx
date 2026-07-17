import { Flame } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** Renders the wordmark in white for dark/gradient surfaces. */
  onDark?: boolean;
}

export function Logo({ className, onDark = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2.5", className)}
      aria-label="Laravelcamp"
    >
      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-gradient text-white shadow-soft">
        <Flame className="size-5 fill-current" aria-hidden />
      </span>
      <span
        className={cn(
          "text-xl font-bold tracking-tight",
          onDark ? "text-white" : "text-foreground",
        )}
      >
        Laravel<span className={onDark ? "text-white/70" : "text-gradient"}>camp</span>
      </span>
    </Link>
  );
}
