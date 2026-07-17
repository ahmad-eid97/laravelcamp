import { setRequestLocale } from "next-intl/server";

import { CourseDetailsTabs } from "@/components/course/course-details-tabs";
import { CoursePreview } from "@/components/course/course-preview";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="container-app pt-8 pb-14">
      <CoursePreview />

      <div className="mt-8 rounded-3xl border bg-card p-6 shadow-soft sm:p-8">
        <CourseDetailsTabs />
      </div>
    </div>
  );
}
