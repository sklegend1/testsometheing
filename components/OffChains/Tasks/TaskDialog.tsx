'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

interface taskProps{
    title?:string
    point?:number
    isOpen:()=>void
    img:string
    
}
const TaskDialog = (props:taskProps) => {
    const [isOpen,setIsOpen]=useState(true)
    const [verifyState,setVerifyState] = useState(0)
    const [buttonHtml,setButtonHtml] = useState(
    <button onClick={()=>{setVerifyState(1)}}
    className=" col-span-5 mt-3 text-white font-bold text-center h-[12vw] bg-[#9AA6F6] rounded-md  ">
        Join
    </button>)

        useEffect(()=>{
            switchState()
        },[verifyState])

    const switchState=()=>{
    switch (verifyState) {
      case 0:
        setButtonHtml(
        <button onClick={()=>{setVerifyState(1)}}
         className=" col-span-5 mt-3 text-white font-bold text-center h-[12vw] bg-[#9AA6F6] rounded-md  ">
            Join
        </button>);
        break;
      case 1:
        setButtonHtml(
            <button onClick={()=>{setVerifyState(2)}} className=" col-span-5 mt-3 text-white font-bold text-center h-[12vw] bg-[#029E80] rounded-md  ">
                Verify
            </button>);
        break;
      case 2:
        setButtonHtml(
            <button className=" col-span-5 mt-3 text-white font-bold text-center h-[12vw] bg-[#029E80] rounded-md  ">
        <div className=" animate-spin mx-auto w-6 h-6 
        border-t-4 border-t-[#ffffff]
        border-l-4 border-l-[#ffffff7c]
        border-b-4 border-b-[#ffffff7c]
        border-r-4 border-r-[#ffffff7c]
         rounded-full "></div>
    </button>);

    setTimeout(()=>{
        setVerifyState(3)
    },2000)
        break;

        case 3:
        setButtonHtml(
            <button onClick={()=>{props.isOpen()}}
             className=" col-span-5 mt-3 text-white font-bold text-center h-[12vw] bg-[#029E80] rounded-md  ">
                <CheckCircleIcon className=" mx-auto w-6" />
            </button>);
        break;
    }
}
    return (
        <div className=" modal-overlay">
        <div className=" modal animate-[popuptask_0.4s_1_forwards]  fixed p-5 pb-[110px] 
        left-0 bottom-[-55vh]  w-full secondarycolor rounded-2xl shadow-[0px_0px_30px_5px_rgba(150,200,255,0.7)] border-[#3f55756c] border-[1px] ">
            <div className=" relative"
            onClick={()=>{props.isOpen()}}
            ><XCircleIcon className=" absolute right-4 w-8 text-red-500"/></div>
            <div className={"  w-full bg-gradient-to-r grid grid-cols-4 from-[30%] mt-4  rounded-xl p-2 "}
            
         >
            <div className="w-[64px]  h-[64px] rounded-md ">
                <Image src={props.img} height={64} width={64} alt="Task Image" className="w-[64px] h-[64px] rounded-md object-cover  " />
            </div>
            <div className=" ml-3 col-span-3   w-full h-full">
                <h1 className=" text-white text-[20px] font-bold">{props.title}</h1>
                <p className=" text-gray-400 w-[80%] text-sm leading-4">Join Pixie’s Telegram channel.
                    And Earn Pixis !
                </p>
            </div>
            <div className=" col-span-5 mt-3 text-white text-center py-1 bg-[#d9d9d942] rounded-md  ">
                <div className=" inline-block bg-yellow-600 w-[12px] h-[12px] rounded-full
                 mx-1 shadow-[0px_0px_4px_rgba(200,200,0,0.8)] "></div>
                {props.point} Points
            </div>
            {buttonHtml}
        </div>
        </div>
        </div>
    );
}

export default TaskDialog;