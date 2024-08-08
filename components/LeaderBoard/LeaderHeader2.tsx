'use client'
import Image from "next/image";

interface LeaderHeaderProps{
    img1:string
    img2:string
    img3:string
}

const LeaderHeader2 = ( props:LeaderHeaderProps) => {
    return (

        <div className="w-full h-[18vh] relative  flex-col items-end  rounded-[20px_20px]">
            <h1 className="  w-[100vw] mt-[2vh]  text-white text-3xl font-bold text-center " >Leader Board</h1>
            <div className=" mt-[2vh] w-[100vw] mx-auto   ">
                <Image 
                    src="/icons/leaderboard/Banner1.png"
                    width={378}
                    height={84}
                    alt="LeaderBoard Banner"
                    className=" w-[95vw] mx-auto rounded-xl"
                />
            </div>
        </div>
    );
}

export default LeaderHeader2;