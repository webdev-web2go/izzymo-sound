import { useTranslations } from "next-intl";
import Image from "next/image";
import Product from "~/components/shared/product/product";
import { Button } from "~/components/ui/button";
import { lights, mixers } from "~/constants";
import { pathnames } from "~/navigation";

interface Product {
  model: string;
  size: string;
  productFunction: string;
  system?: string;
  power?: string;
  price: string;
  image: string;
  description: string;
  href: keyof typeof pathnames;
}

export default function MixerAndLightDetailPage({
  params,
}: {
  params: { locale: string; model: string };
}) {
  const tHome = useTranslations("home");
  const tEquipment = useTranslations("equipmentFeatures");
  const t = useTranslations("mixersAndLightsPage");

  const mixer = mixers.find(
    (mixer) =>
      mixer.model + t(mixer.productFunction) ===
      decodeURIComponent(params.model),
  );

  const light = lights.find((light) => {
    return (
      light.model + t(light.productFunction) ===
      decodeURIComponent(params.model)
    );
  });

  const product = (mixer ? mixer : light) as Product;

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
        <div className="grid grid-cols-[55fr_45fr] justify-items-center gap-10 px-4 py-10">
          <article className="flex flex-col gap-4">
            <Image
              src={product?.image!}
              alt={product?.model!}
              width={600}
              height={600}
            />
            <div className="flex flex-col gap-4 text-lg text-muted-foreground antialiased">
              <header className="flex flex-col gap-2">
                <strong className="text-5xl text-primary">
                  {product.price}
                </strong>
                <div className="flex gap-4">
                  <div>
                    <p className="flex gap-2">
                      <span className="font-semibold">{t("model")}:</span>{" "}
                      {product?.model}
                    </p>
                    <p className="flex gap-2">
                      <span className="font-semibold">
                        {tEquipment("size")}:
                      </span>{" "}
                      {product?.size}
                    </p>
                  </div>
                  <div>
                    <p className="flex gap-2">
                      <span className="font-semibold">
                        {tEquipment("function")}:
                      </span>{" "}
                      {t(product?.productFunction)}
                    </p>
                    <p className="flex gap-2">
                      <span className="font-semibold">
                        {tEquipment(
                          product?.image.includes("mixer") ? "system" : "power",
                        )}
                        :
                      </span>
                      {product.system
                        ? t(product.system)
                        : product.power?.includes("watt")
                          ? product.power
                          : t(product.power)}
                    </p>
                  </div>
                </div>
              </header>
              <p className="max-w-prose">{product.description}</p>
              <Button className="py-6 text-xl">Reservar</Button>
            </div>
          </article>
          <div className="h-[800px] overflow-scroll">
            {mixers
              .filter((mixerEl) => mixerEl.image !== mixer?.image)
              .map((mixer) => (
                <Product
                  key={mixer.image}
                  feature={mixer.system}
                  href={mixer.href}
                  image={mixer.image}
                  model={mixer.model}
                  price={mixer.price}
                  productFunction={mixer.productFunction}
                  size={mixer.size}
                />
              ))}
            {lights
              .filter((lightEl) => lightEl.image !== light?.image)
              .map((light) => (
                <Product
                  key={light.image}
                  feature={light.power}
                  href={light.href}
                  image={light.image}
                  model={light.model}
                  price={light.price}
                  productFunction={light.productFunction}
                  size={light.size}
                />
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
