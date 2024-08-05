'use client'
import React, { useState } from "react";
import Image from "next/image";
import { XCircleIcon } from "@heroicons/react/24/outline";

interface taskProps{
    title?:string
    point?:number
    img:string
    
}
const TaskDialog = (props:taskProps) => {
    const [isOpen,setIsOpen]=useState(true)
    return (
        isOpen&&<div className="   fixed p-5 pb-[110px] left-0 bottom-[0]  w-full secondarycolor rounded-[50px] ">
            <div className=" relative"
            onClick={()=>setIsOpen(false)}
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
            <button className=" col-span-5 mt-3 text-white font-bold text-center py-3 bg-[#9AA6F6] rounded-md  ">
                
                JOIN
            </button>
        </div>
        </div>
    );
}

export default TaskDialog;