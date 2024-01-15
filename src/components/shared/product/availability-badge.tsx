import { and, eq, gte, lte } from "drizzle-orm";
import { useTranslations } from "next-intl";
import { Badge } from "~/components/ui/badge";
import { cn } from "~/lib/utils";
import { db } from "~/server/db";
import { events } from "~/server/db/schema";

interface Props {
  model: string;
  productFunction: string;
  isLightingProduct: boolean;
}

export default async function AvailabilityBadge({
  model,
  productFunction,
  isLightingProduct,
}: Props) {
  const t = useTranslations("home");
  const event = await db.query.events.findFirst({
    where: and(
      eq(
        events.title,
        isLightingProduct ? model : `${model} ${productFunction}`,
      ),
      lte(events.start, new Date(new Date().setDate(new Date().getDate() + 1))),
      gte(events.end, new Date(new Date().setDate(new Date().getDate() + 1))),
    ),
  });

  return (
    <Badge
      className={cn("pointer-events-none self-end text-base", {
        "bg-muted-foreground": !!event,
      })}
    >
      {event ? t("notAvailable") : t("available")}
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
