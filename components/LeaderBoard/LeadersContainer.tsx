import LeaderCard from "./LeaderCard";

const LeadersContainer = () => {
    return (<>
    <div className=" scale-105 mt-6 mx-auto rounded-xl shadow-[0px_0px_10px_1px_rgba(180,180,250,0.6)] w-fit">
        <LeaderCard rank={505}
        title="Your Current Rank"
        point={763}
        img="/icons/referrals/person1.png"/>
        </div>
        <div className="  w-full mt-2 h-[40vh] overflow-y-scroll ">
        
            <LeaderCard rank={1}
        title="Rick Novak"
        point={763}
        img="/icons/referrals/person1.png"/>
        <LeaderCard rank={2}
        title="Rick Novak"
        point={565}
        img="/icons/referrals/person2.png"/>
        <LeaderCard rank={3}
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

        </div></>
    );
}

export default LeadersContainer;