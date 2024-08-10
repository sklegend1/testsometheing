'use client'

import dynamic from "next/dynamic";

import  { SetStateAction, useEffect } from "react";
import WebApp from "@twa-dev/sdk";
import { useState } from "react";
import { parseInitData, User } from "@telegram-apps/sdk";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
import { title } from "process";
import { InitDataParsed } from "@telegram-apps/sdk";
import TwaTest from "./twaTest";
import withNoSSR from "./NoSSR";
import { ApiTest } from "@/actions/ApiTest";
import { useTransition } from "react";
import axios from "axios";
import { useContext } from "react";
import { TgContext } from "@/app/context/store";




const TelegramTest = () => {
  const {userData,setUserData} = useContext(TgContext)
  const [isPending, startTransition] = useTransition();
  const [response, setResponse] = useState("");
    const [initData,setInitData]= useState<User>()
    // window.Telegram.WebApp.disableVerticalSwipes()
    const [open, setOpen] = useState(false);
    
    const rawInit = WebApp.initData

    useEffect(()=>{
    if((window as any).Telegram){
      try{
      const webAppObj = (window as any).Telegram.WebApp
      webAppObj.showPopup({message:webAppObj.version})
      const photos = webAppObj.getUserProfilePhotos()
      webAppObj.showPopup({message:JSON.stringify(photos)})
    }
      catch(error){
        alert(error)
      }
    }

    
    },[])
    
    const handleOpen = () => {
    
        setOpen(!open);
        const userData = TwaTest()
        console.log("data:" +userData?.photoUrl)
        
        // console.log(rawInit)
        
        setInitData(userData)
        setUserData(userData)

    }
    const sendData = async ()=>{

      const DataQuery = {"data":"user=%7B%22id%22%3A106852820%2C%22first_name%22%3A%22Sohrab%22%2C%22last_name%22%3A%22Kheirkhah%22%2C%22username%22%3A%22s_kheirkhah%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=146776223792350967&chat_type=private&auth_date=1722759526&hash=4b4319d4309c28cf968fcb4b11694634d8b6be5ba465204fd0ce961475192dd4"}
      const DataTest = {key:"Text for Test"}
        // const forwardedFor = headers().get('x-forwarded-host')||""
        alert('json : '+JSON.stringify(DataTest))
        
        const res = await fetch("http://192.168.254.9:3000/v1/telegram/user",{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(DataQuery)
        })
        const verify = await res.json()
        alert(res.statusText)
        console.log("api test result : "+res.statusText)
        setResponse(JSON.stringify(verify))
        return Response.json(verify);
    
        
        //alert(res.statusText)
    }
    const sendData2 = async ()=>{

      const DataQuery = {"data":"user=%7B%22id%22%3A106852820%2C%22first_name%22%3A%22Sohrab%22%2C%22last_name%22%3A%22Kheirkhah%22%2C%22username%22%3A%22s_kheirkhah%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=146776223792350967&chat_type=private&auth_date=1722759526&hash=4b4319d4309c28cf968fcb4b11694634d8b6be5ba465204fd0ce961475192dd4"}
      const DataTest = {key:"Text for Test"}
        // const forwardedFor = headers().get('x-forwarded-host')||""
        alert('json : '+JSON.stringify(DataTest))
        
        const res = await axios.put("http://192.168.254.9:3000/v1/telegram/user",JSON.stringify(DataQuery))
        //const verify = await res.json()
        alert(res.statusText)
        console.log("api test result : "+res.statusText)
        //setResponse(JSON.stringify(verify))
        //return Response.json(verify);
    
        
        //alert(res.statusText)
    }
    // const telegramBgColor = WebApp.themeParams.button_color
    
    
    return (
        <div className=" mt-3  w-full text-center">
        {/* <button className="mt-3 mx-auto p-1 bg-blue-300 text-black font-bold rounded-full"
        onClick={()=>{twaTest();}}> </button> */}
        {/* <p className=" text-white ">{response}</p> */}
        <Button onClick={sendData} variant="gradient" color="blue">
            Test PourGhavam Response
        </Button>
            <Button onClick={handleOpen} variant="gradient" color="blue">
            Test Telegram Response
        </Button>
      <Dialog open={open} handler={handleOpen} className=" secondarycolor">
        <DialogHeader className=" text-white">User Info :</DialogHeader>
        <DialogBody className=" font-bold">
        <p className=" text-orange-600 w-full mx-3">First Name : {initData?.firstName}</p>
        <p className=" text-orange-600 w-full mx-3">Last Name : {initData?.lastName}</p>
        <p className=" text-orange-600 w-full mx-3">User Id : {initData?.id}</p>
        <p className=" text-orange-600 w-full mx-3">Language : {initData?.languageCode}</p>
        <p className=" text-orange-600 w-full mx-3">Premium : {initData?.isPremium&&"Yes"}</p>
        <p className=" ">{rawInit}</p>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
        

            {/* <div className={`mx-auto w-40 h-40 bg-[${telegramBgColor}] text-white`}
            style={{backgroundColor:telegramBgColor}}
            >{telegramBgColor}</div> */}
            {/* <button className=" mx-2 text-red-500" 
            onClick={()=>WebApp.showPopup({title:"Pixi",message:"The first popup message from Pixi"})}>
                show PopUp
            </button> */}
        
    </div>
    );
}

export default TelegramTest;