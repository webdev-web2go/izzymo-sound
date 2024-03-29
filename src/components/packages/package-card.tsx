import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../ui/card";
import { CheckCheckIcon } from "lucide-react";
import { cn } from "~/lib/utils";
import { Badge } from "../ui/badge";
import ReserveButton from "../shared/product/reserve-button";

interface Props {
  id: number;
  category: string;
  equipment: string;
  size: string | null;
  price: string;
  extraHourPrice: string | null;
  isFavorite: boolean;
  timeForPrice: string;
}

export default function PackageCard({
  id,
  category,
  equipment,
  size,
  price,
  extraHourPrice,
  isFavorite,
  timeForPrice,
}: Props) {
  const t = useTranslations("home");

  return (
    <Card
      className={cn(
        "flex flex-col gap-4 overflow-hidden p-4 text-muted-foreground antialiased sm:p-2",
        {
          "relative row-start-2 shadow-lg lg:static lg:col-start-2 lg:col-end-3 lg:scale-110":
            isFavorite,
          "lg:justify-self-end": id === 4,
          "lg:justify-self-start": id === 5,
          "w-full sm:w-[450px] md:w-[350px] lg:w-[400px]":
            category === "lighting",
          "w-full sm:w-[450px] md:w-[350px] lg:w-auto": category === "audio",
        },
      )}
    >
      {isFavorite && (
        <Badge className="pointer-events-none absolute right-0 top-0 flex justify-center rounded-md bg-foreground/85 text-sm sm:-right-16 sm:top-6 sm:w-52 sm:rotate-45 sm:text-base">
          {t("favorite")}
        </Badge>
      )}
      <CardHeader className="flex flex-row items-center gap-2 p-2 sm:p-4">
        <h3 className="text-3xl font-bold">
          {t("package")} #{id}
        </h3>
        <Badge className="pointer-events-none">{t(category)}</Badge>
      </CardHeader>
      <CardDescription className="text-center">
        <strong className="text-4xl text-primary">{price}</strong>
      </CardDescription>
      <CardContent>
        <ul className="flex flex-col gap-4 text-lg">
          {t(equipment)
            .split("|")
            .map((item) => (
              <li key={item} className="flex items-center gap-2 font-semibold">
                <span className="text-primary">
                  <CheckCheckIcon />
                </span>{" "}
                {item}
              </li>
            ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2">
        <p>{t(timeForPrice)}</p>
        {size && <p>{t(size)}</p>}
        {extraHourPrice && (
          <p>
            {extraHourPrice} {t("extraHour")}
          </p>
        )}
        <ReserveButton isPackage packageNumber={id} />
      </CardFooter>
    </Card>
  );
}
