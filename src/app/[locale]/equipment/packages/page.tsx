import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import UserCalendar from "~/components/calendar/user-calendar";
import PackageCard from "~/components/packages/package-card";
import MainBanner from "~/components/shared/main-banner/main-banner";
import { packages } from "~/constants";

export default function PackagesPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("home");
  const messages = useMessages();

  return (
    <main>
      <section className="relative flex h-96 items-end bg-[url('/home/packages-banner.webp')] bg-cover bg-center p-4">
        <MainBanner translation="equipmentCardTitle" className="bg-black/60" />
      </section>
      <section>
        <div className="mx-auto grid max-w-7xl justify-items-center gap-x-4 gap-y-10 px-2 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:justify-items-stretch lg:gap-x-0 lg:gap-y-20">
          <h2 className="col-span-full row-start-1 justify-self-start text-balance text-5xl font-bold tracking-tight text-primary sm:text-6xl lg:justify-self-center xl:text-center">
            {t("audioPackages")}
          </h2>
          {packages
            .filter((item) => item.category === "audio")
            .map((item) => (
              <PackageCard
                key={item.id}
                id={item.id}
                category={item.category}
                equipment={item.equipment}
                size={item.size}
                price={item.price}
                extraHourPrice={item.extraHourPrice}
                isFavorite={item.isFavorite}
                timeForPrice={item.timeForPrice}
              />
            ))}
        </div>
        <div className="mx-auto grid max-w-7xl justify-items-center gap-x-4 gap-y-14 px-6 py-10 md:grid-cols-2 lg:gap-x-6">
          <h2 className="col-span-full justify-self-start text-balance text-5xl font-bold tracking-tight text-primary sm:text-6xl lg:justify-self-center xl:text-center">
            {t("lightingPackages")}
          </h2>
          {packages
            .filter((item) => item.category === "lighting")
            .map((item) => (
              <PackageCard
                key={item.id}
                id={item.id}
                category={item.category}
                equipment={item.equipment}
                size={item.size}
                price={item.price}
                extraHourPrice={item.extraHourPrice}
                isFavorite={item.isFavorite}
                timeForPrice={item.timeForPrice}
              />
            ))}
        </div>
      </section>
      <section>
        <NextIntlClientProvider messages={messages}>
          <UserCalendar />
        </NextIntlClientProvider>
      </section>
    </main>
  );
}
