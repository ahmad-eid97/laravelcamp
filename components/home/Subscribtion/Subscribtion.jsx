import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import cls from "./subscribtion.module.scss";

const plans = [
  {
    type: 'إشتراك عادي',
    desc: 'إشترك معنا بسعر رمزي لتلقي الكورسات والمحتوي الذي ترغب في دراستة بك سهولة وغذا توقفت في الطريق تستطيع التواصل مع الدعم الفني',
    price: '$5.00 USD',
    features: [
      "يصل إلى 3 بطاقات ائتمان",
      "استثمر في الأسهم وصناديق الاستثمار المتداولة",
      "الملف الشخصي فقط",
      "دعم العملاء العادي"
    ]
  },
  {
    type: 'إشتراك عادي',
    desc: 'إشترك معنا بسعر رمزي لتلقي الكورسات والمحتوي الذي ترغب في دراستة بك سهولة وغذا توقفت في الطريق تستطيع التواصل مع الدعم الفني',
    price: '$5.00 USD',
    features: [
      "يصل إلى 3 بطاقات ائتمان",
      "استثمر في الأسهم وصناديق الاستثمار المتداولة",
      "الملف الشخصي فقط",
      "دعم العملاء العادي"
    ]
  },
  {
    type: 'إشتراك عادي',
    desc: 'إشترك معنا بسعر رمزي لتلقي الكورسات والمحتوي الذي ترغب في دراستة بك سهولة وغذا توقفت في الطريق تستطيع التواصل مع الدعم الفني',
    price: '$5.00 USD',
    features: [
      "يصل إلى 3 بطاقات ائتمان",
      "استثمر في الأسهم وصناديق الاستثمار المتداولة",
      "الملف الشخصي فقط",
      "دعم العملاء العادي"
    ]
  },
]

const Subscribtion = () => {
  return (
    <Container maxWidth="xxl" className={`${cls.subscribtion} container`}>
      <div className={cls.subscribtion__head}>
        <h2>إشترك معنا وإبدأ رحلتك التعليمية</h2>
        <p>
          إشترك معنا بسعر رمزي لتلقي الكورسات والمحتوي الذي ترغب في دراستة بكل
          سهولة وغذا توقفت في الطريق تستطيع التواصل مع الدعم الفني
        </p>
      </div>

      <Grid container spacing={5}>
        {plans.map((plan, idx) => (
          <Grid item md={6} xl={4} key={idx} className={cls.planWrap}>
            <div className={cls.plan}>
              <i className={`${cls.mark} fa-solid fa-bookmark`}></i>
              <div className={cls.icon}>
                <i className="fa-solid fa-bolt-lightning"></i>
                <h4>{plan.type}</h4>
              </div>
              <p>
                {plan.desc} 
              </p>
              <h1>{plan.price}</h1>
              <div className={cls.btn}>
                <span>/ شهرياَ</span>
                <button>إعرف المزيد</button>
              </div>
              <ul>
              {plan.features.map((feat, idx) => (
                <li key={idx}>
                  <i className="fa-solid fa-badge-check"></i>
                  {feat}
                </li>
              ))}
              </ul>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Subscribtion;
