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
            <div className=" secondarycolor mx-auto w-[88vw] min-h-[12vh] mt-2 text-sm  grid grid-cols-2 rounded-lg p-1 ">
                <div className=" pt-1">
                    <div>Total Referrals</div>
                    <div className=" font-bold ">12 People</div>
                </div>
                <div className=" pt-1">
                    
                    <div>Active Referrals</div>
                    <div className=" font-bold ">5 People</div>
                </div>
                <div className=" col-span-2 grid grid-rows-2 pt-1">
                    <div>
                        <hr className=" mb-1 border-gray-600"/>
                         What you Earned from them : 
                         </div>
                    <div>
                    <div className="  inline-block bg-yellow-600 w-[12px] h-[12px] rounded-full
                 mx-1 shadow-[0px_0px_4px_rgba(200,200,0,0.8)] "></div>
                 <div className=" inline-block text-white font-bold">
                28 Points</div>
                    </div>
                </div>
                
            </div>
            <div className=" mt-6 max-h-[calc(100vh-200px)]  ">
                <div className=" fixed  bg-[#2A2F53] w-[100vw] rounded-3xl h-full pb-[110px] top-[33vh]  bottom-0 left-0 pt-4 ">
                <div id="ReffererToggle"
            className=" mb-4 w-[85%] mt-4 grid grid-cols-2 text-gray-300 text-center py-1 secondarycolor rounded-xl mx-auto"
            >
                <button onClick={()=>setIsMoreDetails(false)}
                 className={!isMoreDetails?" text-gray-800 bg-blue-gray-100 w-[90%] py-1 mx-auto rounded-xl font-semibold":""}>Top 50 Referrers</button>
                <button onClick={()=>setIsMoreDetails(true)}
                className={isMoreDetails?" text-gray-800 bg-blue-gray-100 w-[90%] py-1 mx-auto rounded-xl font-semibold":""}
                    >More Details</button>
            </div>
            <div className="overflow-y-scroll  snap-y  p-3 ">
                {isMoreDetails?<DetailContainer />:<ReferralContainer />}

            </div>
                </div>
            </div>
        </div>
    );
}

export default MainReferral;