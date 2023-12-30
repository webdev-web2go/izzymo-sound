import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function PackagesPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const tHome = useTranslations("home");

  return (
    <section className="relative flex h-96 items-end bg-[url('/home/packages-banner.webp')] bg-cover bg-center p-4">
      <div className="z-20 flex flex-col-reverse gap-2 sm:flex-row sm:items-center">
        <div className="h-1.5 w-48 bg-white" />
        <h1 className="text-balance text-5xl font-bold text-white sm:text-6xl">
          {tHome("equipmentCardTitle")}
        </h1>
      </div>
      <div aria-hidden={true} className="absolute inset-0 bg-black/60" />
    </section>
  );
}
