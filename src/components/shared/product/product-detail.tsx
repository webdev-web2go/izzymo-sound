import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import type { ProductI } from "~/types";

interface Props {
  mainProduct: ProductI;
  t: any;
}

export default function ProductDetail({ mainProduct, t }: Props) {
  const tEquipment = useTranslations("equipmentFeatures");

  return (
    <article className="flex flex-col items-center justify-center gap-4 lg:flex-row 2xl:flex-col">
      <Image
        src={mainProduct.image}
        alt={mainProduct.model}
        width={600}
        height={600}
      />
      <div className="flex flex-col gap-4 text-lg text-muted-foreground antialiased">
        <header className="flex flex-col gap-2">
          <strong className="text-5xl text-primary">{mainProduct.price}</strong>
          <div className="flex flex-col gap-4 2xl:flex-row">
            <div>
              <p className="flex gap-2">
                <span className="font-semibold">{t("model")}:</span>{" "}
                {mainProduct.model}
              </p>
              <p className="flex gap-2">
                <span className="font-semibold">{tEquipment("size")}:</span>{" "}
                {mainProduct.size}
              </p>
            </div>
            <div>
              <p className="flex gap-2">
                <span className="font-semibold">{tEquipment("function")}:</span>{" "}
                {t(mainProduct.productFunction)}
              </p>
              <p className="flex gap-2">
                <span className="font-semibold">
                  {tEquipment(
                    mainProduct.image.includes("mixer") ? "system" : "power",
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
  );
}
