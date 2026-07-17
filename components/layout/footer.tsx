import { Send } from "lucide-react";
import { useTranslations } from "next-intl";

import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  XIcon,
  YoutubeIcon,
} from "@/components/icons/social-icons";
import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

const FOOTER_COURSES = [
  "JavaScript Basics",
  "Intro to HTML & CSS",
  "Python Basics",
  "CSS Layout",
];

const FOOTER_TRACKS = [
  "Learn to Code for Beginners",
  "Beginning Python",
  "Beginning SQL",
  "Beginning Java",
];

const SOCIAL_ICONS = [
  { name: "X", Icon: XIcon },
  { name: "YouTube", Icon: YoutubeIcon },
  { name: "Facebook", Icon: FacebookIcon },
  { name: "LinkedIn", Icon: LinkedinIcon },
  { name: "Instagram", Icon: InstagramIcon },
];

function LinkColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h5 className="mb-4 text-sm font-bold tracking-wide text-foreground">
        {title}
      </h5>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item}>
            <span className="cursor-pointer text-sm text-muted-foreground transition-colors hover:text-primary">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  const pageLinks = [
    t("aboutPage"),
    t("articles"),
    t("community"),
    t("stories"),
    t("giftCards"),
  ];

  return (
    <footer className="mt-24 border-t bg-card">
      <div className="container-app py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {t("about")}
            </p>
            <div className="mt-5 flex items-center gap-2">
              {SOCIAL_ICONS.map(({ name, Icon }) => (
                <span
                  key={name}
                  aria-label={name}
                  className="grid size-9 cursor-pointer place-items-center rounded-full border bg-background text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <Icon className="size-4" />
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <LinkColumn title={t("courses")} items={FOOTER_COURSES} />
          </div>
          <div className="lg:col-span-2">
            <LinkColumn title={t("tracks")} items={FOOTER_TRACKS} />
          </div>
          <div className="lg:col-span-2">
            <LinkColumn title={t("pages")} items={pageLinks} />
          </div>

          <div className="lg:col-span-2">
            <h5 className="mb-4 text-sm font-bold tracking-wide text-foreground">
              {t("newsletterTitle")}
            </h5>
            <p className="mb-3 text-sm text-muted-foreground">
              {t("newsletterText")}
            </p>
            <form className="flex items-center gap-2">
              <input
                type="email"
                required
                placeholder={t("newsletterPlaceholder")}
                className="h-10 w-full min-w-0 rounded-full border bg-background px-4 text-sm outline-none transition-colors focus:border-primary"
              />
              <Button
                type="submit"
                variant="gradient"
                size="icon"
                aria-label={t("subscribe")}
                className="shrink-0"
              >
                <Send className="size-4 rtl:-scale-x-100" aria-hidden />
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="container-app flex flex-wrap items-center justify-between gap-3 py-5 text-sm text-muted-foreground">
          <span>{t("rights", { year })}</span>
          <div className="flex items-center gap-6">
            <Link href="/about" className="transition-colors hover:text-primary">
              {t("terms")}
            </Link>
            <Link href="/about" className="transition-colors hover:text-primary">
              {t("privacy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
