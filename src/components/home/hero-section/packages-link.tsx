"use client";

import { useTranslations } from "next-intl";
import { useContext } from "react";
import { Button } from "~/components/ui/button";
import { NavContext } from "~/context/nav-context-provider";
import { Link } from "~/navigation";

export default function PackagesLink() {
  const { changeActiveTab } = useContext(NavContext);

  const t = useTranslations("home");

  return (
    <Button
      asChild
      size="lg"
      className="flex w-full items-center justify-center gap-2 py-4 text-lg font-bold sm:text-xl"
      onClick={() => changeActiveTab(t("equipmentCardTitle"))}
    >
      <Link href="/equipment/packages">{t("heroPackagesButton")} &rarr;</Link>
    </Button>
  );
}
