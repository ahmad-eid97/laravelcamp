import type { FaqItem } from "@/lib/types";

export const faqs: FaqItem[] = [
  {
    id: 1,
    question: {
      en: "What are the pricing plans and is the payment method secure?",
      ar: "خطط الأسعار لكل كورس وطريقة الدفع المضمونة؟",
    },
    answer: {
      en: "Payment is made with the student's own card through a fully secured gateway.",
      ar: "الدفع يتم عن طريق الفيزا الخاصة بالطالب وطريقة الدفع مضمونة تماماً.",
    },
  },
  {
    id: 2,
    question: {
      en: "Can I watch the courses on more than one device?",
      ar: "هل يمكنني مشاهدة الكورسات على أكثر من جهاز؟",
    },
    answer: {
      en: "Yes — your subscription follows your account, so you can continue on any phone, tablet or computer.",
      ar: "نعم — اشتراكك مرتبط بحسابك، لذا يمكنك المتابعة من أي هاتف أو جهاز لوحي أو حاسوب.",
    },
  },
  {
    id: 3,
    question: {
      en: "Do I get a certificate after finishing a course?",
      ar: "هل أحصل على شهادة بعد إنهاء الكورس؟",
    },
    answer: {
      en: "Every course ends with a graded quiz; passing it unlocks a certificate you can share on LinkedIn.",
      ar: "كل كورس ينتهي باختبار مُقيّم؛ اجتيازه يمنحك شهادة يمكنك مشاركتها على LinkedIn.",
    },
  },
  {
    id: 4,
    question: {
      en: "Can I cancel my subscription at any time?",
      ar: "هل يمكنني إلغاء اشتراكي في أي وقت؟",
    },
    answer: {
      en: "Yes, you can cancel from your profile page and keep access until the end of the billing period.",
      ar: "نعم، يمكنك الإلغاء من صفحة ملفك الشخصي مع الاحتفاظ بالوصول حتى نهاية فترة الفوترة.",
    },
  },
  {
    id: 5,
    question: {
      en: "Is there support if I get stuck during a lesson?",
      ar: "هل يوجد دعم إذا توقفت أثناء الدرس؟",
    },
    answer: {
      en: "Each lesson has a questions tab where instructors and the community answer within hours.",
      ar: "كل درس يحتوي على تبويب للأسئلة يجيب فيه المحاضرون والمجتمع خلال ساعات.",
    },
  },
];
