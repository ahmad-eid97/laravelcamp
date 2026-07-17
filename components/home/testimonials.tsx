"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { SectionHeading } from "@/components/shared/section-heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const t = useTranslations("home.testimonials");
  const locale = useLocale();

  return (
    <section className="bg-card/60 py-24">
      <div className="container-app">
        <SectionHeading tagline={t("tagline")} title={t("title")} />

        <Carousel
          opts={{ direction: locale === "ar" ? "rtl" : "ltr", loop: true }}
          className="mx-auto max-w-3xl"
        >
          <CarouselContent className="ms-0">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="ps-0">
                <figure className="flex flex-col items-center rounded-[2rem] border bg-card px-6 py-12 text-center shadow-soft sm:px-14">
                  <div className="flex items-center gap-1" aria-hidden>
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star
                        key={index}
                        className="size-4.5 fill-brand-amber text-brand-amber"
                      />
                    ))}
                  </div>

                  <blockquote className="mt-6 text-lg font-medium leading-relaxed text-balance sm:text-xl">
                    “{testimonial.quote}”
                  </blockquote>

                  <figcaption className="mt-8 flex items-center gap-3.5">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={112}
                      height={112}
                      className="size-14 rounded-full border-2 border-primary/20 object-cover object-top"
                    />
                    <span className="text-start">
                      <span className="block font-bold">{testimonial.name}</span>
                      <span className="block text-sm text-muted-foreground">
                        {testimonial.role}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-8 flex items-center justify-center gap-3">
            <CarouselPrevious className="static size-10 translate-y-0 rounded-full rtl:-scale-x-100" />
            <CarouselNext className="static size-10 translate-y-0 rounded-full rtl:-scale-x-100" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
