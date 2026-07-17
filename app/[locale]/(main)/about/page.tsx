import { getTranslations, setRequestLocale } from "next-intl/server";

import { PageHero } from "@/components/shared/page-hero";
import { ProgressBar } from "@/components/shared/progress-bar";
import { Button } from "@/components/ui/button";

const ABOUT_VIDEO_URL = "https://www.youtube.com/embed/Rd8otdkqn30";

const STATS = [
  { value: "+12K", key: "students" },
  { value: "+120", key: "courses" },
  { value: "+40", key: "instructors" },
  { value: "98%", key: "satisfaction" },
] as const;

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  const steps = ["01", "02", "03", "04"];

  return (
    <div>
      <PageHero
        tagline={t("tagline")}
        title={t("heroTitle")}
        text={t("heroText")}
      />

      {/* story + stats */}
      <section className="container-app grid items-center gap-12 py-16 lg:grid-cols-2">
        <div>
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-3.5 py-1 text-sm font-semibold text-primary">
            {t("companyTagline")}
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            {t("companyTitle")}
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {t("story")}
          </p>

          <h3 className="mt-8 mb-2 font-bold">{t("experienceTitle")}</h3>
          <ProgressBar label={t("analytics")} percentage={30} />
          <ProgressBar label={t("solutions")} percentage={70} />
        </div>

        <div className="grid grid-cols-2 gap-5">
          {STATS.map(({ value, key }) => (
            <div
              key={key}
              className="card-hover rounded-3xl border bg-card p-7 text-center shadow-soft"
            >
              <p className="text-gradient text-4xl font-extrabold tracking-tight">
                {value}
              </p>
              <p className="mt-1.5 text-sm font-semibold text-muted-foreground">
                {t(`stats.${key}`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* process */}
      <section className="bg-card/60 py-16">
        <div className="container-app grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-3.5 py-1 text-sm font-semibold text-primary">
              {t("processTagline")}
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              {t("processTitle")}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              pharetra risus turpis, non auctor risus dignissim ut. Integer
              porttitor libero id ante elementum imperdiet.
            </p>
            <Button variant="gradient" className="mt-6">
              {t("quote")}
            </Button>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {steps.map((step) => (
              <div
                key={step}
                className="group card-hover rounded-3xl border bg-card p-6 shadow-soft"
              >
                <span className="grid size-11 place-items-center rounded-2xl bg-brand-gradient text-sm font-extrabold text-white">
                  {step}
                </span>
                <h3 className="mt-4 font-bold">{t("explore")}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Asperiores voluptas facilis cumque corrupti provident.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* video */}
      <section className="container-app py-16">
        <div className="grid items-center gap-10 rounded-[2.5rem] border bg-card p-6 shadow-soft sm:p-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Laravelcamp
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {t("story")}
            </p>
          </div>
          <iframe
            src={ABOUT_VIDEO_URL}
            title="Laravelcamp"
            className="aspect-video w-full rounded-2xl border"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* join band */}
      <section className="container-app pb-16">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-gradient px-6 py-14 text-center text-white sm:px-16">
          <span
            aria-hidden
            className="absolute inset-0 opacity-20 [background-image:radial-gradient(rgb(255_255_255/0.5)_1px,transparent_1px)] [background-size:22px_22px]"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-balance">
              {t("joinTitle")}
            </h2>
            <p className="mt-3 leading-relaxed text-white/85">{t("joinText")}</p>
            <Button
              size="lg"
              className="mt-7 rounded-full bg-white px-7 font-semibold text-primary shadow-lifted hover:bg-white/90"
            >
              {t("jobs")}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
