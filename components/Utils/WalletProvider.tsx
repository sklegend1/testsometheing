'use client'

import { TonConnectUIProvider } from "@tonconnect/ui-react"

const WalletProvider = ({
    children,
  }: {
    children: React.ReactNode;
  }) =>{
    return (
      <TonConnectUIProvider manifestUrl= {process.env.NEXT_PUBLIC_BASE_URL +"tonconnect-manifest.json"}
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
        twaReturnUrl: (process.env.NEXT_PUBLIC_TELEGRAM_URL as `${string}://${string}`)
      }}
      >
      
          {children}
          
      </TonConnectUIProvider>
    );
  }

export default WalletProvider;