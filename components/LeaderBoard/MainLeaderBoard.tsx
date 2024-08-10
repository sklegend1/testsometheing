'use client'
import LeaderHeader from "./LeaderHeader";
import LeadersContainer from "./LeadersContainer";
import LeaderHeader2 from "./LeaderHeader2";
import Image from "next/image";
import { useEffect } from "react";

const MainLeaderBoard = () => {
    // useEffect(()=>{
    //     function preventCollapse() {
    //         if (window.scrollY === 0) {
    //           window.scrollTo(0, 1);
    //         }
    //       }
    //       preventCollapse()
    // },[])
    return (
        <div className=" overflow-hidden flex flex-col touch-none">
            <div>
            <LeaderHeader2 img1="/icons/referrals/person1.png" img2="/icons/referrals/person2.png" img3="/icons/referrals/person3.png" />
            </div>
            <div className="mt-2">
            <LeadersContainer />
            </div>
        </div>
    );
}

export default MainLeaderBoard;