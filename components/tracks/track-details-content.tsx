"use client";

import { useState } from "react";
import {
  BookOpen,
  Building2,
  CircleDollarSign,
  Clock,
  Play,
  Star,
  Users,
} from "lucide-react";
import { useFormatter, useLocale, useTranslations } from "next-intl";

import { ProgressBar } from "@/components/shared/progress-bar";
import { VideoDialog } from "@/components/shared/video-dialog";
import { Button } from "@/components/ui/button";
import { localize, type Course } from "@/lib/types";

export function TrackDetailsContent({ course }: { course: Course }) {
  const t = useTranslations();
  const locale = useLocale();
  const format = useFormatter();
  const [trailerOpen, setTrailerOpen] = useState(false);

  const title = localize(course.title, locale);

  return (
    <div>
      {/* header */}
      <section className="relative overflow-hidden bg-hero-mesh">
        <div
          aria-hidden
          className="absolute inset-0 bg-dot-grid [mask-image:radial-gradient(50rem_26rem_at_50%_0%,black,transparent)]"
        />
        <div className="container-app relative py-16">
          <span className="inline-block rounded-full border bg-card px-4 py-1.5 text-sm font-semibold text-primary shadow-soft">
            {t("trackDetails.track")} · {course.category}
          </span>
          <h1 className="mt-5 max-w-2xl text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            {t("trackDetails.welcome", { title })}
          </h1>
          <p className="mt-3 max-w-xl text-lg text-muted-foreground">
            {t("trackDetails.subtitle", { title })}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Clock className="size-4 text-primary" aria-hidden />
              {t("common.hoursCount", { count: course.hours })}
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="size-4 text-primary" aria-hidden />
              {t("common.lessonsCount", { count: course.lessonsCount })}
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="size-4 text-primary" aria-hidden />
              {t("common.studentsCount", {
                count: format.number(course.students, { notation: "compact" }),
              })}
            </span>
            <span className="flex items-center gap-1.5 font-semibold text-foreground">
              <Star className="size-4 fill-brand-amber text-brand-amber" aria-hidden />
              {course.rating}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button variant="gradient" size="lg" className="px-7">
              {t("trackDetails.startTrack")}
            </Button>
            <Button
              variant="outline-pill"
              size="lg"
              className="gap-2.5 ps-4"
              onClick={() => setTrailerOpen(true)}
            >
              <span className="grid size-7 place-items-center rounded-full bg-primary/10 text-primary">
                <Play className="size-3.5 fill-current" aria-hidden />
              </span>
              {t("trackDetails.watchIntro")}
            </Button>
          </div>
        </div>
      </section>

      {/* body */}
      <div className="container-app grid items-start gap-10 py-14 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              {t("trackDetails.curriculum")}
            </h2>
            <span className="text-sm text-muted-foreground">
              {t("trackDetails.chaptersCount", {
                count: course.chapters.length,
              })}
            </span>
          </div>

          <ol className="space-y-4">
            {course.chapters.map((chapter, index) => (
              <li key={chapter.id}>
                <button
                  type="button"
                  onClick={() => setTrailerOpen(true)}
                  className="group card-hover flex w-full cursor-pointer items-center gap-5 rounded-2xl border bg-card p-5 text-start shadow-soft"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-lg font-extrabold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 grow">
                    <span className="block text-xs font-semibold text-muted-foreground">
                      {t("trackDetails.chapterLabel", { number: index + 1 })}
                    </span>
                    <span className="mt-0.5 block truncate font-bold">
                      {localize(chapter.name, locale)}
                    </span>
                  </span>
                  <span className="grid size-10 shrink-0 place-items-center rounded-full border text-muted-foreground transition-all group-hover:border-transparent group-hover:bg-brand-gradient group-hover:text-white">
                    <Play className="size-4 fill-current" aria-hidden />
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>

        <aside className="top-28 space-y-6 lg:sticky">
          <div className="rounded-3xl border bg-card p-6 shadow-soft">
            <h3 className="font-bold">{t("trackDetails.progress")}</h3>
            <ProgressBar label={title} percentage={30} />
            <Button variant="gradient" className="mt-2 w-full">
              {t("trackDetails.startTrack")}
            </Button>
          </div>

          <div className="rounded-3xl border bg-card p-6 shadow-soft">
            <h3 className="font-bold">{t("trackDetails.aboutTrack")}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t("trackDetails.paragraph1")}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t("trackDetails.paragraph2")}
            </p>

            <div className="mt-5 space-y-4 border-t pt-5">
              <div className="flex items-start gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-success/10 text-success">
                  <CircleDollarSign className="size-5" aria-hidden />
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t("trackDetails.salary")}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Building2 className="size-5" aria-hidden />
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t("trackDetails.companies")}
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <VideoDialog
        open={trailerOpen}
        onOpenChange={setTrailerOpen}
        videoUrl={course.trailerUrl}
      />
    </div>
  );
}
