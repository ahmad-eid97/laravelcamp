import Container from "@mui/material/Container";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import langRedirection from "../../../utils/redirections/langRedirection/langRedirection";
import routeRedirection from "../../../utils/redirections/routeRedirection/routeRedirection";

import cls from './techdegree.module.scss';

const Techdegree = () => {
  return (
    <div>Techdegree</div>
  )
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

export default Techdegree