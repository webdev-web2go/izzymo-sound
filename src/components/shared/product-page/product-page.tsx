import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";
import MainBanner from "../main-banner/main-banner";
import ProductDetail from "../product/product-detail";
import ProductsGrid from "../product/products-grid";
import ProductsCarousel from "../product/products-carousel";
import type { ProductI } from "~/types";

interface Props {
  products: ProductI[];
  params: { locale: string; model: string };
}

export default function ProductPage({ products, params }: Props) {
  const t = useTranslations("equipmentFeatures");
  const messages = useMessages();

  const mainProduct = products.find(
    (product) =>
      `${product.model} ${product.size}` === decodeURIComponent(params.model),
  )!;

  const restOfProducts = products.filter(
    (product) => product.image !== mainProduct.image,
  );

  return (
    <>
      <section className="relative flex h-96 items-end bg-[url('/home/mixers/mixer_card.webp')] bg-cover bg-center p-4 sm:bg-bottom">
        <MainBanner translation="mixerCardTitle" />
      </section>
      <section>
        <div className="grid items-center justify-center justify-items-center gap-16 px-4 py-20 2xl:grid-cols-[55fr_45fr] 2xl:gap-0">
          <ProductDetail mainProduct={mainProduct} t={t} />
          <div className="w-full">
            <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              También podría interesarte
            </h2>
            <ProductsGrid
              products={restOfProducts}
              className="p-0 2xl:hidden"
            />
            <NextIntlClientProvider messages={messages}>
              <ProductsCarousel products={restOfProducts} />
            </NextIntlClientProvider>
          </div>
        </div>
      </section>
    </>
  );
}
