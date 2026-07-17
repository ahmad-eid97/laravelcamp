import type { PricingPlan } from "@/lib/types";

export const plans: PricingPlan[] = [
  {
    id: 1,
    name: { en: "Basic Plan", ar: "إشتراك عادي" },
    description: {
      en: "Subscribe for a symbolic price and access the courses you want to study with ease — support is there whenever you get stuck.",
      ar: "إشترك معنا بسعر رمزي لتلقي الكورسات والمحتوي الذي ترغب في دراسته بكل سهولة وإذا توقفت في الطريق تستطيع التواصل مع الدعم الفني.",
    },
    price: "$5.00 USD",
    features: [
      { en: "Up to 3 credit cards", ar: "يصل إلى 3 بطاقات ائتمان" },
      {
        en: "Invest in stocks and ETFs",
        ar: "استثمر في الأسهم وصناديق الاستثمار المتداولة",
      },
      { en: "Personal profile only", ar: "الملف الشخصي فقط" },
      { en: "Standard customer support", ar: "دعم العملاء العادي" },
    ],
    featured: false,
  },
  {
    id: 2,
    name: { en: "Pro Plan", ar: "إشتراك محترف" },
    description: {
      en: "Everything in Basic plus graded exercises, downloadable workspaces and priority answers from instructors.",
      ar: "كل ما في الإشتراك العادي بالإضافة إلى تدريبات مُقيّمة ومساحات عمل قابلة للتنزيل وأولوية في إجابات المحاضرين.",
    },
    price: "$12.00 USD",
    features: [
      { en: "Unlimited course access", ar: "وصول غير محدود للكورسات" },
      { en: "Graded quizzes & certificates", ar: "اختبارات مُقيّمة وشهادات" },
      { en: "Downloadable workspaces", ar: "مساحات عمل قابلة للتنزيل" },
      { en: "Priority customer support", ar: "أولوية في دعم العملاء" },
    ],
    featured: true,
  },
  {
    id: 3,
    name: { en: "Team Plan", ar: "إشتراك الفرق" },
    description: {
      en: "For companies and study groups: shared dashboards, progress reports and seats you can reassign anytime.",
      ar: "للشركات ومجموعات الدراسة: لوحات مشتركة وتقارير تقدم ومقاعد يمكن إعادة توزيعها في أي وقت.",
    },
    price: "$29.00 USD",
    features: [
      { en: "Up to 10 team seats", ar: "حتى 10 مقاعد للفريق" },
      { en: "Team progress reports", ar: "تقارير تقدم الفريق" },
      { en: "Shared learning paths", ar: "مسارات تعلم مشتركة" },
      { en: "Dedicated account manager", ar: "مدير حساب مخصص" },
    ],
    featured: false,
  },
];
