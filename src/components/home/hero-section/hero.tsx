import { Link } from "~/navigation";
import { Button } from "~/components/ui/button";
import Carrusel from "./carrusel";
import Nav from "~/components/shared/nav/nav";

export default function Hero() {
  return (
    <section className="flex flex-col">
      <div className="grid items-center justify-center justify-items-center gap-10 px-4 xl:h-[90vh] xl:grid-cols-2 xl:gap-0 xl:px-12">
        <div className="flex w-full flex-col items-center gap-10 self-center py-4 text-muted-foreground antialiased sm:max-w-3xl xl:max-w-2xl">
          <div className="flex flex-col gap-5">
            <h1 className="text-6xl font-bold tracking-tight [text-wrap:balance] sm:text-7xl">
              Conoce nuestros paquetes y equipos en renta!
            </h1>
            <p className="text-xl sm:text-2xl">
              <span className="font-bold text-primary">Sonido</span> de alta
              fidelidad, las mejores{" "}
              <span className="font-bold text-primary">mezcladoras</span> del
              mercado e{" "}
              <span className="font-bold text-primary">iluminación</span> con
              variedad de efectos y colores
            </p>
          </div>
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="flex w-full items-center justify-center gap-2 py-4 text-lg font-bold hover:text-primary sm:text-xl"
            >
              <Link href="/">Equipos en renta</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="flex w-full items-center justify-center gap-2 py-4 text-lg font-bold sm:text-xl"
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
