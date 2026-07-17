"use client";

import { useState } from "react";
import { ArrowLeft, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useTranslations } from "next-intl";

import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "@/i18n/navigation";

export function LoginForm() {
  const t = useTranslations("login");
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="w-full max-w-md rounded-[2rem] border bg-card p-8 shadow-lifted max-sm:p-6">
      <div className="flex justify-center">
        <Logo />
      </div>

      <h1 className="mt-7 text-center text-2xl font-extrabold tracking-tight">
        {t("title")}
      </h1>
      <p className="mt-1.5 mb-7 text-center text-sm text-muted-foreground">
        {t("subtitle")}
      </p>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
        className="space-y-4"
      >
        <div>
          <label
            htmlFor="login-email"
            className="mb-1.5 block text-sm font-semibold"
          >
            {t("email")}
          </label>
          <div className="relative">
            <Mail
              className="absolute start-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <Input
              id="login-email"
              type="email"
              required
              placeholder={t("emailPlaceholder")}
              className="h-11 rounded-xl ps-10"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="login-password"
            className="mb-1.5 block text-sm font-semibold"
          >
            {t("password")}
          </label>
          <div className="relative">
            <Lock
              className="absolute start-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <Input
              id="login-password"
              type={showPassword ? "text" : "password"}
              required
              placeholder="••••••••"
              className="h-11 rounded-xl px-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword((visible) => !visible)}
              aria-label={showPassword ? t("hidePassword") : t("showPassword")}
              className="absolute end-3.5 top-1/2 -translate-y-1/2 cursor-pointer text-muted-foreground transition-colors hover:text-foreground"
            >
              {showPassword ? (
                <EyeOff className="size-4" aria-hidden />
              ) : (
                <Eye className="size-4" aria-hidden />
              )}
            </button>
          </div>
        </div>

        <Button variant="gradient" type="submit" size="lg" className="w-full">
          {t("submit")}
        </Button>

        {submitted && (
          <p className="text-center text-sm font-semibold text-success">
            {t("demoNote")}
          </p>
        )}
      </form>

      <div className="mt-7 text-center">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft
            className="size-4 transition-transform ltr:group-hover:-translate-x-1 rtl:rotate-180 rtl:group-hover:translate-x-1"
            aria-hidden
          />
          {t("backHome")}
        </Link>
      </div>
    </div>
  );
}
