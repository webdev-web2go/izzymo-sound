import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";

export const locales = ["en", "es"] as const;

export const defaultLocale = "es";

export const localePrefix = "always";

export const pathnames = {
  "/": "/",
  "/equipment/mixers-and-light": {
    en: "/equipment/mixers-and-light",
    es: "/equipos/mezcladoras-e-iluminacion",
  },
  "/equipment/sound": {
    en: "/equipment/sound",
    es: "/equipos/sonido",
  },
  "/equipment/packages": {
    en: "/equipment/packages",
    es: "/equipos/paquetes",
  },
  //   "/services": {
  //     en: "/services",
  //     es: "/servicios",
  //   },
  //   "/quote": {
  //     en: "/quote",
  //     es: "/cotizar",
  //   },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
