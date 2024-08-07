'use client'
import Image from "next/image";

interface LeaderHeaderProps{
    img1:string
    img2:string
    img3:string
}

const LeaderHeader2 = ( props:LeaderHeaderProps) => {
    return (

        <div className="w-full h-[20vh] relative  flex items-end rounded-[20px_20px]">
            <h1 className=" absolute w-full top-[4vh] text-white text-3xl font-bold text-center " >Leader Board</h1>
            <div className=" mx-auto  ">
                <Image 
                    src="/icons/leaderboard/Banner1.png"
                    width={378}
                    height={84}
                    alt="LeaderBoard Banner"
                    className=" w-[95vw] rounded-xl"
                />
            </div>
        </div>
    );
}

export default LeaderHeader2;