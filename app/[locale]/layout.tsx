import type { Metadata } from "next";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSelector from "@/components/LanguageSelector";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "Heitor Henrique Stein",
  description:
    "Engenheiro da Computação, Desenvolvedor Fullstack e entusiasta de tecnologia.",
};

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const messages = await getMessages();
  return (
    <html lang={lang}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <div className="fixed top-4 right-4 z-40 flex gap-2">
              <LanguageSelector />
              <ThemeToggle />
            </div>
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
