import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export function CtaBanner() {
  const t = useTranslations("home.cta");

  return (
    <section className="container-app pb-24">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-gradient px-6 py-16 text-center text-white sm:px-16">
        <span
          aria-hidden
          className="absolute inset-0 opacity-20 [background-image:radial-gradient(rgb(255_255_255/0.5)_1px,transparent_1px)] [background-size:22px_22px]"
        />
        <span
          aria-hidden
          className="absolute -top-24 -start-24 size-64 rounded-full bg-white/10 blur-2xl"
        />
        <span
          aria-hidden
          className="absolute -bottom-32 -end-16 size-80 rounded-full bg-black/10 blur-2xl"
        />

        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/85">
            {t("text")}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              size="lg"
              className="rounded-full bg-white px-7 font-semibold text-primary shadow-lifted hover:bg-white/90"
              asChild
            >
              <Link href="/login">{t("primary")}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-white/40 bg-transparent px-7 font-semibold text-white hover:bg-white/10 hover:text-white dark:border-white/40 dark:bg-transparent dark:hover:bg-white/10"
              asChild
            >
              <Link href="/tracks">{t("secondary")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
