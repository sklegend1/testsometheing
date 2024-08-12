'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react"

interface ChallengeProps{
    title:string
    img:string
    desc?:string
    href?:string
    
}

const ChallengeCard = ( props:ChallengeProps) => {
    const [tapEffect,setTapEffect] = useState("")

    const tapToggle =()=>{
        setTapEffect(" shadow-[0px_0px_6px_1px_rgba(50,255,100,0.5)] scale-105 ")
        // setTimeout(()=>{
        //     setTapEffect("")
        // },50)
    }
    return (
        <div className={" w-full bg-gradient-to-r  from-[#0c1230aa] grid grid-cols-5 from-[30%] to-[#343B68aa] mt-[2vw] h-[30vw] rounded-xl p-2 border-[#273161] border-2"}
            
         >
            <div className=" col-span-5 grid grid-cols-3 ">
            <div className=" rounded-md h-full flex items-center  ">
                <Image src={props.img} height={64} width={64} alt="Task Image" className="w-[20vw] rounded-md object-cover " />
            </div>
            <div className=" ml-[-4vw] col-span-2  w-[calc(100%+4vw)]     h-[15vw] overflow-hidden">
                <h1 className=" text-white text-[3.8vw] font-bold">{props.title}</h1>
                <div className="  text-[3vw] text-gray-300 text-left py-0  ">
                
                {props.desc}
            </div>
            </div>
            <div className=" flex items-end  col-span-2 col-start-2 mt-[-20%] justify-end">
           <Link 
           href={"/challenges/"+props.href}
           onTouchStart={tapToggle}
           onTouchEnd={()=>setTapEffect("")}
           className={` h-[7vw] bg-green-700 rounded-md w-fit px-[1vw] 
           flex items-center text-[5vw] font-bold justify-center min-w-[25vw] text-white ${tapEffect}` }>Play </Link >
           </div></div>
        </div>
        )

}

export default ChallengeCard;