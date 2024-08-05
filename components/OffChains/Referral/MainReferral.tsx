'use client'

import InviteButton from "./InviteButton";
import ReferralCard from "./ReferralCard";


interface RefProps{
    refCount:number
}
const MainReferral = (props:RefProps) => {
    return (
        <div className=" w-[88vw]  mx-auto mt-24 text-center text-white">
            <h1 className=" text-4xl font-bold mb-2">{props.refCount} Referrals</h1>
            <InviteButton  />
            <div className=" secondarycolor w-[88vw] aspect-[381/104] mt-8 rounded-lg content-center">LeaderBoard Banner</div>
            <div className=" ">
                <div className=" fixed bg-[#2A2F53] w-full rounded-3xl h-[55vh] bottom-0 left-0 p-4 ">
                <div id="ReffererToggle"
            className=" mb-4 w-[85%] mt-4 grid grid-cols-2 text-gray-300 text-center py-1 secondarycolor rounded-xl mx-auto"
            >
                <button className=" text-gray-800 bg-blue-gray-100 w-[90%] py-1 mx-auto rounded-xl font-semibold">Top 50 Referrers</button>
                <button>More Details</button>
            </div>
            <div className="overflow-y-scroll h-[70%] ">
            <ReferralCard friend={52}  title="Rick Novak" point={763} 
            img="/icons/referrals/person1.png" img1="/icons/referrals/nft.png" img2="/icons/referrals/ton.png"  />
            <ReferralCard friend={38}  title="Ronald Bar" point={680} 
            img="/icons/referrals/person2.png" img1="/icons/referrals/nft.png"   />
            <ReferralCard friend={35}  title="Susan Connor" point={671} 
            img="/icons/referrals/person3.png"   />
            <ReferralCard friend={52}  title="Rick Novak" point={763} 
            img="/icons/referrals/person1.png" img1="/icons/referrals/nft.png" img2="/icons/referrals/ton.png"  />
            <ReferralCard friend={38}  title="Ronald Bar" point={680} 
            img="/icons/referrals/person2.png" img1="/icons/referrals/nft.png"   />
            <ReferralCard friend={35}  title="Susan Connor" point={671} 
            img="/icons/referrals/person3.png"   />
            </div>
                </div>
            </div>
        </div>
    );
}

export default MainReferral;