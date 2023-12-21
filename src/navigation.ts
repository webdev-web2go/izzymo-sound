import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";

export const locales = ["en", "es"] as const;

export const localePrefix = "always";

export const pathnames = {
  "/": "/",
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
