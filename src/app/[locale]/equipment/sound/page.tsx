import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Product from "~/components/shared/product/product";
import { sound } from "~/constants";

export default function SoundPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const tHome = useTranslations("home");
  return (
    <main>
      <section className="relative flex h-96 items-end bg-[url('/home/sound/sound_card.webp')] bg-cover p-4 sm:bg-bottom">
        <div className="z-20 flex flex-col-reverse gap-2 sm:flex-row sm:items-center">
          <div className="h-1.5 w-48 bg-white" />
          <h1 className="text-balance text-5xl font-bold text-white sm:text-6xl">
            {tHome("soundCardTitle")}
          </h1>
        </div>
        <div aria-hidden={true} className="absolute inset-0 bg-black/80" />
      </section>
      <section>
        <div className="mx-auto grid gap-10 px-4 py-10 2xl:grid-cols-2">
          {sound.map(
            ({ model, size, productFunction, power, price, href, image }) => (
              <Product
                key={image}
                model={model}
                size={size}
                productFunction={productFunction}
                feature={power}
                price={price}
                href={href}
                image={image}
              />
            ),
          )}
        </div>
      </section>
    </main>
  );
}
