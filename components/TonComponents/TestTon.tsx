'use client'

import TonConnect from '@tonconnect/sdk';
import { useState } from 'react';

// const connector = new TonConnect();

// connector.restoreConnection();

const TestTon = () => {
    const [walletList,setWalletList] = useState<any>()
    const connector = new TonConnect({
        manifestUrl: "https://qmwmfwdl-3000.uks1.devtunnels.ms/tonconnect-manifest.json/"
    });
    return (
        <div>
            <button onClick={()=>{setWalletList(connector.getWallets()); console.log(walletList)}}>Connect</button>
        </div>
    );
}

export default TestTon;