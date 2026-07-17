import { useLocale, useTranslations } from "next-intl";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";
import { Link } from "@/i18n/navigation";
import { localize } from "@/lib/types";

export function FaqSection() {
  const t = useTranslations("home.faq");
  const locale = useLocale();

  return (
    <section className="container-app py-24">
      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-3.5 py-1 text-sm font-semibold text-primary">
            {t("tagline")}
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-muted-foreground">{t("description")}</p>
          <p className="mt-6 text-sm text-muted-foreground">
            {t("contactHint")}{" "}
            <Link
              href="/contact"
              className="font-semibold text-primary hover:underline"
            >
              {t("contactLink")}
            </Link>
          </p>
        </div>

        <div className="lg:col-span-3">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={`faq-${faq.id}`}
                className="rounded-2xl border bg-card px-5 shadow-soft last:border-b"
              >
                <AccordionTrigger className="items-center py-4 text-start text-base font-semibold hover:no-underline">
                  {localize(faq.question, locale)}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {localize(faq.answer, locale)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
