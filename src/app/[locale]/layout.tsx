import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Nav from "~/components/shared/nav/nav";
import { locales } from "~/navigation";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import { getServerAuthSession } from "~/server/auth";
import SessionProvider from "~/components/session-provider/session-provider";
import { NextIntlClientProvider } from "next-intl";
import { Toaster } from "~/components/ui/sonner";
import NavContextProvider from "~/context/nav-context-provider";
import Footer from "~/components/shared/footer/footer";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("home");
  return {
    title: {
      template: "%s | Basswaves",
      default: "Basswaves",
    },
    description: t("siteDescription"),
    keywords: t("keywords").split("|"),
    icons: {
      icon: "/icon.webp",
    },
    metadataBase: new URL("https://izzymo-sound.vercel.app"),
    openGraph: {
      type: "website",
      url: "https://izzymo-sound.vercel.app/",
      title: "Basswaves",
      description: t("siteDescription"),
      siteName: "Basswaves",
      images: [
        {
          url: "/home/hero2.webp",
        },
      ],
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const session = await getServerAuthSession();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`font-sans ${inter.variable} bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]`}
      >
        <SessionProvider session={session}>
          <NextIntlClientProvider messages={messages}>
            <NavContextProvider>
              <Nav />
              {children}
              <Footer />
              <Toaster richColors />
            </NavContextProvider>
          </NextIntlClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
