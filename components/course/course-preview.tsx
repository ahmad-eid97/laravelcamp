import { ArrowLeft, CirclePlay, Play, RotateCcw } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link } from "@/i18n/navigation";

const PREVIEW_STEPS = [
  "Test: Changing the Look of a Web Page",
  "Review: Getting Familiar with HTML and CSS",
  "HTML, CSS, and Web Development",
  "Building Web Pages with HTML and CSS",
  "Video Closure",
];

export function CoursePreview() {
  const t = useTranslations("course");

  return (
    <section>
      <Link
        href="/tracks"
        className="group inline-flex items-center gap-2 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft
          className="size-4 transition-transform ltr:group-hover:-translate-x-1 rtl:rotate-180 rtl:group-hover:translate-x-1"
          aria-hidden
        />
        Introduction To HTML And CSS
      </Link>

      {/* player */}
      <div className="relative mt-3 overflow-hidden rounded-3xl bg-stone-900 shadow-lifted">
        <div
          aria-hidden
          className="absolute inset-0 opacity-15 [background-image:radial-gradient(rgb(255_255_255/0.4)_1px,transparent_1px)] [background-size:22px_22px]"
        />
        <div
          aria-hidden
          className="absolute -top-32 start-1/4 size-96 rounded-full bg-brand-gradient opacity-20 blur-3xl"
        />

        <div className="relative flex min-h-[420px] flex-col items-center justify-center p-8 text-center sm:min-h-[520px]">
          <span className="grid size-20 place-items-center rounded-full bg-white/95 text-primary shadow-lifted transition-transform hover:scale-110">
            <Play className="size-7 fill-current" aria-hidden />
          </span>
          <h1 className="mt-6 text-2xl font-extrabold text-white sm:text-3xl">
            Introduction To HTML And CSS
          </h1>
          <p className="mt-1.5 text-sm text-white/60">134-Minute HTML Course</p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button
              size="sm"
              className="rounded-full border border-white/20 bg-white/10 font-semibold text-white backdrop-blur-sm hover:bg-white/20"
            >
              <RotateCcw className="size-4" aria-hidden />
              {t("restartVideo")}
            </Button>
            <Button variant="gradient" size="sm">
              <Play className="size-4 fill-current" aria-hidden />
              {t("continueWatching")}
            </Button>
          </div>
        </div>
      </div>

      {/* lesson steps */}
      <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-2">
        {PREVIEW_STEPS.map((step, index) => (
          <Tooltip key={step}>
            <TooltipTrigger
              className={`flex shrink-0 cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold shadow-soft transition-colors ${
                index === 0
                  ? "border-transparent bg-brand-gradient text-white"
                  : "bg-card text-muted-foreground hover:border-primary/40 hover:text-primary"
              }`}
            >
              <CirclePlay className="size-4" aria-hidden />
              {t("lesson")} {index + 1}
            </TooltipTrigger>
            <TooltipContent side="bottom">{step}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </section>
  );
}
