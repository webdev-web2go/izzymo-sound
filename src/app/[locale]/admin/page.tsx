import { Button } from "~/components/ui/button";
import { adminEmails } from "~/constants";
import { Link } from "~/navigation";
import { getServerAuthSession } from "~/server/auth";
import AdminCalendar from "./admin-calendar";
import { Suspense } from "react";
import { CalendarSkeleton } from "~/components/calendar/calendar";
import { CheckIcon } from "lucide-react";

export default async function AdminPage() {
  const session = await getServerAuthSession();

  if (!session) {
    return <NoSession />;
  }

  if (!adminEmails.includes(session.user.email!)) {
    return <NotAuthorized />;
  }

  return (
    <main className="mx-auto mt-32 flex min-h-screen max-w-5xl flex-col items-center gap-12 px-4 text-center text-muted-foreground antialiased">
      <header className="flex flex-col gap-6">
        <h1 className="text-balance text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Crea, edita y elimina reservaciones
        </h1>
        <ul className="flex flex-col items-start gap-2 text-left sm:text-lg">
          <li className="flex items-center gap-2">
            <span>
              <CheckIcon />
            </span>{" "}
            Haz click en una fecha actual ó futura para hacer una reservación.
          </li>
          <li className="flex items-center gap-2">
            <span>
              <CheckIcon />
            </span>{" "}
            Selecciona la reservación en el extremo derecho de la etiqueta y
            arrastra para modificar su duración.
          </li>
          <li className="flex items-center gap-2">
            <span>
              <CheckIcon />
            </span>{" "}
            Haz click en una etiqueta para eliminarla.
          </li>
        </ul>
      </header>
      <Suspense fallback={<CalendarSkeleton />}>
        <AdminCalendar />
      </Suspense>
    </main>
  );
}

function NoSession() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2 px-4 text-center text-muted-foreground antialiased">
      <h1 className="text-3xl font-bold text-primary">
        Ésta es una página privada
      </h1>
      <p className="text-lg font-semibold">
        <Button asChild variant="link" className="p-0 text-lg">
          <Link href="/login">Inicia sesión</Link>
        </Button>{" "}
        para continuar
      </p>
    </main>
  );
}

function NotAuthorized() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2 px-4 text-center text-muted-foreground antialiased">
      <h1 className="text-3xl font-bold text-primary">
        No estás autorizado para entrar a ésta página
      </h1>
      <p className="text-lg font-semibold">
        <Button asChild variant="link" className="p-0 text-lg">
          <Link href="/">Vuelve al inicio</Link>
        </Button>{" "}
        ó utiliza la barra de navegación
      </p>
    </main>
  );
}
