import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";
import Image from "next/image";
import { navItems } from "~/constants";
import { Link } from "~/navigation";
import NavBackground from "./nav-background";
import NavMobile from "./nav-mobile";

export default function Nav() {
  const t = useTranslations("home");
  const messages = useMessages();
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
        <NextIntlClientProvider messages={messages}>
          <NavMobile />
        </NextIntlClientProvider>
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
          <Link key={label} href={href}>
            <li>{t(label)}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
