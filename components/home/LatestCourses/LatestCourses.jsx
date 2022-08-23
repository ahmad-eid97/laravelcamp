import { useState } from 'react';
import { useRouter } from 'next/router';

import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";

import VideoPreview from "../../modals/VideoPreview/VideoPreview";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import cls from "./latesetCourses.module.scss";

const LatestCourses = ({ courses }) => {
  const [openVideoPreview, setOpenVideoPreview] = useState(false);
  const [videoLink, setVideoLink] = useState('');
  const router = useRouter()

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

  const openTrialer = (course) => {
    setVideoLink(course.trailer_link)
    setOpenVideoPreview(true)
  }

  console.log(courses)

  return (
    <Container maxWidth="xxl" className={`${cls.latestCourses} container`}>
      <div className={cls.latestCourses__header}>
        <h2>أحدث الكورسات</h2>
        <p>
          إليك أحدث الكورسات الموجوده علي المنصة وهي الأعلي تقييما علي المنصة من
          الطلاب المتواجدين لدينا عن خبرة تفوق العشرين عاما
        </p>
      </div>
      
      <Swiper
        className={`${cls.carousel}`}
        dir="rtl"
        breakpoints={breakpoints}
        autoHeight='true'
      >
        {courses.map((course, idx) => (
          <SwiperSlide key={idx}>
            <div className={cls.latestCourses__slide}>
              <div className={cls.latestCourses__slide_head}>
                <div>
                  <i className="fa-light fa-clock"></i> 68 دقيقة متبقيه
                </div>

                <div>
                  <i className="fa-regular fa-circle-small"></i>
                  <i className="fa-regular fa-circle-small"></i>
                  <i className="fa-regular fa-circle-small"></i>
                  <i className="fa-solid fa-book"></i>
                </div>
              </div>
              <div className={cls.latestCourses__slide_body}>
                <h6>Course</h6>
                <h4>{course.title.en}</h4>
                <p>
                  In this course we will create two command line applications
                  using the popular server-side
                </p>
              </div>
              <div className={cls.latestCourses__slide_actions}>
              <Tooltip
                title="مشاهدة الإعلان"
                placement="top"
              >
                <div className={cls.action} onClick={() => openTrialer(course)}>
                  <i className="fa-solid fa-play"></i>
                </div>
              </Tooltip>
                <div className={cls.action}>Intermediate</div>
                <div className={cls.action}>PHP</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={cls.btn}>
        <button onClick={() => router.push('/tracks')}>عرض المزيد</button>
      </div>

      {openVideoPreview && <VideoPreview setOpenPreview={setOpenVideoPreview} videoLink={videoLink} />}
    </Container>
  );
};

export default LatestCourses;
