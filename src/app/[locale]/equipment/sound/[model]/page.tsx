import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";
import Image from "next/image";
import ProductsCarousel from "~/components/shared/product/products-carousel";
import { Button } from "~/components/ui/button";
import { soundProducts } from "~/constants";
import type { ProductI } from "~/types";

export default function SoundDetailPage({
  params,
}: {
  params: { locale: string; model: string };
}) {
  const tHome = useTranslations("home");
  const tEquipment = useTranslations("equipmentFeatures");
  const t = useTranslations("mixersAndLightsPage");
  const messages = useMessages();

  const mainProduct = soundProducts.find(
    (product) =>
      product.model + t(product.productFunction) ===
      decodeURIComponent(params.model),
  )!;

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
        <div className="grid items-center justify-items-center px-4 py-20 2xl:grid-cols-[55fr_45fr]">
          <article className="flex flex-col items-center justify-center gap-4 lg:flex-row 2xl:flex-col">
            <Image
              src={mainProduct.image}
              alt={mainProduct.model}
              width={400}
              height={400}
            />
            <div className="flex flex-col gap-4 text-lg text-muted-foreground antialiased">
              <header className="flex flex-col gap-2">
                <strong className="text-5xl text-primary">
                  {mainProduct.price}
                </strong>
                <div className="flex flex-col gap-4 2xl:flex-row">
                  <div>
                    <p className="flex gap-2">
                      <span className="font-semibold">{t("model")}:</span>{" "}
                      {mainProduct.model}
                    </p>
                    <p className="flex gap-2">
                      <span className="font-semibold">
                        {tEquipment("size")}:
                      </span>{" "}
                      {mainProduct.size}
                    </p>
                  </div>
                  <div>
                    <p className="flex gap-2">
                      <span className="font-semibold">
                        {tEquipment("function")}:
                      </span>{" "}
                      {t(mainProduct.productFunction)}
                    </p>
                    <p className="flex gap-2">
                      <span className="font-semibold">
                        {tEquipment(
                          mainProduct.image.includes("mixer")
                            ? "system"
                            : "power",
                        )}
                        :
                      </span>
                      {mainProduct.system
                        ? t(mainProduct.system)
                        : mainProduct.power?.includes("watt")
                          ? mainProduct.power
                          : t(mainProduct.power)}
                    </p>
                  </div>
                </div>
              </header>
              <p className="max-w-prose">{mainProduct.description}</p>
              <Button className="py-6 text-xl">Reservar</Button>
            </div>
          </article>
          <div className="">
            <h2 className="text-balance text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              También podría interesarte
            </h2>
            <NextIntlClientProvider messages={messages}>
              <ProductsCarousel
                mainProduct={mainProduct}
                products={soundProducts}
              />
            </NextIntlClientProvider>
          </div>
        </div>
      </section>
    </main>
  );
}
