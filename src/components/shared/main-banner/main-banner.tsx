import { useTranslations } from "next-intl";

export default function MainBanner({ translation }: { translation: string }) {
  const tHome = useTranslations("home");
  return (
    <>
      <div className="z-20 flex flex-col-reverse gap-2 sm:flex-row sm:items-center">
        <div className="h-1.5 w-48 bg-white" />
        <h1 className="text-balance text-5xl font-bold text-white sm:text-6xl">
          {tHome(translation)}
        </h1>
      </div>
      <div aria-hidden={true} className="absolute inset-0 bg-black/80" />
    </>
  );
}
