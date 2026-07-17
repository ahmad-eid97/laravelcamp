import { Check } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { plans } from "@/data/plans";
import { localize } from "@/lib/types";
import { cn } from "@/lib/utils";

export function Subscription() {
  const t = useTranslations("home.subscription");
  const locale = useLocale();

  return (
    <section className="container-app py-24">
      <SectionHeading
        tagline={t("tagline")}
        title={t("title")}
        description={t("description")}
      />

      <div className="grid items-stretch gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={cn(
              "relative flex flex-col rounded-3xl border bg-card p-8 shadow-soft",
              plan.featured &&
                "border-transparent shadow-lifted ring-2 ring-primary lg:-my-4 lg:py-12",
            )}
          >
            {plan.featured && (
              <span className="absolute -top-3.5 start-1/2 -translate-x-1/2 rounded-full bg-brand-gradient px-4 py-1 text-xs font-bold text-white shadow-soft rtl:translate-x-1/2">
                {t("featuredBadge")}
              </span>
            )}

            <h3 className="text-lg font-bold">{localize(plan.name, locale)}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {localize(plan.description, locale)}
            </p>

            <div className="mt-6 flex items-baseline gap-1.5">
              <span
                className={cn(
                  "text-4xl font-extrabold tracking-tight",
                  plan.featured && "text-gradient",
                )}
                dir="ltr"
              >
                {plan.price.replace(" USD", "")}
              </span>
              <span className="text-sm text-muted-foreground">
                {t("monthly")}
              </span>
            </div>

            <ul className="mt-7 space-y-3.5">
              {plan.features.map((feature) => (
                <li key={feature.en} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-success/10 text-success">
                    <Check className="size-3" aria-hidden />
                  </span>
                  {localize(feature, locale)}
                </li>
              ))}
            </ul>

            <Button
              variant={plan.featured ? "gradient" : "outline-pill"}
              size="lg"
              className="mt-8 w-full"
            >
              {t("learnMore")}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
