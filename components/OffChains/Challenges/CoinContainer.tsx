import Image from "next/image";

interface CoinProps{
    name:string
    count?:number
    img:string
}
const CoinContainer = (props:CoinProps) => {
    return (
        
            <div className=" mx-1 inline-block   ">
                    <Image src={props.img} width={20} height={20} alt="img1" className=" mt-[-2px] w-[5vw]  inline-block" />
                    <p className=" ml-[3px] inline-block text-white text-[4vw] ">{props.count} {props.name}</p>
            </div>
        
    );
}

export default CoinContainer;