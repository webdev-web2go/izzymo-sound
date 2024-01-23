"use client";

import { useTranslations } from "next-intl";
import {
  type PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import { usePathname } from "~/navigation";
import type { NavContextI } from "~/types";

export const NavContext = createContext<NavContextI>({
  activeTab: "",
  changeActiveTab: () => {},
});

export default function NavContextProvider({ children }: PropsWithChildren) {
  const [activeTab, setActiveTab] = useState("");
  const pathname = usePathname();
  const t = useTranslations("home");

  const changeActiveTab = (newActiveTab: string) => setActiveTab(newActiveTab);

  useEffect(() => {
    if (pathname.includes("mixers") || pathname.includes("mezcladoras")) {
      changeActiveTab(t("mixerCardTitle"));
    } else if (pathname.includes("sound") || pathname.includes("sonido")) {
      changeActiveTab(t("soundCardTitle"));
    } else if (pathname.includes("packages") || pathname.includes("paquetes")) {
      changeActiveTab(t("equipmentCardTitle"));
    } else {
      changeActiveTab("");
    }
  }, [pathname]);

  return (
    <NavContext.Provider value={{ activeTab, changeActiveTab }}>
      {children}
    </NavContext.Provider>
  );
}
