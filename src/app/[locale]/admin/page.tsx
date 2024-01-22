import { Button } from "~/components/ui/button";
import { adminEmails } from "~/constants";
import { Link } from "~/navigation";
import { getServerAuthSession } from "~/server/auth";
import AdminCalendar from "./admin-calendar";
import { Suspense } from "react";
import { CalendarSkeleton } from "~/components/calendar/calendar";

export default async function AdminPage() {
  const session = await getServerAuthSession();

  if (!session) {
    return <NoSession />;
  }

  if (!adminEmails.includes(session.user.email!)) {
    return <NotAuthorized />;
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-4 text-center text-muted-foreground antialiased">
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
