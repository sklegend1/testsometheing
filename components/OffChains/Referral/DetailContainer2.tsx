import DetailCard from "./DetailCard";

const DetailContainer2 = () => {
    return (
        <div className=" mt-4 grid gap-2  grid-cols-2 h-[25vh]   w-[105%] ml-[-3%] px-[2%]  overflow-y-scroll overflow-x-hidden">
            <DetailCard count={12} title="Each New User Invite" img="/icons/referrals/Referrals.png"  point={250} />
            
            <DetailCard title="Leaderboard Rank 4-10" img="/icons/referrals/Rank4.png" ton={2} nft={1}  />
            <DetailCard title="Leaderboard Rank 11-50" img="/icons/referrals/Rank50.png" ton={2} />
            
            
        </div>
    );
}

export default DetailContainer2;