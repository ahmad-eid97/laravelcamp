"use client";

import { useState } from "react";
import { Clock3, Gauge, Play, Wallet } from "lucide-react";
import { useTranslations } from "next-intl";

import { SectionHeading } from "@/components/shared/section-heading";
import { VideoDialog } from "@/components/shared/video-dialog";

const PROMO_VIDEO_URL = "https://www.youtube.com/embed/-OnWBh5OX64";

const FEATURES = [
  { key: "payments", textKey: "paymentsText", Icon: Wallet },
  { key: "reports", textKey: "reportsText", Icon: Gauge },
  { key: "speed", textKey: "speedText", Icon: Clock3 },
] as const;

export function VideoSection() {
  const t = useTranslations("home.video");
  const [open, setOpen] = useState(false);

  return (
    <section className="container-app py-24">
      <SectionHeading
        tagline={t("tagline")}
        title={t("title")}
        description={t("description")}
      />

      <div className="grid items-stretch gap-6 lg:grid-cols-5">
        {/* video card */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={t("videoTitle")}
          className="group relative flex min-h-72 cursor-pointer flex-col justify-end overflow-hidden rounded-3xl bg-brand-gradient p-7 text-start shadow-soft transition-all duration-300 hover:shadow-lifted lg:col-span-3"
        >
          <span
            aria-hidden
            className="absolute inset-0 opacity-20 [background-image:radial-gradient(rgb(255_255_255/0.5)_1px,transparent_1px)] [background-size:20px_20px]"
          />
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid size-20 place-items-center rounded-full bg-white/95 text-primary shadow-lifted transition-transform duration-300 group-hover:scale-110">
              <Play className="size-7 fill-current" aria-hidden />
            </span>
          </span>
          <span className="relative flex items-end justify-between gap-4 text-white">
            <span>
              <span className="block text-xl font-bold">{t("videoTitle")}</span>
              <span className="mt-1 block text-sm text-white/80">
                {t("videoDuration")}
              </span>
            </span>
          </span>
        </button>

        {/* feature tiles */}
        <div className="flex flex-col gap-6 lg:col-span-2">
          {FEATURES.map(({ key, textKey, Icon }) => (
            <div
              key={key}
              className="card-hover flex grow items-center gap-4 rounded-3xl border bg-card p-6 shadow-soft"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="size-6" aria-hidden />
              </span>
              <div>
                <h3 className="font-bold">{t(key)}</h3>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {t(textKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <VideoDialog open={open} onOpenChange={setOpen} videoUrl={PROMO_VIDEO_URL} />
    </section>
  );
}
