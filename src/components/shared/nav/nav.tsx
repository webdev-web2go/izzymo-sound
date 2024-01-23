"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { navItems } from "~/constants";
import { Link } from "~/navigation";
import NavBackground from "./nav-background";
import NavMobile from "./nav-mobile";
import { useContext } from "react";
import { cn } from "~/lib/utils";
import SelectLanguage from "./select-language";
import { NavContext } from "~/context/nav-context-provider";

export default function Nav() {
  const t = useTranslations("home");
  const locale = useLocale();

  const { activeTab } = useContext(NavContext);

  return (
    <nav className="fixed top-0 z-50 flex w-full justify-between px-8 py-4 text-xl font-semibold text-white antialiased shadow-lg">
      <NavBackground />
      <div className="flex w-full items-end justify-between lg:hidden">
        <Link href="/">
          <Image
            src="/logo.webp"
            alt="Basswaves logo"
            width={200}
            height={68}
          />
        </Link>
        <NavMobile />
      </div>
      <ul className="hidden items-end gap-4 lg:flex">
        <li>
          <Link href="/">
            <Image
              src="/logo.webp"
              alt="Basswaves logo"
              width={200}
              height={68}
            />
          </Link>
        </li>
        {navItems.map(({ href, label }) => (
          <Link key={label} href={href} className="[&>div]:hover:w-3/4">
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
    </nav>
  );
}
