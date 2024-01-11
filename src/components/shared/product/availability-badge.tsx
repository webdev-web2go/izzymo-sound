import { and, eq, ne } from "drizzle-orm";
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
  const todayEnding = new Date(
    new Date(new Date().setDate(new Date().getDate() + 1))
      .toISOString()
      .split("T")[0] ?? "",
  );
  const event = await db.query.events.findFirst({
    where: and(
      eq(
        events.title,
        isLightingProduct ? model : `${model} ${productFunction}`,
      ),
      eq(events.end, todayEnding),
    ),
  });

  return (
    <Badge
      className={cn("pointer-events-none self-end text-base", {
        "bg-muted-foreground": !!event,
      })}
    >
      {event ? "No disponible" : "Disponible"}
    </Badge>
  );
}
