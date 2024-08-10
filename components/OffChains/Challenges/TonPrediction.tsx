import PredMonitor from "./PredMonitor";


const TonPrediction = () => {
    return (
        <div className="w-[100vw] text-center">

            <PredMonitor bgImg="/icons/tonpred/down.png" />

            <div className="text-center text-white text-[4vw] font-bold mt-[8vw]" >Choose your option for Next Round!</div>
            <button className=" bg-[#029e84]  p-[0.5vw] text-[5vw] font-bold w-[70vw] mt-[5vw] rounded-lg text-white">Enter UP</button>
            <button className=" bg-[#f83b4a]  p-[0.5vw] text-[5vw] font-bold w-[70vw] mt-[3vw] rounded-lg text-white">Enter Down</button>
        </div>
    );
}

export default TonPrediction;