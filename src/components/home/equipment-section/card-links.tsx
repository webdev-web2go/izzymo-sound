import { useLocale, useTranslations } from "next-intl";
import { homeCardLinks } from "~/constants";
import CardLink from "./card-link";

export default function CardLinks() {
  const t = useTranslations("home");
  const locale = useLocale();
  return (
    <section className="mb-20" id={t("equipment")}>
      <div className="grid items-center gap-8 px-4 antialiased xl:grid-cols-2 xl:px-12 2xl:px-20">
        <header className="col-span-full mx-auto mb-6 flex max-w-3xl flex-col items-center gap-4 xl:max-w-full">
          <h2 className="text-balance text-5xl font-bold tracking-tight text-primary sm:text-6xl xl:text-center">
            {t("cardLinksTitle")}
          </h2>
          <p className="max-w-prose text-xl font-semibold text-muted-foreground sm:text-2xl xl:text-center">
            {locale === "es" ? (
              <>
                <span className="font-bold text-primary">
                  {t("cardsTextSound")}
                </span>{" "}
                {t("cardsTextOne")}, {t("cardsTextTwo")}{" "}
                <span className="font-bold text-primary">
                  {t("cardsTextMixer")}
                </span>{" "}
                {t("cardsTextThree")}{" "}
                <span className="font-bold text-primary">
                  {t("cardsTextLighting")}
                </span>{" "}
                {t("cardsTextFour")}
              </>
            ) : (
              <>
                {t("cardsTextOne")}{" "}
                <span className="font-bold text-primary">
                  {t("cardsTextSound")}
                </span>
                , {t("cardsTextTwo")}{" "}
                <span className="font-bold text-primary">
                  {t("cardsTextMixer")}
                </span>{" "}
                {t("cardsTextThree")}{" "}
                <span className="font-bold text-primary">
                  {t("cardsTextLighting")}
                </span>{" "}
                {t("cardsTextFour")}
              </>
            )}
          </p>
        </header>
        {homeCardLinks.map(({ href, image, description, title }, i) => (
          <CardLink
            key={href}
            description={description}
            image={image}
            title={title}
            href={href}
            i={i}
          />
        ))}
      </div>
    </section>
  );
}
