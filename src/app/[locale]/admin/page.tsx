import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Calendar from "~/components/calendar/calendar";
import { Button } from "~/components/ui/button";
import { adminEmail } from "~/constants";
import { Link } from "~/navigation";
import { getServerAuthSession } from "~/server/auth";

export default async function AdminPage() {
  const session = await getServerAuthSession();
  const messages = await getMessages();

  if (!session) {
    return <NoSession />;
  }

  if (session.user.email !== adminEmail) {
    return <NotAuthorized />;
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-4 text-center text-muted-foreground antialiased">
      <NextIntlClientProvider messages={messages}>
        <Calendar />
      </NextIntlClientProvider>
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
