'use client'

import { TonConnectUIProvider,useTonConnectUI } from "@tonconnect/ui-react"
import { useTranslations } from "next-intl"

const TestButton = () =>{
    const t =useTranslations("Home")
    const [tonCon] = useTonConnectUI()
    return (<>
      <button className=" leading-3 mt-1 w-[90%] text-[3vw] font-bold bg-gradient-to-r from-orange-500 to-orange-800
                p-[6px] rounded-full
                "
                onClick={()=>{tonCon.connected?tonCon.disconnect():null;tonCon.openModal()}}
                >{t("ConnectWallet")}</button>
        {/* tonCon.connected && (<button className=" leading-3 mt-1 text-[3vw] font-bold bg-gradient-to-r from-orange-500 to-orange-800
                p-[6px] rounded-full
                "
                onClick={()=>tonCon.disconnect()}
                >Disconnect</button>) */}
                
      
    </>);
  }

export default TestButton;