"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", key: "home" },
  { href: "/tracks", key: "tracks" },
  { href: "/library", key: "library" },
  { href: "/blogs", key: "articles" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 pt-4">
      <div className="container-app">
        <nav
          className={cn(
            "glass flex items-center justify-between gap-3 rounded-full py-2 ps-5 pe-2.5 transition-shadow duration-300",
            scrolled ? "shadow-lifted" : "shadow-soft",
          )}
        >
          <Logo />

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map(({ href, key }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground",
                    )}
                  >
                    {t(key)}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-1.5">
            <ThemeToggle />
            <LocaleSwitcher />
            <Button
              variant="gradient"
              size="sm"
              className="max-sm:hidden"
              asChild
            >
              <Link href="/login">{t("signIn")}</Link>
            </Button>

            <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label={t("openMenu")}
                  className="rounded-full lg:hidden"
                >
                  <Menu className="size-5" aria-hidden />
                </Button>
              </SheetTrigger>
              <SheetContent
                side={locale === "ar" ? "right" : "left"}
                className="w-[300px] gap-0 border-border bg-background p-0"
              >
                <SheetHeader className="border-b p-5">
                  <SheetTitle>
                    <Logo />
                  </SheetTitle>
                </SheetHeader>
                <ul className="flex flex-col gap-1 p-4">
                  {NAV_LINKS.map(({ href, key }) => {
                    const isActive = pathname === href;
                    return (
                      <li key={href}>
                        <SheetClose asChild>
                          <Link
                            href={href}
                            className={cn(
                              "block rounded-xl px-4 py-3 font-medium transition-colors",
                              isActive
                                ? "bg-primary/10 text-primary"
                                : "text-muted-foreground hover:bg-accent hover:text-foreground",
                            )}
                          >
                            {t(key)}
                          </Link>
                        </SheetClose>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-auto border-t p-5">
                  <SheetClose asChild>
                    <Button variant="gradient" className="w-full" asChild>
                      <Link href="/login">{t("signIn")}</Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
