import type { routing } from "@/i18n/routing";

export type Locale = (typeof routing.locales)[number];

export interface LocalizedText {
  en: string;
  ar: string;
}

export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export interface Chapter {
  id: number;
  name: LocalizedText;
}

export interface Course {
  id: number;
  title: LocalizedText;
  description: LocalizedText;
  category: string;
  level: CourseLevel;
  hours: number;
  minutesLeft: number;
  lessonsCount: number;
  rating: number;
  students: number;
  trailerUrl: string;
  chapters: Chapter[];
}

export interface Quiz {
  id: number;
  title: LocalizedText;
  description: LocalizedText;
  category: string;
  level: CourseLevel;
}

export interface BlogPost {
  id: number;
  title: string;
  author: string;
  /** ISO date string */
  date: string;
  readMinutes: number;
  excerpt: LocalizedText;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface PricingPlan {
  id: number;
  name: LocalizedText;
  description: LocalizedText;
  price: string;
  features: LocalizedText[];
  featured: boolean;
}

export interface FaqItem {
  id: number;
  question: LocalizedText;
  answer: LocalizedText;
}

export function localize(text: LocalizedText, locale: string): string {
  return locale === "ar" ? text.ar : text.en;
}
