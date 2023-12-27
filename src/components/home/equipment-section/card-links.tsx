import { useTranslations } from "next-intl";
import { Badge } from "~/components/ui/badge";
import { homeCardLinks } from "~/constants";
import { cn } from "~/lib/utils";
import { Link, pathnames } from "~/navigation";

export default function CardLinks() {
  const t = useTranslations("home");
  return (
    <section>
      <div className="grid items-center gap-8 px-4 antialiased sm:px-12 xl:grid-cols-2 2xl:px-20">
        <h2 className="col-span-full text-center text-5xl font-bold tracking-tight text-primary [text-wrap:balance] sm:text-6xl">
          Renta individual ó por paquete
        </h2>
        {homeCardLinks.map(({ href, image, description, title }, i) => (
          <Link
            key={href}
            href={href as keyof typeof pathnames}
            className={cn(
              "overflow-hidden rounded-md bg-cover bg-center bg-no-repeat transition-all duration-300 hover:-translate-y-2 hover:shadow-xl",
              {
                "xl:col-start-2 xl:row-start-2 xl:row-end-4 xl:self-stretch":
                  i === 2,
              },
            )}
            style={{ backgroundImage: `url("${image}")` }}
          >
            <article
              className={cn(
                "relative z-30 flex h-[400px] flex-col items-center justify-center px-4 text-center text-white",
                {
                  "h-[650px] xl:h-full": i === 2,
                },
              )}
            >
              {i === 2 && (
                <Badge className="pointer-events-none absolute -right-12 top-10 mb-4 flex w-52 rotate-45 justify-center bg-white text-sm text-black sm:text-base">
                  {t("favorite")}
                </Badge>
              )}
              <h3 className="text-4xl font-bold sm:text-5xl">{t(title)}</h3>
              <p className="text-base font-semibold sm:text-lg">
                {t(description)}
              </p>
              <div
                aria-hidden={true}
                className="absolute inset-0 -z-10 bg-black/70"
              />
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
