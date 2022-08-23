import { useEffect } from "react";

import {
  Header,
  Video,
  LatestCourses,
  Subscribtion,
  FAQ,
  Skills,
  Testimonials,
  Blogs,
} from "../components";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import langRedirection from "../utils/redirections/langRedirection/langRedirection";
import routeRedirection from "../utils/redirections/routeRedirection/routeRedirection";

import { wrapper } from "../store/store";

import { useTranslation } from "next-i18next";

import axios from './../utils/axios';

import cls from "./home.module.scss";

const Home = ({ locale, courses }) =>  {
  const { t } = useTranslation();

  useEffect(() => {
    document.querySelector("body").scrollTo(0,0)
  }, [])


  return (
    <div className={cls.home}>
      <Header />
      <Video />
      <LatestCourses courses={courses} />
      <Subscribtion />
      <FAQ />
      <Skills />
      <Testimonials />
      <Blogs />
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, locale, resolvedUrl }) => {
      const languageRedirection = langRedirection(req, locale);
      const routerRedirection = routeRedirection(req, resolvedUrl);
    
      if (languageRedirection) return languageRedirection;
      if (routerRedirection) return routerRedirection;
    
      let courses = []
    
      const COURSES = await axios.get('/get-popular-courses');
    
      if (COURSES) courses = COURSES.data.data
    
      return {
        props: {
          ...(await serverSideTranslations(locale, ["common", "footer"])),
          locale,
          courses
        },
      };
    }
);

export default Home;
