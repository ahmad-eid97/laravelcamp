import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import langRedirection from "../utils/redirections/langRedirection/langRedirection";
import routeRedirection from "../utils/redirections/routeRedirection/routeRedirection";

import LangSwitch from "./../components/Switches/LangSwitch/LangSwitch";

import { useTranslation } from "next-i18next";

import cls from "./home.module.scss";

export default function Home({ locale }) {
  const { t } = useTranslation();

  return (
    <div className={cls.home}>
      <h1>this is main page</h1>
      <LangSwitch locale={locale} />
      <h3>{t("welcome")}</h3>
    </div>
  );
}

export async function getServerSideProps({ req, locale, resolvedUrl }) {
  const languageRedirection = langRedirection(req, locale);
  const routerRedirection = routeRedirection(req, resolvedUrl);

  if (languageRedirection) return languageRedirection;
  if (routerRedirection) return routerRedirection;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
      locale,
    },
  };
}