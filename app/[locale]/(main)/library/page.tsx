import { getTranslations, setRequestLocale } from "next-intl/server";

import { LibraryPractice } from "@/components/library/library-practice";
import { LibrarySearch } from "@/components/library/library-search";
import { LibraryTopics } from "@/components/library/library-topics";
import { PageHero } from "@/components/shared/page-hero";
import { quizzes } from "@/data/quizzes";

export default async function LibraryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("library");

  return (
    <div>
      <PageHero
        tagline={t("tagline")}
        title={t("heroTitle")}
        text={t("heroText")}
      >
        <LibrarySearch />
      </PageHero>

      <div className="container-app pb-14">
        <LibraryTopics />
        <LibraryPractice quizzes={quizzes} />
      </div>
    </div>
  );
}
