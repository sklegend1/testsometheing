"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { UserPlusIcon } from "@heroicons/react/24/solid";
interface taskProps {
  title?: string;
  point?: number;
  friend?: number;

  img: string;
  img1?: string;
  img2?: string;
  img3?: string;
}

const ReferralCard = (props: taskProps) => {
  const [tapEffect, setTapEffect] = useState("");

  const tapToggle = () => {
    setTapEffect(" shadow-[0px_0px_6px_1px_rgba(50,100,255,0.5)]  ");
    // window.navigator.vibrate([200])
    // setTimeout(()=>{
    //     setTapEffect("")
    // },50)
  };
  return (
    <div
      className={
        " w-[88vw] mx-auto bg-gradient-to-r  snap-start from-[#0C1230] grid grid-cols-5 from-[30%] to-[#343B68] mt-2 h-[84px] rounded-xl p-2 border-[#384275] border-2 touch-auto" +
        tapEffect
      }
      onTouchStart={tapToggle}
      onTouchEnd={() => setTapEffect("")}
    >
      <div className="w-[64px] h-[64px] flex items-center rounded-full ">
        <Image
          src={props.img}
          height={64}
          width={64}
          alt="Task Image"
          className=" w-[90%]  aspect-square rounded-full object-cover "
        />
      </div>
      <div className=" ml-[4vw] col-span-3 text-left   w-full h-full">
        <h1 className=" text-white ml-[2vw]  text-[3.8vw] font-bold">{props.title}</h1>
        <div className=" flex-row flex items-end  h-[60%]">
          <div className=" inline-block  text-[3vw]">
            {" "}
            <UserPlusIcon className=" w-[4.5vw] mt-[-4px] text-green-400 inline-block " />{" "}
            {props.friend}{" "}
          </div>
          <div className=" inline-block w-[50%] mt-2 text-white text-center py-0 text-[3vw]  rounded-md  ">
            <div
              className=" inline-block bg-yellow-600 w-[3vw] h-[3vw] rounded-full
                 mx-1 shadow-[0px_0px_4px_rgba(200,200,0,0.8)] "
            ></div>
            {props.point} Points
          </div>
        </div>
      </div>
      <div className="   ml-[-5vw] flex flex-col h-[80%] text-left">
        
          {props.img1 && (
            <div className=" mb-1">
              <Image
                src={props.img1}
                width={18}
                height={18}
                alt="img1"
                className=" w-[5vw] inline-block"
              />
              <p className=" ml-1 inline-block text-white text-[3vw] ">
                3 Pixi NFT
              </p>
            </div>
          )}
          {props.img2 && (
            <div>
              <Image
                src={props.img2}
                width={18}
                height={18}
                alt="img2"
                className=" w-[5vw] inline-block"
              />
              <p className=" ml-1 inline-block text-white text-[3vw] ">5 TON</p>
            </div>
          )}
        
      </div>
    </div>
  );
};

export default ReferralCard;
