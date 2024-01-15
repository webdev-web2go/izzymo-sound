"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";

export default function CalendarButton() {
  const t = useTranslations("home");

  const [calendarSection, setCalendarSection] = useState<HTMLElement | null>();

  useEffect(() => {
    setCalendarSection(document.getElementById("user-calendar"));
  }, []);

  return (
    <Button
      className="z-20 text-lg antialiased"
      variant="outline"
      onClick={() => {
        calendarSection?.scrollIntoView({
          behavior: "smooth",
        });
      }}
    >
      {t("seeDates")}
    </Button>
  );
}
