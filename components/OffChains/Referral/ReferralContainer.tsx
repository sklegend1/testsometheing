'use client'
import ReferralCard from "./ReferralCard";
const ReferralContainer = () => {
  return (
    <div onScroll={(e)=>e.preventDefault()} className=" overflow-y-scroll  h-[60vh]">
      <ReferralCard
        friend={52}
        title="Rick Novak"
        point={763}
        img="/icons/referrals/person1.png"
        img1="/icons/referrals/nft.png"
        img2="/icons/referrals/ton.png"
      />
      <ReferralCard
        friend={38}
        title="Ronald Bar"
        point={680}
        img="/icons/referrals/person2.png"
        img1="/icons/referrals/nft.png"
      />
      <ReferralCard
        friend={35}
        title="Susan Connor"
        point={671}
        img="/icons/referrals/person3.png"
      />
      <ReferralCard
        friend={52}
        title="Rick Novak"
        point={763}
        img="/icons/referrals/person1.png"
        img1="/icons/referrals/nft.png"
        img2="/icons/referrals/ton.png"
      />
      <ReferralCard
        friend={38}
        title="Ronald Bar"
        point={680}
        img="/icons/referrals/person2.png"
        img1="/icons/referrals/nft.png"
      />
      <ReferralCard
        friend={35}
        title="Susan Connor"
        point={671}
        img="/icons/referrals/person3.png"
      />
      <ReferralCard
        friend={52}
        title="Rick Novak"
        point={763}
        img="/icons/referrals/person1.png"
        img1="/icons/referrals/nft.png"
        img2="/icons/referrals/ton.png"
      />
      <ReferralCard
        friend={38}
        title="Ronald Bar"
        point={680}
        img="/icons/referrals/person2.png"
        img1="/icons/referrals/nft.png"
      />
      <ReferralCard
        friend={35}
        title="Susan Connor"
        point={671}
        img="/icons/referrals/person3.png"
      />
      <ReferralCard
        friend={52}
        title="Rick Novak"
        point={763}
        img="/icons/referrals/person1.png"
        img1="/icons/referrals/nft.png"
        img2="/icons/referrals/ton.png"
      />
      <ReferralCard
        friend={38}
        title="Ronald Bar"
        point={680}
        img="/icons/referrals/person2.png"
        img1="/icons/referrals/nft.png"
      />
      <ReferralCard
        friend={35}
        title="Susan Connor"
        point={671}
        img="/icons/referrals/person3.png"
      />
    </div>
  );
};

export default ReferralContainer;
