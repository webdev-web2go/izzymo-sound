import { NextIntlClientProvider, useMessages } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import UserCalendar from "~/components/calendar/user-calendar";
import MainBanner from "~/components/shared/main-banner/main-banner";
import ProductsGrid from "~/components/shared/product/products-grid";
import { soundProducts } from "~/constants";

export default function SoundPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();

  return (
    <main>
      <section className="relative flex h-96 items-end bg-[url('/home/sound/sound_card.webp')] bg-cover p-4 sm:bg-bottom">
        <MainBanner translation="soundCardTitle" />
      </section>
      <section>
        <ProductsGrid products={soundProducts} />
      </section>
      <section>
        <NextIntlClientProvider messages={messages}>
          <UserCalendar />
        </NextIntlClientProvider>
      </section>
    </main>
  );
}
