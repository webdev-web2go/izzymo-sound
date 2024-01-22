import { useTranslations } from "next-intl";
import Image from "next/image";
import { Suspense } from "react";
import type { ProductI } from "~/types";
import AvailabilityBadge, {
  AvailabilityBadgeSkeleton,
} from "./availability-badge";
import ReserveButton from "./reserve-button";

interface Props {
  mainProduct: ProductI;
  t: any;
}

export default function ProductDetail({ mainProduct, t }: Props) {
  const tEquipment = useTranslations("equipmentFeatures");
  const isLightingProduct = mainProduct.image.includes("light");

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
          <div className="flex items-center justify-between">
            <strong className="text-5xl text-primary">
              {mainProduct.price}
            </strong>
            <Suspense fallback={<AvailabilityBadgeSkeleton />}>
              <AvailabilityBadge
                isLightingProduct={isLightingProduct}
                model={mainProduct.model}
                productFunction={mainProduct.productFunctionNoTranslate}
              />
            </Suspense>
          </div>
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
        <ReserveButton
          isPackage={false}
          model={mainProduct.model}
          productFunction={mainProduct.productFunction}
        />
      </div>
    </article>
  );
}
