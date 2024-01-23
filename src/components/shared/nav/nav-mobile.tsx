"use client";

import { MenuIcon, X } from "lucide-react";
import { navItems } from "~/constants";
import { Link } from "~/navigation";
import NavBackground from "./nav-background";
import { useLocale, useTranslations } from "next-intl";
import { useContext, useEffect, useState } from "react";
import { cn } from "~/lib/utils";
import SelectLanguage from "./select-language";
import { NavContext } from "~/context/nav-context-provider";

export default function NavMobile() {
  const t = useTranslations("home");
  const locale = useLocale();

  const { activeTab } = useContext(NavContext);

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
          "fixed inset-0 flex translate-x-full flex-col items-center justify-center font-bold transition-transform duration-300",
          {
            "translate-x-0": isOpen,
          },
        )}
      >
        <button onClick={handleOpen}>
          <X className="absolute right-8 top-14 size-8" />
        </button>
        <ul className="flex flex-col items-center gap-6">
          {navItems.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="[&>div]:hover:w-3/4"
              onClick={() => setIsOpen(false)}
            >
              <li>{t(label)}</li>
              <div
                aria-hidden={true}
                className={cn("h-1 bg-white transition-all duration-300", {
                  "w-0": activeTab !== t(label),
                  "w-3/4": activeTab === t(label),
                })}
              />
            </Link>
          ))}
          <li>
            <SelectLanguage
              placeholder={locale === "es" ? "🇲🇽 Español" : "🇺🇸 English"}
            />
          </li>
        </ul>

        <NavBackground />
      </div>
    </>
  );
}
