import { ArrowLeft, Dumbbell } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { localize, type Quiz } from "@/lib/types";

export function LibraryPractice({ quizzes }: { quizzes: Quiz[] }) {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="mt-16 pb-4">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            {t("library.practice.title")}
          </h2>
          <p className="mt-1.5 text-muted-foreground">
            {t("library.practice.description")}
          </p>
        </div>
        <Button variant="outline-pill" size="sm">
          {t("library.practice.showAll", { count: 102 })}
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {quizzes.slice(0, 6).map((quiz) => (
          <Link
            key={quiz.id}
            href="/techdegree/1"
            className="block h-full outline-none"
          >
            <article className="group card-hover flex h-full flex-col rounded-3xl border bg-card p-6 shadow-soft">
              <div className="flex items-center justify-between gap-2">
                <span className="grid size-11 place-items-center rounded-2xl bg-brand-amber/15 text-brand-amber">
                  <Dumbbell className="size-5" aria-hidden />
                </span>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                    {t(`common.levels.${quiz.level}`)}
                  </span>
                  <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-semibold text-muted-foreground">
                    {quiz.category}
                  </span>
                </div>
              </div>

              <h3 className="mt-4 line-clamp-2 text-lg font-bold leading-snug transition-colors group-hover:text-primary">
                {localize(quiz.title, locale)}
              </h3>
              <p className="mt-1.5 line-clamp-2 grow text-sm leading-relaxed text-muted-foreground">
                {localize(quiz.description, locale)}
              </p>

              <div className="mt-4 flex items-center justify-between border-t pt-4 text-sm">
                <span className="font-semibold text-muted-foreground">
                  {t("common.exercises")}
                </span>
                <span className="grid size-8 place-items-center rounded-full bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                  <ArrowLeft className="size-4 ltr:rotate-180" aria-hidden />
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
