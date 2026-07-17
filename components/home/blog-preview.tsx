"use client";

import { ArrowLeft } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { BlogCard } from "@/components/shared/blog-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { blogPosts } from "@/data/blogs";
import { Link } from "@/i18n/navigation";

export function BlogPreview() {
  const t = useTranslations("home.blogs");
  const locale = useLocale();

  return (
    <section className="container-app py-24">
      <Carousel opts={{ direction: locale === "ar" ? "rtl" : "ltr" }}>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-3.5 py-1 text-sm font-semibold text-primary">
              {t("tagline")}
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              {t("title")}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <CarouselPrevious className="static size-10 translate-y-0 rounded-full rtl:-scale-x-100" />
            <CarouselNext className="static size-10 translate-y-0 rounded-full rtl:-scale-x-100" />
          </div>
        </div>

        <CarouselContent className="-ms-8 py-2">
          {blogPosts.map((post) => (
            <CarouselItem
              key={post.id}
              className="ps-8 sm:basis-1/2 lg:basis-1/3"
            >
              <BlogCard post={post} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="mt-8 flex justify-center">
        <Link
          href="/blogs"
          className="group flex items-center gap-2 font-semibold text-primary"
        >
          {t("viewAll")}
          <ArrowLeft
            className="size-4 transition-transform group-hover:-translate-x-1 ltr:rotate-180 ltr:group-hover:translate-x-1"
            aria-hidden
          />
        </Link>
      </div>
    </section>
  );
}
