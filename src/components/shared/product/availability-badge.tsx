import { and, eq, gte, lte } from "drizzle-orm";
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
  const t = useTranslations("home");
  const locale = useLocale();
  const reservations = await db.query.events.findMany({
    where: and(
      eq(
        events.title,
        isLightingProduct
          ? model
          : isSoundProduct
            ? `${model} ${size} ${productFunction}`
            : `${model} ${productFunction}`,
      ),
      lte(events.start, new Date(new Date().setDate(new Date().getDate() + 1))),
      gte(events.end, new Date(new Date().setDate(new Date().getDate() + 1))),
    ),
  });

  const generateBadge = (locale: string) => {
    switch (locale) {
      case "es": {
        const remaining = totalPieces - reservations.length;
        if (remaining === 1) return `${remaining} disponible`;
        return `${remaining} disponibles`;
      }
      case "en": {
        const remaining = totalPieces - reservations.length;
        return `${remaining} available`;
      }
    }
  };

  return (
    <Badge
      className={cn("pointer-events-none self-end text-base", {
        "bg-muted-foreground": reservations.length === totalPieces,
      })}
    >
      {reservations.length === totalPieces
        ? t("notAvailable")
        : generateBadge(locale)}
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
