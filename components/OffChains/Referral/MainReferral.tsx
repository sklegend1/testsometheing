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
        <div className=" w-[88vw]  mx-auto mt-12 text-center text-white ">
            <h1 className=" text-4xl font-bold mb-2">{props.refCount} Referrals</h1>
            <InviteButton  />
            <div className=" secondarycolor w-[88vw] aspect-[381/104] mt-8 rounded-lg content-center">LeaderBoard Banner</div>
            <div className=" ">
                <div className=" fixed bg-[#2A2F53] w-full rounded-3xl h-[55vh] bottom-0 left-0 py-4 ">
                <div id="ReffererToggle"
            className=" mb-4 w-[85%] mt-4 grid grid-cols-2 text-gray-300 text-center py-1 secondarycolor rounded-xl mx-auto"
            >
                <button onClick={()=>setIsMoreDetails(false)}
                 className={!isMoreDetails?" text-gray-800 bg-blue-gray-100 w-[90%] py-1 mx-auto rounded-xl font-semibold":""}>Top 50 Referrers</button>
                <button onClick={()=>setIsMoreDetails(true)}
                className={isMoreDetails?" text-gray-800 bg-blue-gray-100 w-[90%] py-1 mx-auto rounded-xl font-semibold":""}
                    >More Details</button>
            </div>
            <div className="overflow-y-scroll  h-[70%] p-3 ">
                {isMoreDetails?<DetailContainer />:<ReferralContainer />}

            </div>
                </div>
            </div>
        </div>
    );
}

export default MainReferral;