import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import UserCalendar from "~/components/calendar/user-calendar";
import MainBanner from "~/components/shared/main-banner/main-banner";
import ProductsGrid from "~/components/shared/product/products-grid";
import { mixerAndLightProducts } from "~/constants";

export async function generateMetadata() {
  const t = await getTranslations("home");
  return {
    title: t("mixerCardTitle"),
    openGraph: {
      type: "website",
      url: "https://izzymo-sound.vercel.app/equipment/mixers-and-light",
      title: "Basswaves",
      description: t("mixerCardDescription"),
      siteName: "Basswaves",
      images: [
        {
          url: "/home/mixers/mixer1.webp",
        },
      ],
    },
  };
}

export default function MixersAndLightPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <main>
      <section className="relative flex h-96 items-end bg-[url('/home/mixers/mixer_card.webp')] bg-cover bg-center p-4 sm:bg-bottom">
        <MainBanner translation="mixerCardTitle" />
      </section>
      <section>
        <ProductsGrid products={mixerAndLightProducts} />
      </section>
      <section>
        <UserCalendar />
      </section>
    </main>
  );
}
