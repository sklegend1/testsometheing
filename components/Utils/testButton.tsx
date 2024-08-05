'use client'

import { TonConnectUIProvider,useTonConnectUI } from "@tonconnect/ui-react"
import { useTranslations } from "next-intl"

const TestButton = () =>{
    const t =useTranslations("Home")
    const [tonCon] = useTonConnectUI()
    return (
      <TonConnectUIProvider manifestUrl="https://qmwmfwdl-3000.uks1.devtunnels.ms/tonconnect-manifest.json/"
      walletsListConfiguration={{
        includeWallets: [
          {
            appName: "tonwallet",
            name: "TON Wallet",
            imageUrl: "https://wallet.ton.org/assets/ui/qr-logo.png",
            aboutUrl: "https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd",
            universalLink: "https://wallet.ton.org/ton-connect",
            jsBridgeKey: "tonwallet",
            bridgeUrl: "https://bridge.tonapi.io/bridge",
            platforms: ["chrome", "android"]
          },
          
        ]
      }}
      actionsConfiguration={{
        twaReturnUrl: 'https://localhost:3000/'
      }}
      >
      
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
                
      </TonConnectUIProvider>
    );
  }

export default TestButton;