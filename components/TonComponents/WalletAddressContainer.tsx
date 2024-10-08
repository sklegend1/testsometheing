'use client'
import { useTonAddress } from '@tonconnect/ui-react';
import Image from 'next/image';
import { TonConnectUIProvider,useTonConnectUI } from "@tonconnect/ui-react"
import { useEffect, useState } from 'react';


    
export const WalletAddress = () => {
    const userFriendlyAddress = useTonAddress();
    const rawAddress = useTonAddress(false);
    const briefUFA = userFriendlyAddress.slice(0,6) +"..." + userFriendlyAddress.slice(-6)
    const [tonCon] = useTonConnectUI()
    const [walletBalance,setWalletBalance]= useState("No Balance")
    useEffect(()=>{
        
        const getBalance =async () =>{
            if(true){
            try{
            const res = await fetch( "https://toncenter.com/api/v2/getAddressBalance?address="+userFriendlyAddress , {
                method:"GET",
                
            })
            const data = await res.json()
            console.log(data)
            if(res.status==200){
                setWalletBalance(data.result+" TON")
            }
            else{
                setWalletBalance("No Response")
            }}
            catch(error){
                setWalletBalance("We have some Errors")
            }}
            else{
                setWalletBalance("Not Connected")
            }
        }
            // const balance = getBalance()
            getBalance()

    },[userFriendlyAddress])
    
    
    
    return (
        userFriendlyAddress && (
            <div className=" pt-1 text-white text-center  w-[92%] h-[25vw] mx-auto mt-5 rounded-lg grid grid-cols-6 px-2 secondarycolor">
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
                onClick={()=>{tonCon.disconnect();tonCon.connector.disconnect()}}
                >Disconnect</button>
            </div>
            <div className='  col-span-5 text-center pl-1 text-sm mt-2 '>
                <p className=' h-8 overflow-scroll '>User-friendly address: {briefUFA}</p>
                <p className=' h-8 overflow-scroll font-bold '>Balance: {walletBalance}</p>
            </div>
            
        </div>
        )
    );
};