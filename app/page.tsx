import Header from "@/components/MainPage/Header";
import MainCarousel from "@/components/MainPage/MainCarousel";
import OffchainsContainer from "@/components/MainPage/OffchainsContainer";
import OnchainsContainer from "@/components/MainPage/OnchainContainer";
import UserStats from "@/components/MainPage/UserStats";
import TelegramTest from "@/components/Utils/TelegramTest";
import Image from "next/image";


export default function Home() {
  return (
    <main className="">
      
      {/* <Header /> */}
      <UserStats />
      <MainCarousel />
      <OffchainsContainer />
      <OnchainsContainer />
      <TelegramTest />
    </main>
  );
}
