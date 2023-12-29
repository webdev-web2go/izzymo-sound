import { unstable_setRequestLocale } from "next-intl/server";
import CardLinks from "~/components/home/equipment-section/card-links";
import Hero from "~/components/home/hero-section/hero";

export default function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <main>
      <Hero />
      <CardLinks />
    </main>
  );
}
