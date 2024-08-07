'use client'
import Image from "next/image";

interface LeaderHeaderProps{
    img1:string
    img2:string
    img3:string
}

const LeaderHeader = ( props:LeaderHeaderProps) => {
    return (

        <div className="w-full h-[40vh] relative  bg-gradient-to-b  from-black to-[#343B68] rounded-[20px_20px]">
            <h1 className=" absolute w-full top-[4vh] text-white text-3xl font-bold text-center " >Leader Board</h1>
            <div className=" absolute bottom-0 flex items-end  w-full">
            <div className="  w-[80vw] mx-auto mb-4 flex flex-row justify-center gap-[7%]  ">
                
            <div className="  w-[25vw] aspect-[92/233] flex-col flex justify-end">
                <div className=" relative">
                
                <Image src="/icons/leaderboard/Rank2Banner.png" width={85} height={173} alt="img1" className=" mx-auto " />
                <Image src={props.img2} width={60} height={60} alt="img1" className="absolute w-[50px] top-[-25px] left-[20px] rounded-full  mx-auto " />
                <Image src="/icons/leaderboard/Rank02.svg" width={90} height={90} alt="img1" className="absolute top-[-45px]  mx-auto " />
                </div>
                </div>

                <div className="  w-[25vw] aspect-[92/233] flex-col flex justify-end">
                <div className=" relative ">
                <Image src="/icons/leaderboard/Rank1Banner.png" width={92} height={217} alt="img1" className=" absolute top-[-217px] mx-auto " />
                <Image src={props.img1} width={60} height={60} alt="img1" className="absolute w-[50px] top-[-237px] left-[20px] rounded-full  mx-auto " />
                <Image src="/icons/leaderboard/Rank01.svg" width={90} height={90} alt="img1" className="absolute top-[-257px]  mx-auto " />
                </div>
                </div>
                <div className="  w-[25vw] aspect-[92/233] flex-col flex justify-end">
                <div className=" relative">
                
                <Image src="/icons/leaderboard/Rank3Banner.png" width={85} height={173} alt="img1" className=" mx-auto " />
                <Image src={props.img3} width={60} height={60} alt="img1" className="absolute w-[55px] top-[-23px] left-[18px] rounded-full  mx-auto " />
                <Image src="/icons/leaderboard/Rank03.svg" width={90} height={90} alt="img1" className="absolute top-[-45px]  mx-auto " />
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default LeaderHeader;