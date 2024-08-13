import Header from "@/components/MainPage/Header";
import MainCarousel from "@/components/MainPage/MainCarousel";
import OffchainsContainer from "@/components/MainPage/OffchainsContainer";
import OnchainsContainer from "@/components/MainPage/OnchainContainer";
import UserStats from "@/components/MainPage/UserStats";
import TestTon from "@/components/TonComponents/TestTon";
import { WalletAddress } from "@/components/TonComponents/WalletAddressContainer";
//import TelegramTest from "@/components/Utils/TelegramTest";
import Image from "next/image";
import dynamic from "next/dynamic";
import TestGetFetch from "@/components/Utils/TestGetFetch";

import LocaleSwitcher from "@/components/Intl/LocaleSwitcher";
const TelegramTest = dynamic(()=> import("@/components/Utils/TelegramTest"),{ssr:false})
import { cookies } from "next/headers";
import TonPriceSocket from "@/components/Utils/TonPriceSocket";

export default function Home() {
  
  return (
    <main className="">
      <div className=" text-right mx-3 mt-3">
      <LocaleSwitcher />
      </div>
      {/* <Header /> */}
      <UserStats />
      <WalletAddress />
      <MainCarousel />
      <OffchainsContainer />
      
      <OnchainsContainer />
      <TelegramTest />
      {/* <TestGetFetch /> */}
      <TonPriceSocket />
      
    </main>
  );
}
