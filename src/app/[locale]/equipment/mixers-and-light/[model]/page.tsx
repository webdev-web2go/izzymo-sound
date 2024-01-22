import UserCalendar from "~/components/calendar/user-calendar";
import ProductPage from "~/components/shared/product-page/product-page";
import { mixerAndLightProducts } from "~/constants";

export default function MixerAndLightDetailPage({
  params,
}: {
  params: { locale: string; model: string };
}) {
  return (
    <main>
      <ProductPage params={params} products={mixerAndLightProducts} />
      <section>
        <UserCalendar />
      </section>
    </main>
  );
}
