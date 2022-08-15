/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import MobSidebar from "./MobSidebar/MobSidebar";

import cls from "./navbar.module.scss";

const Navbar = () => {
  const [mobSidebar, setMobSidebar] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  return (
    <div className={`${cls.navbar} ${scrollY > 100 ? cls.scrolled : ""}`}>
      <nav>
        <div className={cls.logo}>
          <img
            src="/assets/imgs/logo.png"
            alt="logo"
            onClick={() => router.push("/")}
          />
        </div>
        <div className={cls.links}>
          <ul>
            <li>الصفحة الرئيسية</li>
            <li>المسارات</li>
            <li>المكتبة</li>
            <li>مجتمعنا</li>
            <li>الدعم الفني</li>
          </ul>
        </div>
        <div className={cls.domain}>
          <span>اماكن العمل</span> <i className="fa-solid fa-bell"></i>
          <span className={cls.mobIcon} onClick={() => setMobSidebar(true)}>
            <i className="fa-thin fa-grid-2"></i>
          </span>
        </div>
      </nav>

      <MobSidebar mobSidebar={mobSidebar} setMobSidebar={setMobSidebar} />
    </div>
  );
};

export default Navbar;
