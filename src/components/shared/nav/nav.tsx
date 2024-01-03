import { useTranslations } from "next-intl";
import Image from "next/image";
import { navItems } from "~/constants";
import { Link } from "~/navigation";
import NavBackground from "./nav-background";

export default function Nav() {
  const t = useTranslations("home");
  return (
    <nav className="fixed top-0 z-50 flex w-full justify-between px-8 py-4 text-xl font-semibold text-white antialiased shadow-lg">
      <NavBackground />
      <ul className="flex items-end gap-4">
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
      <div></div>
    </nav>
  );
}
