"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { type Dispatch, type SetStateAction, useState } from "react";
import ChooseEquipmentDialog from "./choose-equipment-dialog";
import DeleteEquipmentDialog from "./delete-equipment-dialog";
import type { Event, ProductI } from "~/types";
import { useSession } from "next-auth/react";
import { mixerAndLightProducts, soundProducts } from "~/constants";
import { useLocale } from "next-intl";
import { EventSourceInput } from "@fullcalendar/core/index.js";
import { getEventByIdAction } from "./event-actions";

interface Props {
  events: Event[];
  isForUser?: boolean;
  setProducts?: Dispatch<SetStateAction<ProductI[] | null>>;
}

export default function Calendar({ events, isForUser, setProducts }: Props) {
  const locale = useLocale();
  const [openReservation, setOpenReservation] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [eventToDelete, setEventToDelete] = useState<Event | null>(null);

  const session = useSession();

  return (
    <div className="aspect-square w-full md:h-full">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        locale={locale}
        displayEventEnd
        eventTimeFormat={{
          hour: "numeric",
          minute: "2-digit",
          meridiem: "short",
        }}
        dateClick={(e) => {
          if (session.status === "unauthenticated") return;
          if (!isForUser) {
            setOpenReservation(true);
          }
        }}
        events={events as EventSourceInput}
        eventClick={async (e) => {
          if (!isForUser && session.status === "authenticated") {
            const event = await getEventByIdAction(Number(e.event.id));
            if (event) {
              setEventToDelete(event);
            }
            setOpenDelete(true);
          } else {
            const allProducts = [...mixerAndLightProducts, ...soundProducts];
            const productsToShow = allProducts.filter((product) => {
              const equipment = Object.values(e.event.extendedProps)
                .filter((el) => typeof el === "string")
                .join("")
                .split("|");
              return equipment.some(
                (el) =>
                  el === `${product.model}` ||
                  el ===
                    `${product.model} ${product.productFunctionNoTranslate}` ||
                  el ===
                    `${product.model} ${product.size} ${product.productFunctionNoTranslate}`,
              );
            });
            if (setProducts) setProducts(productsToShow as ProductI[]);
          }
        }}
        headerToolbar={{
          end: "prev,next",
        }}
        editable={session.status === "authenticated" && !isForUser}
        height="100%"
      />
      <ChooseEquipmentDialog
        open={openReservation}
        setOpen={setOpenReservation}
      />
      <DeleteEquipmentDialog
        event={eventToDelete as Event}
        open={openDelete}
        setOpen={setOpenDelete}
      />
    </div>
  );
}

export function CalendarSkeleton() {
  return (
    <div className="flex aspect-square h-full w-full flex-col gap-[1.5em]">
      <div className="flex justify-between">
        <div className="h-10 w-44 animate-pulse rounded bg-slate-300" />
        <div className="h-10 w-24 animate-pulse rounded bg-slate-300" />
      </div>
      <div className="h-full w-full animate-pulse rounded bg-slate-300" />
    </div>
  );
}
