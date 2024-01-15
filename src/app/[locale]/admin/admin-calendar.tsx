import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Calendar from "~/components/calendar/calendar";
import { db } from "~/server/db";

export default async function AdminCalendar() {
  const messages = await getMessages();
  const events = await db.query.events.findMany({
    columns: {
      id: true,
      title: true,
      start: true,
      end: true,
      allDay: true,
    },
  });
  return (
    <NextIntlClientProvider messages={messages}>
      <Calendar events={events} />
    </NextIntlClientProvider>
  );
}
