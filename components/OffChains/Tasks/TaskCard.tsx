'use client'
import { useState } from "react"
import Image from "next/image"
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline"
interface taskProps{
    title?:string
    point?:number
    img:string
    
}

const TaskCard = (props:taskProps) => {
    const [tapEffect,setTapEffect] = useState("")

    const tapToggle =()=>{
        setTapEffect(" shadow-[0px_0px_6px_1px_rgba(50,100,255,0.5)] scale-105 ")
        // setTimeout(()=>{
        //     setTapEffect("")
        // },50)
    }
    return (
        <div className={" w-full bg-gradient-to-r from-[#0C1230] grid grid-cols-5 from-[30%] to-[#343B68] mt-4 h-[84px] rounded-xl p-2 border-[#273161] border-2"+tapEffect}
            onTouchStart={tapToggle}
            onTouchEnd={()=>setTapEffect("")}
         >
            <div className="w-[64px] h-[64px] rounded-md ">
                <Image src={props.img} height={64} width={64} alt="Task Image" className="w-[64px] h-[64px] rounded-md object-cover " />
            </div>
            <div className=" ml-3 col-span-3   w-full h-full">
                <h1 className=" text-white text-[3.8vw] font-bold">{props.title}</h1>
                <div className=" w-[50%] mt-2 text-white text-center py-0 bg-[#d9d9d942] rounded-md  ">
                <div className=" inline-block bg-yellow-600 w-[12px] h-[12px] rounded-full
                 mx-1 shadow-[0px_0px_4px_rgba(200,200,0,0.8)] "></div>
                {props.point} Points
            </div>
            </div>
            <div className=" relative  content-center ">
                <ArrowRightCircleIcon className=" absolute text-white w-12 right-0 top-2" />
            </div>
        </div>
    );
}

export default TaskCard;