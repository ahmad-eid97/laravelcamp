import { useTranslations } from "next-intl";

import { skills } from "@/data/skills";

export function SkillsMarquee() {
  const t = useTranslations("home.skills");

  return (
    <section className="border-y bg-card/60 py-8">
      <p className="container-app mb-5 text-center text-sm font-semibold tracking-wide text-muted-foreground">
        {t("title")}
      </p>

      <div
        dir="ltr"
        className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <div className="flex w-max animate-marquee gap-4 pe-4 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[...skills, ...skills].map((skill, index) => (
            <span
              key={`${skill}-${index}`}
              className="flex items-center gap-2.5 rounded-full border bg-card px-5 py-2.5 text-sm font-semibold whitespace-nowrap shadow-soft"
            >
              <span className="size-2 rounded-full bg-brand-gradient" aria-hidden />
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
