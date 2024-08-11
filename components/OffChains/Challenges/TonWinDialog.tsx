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
    desc?:string
    state?:boolean
    
}
const TonWinDialog = (props:taskProps) => {
    const [isOpen,setIsOpen]=useState(true)
    const [verifyState,setVerifyState] = useState(0)
   


    return (
        <div className=" modal-overlay">
        <div className=" modal animate-[popuptask_0.2s_1_forwards]  fixed p-5 pb-[110px] 
        left-0 bottom-[-55vh]  w-full secondarycolor rounded-2xl shadow-[0px_0px_30px_5px_rgba(150,200,255,0.7)] border-[#3f55756c] border-[1px] ">
            <div className=" relative"
            onClick={()=>{props.isOpen()}}
            ><XCircleIcon className=" absolute right-2 w-8 text-red-500"/></div>
            <div className={"  w-full bg-gradient-to-r flex flex-col from-[30%] mt-4  rounded-xl p-2 "}
            
         >
            <h1 className={" mt-[3vw] text-[6vw] font-black " + (props.state?" text-[#029e84]":"text-[#f83b4a]")} >{props.title}</h1>
           
            <div className="w-full mt-[3vw] ">
                <Image src={props.img} height={250} width={250} alt="Task Image" className=" mx-auto w-[60vw]   " />
            </div>
            <div className=" text-justify  text-white mt-4    w-[90%] mx-auto">
                
                {props.desc}
            </div>
            
            
        </div>
        </div>
        </div>
    );
}

export default TonWinDialog;