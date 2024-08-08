'use client'

import { useState } from "react";
import InviteButton from "./InviteButton";
import ReferralCard from "./ReferralCard";
import ReferralContainer from "./ReferralContainer";
import ReferralDetails from "./ReferralDetails";
import DetailContainer from "./DetailContainer";
import MyReferrals from "./MyReferrals";


interface RefProps{
    refCount:number
}
const MainReferral = (props:RefProps) => {
    const [isMoreDetails,setIsMoreDetails] = useState(1)
    return (
        <div className=" w-full   mx-auto mt-[4vh]   text-center text-white   ">
            <div className="w-[88vw] mx-auto">
            <h1 className=" text-2xl font-bold mb-1">{props.refCount} Referrals</h1>
            <InviteButton  />
            </div>
            <div className=" secondarycolor flex items-center justify-center text-center mx-auto w-[88vw] h-[80px] mt-2 text-md rounded-lg p-1 ">
                Referral Banner
                
            </div>
            <div className=" mt-6 max-h-[calc(100vh-200px)]  ">
                <div className=" fixed  bg-[#2A2F53] w-[100vw] rounded-3xl h-full pb-[110px] top-[33vh]  bottom-0 left-0 pt-4 ">
                <div id="ReffererToggle"
            className=" mb-4 w-[85%] mt-4 text-[4vw] grid grid-cols-3 text-gray-300 text-center py-1 secondarycolor rounded-xl mx-auto"
            >
                <button onClick={()=>setIsMoreDetails(1)}
                 className={isMoreDetails==1?" text-gray-800 bg-blue-gray-100 w-[90%] py-[1px] mx-auto rounded-xl font-semibold":""}>Top 50 Referrers</button>
                <button onClick={()=>setIsMoreDetails(3)}
                className={isMoreDetails==3?" text-gray-800 bg-blue-gray-100 w-[90%] py-1 mx-auto rounded-xl font-semibold":""}
                    >My Referrals</button>
                    <button onClick={()=>setIsMoreDetails(2)}
                className={isMoreDetails==2?" text-gray-800 bg-blue-gray-100 w-[90%] py-1 mx-auto rounded-xl font-semibold":""}
                    >More Details</button>
                
            </div>
            <div className="overflow-y-scroll  snap-y  p-3 ">
                {isMoreDetails==1?<ReferralContainer />:(isMoreDetails==2?<DetailContainer />:<MyReferrals />)}

            </div>
                </div>
            </div>
        </div>
    );
}

export default MainReferral;