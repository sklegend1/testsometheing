'use client'
import { Progress } from "@material-tailwind/react";
import ScoreContainer from "../Referral/ScoreContainer";
import CoinContainer from "./CoinContainer";
import { number } from "@telegram-apps/sdk";
interface CountDownProps{

    pValue:number
    dValue:number
}

const CountDown = (props:CountDownProps) => {
    return (
        <div className=" mt-[5vw]">
            <div className=" w-[90vw] mx-auto grid grid-cols-2 mb-[1vw] ">
                <div className=" text-left  ">
                    <CoinContainer  img="/icons/referrals/ton.png" name="TON/USDT"  />
                </div>
                <div className=" text-right  ">
                    <CoinContainer  img="/icons/tonpred/Time.png" name={props.dValue.toString()}  />
                </div>
            </div>
            
            <Progress value={props.pValue} color="amber" className=" text-[#ffb224] mx-auto bg-gray-800 w-[90vw]" />
        </div>
    );
}

export default CountDown;