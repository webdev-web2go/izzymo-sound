"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { type Dispatch, type SetStateAction, useState } from "react";
import { updateEventAction } from "~/components/calendar/event-actions";
import ChooseEquipmentDialog from "./choose-equipment-dialog";
import DeleteEquipmentDialog from "./delete-equipment-dialog";
import type { Event, ProductI } from "~/types";
import { useSession } from "next-auth/react";
import { cn } from "~/lib/utils";
import { mixerAndLightProducts, soundProducts } from "~/constants";
import { useLocale, useTranslations } from "next-intl";

interface Props {
  events: (Event & { id: string })[];
  isModal?: boolean;
  setProduct?: Dispatch<SetStateAction<ProductI | null>>;
}

export default function Calendar({ events, isModal, setProduct }: Props) {
  const t = useTranslations("equipmentFeatures");
  const locale = useLocale();
  const [openReservation, setOpenReservation] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [eventToDelete, setEventToDelete] = useState<Event | null>(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState<Date | null>(null);

  const session = useSession();

  return (
    <div
      className={cn("aspect-square w-full md:h-full", {
        "md:mt-28": !isModal,
      })}
    >
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        locale={locale}
        dateClick={(e) => {
          if (session.status === "unauthenticated") return;
          if (e.date.getTime() >= new Date().setHours(0, 0, 0, 0)) {
            setOpenReservation(true);
            setStartDate(e.date.toISOString().split("T")[0]!);
            setEndDate(e.date);
          }
        }}
        events={events}
        eventResize={async (e) => {
          if (
            (e.event.end?.setHours(0, 0, 0, 0) as number) <
            new Date().setHours(0, 0, 0, 0) + 24 * 60 * 60 * 1000
          ) {
            e.revert();
            return;
          }

          await updateEventAction(Number(e.event.id), e.event.end!);
        }}
        eventClick={(e) => {
          if (!isModal && session.status === "authenticated") {
            setEventToDelete(e.event as Event);
            setOpenDelete(true);
          } else {
            const allProducts = [...mixerAndLightProducts, ...soundProducts];
            const productToShow = allProducts.find(
              (product) =>
                product.model === e.event.title ||
                `${product.model} ${product.productFunctionNoTranslate}` ===
                  e.event.title,
            );
            if (setProduct) setProduct(productToShow as ProductI);
          }
        }}
        headerToolbar={{
          end: "prev,next",
        }}
        editable={session.status === "authenticated"}
        selectable={true}
        height="100%"
      />
      <ChooseEquipmentDialog
        endDate={endDate}
        startDate={startDate}
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
