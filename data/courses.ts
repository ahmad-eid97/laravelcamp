import type { Course } from "@/lib/types";

export const courses: Course[] = [
  {
    id: 1,
    title: { en: "Laravel From Scratch", ar: "لارافيل من الصفر" },
    description: {
      en: "Build modern PHP applications with Laravel — routing, Eloquent, Blade and more.",
      ar: "ابنِ تطبيقات PHP حديثة باستخدام لارافيل — المسارات وEloquent وBlade والمزيد.",
    },
    category: "PHP",
    level: "Intermediate",
    hours: 24,
    minutesLeft: 68,
    lessonsCount: 42,
    rating: 4.8,
    students: 3800,
    trailerUrl: "https://www.youtube.com/embed/-OnWBh5OX64",
    chapters: [
      { id: 1, name: { en: "Getting Started", ar: "البداية" } },
      { id: 2, name: { en: "Routing & Controllers", ar: "المسارات والمتحكمات" } },
      { id: 3, name: { en: "Eloquent ORM", ar: "التعامل مع قواعد البيانات" } },
      { id: 4, name: { en: "Blade Templates", ar: "قوالب Blade" } },
      { id: 5, name: { en: "Authentication", ar: "المصادقة" } },
    ],
  },
  {
    id: 2,
    title: { en: "Modern JavaScript Essentials", ar: "أساسيات جافاسكريبت الحديثة" },
    description: {
      en: "Master the JavaScript features you will use every day: ES modules, async/await and the DOM.",
      ar: "أتقن خصائص جافاسكريبت التي ستستخدمها يومياً: الوحدات وasync/await والتعامل مع DOM.",
    },
    category: "JavaScript",
    level: "Beginner",
    hours: 18,
    minutesLeft: 42,
    lessonsCount: 31,
    rating: 4.7,
    students: 5200,
    trailerUrl: "https://www.youtube.com/embed/-OnWBh5OX64",
    chapters: [
      { id: 1, name: { en: "Language Fundamentals", ar: "أساسيات اللغة" } },
      { id: 2, name: { en: "Functions & Scope", ar: "الدوال والنطاق" } },
      { id: 3, name: { en: "Working with the DOM", ar: "التعامل مع DOM" } },
      { id: 4, name: { en: "Async JavaScript", ar: "البرمجة غير المتزامنة" } },
    ],
  },
  {
    id: 3,
    title: { en: "React & Next.js Mastery", ar: "احتراف React وNext.js" },
    description: {
      en: "Component-driven development with React 19 and the Next.js App Router.",
      ar: "تطوير واجهات قائم على المكونات مع React 19 وApp Router في Next.js.",
    },
    category: "React",
    level: "Intermediate",
    hours: 32,
    minutesLeft: 95,
    lessonsCount: 56,
    rating: 4.9,
    students: 4100,
    trailerUrl: "https://www.youtube.com/embed/-OnWBh5OX64",
    chapters: [
      { id: 1, name: { en: "Thinking in Components", ar: "التفكير بالمكونات" } },
      { id: 2, name: { en: "State & Effects", ar: "الحالة والتأثيرات" } },
      { id: 3, name: { en: "App Router & Layouts", ar: "الموجه والتخطيطات" } },
      { id: 4, name: { en: "Data Fetching", ar: "جلب البيانات" } },
      { id: 5, name: { en: "Deployment", ar: "النشر" } },
    ],
  },
  {
    id: 4,
    title: { en: "Python for Beginners", ar: "بايثون للمبتدئين" },
    description: {
      en: "A gentle introduction to programming with Python — syntax, data types and small projects.",
      ar: "مقدمة سهلة إلى البرمجة مع بايثون — الصياغة وأنواع البيانات ومشاريع صغيرة.",
    },
    category: "Python",
    level: "Beginner",
    hours: 20,
    minutesLeft: 55,
    lessonsCount: 28,
    rating: 4.6,
    students: 6400,
    trailerUrl: "https://www.youtube.com/embed/-OnWBh5OX64",
    chapters: [
      { id: 1, name: { en: "Setup & First Steps", ar: "التجهيز والخطوات الأولى" } },
      { id: 2, name: { en: "Data Types & Collections", ar: "أنواع البيانات والمجموعات" } },
      { id: 3, name: { en: "Control Flow", ar: "التحكم في التدفق" } },
      { id: 4, name: { en: "Functions & Modules", ar: "الدوال والوحدات" } },
    ],
  },
  {
    id: 5,
    title: { en: "HTML & CSS Layouts", ar: "تنسيقات HTML وCSS" },
    description: {
      en: "Build responsive pages with semantic HTML, Flexbox and CSS Grid.",
      ar: "ابنِ صفحات متجاوبة باستخدام HTML الدلالية وFlexbox وCSS Grid.",
    },
    category: "CSS",
    level: "Beginner",
    hours: 12,
    minutesLeft: 30,
    lessonsCount: 22,
    rating: 4.8,
    students: 7100,
    trailerUrl: "https://www.youtube.com/embed/-OnWBh5OX64",
    chapters: [
      { id: 1, name: { en: "Semantic HTML", ar: "HTML الدلالية" } },
      { id: 2, name: { en: "Flexbox", ar: "فليكس بوكس" } },
      { id: 3, name: { en: "CSS Grid", ar: "الشبكة CSS Grid" } },
      { id: 4, name: { en: "Responsive Design", ar: "التصميم المتجاوب" } },
    ],
  },
  {
    id: 6,
    title: { en: "RESTful APIs with Laravel", ar: "بناء واجهات REST مع لارافيل" },
    description: {
      en: "Design, secure and test production-grade JSON APIs with Laravel.",
      ar: "صمّم وأمّن واختبر واجهات JSON جاهزة للإنتاج باستخدام لارافيل.",
    },
    category: "PHP",
    level: "Advanced",
    hours: 28,
    minutesLeft: 80,
    lessonsCount: 38,
    rating: 4.9,
    students: 1900,
    trailerUrl: "https://www.youtube.com/embed/-OnWBh5OX64",
    chapters: [
      { id: 1, name: { en: "API Design Basics", ar: "أساسيات تصميم الواجهات" } },
      { id: 2, name: { en: "Resources & Serialization", ar: "الموارد والتسلسل" } },
      { id: 3, name: { en: "Authentication with Sanctum", ar: "المصادقة عبر Sanctum" } },
      { id: 4, name: { en: "Testing & Documentation", ar: "الاختبار والتوثيق" } },
    ],
  },
];

export const popularCourses: Course[] = courses.slice(0, 4);

export function getCourseById(id: number): Course | undefined {
  return courses.find((course) => course.id === id);
}
