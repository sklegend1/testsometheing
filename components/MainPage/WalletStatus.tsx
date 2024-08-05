
import Image from "next/image";

const WalletStatus = (props:{ufa:string,ra:string}) => {
    return (
        <div className=" text-white text-center  w-[92%] h-[18vw] mx-auto mt-5 rounded-lg grid grid-cols-6 px-2 secondarycolor">
            <div>
            <Image 
                    src="/icons/nav/Wallet.png"
                    width={25}
                    height={25}
                    alt="wallet link icon"
                    className="max-h-[45px] mx-auto"
                
                />
            </div>
            <div className=" max-h-full col-span-5 border">
                <span>User-friendly address: <br/> {props.ufa}</span>
                <span>Raw address:<br/> {props.ra}</span>
            </div>
            
        </div>
    );
}

export default WalletStatus;