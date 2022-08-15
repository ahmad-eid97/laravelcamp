import Box from "@mui/material/Box";

import { useTranslation } from "next-i18next";

import cls from "./mobSidebar.module.scss";

const MobSidebar = ({ mobSidebar, setMobSidebar }) => {
  // COMPONENT HOOKS
  const { i18n } = useTranslation();

  return (
    <Box className={`${cls.wrapper} ${mobSidebar ? cls.show : cls.hide}`}>
      <Box className={cls.dropLayer} onClick={() => setMobSidebar(false)}></Box>

      <Box
        className={`${cls.mobSidebar} ${cls[i18n.language]}`}
        sx={{ bgcolor: "background.secondary" }}
      >
        <div className={cls.links}>
          <ul>
            <li>الصفحة الرئيسية</li>
            <li>المسارات</li>
            <li>المكتبة</li>
            <li>مجتمعنا</li>
            <li>أماكن العمل</li>
            <li>الدعم الفني</li>
          </ul>
        </div>
      </Box>
    </Box>
  );
};

export default MobSidebar;
