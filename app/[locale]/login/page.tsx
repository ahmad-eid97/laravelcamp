import { setRequestLocale } from "next-intl/server";

import { LoginForm } from "@/components/auth/login-form";

export default async function LoginPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-hero-mesh p-5">
      <div
        aria-hidden
        className="absolute inset-0 bg-dot-grid [mask-image:radial-gradient(50rem_36rem_at_50%_40%,black,transparent)]"
      />
      <div className="relative">
        <LoginForm />
      </div>
    </div>
  );
}
