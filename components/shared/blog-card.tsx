"use client";

import { ArrowLeft, Clock } from "lucide-react";
import { useFormatter, useLocale, useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { localize, type BlogPost } from "@/lib/types";

export function BlogCard({ post }: { post: BlogPost }) {
  const t = useTranslations("common");
  const locale = useLocale();
  const format = useFormatter();

  const initials = post.author
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <Link href="/blogs" className="block h-full outline-none">
      <article className="group card-hover flex h-full flex-col rounded-3xl border bg-card p-6 shadow-soft">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="rounded-full bg-primary/10 px-2.5 py-1 font-semibold text-primary">
            {format.dateTime(new Date(post.date), { dateStyle: "medium" })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="size-3.5" aria-hidden />
            {t("minRead", { count: post.readMinutes })}
          </span>
        </div>

        <h3 className="mt-4 line-clamp-2 text-lg font-bold leading-snug transition-colors group-hover:text-primary">
          {post.title}
        </h3>

        <p className="mt-2 line-clamp-3 grow text-sm leading-relaxed text-muted-foreground">
          {localize(post.excerpt, locale)}
        </p>

        <div className="mt-5 flex items-center gap-3 border-t pt-4">
          <span className="grid size-9 place-items-center rounded-full bg-brand-gradient text-xs font-bold text-white">
            {initials}
          </span>
          <span className="text-sm font-semibold">{post.author}</span>
          <span className="ms-auto grid size-8 place-items-center rounded-full bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white">
            <ArrowLeft className="size-4 ltr:rotate-180" aria-hidden />
          </span>
        </div>
      </article>
    </Link>
  );
}
