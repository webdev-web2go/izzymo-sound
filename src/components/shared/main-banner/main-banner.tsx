import { useTranslations } from "next-intl";
import CalendarButton from "./calendar-button";
import { cn } from "~/lib/utils";

interface Props {
  translation: string;
  className?: string;
}

export default function MainBanner({ translation, className }: Props) {
  const tHome = useTranslations("home");
  return (
    <div className="flex w-full flex-col-reverse items-center justify-between gap-4 md:flex-row">
      <div className="z-20 flex flex-col-reverse gap-2 self-start sm:flex-row sm:items-center">
        <div className="h-1.5 w-48 bg-white" />
        <h1 className="text-balance text-5xl font-bold text-white sm:text-6xl">
          {tHome(translation)}
        </h1>
      </div>
      <CalendarButton />
      <div
        aria-hidden={true}
        className={cn("absolute inset-0 bg-black/80", className)}
      />
    </div>
  );
}
