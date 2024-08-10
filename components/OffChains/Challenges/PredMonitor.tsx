import Image from "next/image";

interface PredMonitorProps{
    bgImg:string
}

const PredMonitor = (props:PredMonitorProps) => {
    return (
        <div className=" w-[70wv] mt-[5.5vw] mx-auto">
            <div className=" flex w-full justify-center  ">
            <Image 
                src={props.bgImg}
                width={250}
                height={250}
                alt="Prediction Monitor"
                className=" w-[60vw] mx-auto"
            />
            <div className=" absolute ml-[-60] top-[21vw] h-[33vw]  w-[60vw] ">
                <div className=" mx-auto text-[3vw] text-center text-white mt-[5vw]"> Last Price of TON </div>
                <div className=" mx-auto text-[5vw] font-bold text-center text-green-600 ">$ 6.689</div>
                <div className=" mt-[5%] grid grid-cols-2">
                    <div className=" text-white ml-[4vw] text-[4vw] text-left">Locked Price :</div>
                    <div className=" text-white mr-[4vw] text-[4vw] font-bold text-right">$6.254</div>


                </div>
            </div>
        </div>
        </div>
    );
}

export default PredMonitor;