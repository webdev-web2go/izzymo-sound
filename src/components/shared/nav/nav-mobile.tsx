"use client";

import { MenuIcon, X } from "lucide-react";
import { navItems } from "~/constants";
import { Link } from "~/navigation";
import NavBackground from "./nav-background";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { cn } from "~/lib/utils";
import SelectLanguage from "./select-language";

export default function NavMobile() {
  const t = useTranslations("home");
  const locale = useLocale();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if (isOpen) {
      body?.classList.add("modal-open");
    } else {
      body?.classList.remove("modal-open");
    }
  }, [isOpen]);

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <button onClick={handleOpen}>
        <MenuIcon className="size-8" />
      </button>
      <div
        className={cn(
          "fixed inset-0 flex translate-x-full flex-col items-center justify-center gap-6 font-bold transition-transform duration-300",
          {
            "translate-x-0": isOpen,
          },
        )}
      >
        <button onClick={handleOpen}>
          <X className="absolute right-8 top-14 size-8" />
        </button>
        {navItems.map(({ href, label }) => (
          <Link key={label} href={href} onClick={handleOpen}>
            {t(label)}
          </Link>
        ))}
        <SelectLanguage
          placeholder={locale === "es" ? "🇲🇽 Español" : "🇺🇸 English"}
        />

        <NavBackground />
      </div>
    </>
  );
}
