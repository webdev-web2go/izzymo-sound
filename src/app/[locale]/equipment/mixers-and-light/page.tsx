import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Product from "~/components/shared/product/product";
import { mixerAndLightProducts } from "~/constants";

export default function MixersAndLightPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const tHome = useTranslations("home");

  return (
    <main>
      <section className="relative flex h-96 items-end bg-[url('/home/mixers/mixer_card.webp')] bg-cover bg-center p-4 sm:bg-bottom">
        <div className="z-20 flex flex-col-reverse gap-2 sm:flex-row sm:items-center">
          <div className="h-1.5 w-48 bg-white" />
          <h1 className="text-balance text-5xl font-bold text-white sm:text-6xl">
            {tHome("mixerCardTitle")}
          </h1>
        </div>
        <div aria-hidden={true} className="absolute inset-0 bg-black/80" />
      </section>
      <section>
        <div className="grid gap-10 px-4 py-10 2xl:grid-cols-2">
          {mixerAndLightProducts.map((product) => (
            <Product
              key={product.image}
              model={product.model}
              size={product.size}
              productFunction={product.productFunction}
              feature={(product.system || product.power) as string}
              price={product.price}
              href={product.href}
              image={product.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
