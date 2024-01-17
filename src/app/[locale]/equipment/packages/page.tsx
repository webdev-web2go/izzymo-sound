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
        <div className="mx-auto grid max-w-7xl grid-cols-3 gap-y-20 px-6 py-10">
          <h2 className="col-span-full row-start-1 text-balance text-5xl font-bold tracking-tight text-primary sm:text-6xl xl:text-center">
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
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-x-6 gap-y-14 px-6 py-10">
          <h2 className="col-span-full text-balance text-5xl font-bold tracking-tight text-primary sm:text-6xl xl:text-center">
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
