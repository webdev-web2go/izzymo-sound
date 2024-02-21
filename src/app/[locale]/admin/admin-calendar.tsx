import Calendar from "~/components/calendar/calendar";
import { db } from "~/server/db";

export default async function AdminCalendar() {
  const events = await db.query.events.findMany({
    columns: {
      id: true,
      title: true,
      start: true,
      end: true,
      allDay: true,
      extendedProps: true,
    },
  });
  return <Calendar events={events} />;
}
