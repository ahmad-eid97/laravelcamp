import { useEffect } from "react";

import { Search, Topics, Practice } from "../../components";

import Container from "@mui/material/Container";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import langRedirection from "../../utils/redirections/langRedirection/langRedirection";
import routeRedirection from "../../utils/redirections/routeRedirection/routeRedirection";

import axios from '../../utils/axios';

import cls from "./library.module.scss";

const Library = ({ quizzes }) => {
  useEffect(() => {
    document.querySelector("body").scrollTo(0,0)
  }, [])

  return (
    <div className={cls.library}>
      <Container maxWidth="xxl" className="container">
        <Search />
        <Topics />
        <Practice quizzes={quizzes} />
      </Container>
    </div>
  );
};

export async function getServerSideProps({ req, locale, resolvedUrl }) {
  const languageRedirection = langRedirection(req, locale);
  const routerRedirection = routeRedirection(req, resolvedUrl);

  if (languageRedirection) return languageRedirection;
  if (routerRedirection) return routerRedirection;
    
  let quizzes = []

  const QUIZZES = await axios.get(`/get-all-quizzes`);

  if (QUIZZES) quizzes = QUIZZES.data.data

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
      locale,
      quizzes
    },
  };
}

export default Library;
