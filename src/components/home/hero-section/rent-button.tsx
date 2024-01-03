"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";

export default function RentButton() {
  const t = useTranslations("home");

  const [rentCardsSection, setRentCardsSection] =
    useState<HTMLElement | null>();

  useEffect(() => {
    setRentCardsSection(document.getElementById(t("equipment")));
  }, []);

  return (
    <Button
      variant="outline"
      size="lg"
      className="flex w-full items-center justify-center gap-2 py-4 text-lg font-bold hover:text-primary sm:text-xl"
      onClick={() => {
        rentCardsSection?.scrollIntoView({
          behavior: "smooth",
        });
      }}
    >
      {t("heroRentButton")}
    </Button>
  );
}
