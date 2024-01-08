import ProductPage from "~/components/shared/product-page/product-page";
import { mixerAndLightProducts } from "~/constants";

export default function MixerAndLightDetailPage({
  params,
}: {
  params: { locale: string; model: string };
}) {
  return (
    <main>
      <ProductPage
        pageName="mixersAndLightsPage"
        params={params}
        products={mixerAndLightProducts}
      />
    </main>
  );
}
