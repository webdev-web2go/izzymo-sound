import { Button } from "~/components/ui/button";
import { Link } from "~/navigation";
import { getServerAuthSession } from "~/server/auth";

export default async function AdminPage() {
  const session = await getServerAuthSession();

  if (!session) {
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

  if (session.user.email !== "efrachaga@gmail.com") {
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

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2 px-4 text-center text-muted-foreground antialiased">
      <h1 className="text-3xl font-bold text-primary">Bienvenido admin</h1>
      <p className="text-lg font-semibold">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
        delectus dicta, corrupti quas fuga obcaecati dignissimos alias,
        doloremque nam vitae aliquid eligendi quam, animi sed. Fugiat quos
        obcaecati recusandae laboriosam.
      </p>
    </main>
  );
}
