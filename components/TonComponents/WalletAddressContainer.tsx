'use client'
import { useTonAddress } from '@tonconnect/ui-react';
import Image from 'next/image';
import { TonConnectUIProvider,useTonConnectUI } from "@tonconnect/ui-react"


    
export const WalletAddress = () => {
    const userFriendlyAddress = useTonAddress();
    const rawAddress = useTonAddress(false);
    const [tonCon] = useTonConnectUI()
    return (
        userFriendlyAddress && (
            <div className=" pt-1 text-white text-center  w-[92%] h-[18vw] mx-auto mt-5 rounded-lg grid grid-cols-6 px-2 secondarycolor">
            <div className=' content-center'>
            <Image 
                    src="/icons/nav/Wallet.png"
                    width={25}
                    height={25}
                    alt="wallet link icon"
                    className="max-h-[45px] mx-auto"
                
                />
                <button className=" leading-3 mt-1 text-[2vw] font-bold bg-gradient-to-r from-orange-500 to-orange-800
                p-[6px] rounded-full
                "
                onClick={()=>tonCon.disconnect()}
                >Disconnect</button>
            </div>
            <div className='  col-span-5 text-left text-xs'>
                <p className=' h-8 overflow-hidden '>User-friendly address: {userFriendlyAddress}</p>
                <p className=' h-8 overflow-hidden '>Raw address: {rawAddress}</p>
            </div>
            
        </div>
        )
    );
};