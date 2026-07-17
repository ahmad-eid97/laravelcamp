"use client";

import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { useTranslations } from "next-intl";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function FilterDropdown({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex cursor-pointer items-center gap-1.5 rounded-full border bg-card px-4 py-2 text-sm font-semibold shadow-soft outline-none transition-colors hover:border-primary/40 hover:text-primary">
        {value}
        <ChevronDown className="size-3.5 opacity-60" aria-hidden />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="min-w-40 rounded-xl">
        {options.map((option) => (
          <DropdownMenuItem
            key={option}
            onSelect={() => onChange(option)}
            className="cursor-pointer rounded-lg text-sm"
          >
            {option}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function LibrarySearch() {
  const t = useTranslations("library.search");

  const timeOptions = [
    t("filters.newest"),
    t("filters.yesterday"),
    t("filters.lastWeek"),
    t("filters.lastMonth"),
  ];
  const typeOptions = [
    t("filters.courses"),
    t("filters.videos"),
    t("filters.scholarships"),
  ];

  const [timeFilter, setTimeFilter] = useState(timeOptions[0]);
  const [typeFilter, setTypeFilter] = useState(typeOptions[0]);
  const [topicFilter, setTopicFilter] = useState(typeOptions[0]);

  return (
    <div className="mx-auto mt-8 max-w-2xl">
      <label className="glass flex items-center gap-3 rounded-full py-2 ps-5 pe-2 shadow-lifted">
        <Search className="size-5 shrink-0 text-primary" aria-hidden />
        <input
          type="text"
          placeholder={t("placeholder")}
          className="h-10 w-full min-w-0 bg-transparent text-base outline-none placeholder:text-muted-foreground"
        />
      </label>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
        <FilterDropdown
          options={timeOptions}
          value={timeFilter}
          onChange={setTimeFilter}
        />
        <FilterDropdown
          options={typeOptions}
          value={typeFilter}
          onChange={setTypeFilter}
        />
        <FilterDropdown
          options={typeOptions}
          value={topicFilter}
          onChange={setTopicFilter}
        />
      </div>
    </div>
  );
}
