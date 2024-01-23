"use client";

import { useTranslations } from "next-intl";
import { useContext } from "react";
import { Badge } from "~/components/ui/badge";
import { NavContext } from "~/context/nav-context-provider";
import { cn } from "~/lib/utils";
import { Link } from "~/navigation";

interface Props {
  href:
    | "/equipment/mixers-and-light"
    | "/equipment/sound"
    | "/equipment/packages";
  image: string;
  title: string;
  description: string;
  i: number;
}

export default function CardLink({
  href,
  image,
  title,
  description,
  i,
}: Props) {
  const { changeActiveTab } = useContext(NavContext);
  const t = useTranslations("home");
  return (
    <Link
      key={href}
      href={href}
      className={cn(
        "mx-auto w-full overflow-hidden rounded-md bg-cover bg-center bg-no-repeat transition-all duration-300 hover:-translate-y-2 hover:shadow-xl lg:w-4/5 xl:w-full",
        {
          "xl:col-start-2 xl:row-start-2 xl:row-end-4 xl:self-stretch": i === 2,
        },
      )}
      style={{ backgroundImage: `url("${image}")` }}
      onClick={() => changeActiveTab(t(title))}
    >
      <article
        className={cn(
          "relative z-30 flex h-[400px] flex-col items-center justify-center px-4 text-center text-white",
          {
            "h-[650px] xl:h-full": i === 2,
          },
        )}
      >
        {i === 2 && (
          <Badge className="pointer-events-none absolute -right-12 top-10 mb-4 flex w-52 rotate-45 justify-center bg-white text-sm text-black sm:text-base">
            {t("favorite")}
          </Badge>
        )}
        <h3 className="mb-2 text-4xl font-bold sm:text-6xl">{t(title)}</h3>
        <p className="text-base font-semibold sm:text-xl">{t(description)}</p>
        <div
          aria-hidden={true}
          className="absolute inset-0 -z-10 bg-black/70"
        />
      </article>
    </Link>
  );
}
