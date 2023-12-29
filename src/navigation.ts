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
  "/equipment/mixers-and-light/mixer/[model]": {
    en: "/equipment/mixers-and-light/mixer/[model]",
    es: "/equipos/mezcladoras-e-iluminacion/mezcladora/[model]",
  },
  "/equipment/mixers-and-light/light/[model]": {
    en: "/equipment/mixers-and-light/light/[model]",
    es: "/equipos/mezcladoras-e-iluminación/iluminación/[model]",
  },
  "/equipment/sound/[model]": {
    en: "/equipment/sound/[model]",
    es: "/equipos/sonido/[model]",
  },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
