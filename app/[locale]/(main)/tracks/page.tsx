import { setRequestLocale } from "next-intl/server";

import { TracksContent } from "@/components/tracks/tracks-content";

export default async function TracksPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <TracksContent />;
}
