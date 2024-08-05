'use client'
import dynamic from "next/dynamic";

import WebApp from "@twa-dev/sdk" ;

import { parseInitData, User } from "@telegram-apps/sdk";
import withNoSSR from "./NoSSR";

// const WebApp1 = dynamic(()=> import("@twa-dev/sdk"))

 const TwaTest = () => {
    'use client'
    const initString=WebApp.initData
     
    const userData = parseInitData(initString).user
    console.log(initString)
    // alert("data:" +initString)
    return  userData;
}

export default TwaTest;