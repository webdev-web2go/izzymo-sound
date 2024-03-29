import { and, gte, lte } from "drizzle-orm";
import { useLocale, useTranslations } from "next-intl";
import { Badge } from "~/components/ui/badge";
import { cn } from "~/lib/utils";
import { db } from "~/server/db";
import { events } from "~/server/db/schema";

interface Props {
  model: string;
  productFunction: string;
  isLightingProduct: boolean;
  isSoundProduct: boolean;
  size?: string;
  totalPieces: number;
}

export default async function AvailabilityBadge({
  model,
  productFunction,
  isLightingProduct,
  isSoundProduct,
  size,
  totalPieces,
}: Props) {
  const locale = useLocale();
  const reservations = await db.query.events.findMany({
    where: and(
      lte(events.start, new Date(Date.now())),
      gte(events.end, new Date(Date.now())),
    ),
  });

  const generateBadge = (locale: string) => {
    let remaining = totalPieces;
    reservations.forEach((res) => {
      const equipmentArray = res.extendedProps.split("|");
      if (isLightingProduct && res.extendedProps.includes(model)) {
        remaining -= Number(
          equipmentArray.find((el: string) => el.includes(model))?.[0],
        );
      } else if (
        isSoundProduct &&
        res.extendedProps.includes(`${model} ${size}`)
      ) {
        remaining -= Number(
          equipmentArray.find((el: string) =>
            el.includes(`${model} ${size}`),
          )?.[0],
        );
      } else if (res.extendedProps.includes(`${model} ${productFunction}`)) {
        remaining -= Number(
          equipmentArray.find((el: string) =>
            el.includes(`${model} ${productFunction}`),
          )?.[0],
        );
      }
    });
    switch (locale) {
      case "es": {
        if (remaining === 1) return `${remaining} disponible ahora`;
        else if (remaining === 0) return "No disponible ahora";
        return `${remaining} disponibles ahora`;
      }
      case "en": {
        if (remaining === 0) return "Not available now";
        return `${remaining} available now`;
      }
    }
  };

  return (
    <Badge
      className={cn("pointer-events-none self-end text-base", {
        "bg-muted-foreground": generateBadge(locale)?.includes("No"),
      })}
    >
      {generateBadge(locale)}
    </Badge>
  );
}

export function AvailabilityBadgeSkeleton() {
  return (
    <span
      aria-hidden={true}
      className="h-[30px] w-28 animate-pulse self-end rounded-full bg-slate-300"
    />
  );
}
