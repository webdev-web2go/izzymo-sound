"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { adminEmails } from "~/constants";
import { getServerAuthSession } from "~/server/auth";
import { db } from "~/server/db";
import { events } from "~/server/db/schema";

export async function getEventsAction() {
  try {
    return await db.query.events.findMany();
  } catch (error) {
    console.log(error);
  }
}

export async function getEventByIdAction(id: number) {
  try {
    return await db.query.events.findFirst({ where: eq(events.id, id) });
  } catch (error) {
    console.log(error);
  }
}

export async function createEventAction(formData: FormData) {
  const session = await getServerAuthSession();

  if (!session || !adminEmails.includes(session.user.email as string)) {
    return { error: "No tienes autorización para editar reservaciones" };
  }

  const title = formData.get("title") as string;
  const start = new Date(formData.get("start") as string);
  const end = new Date(formData.get("end") as string);

  const offset = start.getTimezoneOffset();

  const equipment = [...formData.entries()]
    .filter(([_, value]) => Number(value))
    .flatMap(([name, value]) => `${value} ${name.replace("%22", '"')}`)
    .join("|");

  if (!title || !start || !end || equipment.length === 0) {
    return { error: "Todos los campos son obligatorios" };
  }

  try {
    await db.insert(events).values({
      title,
      start: new Date(start.getTime() + offset * 60 * 1000),
      end: new Date(end.getTime() + offset * 60 * 1000),
      extendedProps: equipment,
    });
    revalidatePath("/admin");
    return { success: "La reservación se ha creado exitosamente." };
  } catch (err) {
    console.log(err);
    return { error: "Ocurrió un error al crear la reservación." };
  }
}

// export async function updateEventAction(
//   id: number,
//   title: string,
//   newEndDateStr: string,
//   startDateStr: string,
// ) {
//   const session = await getServerAuthSession();

//   if (!session || !adminEmails.includes(session.user.email as string)) {
//     return { error: "No tienes autorización para editar reservaciones" };
//   }

//   const startDate = new Date(startDateStr);
//   const newEndDate = new Date(newEndDateStr);

//   const product = allProducts.find(
//     (prod) =>
//       `${prod.model} ${prod.productFunctionNoTranslate}` === title ||
//       `${prod.model} ${prod.size} ${prod.productFunctionNoTranslate}` ===
//         title ||
//       prod.model === title,
//   );

//   const currentReservation = await db.query.events.findFirst({
//     where: eq(events.id, id),
//   });

//   if (currentReservation && newEndDate < currentReservation.end) {
//     try {
//       await db
//         .update(events)
//         .set({ end: new Date(newEndDate.getTime() + 24 * 60 * 60 * 1000) })
//         .where(eq(events.id, id));
//       revalidatePath("/admin");
//       return { success: "La reservación se actualizó exitosamente." };
//     } catch (err) {
//       return { error: "Ocurrió un error al actualizar la reservación." };
//     }
//   }

//   const reservations = await db.query.events.findMany({
//     where: and(
//       eq(events.title, title),
//       or(
//         and(lte(events.start, startDate), gte(events.end, startDate)),
//         and(
//           gte(events.start, startDate),
//           lte(events.end, new Date(newEndDate.getTime() + 24 * 60 * 60 * 1000)),
//         ),
//       ),
//       ne(events.id, id),
//     ),
//   });
//   let overlappingReservations = 0;

//   if (reservations.length > 0) {
//     if (reservations.length >= 2) {
//       overlappingReservations++;
//       const checkOverlappingReservations = (reservations: Event[]): void => {
//         if (reservations.length === 0) return;
//         const newReservations: Event[] = [];
//         const { start, end } = reservations[0] as Event;
//         for (let j = 1; j < reservations.length; j++) {
//           if (start && end) {
//             const { start: otherStart, end: otherEnd } = reservations[
//               j
//             ] as Event;
//             const overlappingCondition =
//               (start >= otherStart &&
//                 start <= new Date(otherEnd.getTime() - 24 * 60 * 60 * 1000)) ||
//               (start <= otherStart && end >= otherStart);

//             if (overlappingCondition) {
//               newReservations.push(reservations[j]!);
//             }
//           }
//         }
//         if (newReservations.length > 0) overlappingReservations++;
//         return checkOverlappingReservations(newReservations);
//       };

//       checkOverlappingReservations(reservations);
//     } else {
//       if (product?.totalPieces === 1) overlappingReservations++;
//     }
//   }

//   if (overlappingReservations >= (product?.totalPieces as number)) {
//     return {
//       error:
//         "Todos los productos de éste modelo ya están reservados dentro del rango seleccionado.",
//     };
//   }

//   try {
//     await db
//       .update(events)
//       .set({ end: new Date(newEndDate.getTime() + 24 * 60 * 60 * 1000) })
//       .where(eq(events.id, id));
//     revalidatePath("/admin");
//     return { success: "La reservación se actualizó exitosamente." };
//   } catch (err) {
//     return { error: "Ocurrió un error al actualizar la reservación." };
//   }
// }

export async function deleteEventAction(id: number) {
  const session = await getServerAuthSession();

  if (!session || !adminEmails.includes(session.user.email as string)) {
    return { error: "No tienes autorización para editar reservaciones" };
  }

  try {
    await db.delete(events).where(eq(events.id, id));
    revalidatePath("/admin");
    return { success: "La reservación se ha eliminado exitosamente." };
  } catch (err) {
    return { error: "Ocurrió un error al eliminar la reservación." };
  }
}
