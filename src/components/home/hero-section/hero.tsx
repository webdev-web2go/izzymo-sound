import { Link } from "~/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "~/components/ui/button";
import HeroCarousel from "./hero-carousel";

export default function Hero() {
  const t = useTranslations("home");
  return (
    <section className="mb-12 flex flex-col">
      <div className="grid items-center justify-center justify-items-center gap-10 px-4 xl:h-[90vh] xl:grid-cols-2 xl:gap-0 xl:px-12">
        <div className="flex w-full flex-col items-center gap-10 self-center py-4 text-primary antialiased sm:max-w-3xl xl:max-w-2xl">
          <div className="flex flex-col gap-5">
            <h1 className="text-6xl font-bold tracking-tight [text-wrap:balance] sm:text-7xl">
              {t("heroTitle")}
            </h1>
            <p className="text-xl font-semibold text-muted-foreground sm:text-2xl">
              {t("heroTextOne")}{" "}
              <span className="font-bold text-primary">
                {t("heroWideRange")}
              </span>{" "}
              {t("heroTextTwo")}
            </p>
          </div>
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="flex w-full items-center justify-center gap-2 py-4 text-lg font-bold hover:text-primary sm:text-xl"
            >
              <a href={`#${t("equipment")}`}>{t("heroRentButton")}</a>
            </Button>
            <Button
              asChild
              size="lg"
              className="flex w-full items-center justify-center gap-2 py-4 text-lg font-bold sm:text-xl"
            >
              <Link href="/">{t("heroPackagesButton")} &rarr;</Link>
            </Button>
          </div>
        </div>
        <HeroCarousel />
      </div>
    </section>
  );
}
