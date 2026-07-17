"use client";

import { useState } from "react";
import {
  Award,
  Flame,
  Play,
  Sparkles,
  Star,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { VideoDialog } from "@/components/shared/video-dialog";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

const PROMO_VIDEO_URL = "https://www.youtube.com/embed/-OnWBh5OX64";

const STATS = [
  { value: "+120", key: "coursesLabel" },
  { value: "+12K", key: "studentsLabel" },
  { value: "4.9", key: "ratingLabel" },
] as const;

export function Hero() {
  const t = useTranslations("home.hero");
  const [introOpen, setIntroOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-hero-mesh">
      <div
        aria-hidden
        className="absolute inset-0 bg-dot-grid [mask-image:radial-gradient(60rem_40rem_at_50%_0%,black,transparent)]"
      />

      <div className="container-app relative grid items-center gap-14 pt-16 pb-20 lg:grid-cols-2 lg:pt-24 lg:pb-28">
        {/* copy */}
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm font-semibold text-primary shadow-soft">
            <Sparkles className="size-4" aria-hidden />
            {t("badge")}
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.15] tracking-tight text-balance sm:text-5xl xl:text-6xl">
            {t("titleStart")}{" "}
            <span className="text-gradient">{t("titleHighlight")}</span>{" "}
            {t("titleEnd")}
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {t("subtitle")}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button variant="gradient" size="lg" className="px-7" asChild>
              <Link href="/tracks">{t("ctaPrimary")}</Link>
            </Button>
            <Button
              variant="outline-pill"
              size="lg"
              className="gap-2.5 ps-4"
              onClick={() => setIntroOpen(true)}
            >
              <span className="grid size-7 place-items-center rounded-full bg-primary/10 text-primary">
                <Play className="size-3.5 fill-current" aria-hidden />
              </span>
              {t("ctaSecondary")}
            </Button>
          </div>

          <dl className="mt-10 flex items-center gap-8">
            {STATS.map(({ value, key }) => (
              <div key={key}>
                <dt className="sr-only">{t(key)}</dt>
                <dd className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                  {value}
                </dd>
                <dd className="mt-0.5 text-sm text-muted-foreground">
                  {t(key)}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* visual composition */}
        <div className="relative mx-auto w-full max-w-lg max-lg:hidden">
          <div
            aria-hidden
            className="absolute -inset-10 rounded-full bg-brand-gradient opacity-15 blur-3xl"
          />

          {/* main mock player card */}
          <div className="relative overflow-hidden rounded-[2rem] border bg-card shadow-lifted">
            <div className="relative flex aspect-[4/3] items-center justify-center bg-brand-gradient">
              <span
                aria-hidden
                className="absolute inset-0 opacity-25 [background-image:radial-gradient(rgb(255_255_255/0.5)_1px,transparent_1px)] [background-size:20px_20px]"
              />
              <button
                type="button"
                aria-label={t("ctaSecondary")}
                onClick={() => setIntroOpen(true)}
                className="grid size-20 cursor-pointer place-items-center rounded-full bg-white/95 text-primary shadow-lifted transition-transform hover:scale-110"
              >
                <Play className="size-7 fill-current" aria-hidden />
              </button>
              <span className="absolute bottom-4 start-4 rounded-full bg-black/35 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                {t("mockCourse")}
              </span>
            </div>
            <div className="space-y-3 p-5">
              <div className="flex items-center justify-between text-sm font-semibold">
                <span>{t("mockNextLesson")}</span>
                <span className="text-muted-foreground" dir="ltr">
                  12 / 42
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <span className="block h-full w-[38%] rounded-full bg-brand-gradient" />
              </div>
              <p className="text-sm text-muted-foreground" dir="ltr">
                CSS Grid Layout — 07:24
              </p>
            </div>
          </div>

          {/* floating chips */}
          <div className="absolute -start-10 top-10 flex animate-float items-center gap-3 rounded-2xl border bg-card p-3.5 pe-5 shadow-lifted">
            <span className="grid size-10 place-items-center rounded-xl bg-brand-amber/15 text-brand-amber">
              <Award className="size-5" aria-hidden />
            </span>
            <div className="text-sm">
              <p className="font-bold">{t("certTitle")}</p>
              <p className="text-muted-foreground">{t("certText")}</p>
            </div>
          </div>

          <div className="absolute -end-8 bottom-24 flex animate-float-delayed items-center gap-3 rounded-2xl border bg-card p-3.5 pe-5 shadow-lifted">
            <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
              <Flame className="size-5" aria-hidden />
            </span>
            <div className="text-sm">
              <p className="font-bold" dir="ltr">
                <span className="text-gradient">7</span> 🔥
              </p>
              <p className="text-muted-foreground">{t("streak")}</p>
            </div>
          </div>

          <div className="absolute -bottom-6 start-16 flex animate-float items-center gap-2 rounded-full border bg-card px-4 py-2 shadow-lifted">
            <Star className="size-4 fill-brand-amber text-brand-amber" aria-hidden />
            <span className="text-sm font-bold" dir="ltr">
              4.9
            </span>
            <span className="text-xs text-muted-foreground">
              {t("ratingLabel")}
            </span>
          </div>
        </div>
      </div>

      <VideoDialog
        open={introOpen}
        onOpenChange={setIntroOpen}
        videoUrl={PROMO_VIDEO_URL}
      />
    </section>
  );
}
