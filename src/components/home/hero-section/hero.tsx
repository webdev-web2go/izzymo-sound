import { useTranslations } from "next-intl";
import HeroCarousel from "./hero-carousel";
import RentButton from "./rent-button";
import PackagesLink from "./packages-link";

export default function Hero() {
  const t = useTranslations("home");
  return (
    <section className="mb-20 mt-32 flex flex-col xl:mt-20">
      <div className="grid items-center justify-center justify-items-center px-4 sm:gap-10 xl:h-[90vh] xl:grid-cols-2 xl:gap-0 xl:px-12">
        <div className="flex w-full flex-col items-center gap-10 self-center py-4 text-primary antialiased sm:max-w-3xl xl:max-w-2xl">
          <div className="flex flex-col gap-5">
            <h1 className="text-balance text-6xl font-bold tracking-tight sm:text-7xl">
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
            <RentButton />
            <PackagesLink />
          </div>
        </div>
        <HeroCarousel />
      </div>
    </section>
  );
}
