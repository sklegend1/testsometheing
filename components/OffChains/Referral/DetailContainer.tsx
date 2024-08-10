import DetailCard from "./DetailCard";

const DetailContainer = () => {
    return (
        <div className=" mt-[0vw] grid gap-2 grid-cols-2 h-[60vh] select-none  w-[105%] ml-[-3%] px-[2%] overscroll-contain  overflow-y-scroll overflow-x-hidden">
            <DetailCard title="Each New User Invite" img="/icons/referrals/Referrals.png"  point={250} />
            <DetailCard title="Leaderboard Rank 1" img="/icons/referrals/Rank1.png" ton={10} nft={3}  />
            <DetailCard title="Leaderboard Rank 2" img="/icons/referrals/Rank2.png" ton={5} nft={3}  />
            <DetailCard title="Leaderboard Rank 3" img="/icons/referrals/Rank3.png" ton={5} nft={1} />
            <DetailCard title="Leaderboard Rank 4-10" img="/icons/referrals/Rank4.png" ton={2} nft={1}  />
            <DetailCard title="Leaderboard Rank 11-50" img="/icons/referrals/Rank50.png" ton={2} />
            <DetailCard title="Each New User Invite" img="/icons/referrals/Referrals.png"  point={250} />
            <DetailCard title="Leaderboard Rank 1" img="/icons/referrals/Rank1.png" ton={10} nft={3}  />
            <DetailCard title="Leaderboard Rank 2" img="/icons/referrals/Rank2.png" ton={5} nft={3}  />
            <DetailCard title="Leaderboard Rank 3" img="/icons/referrals/Rank3.png" ton={5} nft={1} />
            <DetailCard title="Leaderboard Rank 4-10" img="/icons/referrals/Rank4.png" ton={2} nft={1}  />
            <DetailCard title="Leaderboard Rank 11-50" img="/icons/referrals/Rank50.png" ton={2} />
        </div>
    );
}

export default DetailContainer;