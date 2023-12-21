"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function Calendar() {
  return (
    <div className="aspect-square w-[900px]">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        dateClick={() => console.log("date click")}
        events={[
          {
            title: "Modelo EKX200",
            start: new Date(),
            end: new Date("2023-12-26T24:00:00Z"),
            allDay: true,
          },
        ]}
        nowIndicator={true}
        editable={true}
        selectable={true}
        selectMirror={true}
        height="100%"
      />
    </div>
  );
}
