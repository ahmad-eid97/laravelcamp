import { useState, useEffect } from "react";

import VideoPreview from '../../../components/modals/VideoPreview/VideoPreview';

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";

import ProgressBar from './../../../components/UIs/ProgressBar/ProgressBar';

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import langRedirection from "../../../utils/redirections/langRedirection/langRedirection";
import routeRedirection from "../../../utils/redirections/routeRedirection/routeRedirection";

import axios from '../../../utils/axios';

import cls from './trackDetails.module.scss';

const TrackDetails = ({ course }) => {
  const [openVideoPreview, setOpenVideoPreview] = useState(false);
  const [videoLink, setVideoLink] = useState('');

  useEffect(() => {
    document.querySelector("body").scrollTo(0,0)
  }, [])


  return (
    <div className={cls.trackDetails}>
      <Container maxWidth="xxl" className="container">
        <Grid container spacing={4} className={cls.pageWrapper}>

          <Grid item md={6}>

            <div className={cls.trackDetails__specs}>
              <div className={cls.trackDetails__specs_head}>
                <h2>Welcome To {course.title.en}</h2>
                <p>Learn to code websites using {course.title.en}</p>
                <button>عرض الكل</button>
              </div>

              {course.chapters.map(chapter => (

                <div className={cls.part} key={chapter.id}>
                  <div className={cls.part__head}>
                    <div>
                      <i className="fa-light fa-clock"></i> 56 ساعة
                    </div>

                    <div>
                      <i className="fa-regular fa-circle-small"></i>
                      <i className="fa-regular fa-circle-small"></i>
                      <i className="fa-regular fa-circle-small"></i>
                      <i className="fa-solid fa-book"></i>
                    </div>
                  </div>
                  <div className={cls.part__body}>
                    <h6>Course</h6>
                    <h4>{chapter.name}</h4>
                    <p>
                      In this course we will create two command line applications
                      using the popular server-side
                    </p>
                  </div>
                  <div className={cls.part__actions}>
                    <Tooltip
                      title="مشاهدة الاعلان"
                      placement="top"
                    >
                      <div className={cls.action}>
                        <i className="fa-solid fa-play"></i>
                      </div>
                    </Tooltip>
                    <div>
                      <div className={cls.action}>Intermediate</div>
                      <div className={cls.action}>PHP</div>
                    </div>
                  </div>
                </div>

              ))}
            </div>

          </Grid>

          <Grid item md={6}>

            <div className={cls.trackDetails__details}>
              <div className={cls.trackDetails__details_head}>
                <span>المسار</span>
                <span>56 ساعة</span>
              </div>

              <div className={cls.trackDetails__details_body}>
                <h2>{course.title.en}</h2>

                <ProgressBar label="مستوي التقدم" percentage="30" />

                <p>يتضمن تطوير الويب الأمامي تصميم الويب وبناء المواقع التي يستخدمها الأشخاص كل يوم. إنها مجموعة مهارات شاملة تستخدمها كل شركة تقريبًا في العالم وتحتاج إلى موقع ويب للتواصل مع عملائها. بالإضافة إلى ذلك ، فهو أحد أكثر الموضوعات شيوعًا هنا في Treehouse ، وهو أحد الموضوعات التي كنا ندرسها لأطول فترة.</p>

                <p>في هذا المسار ، ستتعلم كيفية إنشاء مواقع ويب جميلة وتفاعلية من خلال تعلم أساسيات HTML و CSS وجافا سكريبت - ثلاث لغات تشفير شائعة يتم بناء جميع مواقع الويب الحديثة عليها. بنهاية هذا المسار ، ستكون لديك جميع المهارات المطلوبة لإنشاء مواقع الويب الخاصة بك أو حتى بدء حياتك المهنية مع واحدة من آلاف الشركات التي لديها مواقع ويب.</p>

                <div className={cls.desc}>
                  <i className="fa-solid fa-sack-dollar"></i>
                  <p>يبلغ متوسط راتب المبتدئين للتقنيات التي يغطيها هذا المسار حوالي 51000 دولار في السنة.</p>
                </div>

                <div className={cls.desc}>
                  <i className="fa-solid fa-house-building"></i>
                  <p>بعض الشركات التي تستخدم هذه التقنيات بانتظام تشمل: Google و Facebook و Yahoo و eBay و Amazon و Treehouse</p>
                </div>
              </div>

            </div>
            
          </Grid>

        </Grid>

        {openVideoPreview && <VideoPreview setOpenPreview={setOpenVideoPreview} videoLink={videoLink} />}
      </Container>
    </div>
  )
}

export async function getServerSideProps({ req, locale, resolvedUrl, params }) {
  const languageRedirection = langRedirection(req, locale);
  const routerRedirection = routeRedirection(req, resolvedUrl);

  if (languageRedirection) return languageRedirection;
  if (routerRedirection) return routerRedirection;
    
  let course = []

  const COURSE = await axios.get(`/get-course-details/${params.id}`);

  if (COURSE) course = COURSE.data.data

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
      locale,
      course
    },
  };
}

export default TrackDetails