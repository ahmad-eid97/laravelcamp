import { Check, CircleHelp, Play } from "lucide-react";
import { useTranslations } from "next-intl";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface CurriculumStep {
  name: string;
  type: "video" | "practice";
  detail: string;
}

interface CurriculumSection {
  id: number;
  label: string;
  description: string;
  steps: CurriculumStep[];
}

const SECTION_TEMPLATE: Omit<CurriculumSection, "id"> = {
  label: "HTML: The Structural Foundation Of Web Pages And Applications",
  description:
    "HTML is a series of tags that tells web browsers how to render, or display, a web page. You will wrap the content in these tags to describe the elements on the page and how they should be structured.",
  steps: [
    { name: "Welcome to HTML and CSS", type: "video", detail: "4:28" },
    {
      name: "Building Web Pages with HTML and CSS",
      type: "video",
      detail: "4:28",
    },
    {
      name: "Review: Getting Familiar with HTML and CSS",
      type: "practice",
      detail: "5",
    },
  ],
};

const CURRICULUM: CurriculumSection[] = Array.from({ length: 5 }, (_, index) => ({
  id: index + 1,
  ...SECTION_TEMPLATE,
}));

const LEARNINGS = [
  "Define HTML and CSS",
  "Add and change HTML tags",
  "Modify CSS attributes",
  "Learn the structural foundation of web pages and applications",
];

export function TechdegreeDetails() {
  const t = useTranslations("techdegree");

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          Beginner
        </span>
        <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
          HTML
        </span>
      </div>

      <h3 className="mt-5 text-2xl font-extrabold tracking-tight">
        {t("aboutTitle")}
      </h3>
      <p className="mt-2 leading-relaxed text-muted-foreground">
        {t("aboutText")}
      </p>

      <h4 className="mt-8 text-lg font-bold">{t("learnTitle")}</h4>
      <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
        {LEARNINGS.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm">
            <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-success/10 text-success">
              <Check className="size-3" aria-hidden />
            </span>
            {item}
          </li>
        ))}
      </ul>

      <h4 className="mt-10 text-lg font-bold">{t("curriculum")}</h4>
      <Accordion type="single" collapsible className="mt-4 space-y-3">
        {CURRICULUM.map((section, index) => (
          <AccordionItem
            key={section.id}
            value={`section-${section.id}`}
            className="rounded-2xl border bg-card px-5 shadow-soft last:border-b"
          >
            <AccordionTrigger className="items-center gap-4 py-4 text-start hover:no-underline">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-sm font-extrabold text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="grow">
                <span className="block font-bold leading-snug">
                  {section.label}
                </span>
                <span className="mt-0.5 block text-xs font-semibold text-primary">
                  {t("stepsCount", { count: section.steps.length })}
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-5">
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {section.description}
              </p>
              <div className="space-y-2.5">
                {section.steps.map((step) => (
                  <div
                    key={step.name}
                    className="flex items-center gap-3 rounded-xl bg-muted/60 p-3"
                  >
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-card text-primary shadow-soft">
                      {step.type === "video" ? (
                        <Play className="size-3.5 fill-current" aria-hidden />
                      ) : (
                        <CircleHelp className="size-3.5" aria-hidden />
                      )}
                    </span>
                    <span className="grow text-sm font-semibold">
                      {step.name}
                    </span>
                    <span className="shrink-0 text-xs font-semibold text-muted-foreground">
                      {step.type === "video"
                        ? step.detail
                        : t("questionsCount", { count: step.detail })}
                    </span>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
