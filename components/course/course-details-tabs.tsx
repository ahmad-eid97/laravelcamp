"use client";

import Image from "next/image";
import { Check, CircleHelp } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const NEW_TERMS =
  "HTML - HyperText Markup Language, a set of tags we use to describe the structure of web pages. CSS - Cascading Style Sheets, a language used to describe how an HTML element should look when displayed in a browser.";

const EXAMPLE_LINKS = [
  "http://www.rawnet.com/",
  "http://www.rawnet.com/what-we-do",
  "http://www.ted.com/",
  "http://bennettfeely.com/csscreatures/",
  "http://bellbros.com/",
];

const FURTHER_READING = ["Introduction to HTML", "Getting Started with CSS"];

const QUESTIONS = Array.from({ length: 5 }, (_, index) => ({
  id: index + 1,
  author: "Ahmad Eid",
  postedOn: "Dec 14",
  question:
    "Why don't my edits in the workspace show up on the example website they provide?",
  tags: ["HTML", "Introduction to HTML and CSS", "Getting familiar with HTML and CSS"],
  answers: 2,
}));

const TRANSCRIPTS = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  text: "Hi, I am Treasure",
  time: "0:05",
}));

function HelpBox() {
  const t = useTranslations("course");

  return (
    <div className="flex flex-col items-center justify-center rounded-2xl bg-muted p-6">
      <p className="text-center text-sm leading-relaxed text-muted-foreground">
        {t("helpText")}
      </p>
      <Button variant="soft" size="sm" className="mt-4">
        {t("help")}
      </Button>
    </div>
  );
}

export function CourseDetailsTabs() {
  const t = useTranslations("course");

  const tabTriggerClass =
    "cursor-pointer rounded-full border bg-card px-4 py-2 text-sm font-semibold text-muted-foreground shadow-none transition-colors hover:text-foreground data-[state=active]:border-transparent data-[state=active]:bg-brand-gradient data-[state=active]:text-white data-[state=active]:shadow-soft";

  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="text-xl font-bold">Welcome To HTML And CSS</h4>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            This lesson defines HTML and CSS, shows where and how it&apos;s used
            on websites you visit everyday, and looks at the example project you
            will be working on throughout the course.
          </p>
        </div>
        <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
          4:23
        </span>
      </div>

      <Tabs defaultValue="notes" className="mt-8">
        <TabsList className="h-auto w-full flex-wrap justify-start gap-2 rounded-none bg-transparent p-0">
          <TabsTrigger value="notes" className={tabTriggerClass}>
            {t("tabs.teacherNotes")}
          </TabsTrigger>
          <TabsTrigger value="questions" className={tabTriggerClass}>
            {t("tabs.questions", { count: 16 })}
          </TabsTrigger>
          <TabsTrigger value="transcript" className={tabTriggerClass}>
            {t("tabs.videoText")}
          </TabsTrigger>
          <TabsTrigger value="downloads" className={tabTriggerClass}>
            {t("tabs.downloads")}
          </TabsTrigger>
          <TabsTrigger value="workspace" className={tabTriggerClass}>
            {t("tabs.workspace")}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="notes" className="mt-[30px]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <h6 className="mt-2.5 font-bold text-primary">
                {t("notes.newTerms")}
              </h6>
              <p className="opacity-80">{NEW_TERMS}</p>

              <h6 className="mt-2.5 font-bold text-primary">
                {t("notes.exampleWebsites")}
              </h6>
              {EXAMPLE_LINKS.map((link) => (
                <a
                  key={link}
                  className="mt-2.5 block cursor-pointer hover:text-primary hover:underline"
                >
                  {link}
                </a>
              ))}

              <h6 className="mt-2.5 font-bold text-primary">
                {t("notes.furtherReading")}
              </h6>
              {FURTHER_READING.map((link) => (
                <a
                  key={link}
                  className="mt-2.5 block cursor-pointer hover:text-primary hover:underline"
                >
                  {link}
                </a>
              ))}
            </div>
            <div>
              <h6 className="mb-2 font-bold text-primary">{t("needHelp")}</h6>
              <HelpBox />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="questions" className="mt-[30px]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              {QUESTIONS.map((question) => (
                <div
                  key={question.id}
                  className="flex items-start justify-between gap-4 border-b py-5"
                >
                  <div className="flex gap-2.5">
                    <Image
                      src="/assets/imgs/techdegree/teacher.jpg"
                      alt={question.author}
                      width={55}
                      height={55}
                      className="size-[55px] shrink-0 rounded-full border border-primary object-cover p-[3px]"
                    />
                    <div>
                      <h6 className="font-semibold">{question.question}</h6>
                      <p className="mb-5 text-sm opacity-80">
                        {t("questions.postedOn", {
                          date: question.postedOn,
                          name: question.author,
                        })}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {question.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 text-center">
                    <h5 className="flex items-center gap-1 font-semibold text-[#86db9f]">
                      <Check className="size-4" aria-hidden />
                      {question.answers}
                    </h5>
                    <h5 className="font-semibold text-[#86db9f]">
                      {t("questions.answers")}
                    </h5>
                  </div>
                </div>
              ))}
              <div className="mt-6 flex justify-center">
                <Button variant="outline-pill" size="sm" className="min-w-1/2">
                  {t("questions.showAll")}
                </Button>
              </div>
            </div>
            <HelpBox />
          </div>
        </TabsContent>

        <TabsContent value="transcript" className="mt-[30px]">
          {TRANSCRIPTS.map((transcript) => (
            <div
              key={transcript.id}
              className="flex items-center justify-between border-b p-1.5"
            >
              <p className="text-lg opacity-80">{transcript.text}</p>
              <span className="text-primary">{transcript.time}</span>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="downloads" className="mt-[30px]">
          <div className="flex flex-col items-center justify-center rounded-2xl bg-muted p-8">
            <p className="text-center leading-relaxed text-muted-foreground">
              {t("downloadsText")}
            </p>
            <Button variant="gradient" size="sm" className="mt-4">
              {t("upgrade")}
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="workspace" className="mt-[30px]">
          <p className="flex items-center gap-2">
            <CircleHelp className="size-4 text-primary" aria-hidden />
            {t.rich("workspaceText", {
              link: (chunks) => (
                <a href="#" className="text-primary hover:underline">
                  {chunks}
                </a>
              ),
            })}
          </p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
