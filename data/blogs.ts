import type { BlogPost } from "@/lib/types";

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Gulp for Beginners",
    author: "Ahmad Eid",
    date: "2026-06-07",
    readMinutes: 5,
    excerpt: {
      en: "An introduction to gulp.js: what it is, and how to automate and optimize your workflow with a small toolkit.",
      ar: "مقدمة إلى gulp.js: ما هو، وكيف تؤتمت وتحسّن سير عملك باستخدام مجموعة أدوات صغيرة.",
    },
  },
  {
    id: 2,
    title: "Getting Started with Laravel Queues",
    author: "Ahmad Eid",
    date: "2026-05-21",
    readMinutes: 7,
    excerpt: {
      en: "Move slow work out of the request cycle: dispatch jobs, run workers and monitor failures in Laravel.",
      ar: "انقل المهام البطيئة خارج دورة الطلب: أرسل المهام وشغّل العمال وراقب الإخفاقات في لارافيل.",
    },
  },
  {
    id: 3,
    title: "Understanding CSS Grid",
    author: "Ahmad Eid",
    date: "2026-04-14",
    readMinutes: 6,
    excerpt: {
      en: "From explicit tracks to auto-placement — a practical tour of the layout system that changed the web.",
      ar: "من المسارات الصريحة إلى التوزيع التلقائي — جولة عملية في نظام التخطيط الذي غيّر الويب.",
    },
  },
  {
    id: 4,
    title: "TypeScript for JavaScript Developers",
    author: "Ahmad Eid",
    date: "2026-03-02",
    readMinutes: 8,
    excerpt: {
      en: "Types, interfaces and generics explained with examples you can apply to an existing codebase today.",
      ar: "الأنواع والواجهات والقوالب العامة مشروحة بأمثلة يمكنك تطبيقها على مشروعك الحالي اليوم.",
    },
  },
];
