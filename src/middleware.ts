import createMiddleware from "next-intl/middleware";

import { locales, localePrefix, pathnames } from "./navigation";

export default createMiddleware({
  defaultLocale: "es",
  localePrefix,
  locales,
  pathnames,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/((?!api|_next|.*\\..*).*)"],
};
