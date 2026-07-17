import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { TrackDetailsContent } from "@/components/tracks/track-details-content";
import { getCourseById } from "@/data/courses";

export default async function TrackDetailsPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  const course = getCourseById(Number(id));
  if (!course) {
    notFound();
  }

  return <TrackDetailsContent course={course} />;
}
