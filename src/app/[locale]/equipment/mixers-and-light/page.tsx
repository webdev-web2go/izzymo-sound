import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import { lights, mixers } from "~/constants";
import { Link, pathnames } from "~/navigation";

export default function MixersAndLightPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const tHome = useTranslations("home");
  const t = useTranslations("mixersAndLightsPage");
  return (
    <main>
      <section className="relative flex h-96 items-end bg-[url('/home/mixers/mixer_card.webp')] bg-cover bg-center p-4 sm:bg-bottom">
        <div className="z-20 flex flex-col-reverse gap-2 sm:flex-row sm:items-center">
          <div className="h-1.5 w-48 bg-white" />
          <h1 className="text-balance text-5xl font-bold text-white sm:text-6xl">
            {tHome("mixerCardTitle")}
          </h1>
        </div>
        <div aria-hidden={true} className="absolute inset-0 bg-black/80" />
      </section>
      <section>
        <div className="mx-auto grid gap-10 px-4 py-10 2xl:grid-cols-2">
          {mixers.map(
            ({ model, size, productFunction, system, price, href, image }) => (
              <article
                key={image}
                className="flex flex-col items-center gap-2 rounded-lg p-4 shadow-md md:flex-row md:gap-0"
              >
                <Image
                  src={image}
                  alt={model}
                  width={500}
                  height={500}
                  className="w-full md:w-96"
                />
                <div className="flex w-full flex-col gap-6 px-4 text-lg text-muted-foreground antialiased">
                  <header className="flex flex-col gap-1">
                    <p>
                      <span className="font-semibold">{t("model")}:</span>{" "}
                      {model}
                    </p>
                    <p>
                      <span className="font-semibold">Medidas:</span> {size}
                    </p>
                  </header>
                  <div className="flex flex-col gap-1">
                    <p>
                      <span className="font-semibold">Función:</span>{" "}
                      {t(productFunction)}
                    </p>
                    <p>
                      <span className="font-semibold">Sistema:</span>{" "}
                      {t(system)}
                    </p>
                  </div>
                  <footer className="flex flex-col-reverse gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <Button asChild variant="link" className="p-0 text-lg">
                      <Link
                        href={{
                          pathname: "/equipment/mixers-and-light/mixer/[model]",
                          params: { model: model + t(productFunction) },
                        }}
                      >
                        Ver más &rarr;
                      </Link>
                    </Button>
                    <strong className="text-3xl font-bold text-primary">
                      {price}
                    </strong>
                  </footer>
                </div>
              </article>
            ),
          )}
          {lights.map(
            ({ model, size, productFunction, power, price, image }) => (
              <article
                key={image}
                className="flex flex-col items-center gap-2 rounded-lg p-4 shadow-md md:flex-row md:gap-0"
              >
                <Image
                  src={image}
                  alt={model}
                  width={500}
                  height={500}
                  className="w-full md:w-96"
                />
                <div className="flex w-full flex-col gap-6 px-4 text-lg text-muted-foreground antialiased">
                  <header className="flex flex-col gap-1">
                    <p>
                      <span className="font-semibold">{t("model")}:</span>{" "}
                      {model}
                    </p>
                    <p>
                      <span className="font-semibold">Medidas:</span> {size}
                    </p>
                  </header>
                  <div className="flex flex-col gap-1">
                    <p>
                      <span className="font-semibold">Función:</span>{" "}
                      {t(productFunction)}
                    </p>
                    <p>
                      <span className="font-semibold">Sistema:</span> {t(power)}
                    </p>
                  </div>
                  <footer className="flex flex-col-reverse gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <Button asChild variant="link" className="p-0 text-lg">
                      <Link href="/equipment/mixers-and-light">
                        Ver más &rarr;
                      </Link>
                    </Button>
                    <strong className="text-3xl font-bold text-primary">
                      {price}
                    </strong>
                  </footer>
                </div>
              </article>
            ),
          )}
        </div>
      </section>
    </main>
  );
}
