'use client'

import { useState } from "react";
import InviteButton from "./InviteButton";
import ReferralCard from "./ReferralCard";
import ReferralContainer from "./ReferralContainer";
import ReferralDetails from "./ReferralDetails";
import DetailContainer from "./DetailContainer";


interface RefProps{
    refCount:number
}
const MainReferral = (props:RefProps) => {
    const [isMoreDetails,setIsMoreDetails] = useState(false)
    return (
        <div className=" w-full   mx-auto mt-[4vh]   text-center text-white   ">
            <div className="w-[88vw] mx-auto">
            <h1 className=" text-2xl font-bold mb-1">{props.refCount} Referrals</h1>
            <InviteButton  />
            </div>
            <div className=" secondarycolor mx-auto w-[88vw] h-[10vh] mt-3 rounded-lg content-center">LeaderBoard Banner</div>
            <div className=" mt-6 max-h-[calc(100vh-200px)]  ">
                <div className=" fixed  bg-[#2A2F53] w-[100vw] rounded-3xl h-full pb-[110px] top-[28vh]  bottom-0 left-0 pt-4 ">
                <div id="ReffererToggle"
            className=" mb-4 w-[85%] mt-4 grid grid-cols-2 text-gray-300 text-center py-1 secondarycolor rounded-xl mx-auto"
            >
                <button onClick={()=>setIsMoreDetails(false)}
                 className={!isMoreDetails?" text-gray-800 bg-blue-gray-100 w-[90%] py-1 mx-auto rounded-xl font-semibold":""}>Top 50 Referrers</button>
                <button onClick={()=>setIsMoreDetails(true)}
                className={isMoreDetails?" text-gray-800 bg-blue-gray-100 w-[90%] py-1 mx-auto rounded-xl font-semibold":""}
                    >More Details</button>
            </div>
            <div className="overflow-y-scroll h-[60%]  p-3 ">
                {isMoreDetails?<DetailContainer />:<ReferralContainer />}

            </div>
                </div>
            </div>
        </div>
    );
}

export default MainReferral;