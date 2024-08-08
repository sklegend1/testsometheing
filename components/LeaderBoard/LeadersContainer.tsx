import LeaderCard from "./LeaderCard";
import LeaderCardRank1 from "./LeaderCardRank1";
import LeaderCardRank2 from "./LeaderCardRank2";
import LeaderCardRank3 from "./LeaderCardRank3";

const LeadersContainer = () => {
    return (<div  className=" relative  h-[calc(85vh-250px)] mt-[calc(40vw)]   ">
    <div className=" absolute  scale-105 mt-0 mb-2  mx-auto rounded-xl  w-full">
        <LeaderCard rank={505}
        title="Your Current Rank"
        point={75}
        img="/icons/referrals/person1.png"/>
        </div>
        <div onScroll={(e)=>e.preventDefault()} className=" fixed  top-[calc(40vw+80px)] w-full mt-2 h-[calc(100svh-(40vw+200px))] overflow-y-scroll touch-auto">
        
            <LeaderCardRank1 rank={1}
        title="Rick Novak"
        point={763}
        img="/icons/referrals/person1.png"/>
        <LeaderCardRank2 rank={2}
        title="Rick Novak"
        point={565}
        img="/icons/referrals/person2.png"/>
        <LeaderCardRank3 rank={3}
        title="Rick Novak"
        point={220}
        img="/icons/referrals/person3.png"/>

        <LeaderCard rank={4}
        title="Rick Novak"
        point={198}
        img="/icons/referrals/person1.png"/>
        <LeaderCard rank={5}
        title="Rick Novak"
        point={165}
        img="/icons/referrals/person2.png"/>
        <LeaderCard rank={6}
        title="Rick Novak"
        point={154}
        img="/icons/referrals/person3.png"/>
        
        <LeaderCard rank={7}
        title="Rick Novak"
        point={148}
        img="/icons/referrals/person1.png"/>
        <LeaderCard rank={8}
        title="Rick Novak"
        point={145}
        img="/icons/referrals/person2.png"/>
        <LeaderCard rank={9}
        title="Rick Novak"
        point={138}
        img="/icons/referrals/person3.png"/>

        </div>
        </div>
    );
}

export default LeadersContainer;