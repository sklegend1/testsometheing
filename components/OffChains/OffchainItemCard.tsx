'use client'
import Image from "next/image"
import { useState } from "react"


interface CardProps  {
    title:string,
    description:string,
    image:string
    extra?:string
}


const OffchainItemCard = (props:CardProps ) => {
    const [tapEffect,setTapEffect] = useState("")

    const tapToggle =()=>{
        setTapEffect(" shadow-[0px_0px_6px_1px_rgba(255,152,0,1)] scale-105 ")
        // setTimeout(()=>{
        //     setTapEffect("")
        // },50)
    }

    return (
        <div className={" overflow-hidden relative secondarycolor  max-w-[92%] aspect-[6/2] pb-[2px] w-[44vw] mx-auto my-1 rounded-lg grid grid-cols-2   "+props.extra+tapEffect}
            onTouchStart={tapToggle}
            onTouchEnd={()=>setTapEffect("")}
        >
            <div className="px-2 flex items-center ">
                <Image 
                    src={props.image}
                    width={45}
                    height={45}
                    alt="offchain logo"
                    className="max-h-[45px]"
                
                />
            </div>
            <div className=" ml-[-15%] pr-2">
                <h2 className=" text-sm font-bold mt-1 ">{props.title}</h2>
                <p className=" text-[1.9vw] leading-3 mt-[2px] max-w-full overflow-hidden  ">{props.description}</p>
            </div>
        </div>
    );
}

export default OffchainItemCard;