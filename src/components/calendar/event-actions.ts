"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "~/server/db";
import { events } from "~/server/db/schema";

export async function getEventsAction() {
  try {
    return await db.query.events.findMany();
  } catch (error) {
    console.log(error);
  }
}

export async function createEventAction(formData: FormData) {
  const title = formData.get("product") as string;
  const startDateStr = formData.get("date") as string;
  const endDateStr = formData.get("endDate") as string;
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);

  try {
    await db.insert(events).values({
      title,
      start: new Date(startDate.getTime() + 24 * 60 * 60 * 1000),
      end: new Date(endDate.getTime() + 24 * 60 * 60 * 1000 * 2),
    });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/admin");
}

export async function updateEventAction(id: number, newEndDate: Date) {
  try {
    await db
      .update(events)
      .set({ end: new Date(newEndDate.getTime() + 24 * 60 * 60 * 1000) })
      .where(eq(events.id, id));
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/admin");
}

export async function deleteEventAction(id: number) {
  try {
    await db.delete(events).where(eq(events.id, id));
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/admin");
}
