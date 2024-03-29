import { useRouter } from "next/router";

import Container from "@mui/material/Container";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import cls from "./blogs.module.scss";

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
]

const LatestCourses = () => {
  const router = useRouter();

  const breakpoints = {
    // when window width is >= 320px
    100: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
  };

  return (
    <Container maxWidth="xxl" className={`${cls.latestCourses} container`}>
      <div className={cls.latestCourses__header}>
        <h2>أحدث المقالات</h2>
      </div>

      <Swiper
        className={`${cls.carousel}`}
        dir="rtl"
        breakpoints={breakpoints}
      >
        {blogs.map((blog, idx) => (
          <SwiperSlide key={idx}>
            <div className={cls.latestCourses__slide}>
              <div className={cls.latestCourses__slide_head}>
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
              <div className={cls.latestCourses__slide_body}>
                <button>عرض</button>
                <p>
                  {blog.desc}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={cls.btn}>
        <button onClick={() => router.push('/blogs')}>عرض المزيد</button>
      </div>
    </Container>
  );
};

export default LatestCourses;
