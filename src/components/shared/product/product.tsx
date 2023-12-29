import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { Link, pathnames } from "~/navigation";

interface Product {
  model: string;
  size: string;
  productFunction: string;
  feature: string;
  price: string;
  image: string;
  href: keyof typeof pathnames;
}

export default function Product({
  image,
  size,
  productFunction,
  feature,
  price,
  href,
  model,
}: Product) {
  const tEquipment = useTranslations("equipmentFeatures");
  const t = useTranslations("mixersAndLightsPage");

  return (
    <article
      key={image}
      className="flex flex-col items-center gap-2 rounded-lg p-4 shadow-md md:flex-row md:gap-0"
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
          <p>
            <span className="font-semibold">{t("model")}:</span> {model}
          </p>
          <p>
            <span className="font-semibold">{tEquipment("size")}:</span> {size}
          </p>
        </header>
        <div className="flex flex-col gap-1">
          <p>
            <span className="font-semibold">{tEquipment("function")}:</span>{" "}
            {t(productFunction)}
          </p>
          <p>
            <span className="font-semibold">
              {tEquipment(image.includes("mixer") ? "system" : "power")}:
            </span>{" "}
            {feature.includes("watt") ? feature : t(feature)}
          </p>
        </div>
        <footer className="flex flex-col-reverse gap-2 sm:flex-row sm:items-center sm:justify-between">
          <Button asChild variant="link" className="p-0 text-lg">
            <Link
              href={{
                pathname: href,
                params: { model: model + t(productFunction) },
              }}
            >
              Ver más &rarr;
            </Link>
          </Button>
          <strong className="text-3xl font-bold text-primary">{price}</strong>
        </footer>
      </div>
    </article>
  );
}
