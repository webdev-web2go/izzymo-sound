import { Link } from "~/navigation";
import { Button } from "~/components/ui/button";
import Carrusel from "./carrusel";

export default function Hero() {
  return (
    <section className="h-screen min-h-screen">
      <div className="mx-auto grid h-full max-w-7xl grid-cols-2 items-center">
        <div className="flex max-w-xl flex-col items-center gap-10 px-4 text-muted-foreground antialiased">
          <div className="flex flex-col gap-5">
            <h1 className="text-6xl font-bold tracking-tight [text-wrap:balance]">
              Conoce nuestros paquetes y equipos en renta!
            </h1>
            <p className="text-2xl">
              <span className="font-bold text-primary">Sonido</span> de alta
              fidelidad, las mejores{" "}
              <span className="font-bold text-primary">mezcladoras</span> del
              mercado e{" "}
              <span className="font-bold text-primary">iluminación</span> con
              variedad de efectos y colores
            </p>
          </div>
          <div className="flex w-full gap-4">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="flex w-full items-center justify-center gap-2 py-4 text-xl font-bold hover:text-primary"
            >
              <Link href="/">Equipos en renta</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="flex w-full items-center justify-center gap-2 py-4 text-xl font-bold"
            >
              <Link href="/">Ver paquetes &rarr;</Link>
            </Button>
          </div>
        </div>
        <Carrusel />
      </div>
    </section>
  );
}
