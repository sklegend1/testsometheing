import Image from "next/image";

interface PredMonitorProps{
    bgImg:string
    price:string
    lockedPrice:string
    state:number
}

const PredMonitor = (props:PredMonitorProps) => {
    return (
        <div className=" relative w-[70wv] h-[70vw] mt-[5.5vw] mx-auto">
            
            
                <div className={" relative  flex w-full justify-center  " }>
                <div className="w-[60vw] relative ">
                <div>
                <Image 
                    src={"/icons/tonpred/monitor0.png"}
                    width={250}
                    height={250}
                    alt="Prediction Monitor"
                    className=" absolute    "
                    
                />
                </div>
                <div className={" absolute " + (props.state==0?" saturate-0 opacity-50":(props.state==-1?"  opacity-50 saturate-0":" imgdropgreen"))}>
                <Image 
                    src={"/icons/tonpred/monitorup.png"}
                    width={250}
                    height={250}
                    alt="Prediction Monitor"
                    className=""
                />
                </div>
                <div className={" absolute " + (props.state==0?" saturate-0 opacity-50":(props.state==1?"  opacity-50 saturate-0":" imgdropred"))}>
                <Image 
                    src={"/icons/tonpred/monitordown.png"}
                    width={250}
                    height={250}
                    alt="Prediction Monitor"
                    
                    
                />
                </div>

                </div>
            
            
            <div className=" absolute ml-[-60] top-[16vw] h-[33vw]  w-[60vw] ">
                <div className=" mx-auto text-[3vw] text-center text-white mt-[5vw]"> Last Price of TON </div>
                <div className={" mx-auto text-[5vw] font-bold text-center"+(props.price>props.lockedPrice?" text-green-600 ":" text-red-600 ")}>$ {props.price}</div>
                <div className=" mt-[5%] grid grid-cols-2">
                    <div className=" text-white ml-[4vw] text-[4vw] text-left">Locked Price :</div>
                    <div className=" text-white mr-[4vw] text-[4vw] font-bold text-right">${props.lockedPrice}</div>


                </div>
            </div>
        </div>
        </div>
    );
}

export default PredMonitor;