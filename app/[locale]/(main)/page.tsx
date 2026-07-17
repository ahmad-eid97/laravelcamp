import { setRequestLocale } from "next-intl/server";

import { BlogPreview } from "@/components/home/blog-preview";
import { CtaBanner } from "@/components/home/cta-banner";
import { FaqSection } from "@/components/home/faq-section";
import { Hero } from "@/components/home/hero";
import { LatestCourses } from "@/components/home/latest-courses";
import { SkillsMarquee } from "@/components/home/skills-marquee";
import { Subscription } from "@/components/home/subscription";
import { Testimonials } from "@/components/home/testimonials";
import { VideoSection } from "@/components/home/video-section";
import { popularCourses } from "@/data/courses";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div>
      <Hero />
      <SkillsMarquee />
      <VideoSection />
      <LatestCourses courses={popularCourses} />
      <Subscription />
      <Testimonials />
      <FaqSection />
      <BlogPreview />
      <CtaBanner />
    </div>
  );
}
