"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import Calendar from "./calendar";
import { type PropsWithChildren, useEffect, useState } from "react";
import { getEventsAction } from "./event-actions";
import type { Event, ProductI } from "~/types";
import { Button } from "~/components/ui/button";
import Image from "next/image";
import { cn } from "~/lib/utils";
import { useTranslations } from "next-intl";

export default function CalendarModal({ children }: PropsWithChildren) {
  const t = useTranslations("home");
  const [events, setEvents] = useState<Event[]>([]);
  const [product, setProduct] = useState<ProductI | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getEventsAction()
      .then((events) => setEvents(events ?? []))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Dialog onOpenChange={() => setProduct(null)}>
      <Button asChild className="z-20 text-lg antialiased" variant="outline">
        <DialogTrigger>{children}</DialogTrigger>
      </Button>
      <DialogContent className="flex flex-col gap-6">
        <DialogHeader>
          <DialogTitle className="text-3xl text-primary">
            {t("reserved")}
          </DialogTitle>
          <p className="text-lg font-semibold text-muted-foreground antialiased">
            {t("clickTag")}
          </p>
        </DialogHeader>

        {loading ? (
          <CalendarSkeleton />
        ) : (
          <Calendar
            isModal
            setProduct={setProduct}
            events={events as (Event & { id: string })[]}
          />
        )}
        <div
          className={cn("flex h-[200px] justify-center", {
            hidden: !product,
          })}
        >
          <Image
            src={product?.image as string}
            alt={`${product?.model} ${product?.productFunction}`}
            width={300}
            height={300}
            className="h-full w-auto"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

function CalendarSkeleton() {
  return (
    <div className="flex size-[462px] flex-col gap-[1.5em]">
      <div className="flex justify-between">
        <div className="h-10 w-44 animate-pulse rounded bg-slate-300" />
        <div className="h-10 w-24 animate-pulse rounded bg-slate-300" />
      </div>
      <div className="h-[396px] w-[462px] animate-pulse rounded bg-slate-300" />
    </div>
  );
}
