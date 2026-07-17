"use client";

import { useState } from "react";
import { ArrowLeft, BookOpen, Clock, Play } from "lucide-react";
import { useTranslations } from "next-intl";

import { VideoDialog } from "@/components/shared/video-dialog";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

const TRAILER_URL = "https://www.youtube.com/embed/-OnWBh5OX64";

export function TechdegreeTrailer() {
  const t = useTranslations();
  const [trailerOpen, setTrailerOpen] = useState(false);

  return (
    <section>
      <Link
        href="/library"
        className="group inline-flex items-center gap-2 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft
          className="size-4 transition-transform ltr:group-hover:-translate-x-1 rtl:rotate-180 rtl:group-hover:translate-x-1"
          aria-hidden
        />
        Techdegree Home
      </Link>

      <div className="relative mt-3 overflow-hidden rounded-3xl bg-stone-900 shadow-lifted">
        <div
          aria-hidden
          className="absolute inset-0 opacity-15 [background-image:radial-gradient(rgb(255_255_255/0.4)_1px,transparent_1px)] [background-size:22px_22px]"
        />
        <div
          aria-hidden
          className="absolute -top-32 end-1/4 size-96 rounded-full bg-brand-gradient opacity-20 blur-3xl"
        />

        <div className="relative flex min-h-[420px] flex-col items-center justify-center p-8 text-center sm:min-h-[500px]">
          <div className="flex items-center gap-4 text-sm text-white/70">
            <span className="flex items-center gap-1.5">
              <Clock className="size-4" aria-hidden />
              {t("common.hoursCount", { count: 3 })}
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="size-4" aria-hidden />
              {t("common.lessonsCount", { count: 15 })}
            </span>
          </div>

          <h1 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl">
            Introduction To HTML And CSS
          </h1>
          <p className="mt-1.5 text-sm text-white/60">134-Minute HTML Course</p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button
              size="sm"
              onClick={() => setTrailerOpen(true)}
              className="rounded-full border border-white/20 bg-white/10 font-semibold text-white backdrop-blur-sm hover:bg-white/20"
            >
              <Play className="size-4 fill-current" aria-hidden />
              {t("common.watchTrailer")}
            </Button>
            <Button variant="gradient" size="sm">
              {t("techdegree.startCourse")}
              <ArrowLeft className="size-4 ltr:rotate-180" aria-hidden />
            </Button>
          </div>
        </div>
      </div>

      <VideoDialog
        open={trailerOpen}
        onOpenChange={setTrailerOpen}
        videoUrl={TRAILER_URL}
      />
    </section>
  );
}
