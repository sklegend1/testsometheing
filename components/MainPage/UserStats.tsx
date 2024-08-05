'use client'
import { TonConnectButton } from "@tonconnect/ui-react";
import { useTonConnectUI } from "@tonconnect/ui-react";
import { useEffect } from "react";
import { useTonConnectModal } from "@tonconnect/ui-react";
import TestButton from "../Utils/testButton";
import { useTranslations } from "next-intl";


const buttonRootId = 'ton-connect-button';

const UserStats = () => {
    const [tonCon] = useTonConnectUI()
    // const [_, setOptions] = useTonConnectUI();

    // useEffect(() => {
    //     setOptions({ buttonRootId });
    //     return () => setOptions({ buttonRootId: null });
    // }, [setOptions]);
    const {open,close} = useTonConnectModal()
    const t=useTranslations("Home")
    return (
        <div className=" text-white text-center  w-[92%] h-[18vw] mx-auto mt-5 rounded-lg grid grid-cols-3 px-2 secondarycolor">
            <div className="  ">
                <h2 className=" text-[4vw] font-bold mt-2">{t("Points")}</h2>
                <p className=" text-sm leading-3 mt-3 "> 750,245,100</p>
            </div>
            <div className="  ">
                <h2 className=" text-[4vw] font-bold mt-2">{t("PixiTokens")}</h2>
                {/* <p className=" text-sm leading-3 mt-3 "> 568</p> */}
            </div>
            <div className="  ">
                <h2 className=" text-[4vw] font-bold mt-2">{t("PixiPTokens")}</h2>
                {/* <button className=" leading-3 mt-1 text-[3vw] font-bold bg-gradient-to-r from-orange-500 to-orange-800
                p-[6px] rounded-full
                "
                onClick={()=>tonCon.openModal()}
                >Connect To Wallet</button> */}
                {/* <button id="ton-connect-button"></button> */}
                {/* <TonConnectButton className=" text-xs scale-75 " style={{height:"10px",fontSize:"4px"}} /> */}
                <div className=" ml-[-100%] ">
                <TestButton/>
                </div>
            </div>
            
        </div>
    );
}

export default UserStats;