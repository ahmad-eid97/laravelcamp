"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { CourseCard } from "@/components/shared/course-card";
import { VideoDialog } from "@/components/shared/video-dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "@/i18n/navigation";
import type { Course } from "@/lib/types";

export function LatestCourses({ courses }: { courses: Course[] }) {
  const t = useTranslations();
  const locale = useLocale();
  const [trailerUrl, setTrailerUrl] = useState("");

  return (
    <section className="bg-card/60 py-24">
      <div className="container-app">
        <Carousel opts={{ direction: locale === "ar" ? "rtl" : "ltr" }}>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-3.5 py-1 text-sm font-semibold text-primary">
                {t("home.latestCourses.tagline")}
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                {t("home.latestCourses.title")}
              </h2>
              <p className="mt-3 text-muted-foreground">
                {t("home.latestCourses.description")}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <CarouselPrevious className="static size-10 translate-y-0 rounded-full rtl:-scale-x-100" />
              <CarouselNext className="static size-10 translate-y-0 rounded-full rtl:-scale-x-100" />
            </div>
          </div>

          <CarouselContent className="-ms-8 py-2">
            {courses.map((course) => (
              <CarouselItem
                key={course.id}
                className="ps-8 sm:basis-1/2 lg:basis-1/3"
              >
                <CourseCard
                  course={course}
                  onWatchTrailer={(selected) => setTrailerUrl(selected.trailerUrl)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-8 flex justify-center">
          <Link
            href="/tracks"
            className="group flex items-center gap-2 font-semibold text-primary"
          >
            {t("home.latestCourses.viewAll")}
            <ArrowLeft
              className="size-4 transition-transform group-hover:-translate-x-1 ltr:rotate-180 ltr:group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        </div>
      </div>

      <VideoDialog
        open={trailerUrl !== ""}
        onOpenChange={(open) => {
          if (!open) setTrailerUrl("");
        }}
        videoUrl={trailerUrl}
      />
    </section>
  );
}
