"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, FolderOpen } from "lucide-react";
import { useTranslations } from "next-intl";

import { CourseCard } from "@/components/shared/course-card";
import { PageHero } from "@/components/shared/page-hero";
import { VideoDialog } from "@/components/shared/video-dialog";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { courses, popularCourses } from "@/data/courses";
import type { Course } from "@/lib/types";

const TOTAL_PAGES = 10;

function SectionHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
        {title}
      </h2>
      <p className="mt-1.5 text-muted-foreground">{description}</p>
    </div>
  );
}

/** Page numbers with sibling/boundary collapse (1 … n). */
function getPageItems(current: number, total: number): (number | "ellipsis")[] {
  const pages = new Set<number>([1, total, current - 1, current, current + 1]);
  const sorted = [...pages]
    .filter((page) => page >= 1 && page <= total)
    .sort((a, b) => a - b);

  const items: (number | "ellipsis")[] = [];
  for (const [index, page] of sorted.entries()) {
    if (index > 0 && page - sorted[index - 1] > 1) items.push("ellipsis");
    items.push(page);
  }
  return items;
}

export function TracksContent() {
  const t = useTranslations();
  const [trailerUrl, setTrailerUrl] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const openTrailer = (course: Course) => setTrailerUrl(course.trailerUrl);

  return (
    <div>
      <PageHero
        tagline={t("tracks.tagline")}
        title={t("tracks.heroTitle")}
        text={t("tracks.heroText")}
      />

      <div className="container-app pt-14">
        <SectionHeader
          title={t("tracks.popularTitle")}
          description={t("tracks.popularDescription")}
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {popularCourses.slice(0, 3).map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onWatchTrailer={openTrailer}
            />
          ))}
        </div>
      </div>

      <div className="container-app pt-20 pb-10">
        <SectionHeader
          title={t("tracks.allTitle")}
          description={t("tracks.allDescription")}
        />
        {courses.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onWatchTrailer={openTrailer}
              />
            ))}
          </div>
        ) : (
          <div className="my-24 flex flex-col items-center justify-center text-muted-foreground">
            <FolderOpen className="size-14" aria-hidden />
            <h5 className="mt-4 font-semibold">{t("tracks.empty")}</h5>
          </div>
        )}

        {courses.length > 0 && (
          <div className="mt-14 flex items-center justify-center">
            <Pagination>
              <PaginationContent className="gap-1.5">
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    aria-label={t("common.previousPage")}
                    className="rounded-full border bg-card shadow-soft hover:border-primary/40 hover:text-primary"
                    onClick={(event) => {
                      event.preventDefault();
                      setPageNumber((page) => Math.max(1, page - 1));
                    }}
                  >
                    <ChevronLeft className="size-4 rtl:rotate-180" aria-hidden />
                  </PaginationLink>
                </PaginationItem>
                {getPageItems(pageNumber, TOTAL_PAGES).map((item, index) =>
                  item === "ellipsis" ? (
                    <PaginationItem key={`ellipsis-${index}`}>
                      <PaginationEllipsis />
                    </PaginationItem>
                  ) : (
                    <PaginationItem key={item}>
                      <PaginationLink
                        href="#"
                        isActive={item === pageNumber}
                        className={
                          item === pageNumber
                            ? "rounded-full border-0 bg-brand-gradient text-white hover:text-white"
                            : "rounded-full hover:bg-primary/10 hover:text-primary"
                        }
                        onClick={(event) => {
                          event.preventDefault();
                          setPageNumber(item);
                        }}
                      >
                        {item}
                      </PaginationLink>
                    </PaginationItem>
                  ),
                )}
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    aria-label={t("common.nextPage")}
                    className="rounded-full border bg-card shadow-soft hover:border-primary/40 hover:text-primary"
                    onClick={(event) => {
                      event.preventDefault();
                      setPageNumber((page) => Math.min(TOTAL_PAGES, page + 1));
                    }}
                  >
                    <ChevronRight className="size-4 rtl:rotate-180" aria-hidden />
                  </PaginationLink>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>

      <VideoDialog
        open={trailerUrl !== ""}
        onOpenChange={(open) => {
          if (!open) setTrailerUrl("");
        }}
        videoUrl={trailerUrl}
      />
    </div>
  );
}
