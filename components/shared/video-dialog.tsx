"use client";

import { useTranslations } from "next-intl";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface VideoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  videoUrl: string;
}

export function VideoDialog({ open, onOpenChange, videoUrl }: VideoDialogProps) {
  const t = useTranslations("common");

  const src = videoUrl
    ? `${videoUrl}${videoUrl.includes("?") ? "&" : "?"}autoplay=1`
    : "";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] border-0 bg-transparent p-0 shadow-none sm:max-w-[700px]">
        <DialogHeader className="sr-only">
          <DialogTitle>{t("videoPreview")}</DialogTitle>
        </DialogHeader>
        {open && (
          <iframe
            src={src}
            title={t("videoPreview")}
            className="aspect-video w-full rounded-lg bg-black"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
