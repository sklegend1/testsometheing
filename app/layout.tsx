
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FooterNav from "@/components/MainPage/FooterNav";
import WalletProvider from "@/components/Utils/WalletProvider";
import TgProvider from "./context/store";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import LocaleProvider from "./context/localeContext";
import * as CSS from 'csstype';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pixi",
  description: "A Mini Game on Ton !",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  let bodyStyle:CSS.Properties ={
      direction:"ltr"
  } 
  let dir= "ltr"
  // locale=="fa"? bodyStyle.direction="rtl":bodyStyle.direction="ltr"

  return (
    <TgProvider>
    <html lang={locale}>
      <body className=" font-sans bg-[#0B1124] mb-[120px] overflow-hidden " style={bodyStyle}>
        <LocaleProvider>
        <NextIntlClientProvider messages={messages}>
          <WalletProvider>
          {children}
          </WalletProvider>
        </NextIntlClientProvider>
        </LocaleProvider>
        <footer>
          <FooterNav />

        </footer>

      </body>
    </html>
    </TgProvider>
  );
}
