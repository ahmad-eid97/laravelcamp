import { useEffect } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import langRedirection from "../../utils/redirections/langRedirection/langRedirection";
import routeRedirection from "../../utils/redirections/routeRedirection/routeRedirection";

import cls from './blogs.module.scss';

const blogs = [
  {
    name: 'Gulp For Beginners',
    user: 'ahmad eid',
    date: 'june 7, 2022',
    desc: "إعداد gulp باستخدام gulp.js مقدمة إلى gulp.js ما هو gulp؟ وفقً  لصفحتهم الرئيسية gulpjs.com ، فهي عبارة عن مجموعة أدوات لأتمت وتحسين سير عملك. ماذا يفعل ذلك بالضبط"
  },
  {
    name: 'Gulp For Beginners',
    user: 'ahmad eid',
    date: 'june 7, 2022',
    desc: "إعداد gulp باستخدام gulp.js مقدمة إلى gulp.js ما هو gulp؟ وفقً  لصفحتهم الرئيسية gulpjs.com ، فهي عبارة عن مجموعة أدوات لأتمت وتحسين سير عملك. ماذا يفعل ذلك بالضبط"
  },
  {
    name: 'Gulp For Beginners',
    user: 'ahmad eid',
    date: 'june 7, 2022',
    desc: "إعداد gulp باستخدام gulp.js مقدمة إلى gulp.js ما هو gulp؟ وفقً  لصفحتهم الرئيسية gulpjs.com ، فهي عبارة عن مجموعة أدوات لأتمت وتحسين سير عملك. ماذا يفعل ذلك بالضبط"
  },
  {
    name: 'Gulp For Beginners',
    user: 'ahmad eid',
    date: 'june 7, 2022',
    desc: "إعداد gulp باستخدام gulp.js مقدمة إلى gulp.js ما هو gulp؟ وفقً  لصفحتهم الرئيسية gulpjs.com ، فهي عبارة عن مجموعة أدوات لأتمت وتحسين سير عملك. ماذا يفعل ذلك بالضبط"
  },
  {
    name: 'Gulp For Beginners',
    user: 'ahmad eid',
    date: 'june 7, 2022',
    desc: "إعداد gulp باستخدام gulp.js مقدمة إلى gulp.js ما هو gulp؟ وفقً  لصفحتهم الرئيسية gulpjs.com ، فهي عبارة عن مجموعة أدوات لأتمت وتحسين سير عملك. ماذا يفعل ذلك بالضبط"
  },
  {
    name: 'Gulp For Beginners',
    user: 'ahmad eid',
    date: 'june 7, 2022',
    desc: "إعداد gulp باستخدام gulp.js مقدمة إلى gulp.js ما هو gulp؟ وفقً  لصفحتهم الرئيسية gulpjs.com ، فهي عبارة عن مجموعة أدوات لأتمت وتحسين سير عملك. ماذا يفعل ذلك بالضبط"
  },
  {
    name: 'Gulp For Beginners',
    user: 'ahmad eid',
    date: 'june 7, 2022',
    desc: "إعداد gulp باستخدام gulp.js مقدمة إلى gulp.js ما هو gulp؟ وفقً  لصفحتهم الرئيسية gulpjs.com ، فهي عبارة عن مجموعة أدوات لأتمت وتحسين سير عملك. ماذا يفعل ذلك بالضبط"
  },
  {
    name: 'Gulp For Beginners',
    user: 'ahmad eid',
    date: 'june 7, 2022',
    desc: "إعداد gulp باستخدام gulp.js مقدمة إلى gulp.js ما هو gulp؟ وفقً  لصفحتهم الرئيسية gulpjs.com ، فهي عبارة عن مجموعة أدوات لأتمت وتحسين سير عملك. ماذا يفعل ذلك بالضبط"
  },
  {
    name: 'Gulp For Beginners',
    user: 'ahmad eid',
    date: 'june 7, 2022',
    desc: "إعداد gulp باستخدام gulp.js مقدمة إلى gulp.js ما هو gulp؟ وفقً  لصفحتهم الرئيسية gulpjs.com ، فهي عبارة عن مجموعة أدوات لأتمت وتحسين سير عملك. ماذا يفعل ذلك بالضبط"
  },
]

const Blogs = () => {
  useEffect(() => {
    document.querySelector("body").scrollTo(0,0)
  }, [])
  
  return (
    <div className={cls.blogs}>

      <Container maxWidth="xxl" className="container">

        <h2>أحدث المقالات</h2>

        <Grid container spacing={3}>

          {blogs.map((blog, idx) => (
            <Grid item xs={12} sm={6} lg={4} key={idx}>

              <div className={cls.blog}>
                <div className={cls.blog__head}>
                  <h3>{blog.name}</h3>
                  <div className={cls.headWrapper}>
                    <div>
                      <span>
                        <i className="fa-solid fa-user"></i> {blog.user}
                      </span>
                    </div>

                    <div>
                      <span>
                        {blog.date} <i className="fa-light fa-clock"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className={cls.blog__body}>
                  <button>عرض</button>
                  <p>
                    {blog.desc}
                  </p>
                </div>
              </div>

            </Grid>
          ))}

        </Grid>

      </Container>

    </div>
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

export default Blogs;