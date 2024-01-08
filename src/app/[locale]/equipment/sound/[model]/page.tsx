import ProductPage from "~/components/shared/product-page/product-page";
import { soundProducts } from "~/constants";

export default function SoundDetailPage({
  params,
}: {
  params: { locale: string; model: string };
}) {
  return (
    <main>
      <ProductPage
        pageName="soundPage"
        params={params}
        products={soundProducts}
      />
    </main>
  );
}
