import Image from "next/image";
import {
  Award,
  BookOpenCheck,
  Clock,
  Mail,
  MapPin,
  User,
} from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("profile");

  const personalDetails = [
    { label: t("fullName"), value: t("data.fullName") },
    { label: t("company"), value: t("data.company") },
    { label: t("phone"), value: "01025864313" },
    { label: t("companyLocation"), value: t("data.country") },
    { label: t("country"), value: t("data.country") },
    { label: t("contactChannels"), value: t("data.contactChannel") },
  ];

  const progressStats = [
    { Icon: Clock, value: "24", label: t("hoursWatched") },
    { Icon: BookOpenCheck, value: "86", label: t("lessonsDone") },
    { Icon: Award, value: "3", label: t("certificates") },
  ];

  return (
    <div className="container-app pt-8 pb-14">
      {/* header card */}
      <div className="relative overflow-hidden rounded-[2rem] border bg-card shadow-soft">
        <div className="h-28 bg-brand-gradient">
          <span
            aria-hidden
            className="block size-full opacity-20 [background-image:radial-gradient(rgb(255_255_255/0.5)_1px,transparent_1px)] [background-size:22px_22px]"
          />
        </div>
        <div className="flex flex-wrap items-end gap-5 p-6 pt-0">
          <Image
            src="/assets/imgs/techdegree/teacher.jpg"
            alt={t("data.fullName")}
            width={112}
            height={112}
            className="-mt-12 size-24 rounded-3xl border-4 border-card object-cover shadow-soft"
          />
          <div className="grow">
            <h1 className="text-2xl font-extrabold tracking-tight">
              {t("data.fullName")}
            </h1>
            <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <User className="size-3.5" aria-hidden />
                {t("student")}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="size-3.5" aria-hidden />
                {t("data.country")}
              </span>
              <span className="flex items-center gap-1.5" dir="ltr">
                <Mail className="size-3.5" aria-hidden />
                max@kt.com
              </span>
            </div>
          </div>
          <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
            {t("data.plan")}
          </span>
        </div>
      </div>

      <div className="mt-8 grid items-start gap-8 lg:grid-cols-3">
        {/* details */}
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-3xl border bg-card p-6 shadow-soft">
            <h2 className="text-lg font-bold">{t("personalTitle")}</h2>
            <dl className="mt-4 divide-y">
              {personalDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3"
                >
                  <dt className="text-sm text-muted-foreground">
                    {detail.label}
                  </dt>
                  <dd className="font-semibold sm:col-span-2">
                    {detail.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-3xl border bg-card p-6 shadow-soft">
            <h2 className="text-lg font-bold">{t("paymentTitle")}</h2>
            <dl className="mt-4 divide-y">
              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3">
                <dt className="text-sm text-muted-foreground">
                  {t("planDetails")}
                </dt>
                <dd className="font-semibold sm:col-span-2">
                  {t("data.plan")}
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3">
                <dt className="text-sm text-muted-foreground">
                  {t("renewalDate")}
                </dt>
                <dd className="font-semibold sm:col-span-2">
                  {t("data.renewal")}
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3">
                <dt className="text-sm text-muted-foreground">
                  {t("paymentDetails")}
                </dt>
                <dd className="font-semibold sm:col-span-2" dir="ltr">
                  •••• •••• •••• 7852
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* progress */}
        <aside className="rounded-3xl border bg-card p-6 shadow-soft">
          <h2 className="text-lg font-bold">{t("progressTitle")}</h2>
          <div className="mt-4 space-y-4">
            {progressStats.map(({ Icon, value, label }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-2xl bg-muted/60 p-4"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-xl font-extrabold">{value}</span>
                  <span className="block text-sm text-muted-foreground">
                    {label}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
