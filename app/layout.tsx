import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FooterNav from "@/components/MainPage/FooterNav";
import WalletProvider from "@/components/Utils/WalletProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pixi",
  description: "A Mini Game on Ton !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <WalletProvider>
    <html lang="en">
      <body className=" font-sans bg-[#0B1124] mb-[120px]">
        {children}
        <footer>
          <FooterNav />

        </footer>

      </body>
    </html>
    </WalletProvider>
  );
}
