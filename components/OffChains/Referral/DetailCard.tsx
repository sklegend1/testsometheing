'use client'
import { useState } from "react"
import Image from "next/image"
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline"
import { UserPlusIcon } from "@heroicons/react/24/solid"
import ScoreContainer from "./ScoreContainer"
interface taskProps{
    title?:string
    
    
    img:string
    
    point?:number
    ton?:number
    nft?:number
}

const DetailCard = (props:taskProps) => {
    const [tapEffect,setTapEffect] = useState("")

    const tapToggle =()=>{
        setTapEffect(" shadow-[0px_0px_6px_1px_rgba(50,100,255,0.5)]  ")
        // setTimeout(()=>{
        //     setTapEffect("")
        // },50)
    }
    return (
        <div className={"  w-[45vw] mx-auto bg-gradient-to-r from-[#0C1230] grid grid-cols-5 from-[30%] to-[#343B68] mt-0 h-[84px] rounded-xl p-2 border-[#384275] border-2"+tapEffect}
            onTouchStart={tapToggle}
            onTouchEnd={()=>setTapEffect("")}
         >
            <div className="w-[64px] h-[64px]   ">
                <Image src={props.img} height={45} width={45} alt="Task Image" className="w-[65%]   object-cover " />
            </div>
            <div className=" ml-[4vw] col-span-3 text-left   w-[120%] h-full">
                <h1 className=" text-white ml-2 text-[3.5vw] font-bold">{props.title}</h1>
                
            </div>
            <div className=" mx-auto w-[98%] col-span-5  bg-[#d9d9d952] rounded-md mt-[-4.3vw] h-[20px] ">
                <div className=" mt-[-2px]">
                    {props.point&&<ScoreContainer count={props.point} img="/icons/referrals/Point.png" name="Points" />}
                    {props.ton&&<ScoreContainer count={props.ton} img="/icons/referrals/ton.png" name="TON"  />}
                    {props.nft&&<ScoreContainer count={props.nft} img="/icons/referrals/nft.png" name="Pixi NFT"  />}
                </div>
                </div>
            
        </div>
    );
}

export default DetailCard;