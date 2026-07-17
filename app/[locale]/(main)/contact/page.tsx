import { Clock, Headphones, MapPin } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  XIcon,
  YoutubeIcon,
} from "@/components/icons/social-icons";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// marker matches the address in contactInfo
const MAP_EMBED_URL =
  "https://www.openstreetmap.org/export/embed.html?bbox=-73.9757%2C40.7994%2C-73.9557%2C40.8114&layer=mapnik&marker=40.8054%2C-73.9657";

const SOCIAL_ICONS = [
  { name: "X", Icon: XIcon },
  { name: "YouTube", Icon: YoutubeIcon },
  { name: "Facebook", Icon: FacebookIcon },
  { name: "LinkedIn", Icon: LinkedinIcon },
  { name: "Instagram", Icon: InstagramIcon },
];

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  const contactInfo = [
    { Icon: Headphones, label: t("phone"), value: "+880 184 113 6251" },
    { Icon: MapPin, label: t("address"), value: "2880 Broadway, New York" },
    { Icon: Clock, label: t("hours"), value: "09:30 – 13:00" },
  ];

  return (
    <div>
      <PageHero
        tagline={t("tagline")}
        title={t("title")}
        text={t("heroText")}
      />

      <div className="container-app py-14">
        <div className="grid items-stretch gap-6 lg:grid-cols-5">
          {/* info panel */}
          <div className="relative overflow-hidden rounded-[2rem] bg-brand-gradient p-8 text-white lg:col-span-2">
            <span
              aria-hidden
              className="absolute inset-0 opacity-20 [background-image:radial-gradient(rgb(255_255_255/0.5)_1px,transparent_1px)] [background-size:22px_22px]"
            />
            <div className="relative flex h-full flex-col">
              <h2 className="text-2xl font-extrabold tracking-tight">
                {t("infoTitle")}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/85">
                {t("infoText")}
              </p>

              <div className="mt-8 space-y-5">
                {contactInfo.map(({ Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white/15 backdrop-blur-sm">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span>
                      <span className="block text-xs text-white/70">
                        {label}
                      </span>
                      <span className="block font-semibold" dir="ltr">
                        {value}
                      </span>
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-2 pt-10">
                {SOCIAL_ICONS.map(({ name, Icon }) => (
                  <span
                    key={name}
                    aria-label={name}
                    className="grid size-9 cursor-pointer place-items-center rounded-full bg-white/15 backdrop-blur-sm transition-colors hover:bg-white/30"
                  >
                    <Icon className="size-4" />
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* form panel */}
          <form className="rounded-[2rem] border bg-card p-8 shadow-soft lg:col-span-3">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block text-sm font-semibold"
                >
                  {t("name")}
                </label>
                <Input
                  id="contact-name"
                  placeholder={t("namePlaceholder")}
                  className="h-11 rounded-xl"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block text-sm font-semibold"
                >
                  {t("email")}
                </label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder={t("emailPlaceholder")}
                  className="h-11 rounded-xl"
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-subject"
                className="mb-1.5 block text-sm font-semibold"
              >
                {t("subject")}
              </label>
              <Input
                id="contact-subject"
                placeholder={t("subjectPlaceholder")}
                className="h-11 rounded-xl"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-message"
                className="mb-1.5 block text-sm font-semibold"
              >
                {t("message")}
              </label>
              <Textarea
                id="contact-message"
                placeholder={t("messagePlaceholder")}
                className="min-h-36 rounded-xl"
              />
            </div>

            <Button variant="gradient" size="lg" type="submit" className="mt-6">
              {t("send")}
            </Button>
          </form>
        </div>

        <div className="mt-6 overflow-hidden rounded-[2rem] border shadow-soft">
          <iframe
            src={MAP_EMBED_URL}
            title={t("mapTitle")}
            className="h-[420px] w-full dark:brightness-90 dark:contrast-95 dark:hue-rotate-180 dark:invert"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
