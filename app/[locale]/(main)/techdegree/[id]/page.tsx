import { setRequestLocale } from "next-intl/server";

import { TechdegreeDetails } from "@/components/techdegree/techdegree-details";
import { TechdegreeTeacher } from "@/components/techdegree/techdegree-teacher";
import { TechdegreeTrailer } from "@/components/techdegree/techdegree-trailer";

export default async function TechdegreePage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="container-app pt-8 pb-14">
      <TechdegreeTrailer />

      <div className="mt-10 grid items-start gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <TechdegreeDetails />
        </div>
        <TechdegreeTeacher />
      </div>
    </div>
  );
}
