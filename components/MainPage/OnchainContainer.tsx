import cardProps from "@/public/testprops";
import OnChainCardProps from "@/public/onchainprops";
import OffchainItemCard from "../OffChains/OffchainItemCard";



const OnchainsContainer = () => {
    
    return (
        <div className=" w-[92%] mx-auto mt-5  text-white px-0 text-lg ">
            <h2 className="ml-2">Onchain</h2>
            <div className=" w-full mx-auto flex flex-wrap  ">
                <OffchainItemCard title={OnChainCardProps[0].title} description={OnChainCardProps[0].description} image={OnChainCardProps[0].image} extra="csoon" link="/" />
                <OffchainItemCard title={OnChainCardProps[1].title} description={OnChainCardProps[1].description} image={OnChainCardProps[1].image} extra="csoon" link="/" />
                <OffchainItemCard title={OnChainCardProps[2].title} description={OnChainCardProps[2].description} image={OnChainCardProps[2].image} extra="csoon" link="/" />
                <OffchainItemCard title={OnChainCardProps[3].title} description={OnChainCardProps[3].description} image={OnChainCardProps[3].image} extra="csoon" link="/" />
                
                

            </div>
            
        </div>
    );
}

export default OnchainsContainer;