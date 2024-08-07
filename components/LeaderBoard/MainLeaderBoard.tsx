import LeaderHeader from "./LeaderHeader";
import LeadersContainer from "./LeadersContainer";

const MainLeaderBoard = () => {
    return (
        <div className=" overflow-hidden">
            <LeaderHeader img1="/icons/referrals/person1.png" img2="/icons/referrals/person2.png" img3="/icons/referrals/person3.png" />
            <LeadersContainer />
        </div>
    );
}

export default MainLeaderBoard;