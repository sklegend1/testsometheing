'use client'
import { TonConnectButton } from "@tonconnect/ui-react";
import { useTonConnectUI } from "@tonconnect/ui-react";
import { useEffect } from "react";

const buttonRootId = 'ton-connect-button';

const UserStats = () => {
    const tonCon = useTonConnectUI()
    const [_, setOptions] = useTonConnectUI();

    useEffect(() => {
        setOptions({ buttonRootId });
        return () => setOptions({ buttonRootId: null });
    }, [setOptions]);
    
    return (
        <div className=" text-white text-center  w-[92%] h-[18vw] mx-auto mt-5 rounded-lg grid grid-cols-3 px-2 secondarycolor">
            <div className="  ">
                <h2 className=" text-[4vw] font-bold mt-2">Points</h2>
                <p className=" text-sm leading-3 mt-3 "> 750,245,100</p>
            </div>
            <div className="  ">
                <h2 className=" text-[4vw] font-bold mt-2">Pixi Tokens</h2>
                <p className=" text-sm leading-3 mt-3 "> 568</p>
            </div>
            <div className="  ">
                <h2 className=" text-[4vw] font-bold mt-2">PixiP Token</h2>
                {/* <button className=" leading-3 mt-1 text-[3vw] font-bold bg-gradient-to-r from-orange-500 to-orange-800
                p-[6px] rounded-full
                ">Connect To Wallet</button> */}
                <button id="ton-connect-button"></button>
                {/* <TonConnectButton className=" text-xs " style={{height:"10px",fontSize:"4px"}} ></TonConnectButton> */}
            </div>
            
        </div>
    );
}

export default UserStats;