import Image from "next/image";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

export function TechdegreeTeacher() {
  const t = useTranslations("techdegree");

  return (
    <div className="top-28 space-y-6 lg:sticky">
      <div className="rounded-3xl border bg-card p-6 shadow-soft">
        <h3 className="text-sm font-bold tracking-wide text-muted-foreground">
          {t("teacher")}
        </h3>
        <div className="mt-4 flex items-center gap-4">
          <Image
            src="/assets/imgs/techdegree/teacher.jpg"
            alt="Ahmad Eid"
            width={80}
            height={80}
            className="size-16 rounded-2xl object-cover"
          />
          <div>
            <h4 className="text-lg font-bold">Ahmad Eid</h4>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Star
                className="size-3.5 fill-brand-amber text-brand-amber"
                aria-hidden
              />
              4.9 · Full Stack Developer
            </span>
          </div>
        </div>

        <p className="mt-4 line-clamp-5 text-sm leading-relaxed text-muted-foreground">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
          officiis eveniet fuga tenetur deserunt, ex, libero deleniti est
          laudantium ipsam placeat eum dolores ipsa unde nostrum explicabo
          voluptate vitae esse.
        </p>
      </div>

      <div className="rounded-3xl border bg-card p-6 shadow-soft">
        <h4 className="font-bold">{t("downloadTitle")}</h4>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {t("downloadText")}
        </p>
        <Button variant="gradient" className="mt-4 w-full">
          {t("upgrade")}
        </Button>
      </div>
    </div>
  );
}
