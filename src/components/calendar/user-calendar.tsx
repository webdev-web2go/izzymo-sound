"use client";

import { useEffect, useState, useRef } from "react";
import Calendar, { CalendarSkeleton } from "./calendar";
import Image from "next/image";
import type { Event, ProductI } from "~/types";
import { cn } from "~/lib/utils";
import { useTranslations } from "next-intl";
import { getEventsAction } from "./event-actions";
import { Link } from "~/navigation";
import { Button } from "../ui/button";

export default function UserCalendar() {
  const [products, setProducts] = useState<ProductI[] | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const equipmentSectionRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("equipmentFeatures");
  const tHome = useTranslations("home");

  useEffect(() => {
    setLoading(true);
    getEventsAction()
      .then((events) => setEvents(events as Event[]))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    equipmentSectionRef.current?.scrollIntoView();
  }, [products]);

  return (
    <div className="flex flex-col gap-10 px-2 py-10" id="user-calendar">
      <header className="flex flex-col items-center">
        <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          {tHome("reserved")}
        </h2>
        <p className="text-xl font-semibold text-muted-foreground antialiased">
          {tHome("clickTag")}
        </p>
      </header>
      <div
        className={cn("mx-auto w-full max-w-[1400px] px-4 xl:px-20", {
          "flex flex-col gap-4": !!products,
        })}
      >
        <div>
          {loading ? (
            <CalendarSkeleton />
          ) : (
            <Calendar events={events} isForUser setProducts={setProducts} />
          )}
        </div>
        <div
          ref={equipmentSectionRef}
          className="grid justify-items-center gap-6 lg:grid-cols-2"
        >
          {!!products &&
            products.map(
              ({
                image,
                model,
                size,
                productFunction,
                power,
                system,
                href,
              }) => (
                <article
                  key={image}
                  className="grid items-center gap-2 rounded-lg shadow-md sm:grid-cols-2 md:gap-0"
                >
                  <Image
                    src={image}
                    alt={model}
                    width={500}
                    height={500}
                    // className="w-[3px]"
                  />
                  <div className="flex w-full flex-col items-start gap-6 px-4 text-lg text-muted-foreground antialiased">
                    <header className="flex flex-col gap-1">
                      <p>
                        <span className="font-semibold">{t("model")}:</span>{" "}
                        {model}
                      </p>
                      <p>
                        <span className="font-semibold">{t("size")}:</span>{" "}
                        {size}
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
                        {power?.includes("watts")
                          ? power
                          : system
                            ? t(system)
                            : t(power)}
                      </p>
                    </div>
                    <Button asChild variant="link" className="p-0 text-lg">
                      <Link
                        href={{
                          pathname: href,
                          params: { model: `${model} ${size}` },
                        }}
                      >
                        {tHome("seeMore")} &rarr;
                      </Link>
                    </Button>
                  </div>
                </article>
              ),
            )}
        </div>
      </div>
    </div>
  );
}
