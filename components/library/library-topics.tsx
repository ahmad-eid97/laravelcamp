import { useTranslations } from "next-intl";

import { topics } from "@/data/topics";

export function LibraryTopics() {
  const t = useTranslations("library.topics");

  return (
    <section className="mt-16">
      <div className="mb-8">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
          {t("title")}
        </h2>
        <p className="mt-1.5 text-muted-foreground">{t("description")}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {topics.map((topic) => (
          <div
            key={topic.name}
            className="group flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lifted"
          >
            <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
              <topic.icon className="size-6" aria-hidden />
            </span>
            <p className="text-center text-sm font-bold">{topic.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
