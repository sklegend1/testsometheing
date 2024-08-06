import DetailCard from "./DetailCard";

const DetailContainer = () => {
    return (
        <div className=" mt-[-3vw] grid grid-cols-2 h-[32vh]  overflow-y-scroll overflow-x-hidden">
            <DetailCard title="Each New User Invite" img="/icons/Referrals/Referrals.png"  point={250} />
            <DetailCard title="Leaderboard Rank 1" img="/icons/Referrals/Rank1.png" ton={10} nft={3}  />
            <DetailCard title="Leaderboard Rank 2" img="/icons/Referrals/Rank2.png" ton={5} nft={3}  />
            <DetailCard title="Leaderboard Rank 3" img="/icons/Referrals/Rank3.png" ton={5} nft={1} />
            <DetailCard title="Leaderboard Rank 4-10" img="/icons/Referrals/Rank4.png" ton={2} nft={1}  />
            <DetailCard title="Leaderboard Rank 11-50" img="/icons/Referrals/Rank50.png" ton={2} />
            <DetailCard title="Each New User Invite" img="/icons/Referrals/Referrals.png"  point={250} />
            <DetailCard title="Leaderboard Rank 1" img="/icons/Referrals/Rank1.png" ton={10} nft={3}  />
            <DetailCard title="Leaderboard Rank 2" img="/icons/Referrals/Rank2.png" ton={5} nft={3}  />
            <DetailCard title="Leaderboard Rank 3" img="/icons/Referrals/Rank3.png" ton={5} nft={1} />
            <DetailCard title="Leaderboard Rank 4-10" img="/icons/Referrals/Rank4.png" ton={2} nft={1}  />
            <DetailCard title="Leaderboard Rank 11-50" img="/icons/Referrals/Rank50.png" ton={2} />
        </div>
    );
}

export default DetailContainer;