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
import Whatsapp from "~/components/icons/whatsapp";

export default function NavMobile() {
  const t = useTranslations("home");
  const locale = useLocale();

  const { activeTab, changeActiveTab } = useContext(NavContext);

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
        <div className="flex w-full justify-between p-6">
          <div className="lg:hidden">
            <a
              href="https://api.whatsapp.com/send?phone=529993931271"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Whatsapp className="size-8" />
            </a>
          </div>
          <button onClick={handleOpen} className="size-8">
            <X />
          </button>
        </div>
        <ul className="flex grow flex-col items-center justify-center gap-6">
          {navItems.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="[&>div]:hover:w-3/4"
              onClick={() => {
                changeActiveTab(t(label));
                setIsOpen(false);
              }}
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
