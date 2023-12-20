"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function Calendar() {
  return (
    <div className="w-[900px] aspect-square">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        dateClick={() => console.log("date click")}
        events={[
          {
            title: "Modelo EKX200",
            date: new Date(),
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
