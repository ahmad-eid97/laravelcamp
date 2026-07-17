"use client";

import {
  ArrowLeft,
  BookOpen,
  Clock,
  Play,
  Star,
  Users,
} from "lucide-react";
import { useFormatter, useLocale, useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { localize, type Course } from "@/lib/types";
import { cn } from "@/lib/utils";

/** Per-category monogram tint used in the card media area. */
const CATEGORY_TINTS: Record<string, string> = {
  PHP: "from-red-500/90 to-orange-400/90",
  JavaScript: "from-amber-500/90 to-yellow-400/90",
  React: "from-rose-500/90 to-red-400/90",
  Python: "from-orange-500/90 to-amber-400/90",
  CSS: "from-red-600/90 to-rose-400/90",
};

interface CourseCardProps {
  course: Course;
  onWatchTrailer?: (course: Course) => void;
  className?: string;
}

export function CourseCard({
  course,
  onWatchTrailer,
  className,
}: CourseCardProps) {
  const t = useTranslations("common");
  const locale = useLocale();
  const format = useFormatter();

  const tint = CATEGORY_TINTS[course.category] ?? "from-red-500/90 to-orange-400/90";

  return (
    <article
      className={cn(
        "group card-hover flex h-full flex-col overflow-hidden rounded-3xl border bg-card shadow-soft",
        className,
      )}
    >
      {/* media area */}
      <div
        className={cn(
          "relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br",
          tint,
        )}
      >
        <span
          aria-hidden
          className="absolute inset-0 bg-dot-grid opacity-25 [background-image:radial-gradient(rgb(255_255_255/0.5)_1px,transparent_1px)]"
        />
        <span
          aria-hidden
          className="select-none text-6xl font-extrabold tracking-tight text-white/25 transition-transform duration-500 group-hover:scale-110"
        >
          {course.category}
        </span>

        {onWatchTrailer && (
          <button
            type="button"
            aria-label={t("watchTrailer")}
            onClick={() => onWatchTrailer(course)}
            className="absolute grid size-14 cursor-pointer place-items-center rounded-full bg-white/95 text-primary opacity-0 shadow-lifted transition-all duration-300 hover:scale-110 group-hover:opacity-100"
          >
            <Play className="size-5 fill-current" aria-hidden />
          </button>
        )}

        <span className="absolute start-3 top-3 flex items-center gap-1.5 rounded-full bg-black/35 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
          <Clock className="size-3.5" aria-hidden />
          {t("hoursCount", { count: course.hours })}
        </span>
        <span className="absolute end-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-foreground/80 backdrop-blur-sm dark:bg-black/50 dark:text-white">
          {t(`levels.${course.level}`)}
        </span>
      </div>

      {/* body */}
      <div className="flex grow flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-bold tracking-wide text-primary">
            {course.category}
          </span>
          <span className="flex items-center gap-1 text-sm font-semibold">
            <Star
              className="size-4 fill-brand-amber text-brand-amber"
              aria-hidden
            />
            {course.rating}
          </span>
        </div>

        <Link href={`/tracks/${course.id}`} className="mt-2 outline-none">
          <h3 className="line-clamp-2 text-lg font-bold leading-snug transition-colors group-hover:text-primary">
            {localize(course.title, locale)}
          </h3>
        </Link>

        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {localize(course.description, locale)}
        </p>

        <div className="mt-4 flex items-center gap-4 border-t pt-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <BookOpen className="size-3.5" aria-hidden />
            {t("lessonsCount", { count: course.lessonsCount })}
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="size-3.5" aria-hidden />
            {t("studentsCount", {
              count: format.number(course.students, { notation: "compact" }),
            })}
          </span>
          <Link
            href={`/tracks/${course.id}`}
            aria-label={t("showDetails")}
            className="ms-auto grid size-8 place-items-center rounded-full bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white"
          >
            <ArrowLeft className="size-4 ltr:rotate-180" aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}
