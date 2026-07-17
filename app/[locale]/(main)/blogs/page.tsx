import { getTranslations, setRequestLocale } from "next-intl/server";

import { BlogCard } from "@/components/shared/blog-card";
import { PageHero } from "@/components/shared/page-hero";
import { blogPosts } from "@/data/blogs";

export default async function BlogsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("blogs");

  return (
    <div>
      <PageHero
        tagline={t("tagline")}
        title={t("title")}
        text={t("heroText")}
      />

      <div className="container-app grid grid-cols-1 gap-6 py-14 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
