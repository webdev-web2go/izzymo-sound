import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";
import CalendarButton from "./calendar-button";

export default function MainBanner({ translation }: { translation: string }) {
  const tHome = useTranslations("home");
  const messages = useMessages();
  return (
    <div className="flex w-full flex-col-reverse items-center justify-between gap-4 md:flex-row">
      <div className="z-20 flex flex-col-reverse gap-2 self-start sm:flex-row sm:items-center">
        <div className="h-1.5 w-48 bg-white" />
        <h1 className="text-balance text-5xl font-bold text-white sm:text-6xl">
          {tHome(translation)}
        </h1>
      </div>
      <NextIntlClientProvider messages={messages}>
        <CalendarButton />
      </NextIntlClientProvider>
      <div aria-hidden={true} className="absolute inset-0 bg-black/80" />
    </div>
  );
}
