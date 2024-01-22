import { useTranslations } from "next-intl";
import MainBanner from "~/components/shared/main-banner/main-banner";
import ProductDetail from "~/components/shared/product/product-detail";
import ProductsGrid from "~/components/shared/product/products-grid";
import ProductsCarousel from "~/components/shared/product/products-carousel";
import type { ProductI } from "~/types";
import Product from "~/components/shared/product/product-card";
import CarouselItemWrapper from "../product/carousel-item-wrapper";

interface Props {
  products: ProductI[];
  params: { locale: string; model: string };
}

export default function ProductPage({ products, params }: Props) {
  const t = useTranslations("equipmentFeatures");
  const tHome = useTranslations("home");

  const mainProduct = products.find(
    (product) =>
      `${product.model} ${product.size}` === decodeURIComponent(params.model),
  )!;

  const restOfProducts = products.filter(
    (product) => product.image !== mainProduct.image,
  );

  return (
    <>
      <section className="relative flex h-96 items-end justify-between bg-[url('/home/mixers/mixer_card.webp')] bg-cover bg-center p-4 sm:bg-bottom">
        <MainBanner translation="mixerCardTitle" />
      </section>
      <section>
        <div className="grid items-center justify-center justify-items-center gap-16 px-4 py-20 2xl:grid-cols-[55fr_45fr] 2xl:gap-0">
          <ProductDetail mainProduct={mainProduct} t={t} />
          <div className="w-full">
            <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              {tHome("interest")}
            </h2>
            <ProductsGrid
              products={restOfProducts}
              className="p-0 2xl:hidden"
            />
            <ProductsCarousel>
              {restOfProducts.map((product) => (
                <CarouselItemWrapper key={product.image} className="w-full">
                  <Product
                    key={product.image}
                    feature={product.system ?? product.power!}
                    href={product.href}
                    image={product.image}
                    model={product.model}
                    price={product.price}
                    productFunction={product.productFunction}
                    productFunctionNoTranslate={
                      product.productFunctionNoTranslate
                    }
                    size={product.size}
                    isCarousel
                  />
                </CarouselItemWrapper>
              ))}
            </ProductsCarousel>
          </div>
        </div>
      </section>
    </>
  );
}
