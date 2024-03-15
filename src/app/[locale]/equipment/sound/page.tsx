import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import UserCalendar from "~/components/calendar/user-calendar";
import MainBanner from "~/components/shared/main-banner/main-banner";
import ProductsGrid from "~/components/shared/product/products-grid";
import { soundProducts } from "~/constants";

export async function generateMetadata() {
  const t = await getTranslations("home");
  return {
    title: t("soundCardTitle"),
    openGraph: {
      type: "website",
      url: "https://www.basswaves.com.mx/equipment/sound",
      title: "Basswaves",
      description: t("soundCardDescription"),
      siteName: "Basswaves",
      images: [
        {
          url: "https://www.basswaves.com.mx/home/sound/sound1.webp",
        },
      ],
    },
  };
}

export default function SoundPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <main>
      <section className="relative flex h-96 items-end bg-[url('/home/sound/sound_card.webp')] bg-cover p-4 sm:bg-bottom">
        <MainBanner translation="soundCardTitle" />
      </section>
      <section>
        <ProductsGrid products={soundProducts} />
      </section>
      <section>
        <UserCalendar />
      </section>
    </main>
  );
}
