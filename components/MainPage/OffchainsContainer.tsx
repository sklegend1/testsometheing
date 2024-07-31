import cardProps from "@/public/testprops";
import OffchainItemCard from "../OffChains/OffchainItemCard";



const OffchainsContainer = () => {
    
    return (
        <div className=" w-[92%] mx-auto mt-5  text-white px-0  text-lg ">
            <h2 className="ml-2">Offchain</h2>
            <div className=" w-full mx-auto flex flex-wrap gap-1 ">
                <OffchainItemCard title={cardProps[0].title} description={cardProps[0].description} image={cardProps[0].image}  />
                <OffchainItemCard title={cardProps[1].title} description={cardProps[1].description} image={cardProps[1].image}  />
                <OffchainItemCard title={cardProps[2].title} description={cardProps[2].description} image={cardProps[2].image}  />
                <OffchainItemCard title={cardProps[3].title} description={cardProps[3].description} image={cardProps[3].image}  />
                
                

            </div>
            
        </div>
    );
}

export default OffchainsContainer;