import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { Link, type pathnames } from "~/navigation";
import AvailabilityBadge, {
  AvailabilityBadgeSkeleton,
} from "./availability-badge";
import { Suspense } from "react";
import ReserveButton from "./reserve-button";

interface ProductCard {
  model: string;
  size: string;
  productFunction: string;
  productFunctionNoTranslate: string;
  feature: string;
  price: string;
  image: string;
  href: keyof typeof pathnames;
  isCarousel?: boolean;
  totalPieces: number;
}

export default function Product({
  image,
  size,
  productFunction,
  productFunctionNoTranslate,
  feature,
  price,
  href,
  model,
  isCarousel,
  totalPieces,
}: ProductCard) {
  const t = useTranslations("equipmentFeatures");
  const tHome = useTranslations("home");
  const isLightingProduct = image.includes("light");
  const isSoundProduct = image.includes("sound");

  return (
    <article
      key={image}
      className={cn("flex flex-col items-center gap-2 rounded-lg md:gap-0", {
        "p-4 shadow-md md:flex-row": !isCarousel,
      })}
    >
      <Image
        src={image}
        alt={model}
        width={500}
        height={500}
        className={cn("md:w-96", {
          "w-full": !image.includes("sound"),
          "w-2/3": image.includes("sound"),
        })}
      />
      <div className="flex w-full flex-col gap-6 px-4 text-lg text-muted-foreground antialiased">
        <header className="flex flex-col gap-1">
          <div className="flex flex-col gap-2 self-end">
            <p>
              {t("quantity")}: {totalPieces}
            </p>
            <Suspense fallback={<AvailabilityBadgeSkeleton />}>
              <AvailabilityBadge
                isLightingProduct={isLightingProduct}
                isSoundProduct={isSoundProduct}
                model={model}
                size={size}
                productFunction={productFunctionNoTranslate}
                totalPieces={totalPieces}
              />
            </Suspense>
          </div>
          <p>
            <span className="font-semibold">{t("model")}:</span> {model}
          </p>
          <p>
            <span className="font-semibold">{t("size")}:</span> {size}
          </p>
        </header>
        <div className="flex flex-col gap-1">
          <p>
            <span className="font-semibold">{t("function")}:</span>{" "}
            {t(productFunction)}
          </p>
          <p>
            <span className="font-semibold">
              {t(image.includes("mixer") ? "system" : "power")}:
            </span>{" "}
            {feature.includes("watt") ? feature : t(feature)}
          </p>
        </div>
        <footer className="mt-auto grid gap-2 sm:grid-cols-[1fr_2fr]">
          <Button
            asChild
            variant="link"
            className="justify-self-start p-0 text-lg"
          >
            <Link
              href={{
                pathname: href,
                params: { model: `${model} ${size}` },
              }}
            >
              {tHome("seeMore")} &rarr;
            </Link>
          </Button>
          <strong className="row-start-1 text-3xl font-bold text-primary sm:row-start-auto sm:justify-self-end">
            {price}
          </strong>
          <ReserveButton
            model={model}
            productFunction={productFunction}
            image={image}
            isPackage={false}
          />
        </footer>
      </div>
    </article>
  );
}
