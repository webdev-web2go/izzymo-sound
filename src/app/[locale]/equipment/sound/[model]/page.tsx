import UserCalendar from "~/components/calendar/user-calendar";
import ProductPage from "~/components/shared/product-page/product-page";
import { soundProducts } from "~/constants";

export default function SoundDetailPage({
  params,
}: {
  params: { locale: string; model: string };
}) {
  return (
    <main>
      <ProductPage params={params} products={soundProducts} />
      <section>
        <UserCalendar />
      </section>
    </main>
  );
}
