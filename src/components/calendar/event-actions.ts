"use server";

import { and, eq, gte, lte, ne } from "drizzle-orm";
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

  if (!title) {
    return { error: "Es necesario elegir un producto." };
  }

  const event = await db.query.events.findFirst({
    where: and(
      eq(events.title, title),
      lte(events.start, new Date(startDate.getTime() + 24 * 60 * 60 * 1000)),
      gte(events.end, new Date(endDate.getTime() + 24 * 60 * 60 * 1000 * 2)),
    ),
  });

  if (event) {
    return {
      error:
        "Ya existe una reservación de éste producto en la fecha seleccionada.",
    };
  }

  try {
    await db.insert(events).values({
      title,
      start: new Date(startDate.getTime() + 24 * 60 * 60 * 1000),
      end: new Date(endDate.getTime() + 24 * 60 * 60 * 1000 * 2),
    });
    revalidatePath("/admin");
    return { success: "La reservación se ha creado exitosamente." };
  } catch (err) {
    return { error: "Ocurrió un error al crear la reservación." };
  }
}

export async function updateEventAction(
  id: number,
  title: string,
  newEndDateStr: string,
  startDateStr: string,
) {
  const startDate = new Date(startDateStr);
  const newEndDate = new Date(newEndDateStr);

  const event = await db.query.events.findFirst({
    where: and(
      eq(events.title, title),
      gte(events.start, new Date(startDate.getTime() + 24 * 60 * 60 * 1000)),
      lte(events.end, new Date(newEndDate.getTime() + 24 * 60 * 60 * 1000 * 2)),
      ne(events.id, id),
    ),
  });

  if (event) {
    return {
      error:
        "Ya existe una reservación de éste producto dentro del rango seleccionado.",
    };
  }

  try {
    await db
      .update(events)
      .set({ end: new Date(newEndDate.getTime() + 24 * 60 * 60 * 1000) })
      .where(eq(events.id, id));
    revalidatePath("/admin");
    return { success: "La reservación se actualizó exitosamente." };
  } catch (err) {
    return { error: "Ocurrió un error al actualizar la reservación." };
  }
}

export async function deleteEventAction(id: number) {
  try {
    await db.delete(events).where(eq(events.id, id));
    revalidatePath("/admin");
    return { success: "La reservación se ha eliminado exitosamente." };
  } catch (err) {
    return { error: "Ocurrió un error al eliminar la reservación." };
  }
}
