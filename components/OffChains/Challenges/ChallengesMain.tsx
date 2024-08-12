"use client";
import ChallengeCard from "./ChallengeCard";
import Image from "next/image";

const ChallengesMain = () => {
  return (
    <div className=" relative ">
      <div className=" absolute z-[-1] h-[100svh] bg-gradient-to-b from-[#0B1124]   ">
        <Image
          src="/icons/challenges/background.png"
          height={1000}
          width={500}
          alt="bg"
          className=" mt-[12vw] mix-blend-hue  "
        />
      </div>
      <div className=" w-[85vw] mt-[6vw] mx-auto ">
        <h1 className=" text-white font-bold  text-xl   ">
          Take on challenges to earn more points!
        </h1>
        <p className=" text-gray-400 mt-[2vw]  text-sm w-full text-justify   ">
          Challenges help you earn more points and prepare for our main WEB3
          game's token Airdrop! Don't forget to check the leaderboard, where
          fantastic prizes await you!
        </p>
      </div>
      <div className=" w-[85vw] mt-4 mx-auto ">
        <h1 className=" text-white   text-xl  ">Challenges</h1>
        <ChallengeCard
          title="Price Prediction Challenge"
          desc="Predict TON Price every 5 minutes and earn points!"
          img="/icons/challenges/tonpred.png"
          href="tonprice"
        />
        <ChallengeCard
          title="Daily Whitepaper Quiz"
          desc="Read about our main WEB3 game and project, answer questions to earn points!"
          img="/icons/challenges/whitepaper.png"
        />
      </div>
    </div>
  );
};

export default ChallengesMain;
