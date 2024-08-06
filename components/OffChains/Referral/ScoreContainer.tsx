import Image from "next/image";

interface scoreProps{
    name:string
    count?:number
    img:string
}
const ScoreContainer = (props:scoreProps) => {
    return (
        
            <div className=" mx-1 inline-block   ">
                    <Image src={props.img} width={14} height={14} alt="img1" className=" mt-[-2px]  inline-block" />
                    <p className=" ml-[3px] inline-block text-white text-[3vw] ">{props.count} {props.name}</p>
            </div>
        
    );
}

export default ScoreContainer;