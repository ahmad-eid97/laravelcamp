import type { Quiz } from "@/lib/types";

export const quizzes: Quiz[] = [
  {
    id: 1,
    title: { en: "Practice Cleaning Data", ar: "تدريب على تنظيف البيانات" },
    description: {
      en: "Practice accessing data and cleaning it for use in other functions or programs.",
      ar: "تدرّب على الوصول إلى البيانات وتنظيفها لاستخدامها في دوال وبرامج أخرى.",
    },
    category: "Python",
    level: "Beginner",
  },
  {
    id: 2,
    title: { en: "JavaScript Arrays Drill", ar: "تدريب مصفوفات جافاسكريبت" },
    description: {
      en: "Sharpen your skills with map, filter and reduce through hands-on exercises.",
      ar: "قوِّ مهاراتك في map وfilter وreduce من خلال تمارين عملية.",
    },
    category: "JavaScript",
    level: "Beginner",
  },
  {
    id: 3,
    title: { en: "CSS Selectors Challenge", ar: "تحدي محددات CSS" },
    description: {
      en: "Test how well you can target elements with modern CSS selectors.",
      ar: "اختبر قدرتك على استهداف العناصر باستخدام محددات CSS الحديثة.",
    },
    category: "CSS",
    level: "Intermediate",
  },
  {
    id: 4,
    title: { en: "SQL Joins Practice", ar: "تدريب على ربط جداول SQL" },
    description: {
      en: "Work through realistic queries combining INNER, LEFT and RIGHT joins.",
      ar: "تدرّب على استعلامات واقعية تجمع بين أنواع الربط المختلفة في SQL.",
    },
    category: "SQL",
    level: "Intermediate",
  },
  {
    id: 5,
    title: { en: "Laravel Routing Quiz", ar: "اختبار مسارات لارافيل" },
    description: {
      en: "Check your understanding of route groups, middleware and model binding.",
      ar: "اختبر فهمك لمجموعات المسارات والوسطاء وربط النماذج في لارافيل.",
    },
    category: "PHP",
    level: "Advanced",
  },
  {
    id: 6,
    title: { en: "React Hooks Exercise", ar: "تمرين على خطافات React" },
    description: {
      en: "Practice useState, useEffect and custom hooks in small components.",
      ar: "تدرّب على useState وuseEffect والخطافات المخصصة في مكونات صغيرة.",
    },
    category: "React",
    level: "Intermediate",
  },
];
