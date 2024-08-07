'use client'
import { useState } from "react"
import Image from "next/image"
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline"
import { UserPlusIcon } from "@heroicons/react/24/solid"
interface taskProps{
    title?:string
    point?:number
    rank?:number
    
    img:string
    img1?:string
    img2?:string
    img3?:string
    
}

const LeaderCard = (props:taskProps) => {
    const [tapEffect,setTapEffect] = useState("")

    const tapToggle =()=>{
        setTapEffect(" shadow-[0px_0px_6px_1px_rgba(50,100,255,0.5)]  ")
        // window.navigator.vibrate([200])
        // setTimeout(()=>{
        //     setTapEffect("")
        // },50)
    }
    return (
        <div className={" w-[88vw]  relative mx-auto bg-gradient-to-r from-[#0C1230] flex flex-row items-center from-[30%] to-[#343B68] mt-2 h-[68px] rounded-xl p-2 border-[#384275] border-2"+tapEffect}
            onTouchStart={tapToggle}
            onTouchEnd={()=>setTapEffect("")}
         >
            <div className=" text-white font-body text-2xl ml-1 w-10">{props.rank}</div>
            <div className="w-[55px] ml-1 h-[55px] rounded-full ">
                <Image src={props.img} height={55} width={55} alt="Task Image" className="w-[55px] h-[55px] rounded-full object-cover " />
            </div>
            
                <h1 className=" text-white ml-2 w-[38%] text-[3.8vw] font-bold">{props.title}</h1>
                
                <div className=" absolute right-3">
                <div className="  inline-block bg-yellow-600 w-[12px] h-[12px] rounded-full
                 mx-1 shadow-[0px_0px_4px_rgba(200,200,0,0.8)] "></div>
                 <div className=" inline-block text-white">
                {props.point} Points</div>
                </div>
            <div className=" relative  ml-[-5vw]   ">
                <div className="  text-left">
                    {props.img1&&
                    <div className=" mb-1">
                    <Image src={props.img1} width={18} height={18} alt="img1" className=" inline-block" />
                    <p className=" ml-1 inline-block text-white text-[3vw] ">3 Pixi NFT</p>
                    </div>}
                    {props.img2&&
                    <div>
                    <Image src={props.img2} width={18} height={18} alt="img2" className=" inline-block" />
                    <p className=" ml-1 inline-block text-white text-[3vw] ">5 TON</p>
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default LeaderCard;