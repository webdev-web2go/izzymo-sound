"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";
import { updateEventAction } from "~/app/[locale]/admin/event-actions";
import ChooseEquipmentDialog from "./choose-equipment-dialog";
import DeleteEquipmentDialog from "./delete-equipment-dialog";
import { Event } from "~/types";

interface Props {
  events: (Event & { id: string })[];
}

export default function Calendar({ events }: Props) {
  const [openReservation, setOpenReservation] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [eventToDelete, setEventToDelete] = useState<Event | null>(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <div className="mt-28 aspect-square w-full">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        dateClick={(e) => {
          if (e.date.getTime() >= new Date().setHours(0, 0, 0, 0)) {
            setOpenReservation(true);
            setStartDate(e.date.toISOString().split("T")[0]!);
            setEndDate(e.date);
          }
        }}
        events={events}
        eventResize={async (e) => {
          if (
            e.event.end?.setHours(0, 0, 0, 0)! <
            new Date().setHours(0, 0, 0, 0) + 24 * 60 * 60 * 1000
          ) {
            e.revert();
            return;
          }

          await updateEventAction(Number(e.event.id), e.event.end!);
        }}
        eventClick={(e) => {
          setEventToDelete(e.event as Event);
          setOpenDelete(true);
        }}
        nowIndicator={true}
        editable={true}
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
