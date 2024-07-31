'use client'

import React from "react";
import WebApp from "@twa-dev/sdk";
import { useState } from "react";
import { parseInitData } from "@telegram-apps/sdk";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
import { title } from "process";

interface userObjectInterface{
    id?:number;
    is_bot?:boolean;
    first_name:string;
    last_name?:string;
    username?:string;
    language_code?:string;
    is_premium?:boolean;
    added_to_attachment_menu?:boolean;
    allows_write_to_pm?:boolean;	
    photo_url?:string;
}

const TelegramTest = () => {
    const [initData,setInitData]= useState({})
    const [userObject,setUserObject] = useState<userObjectInterface>()
    const [open, setOpen] = useState(false);
 
    const handleOpen = () => {
        setOpen(!open);
        twaTest()
    }
    const telegramBgColor = WebApp.themeParams.button_color
    const twaTest = ()=>{
        //  const userData = JSON.parse(WebApp.initData)
        // setUserObject(userData)
        // setInitData(userObject.first_name)
        // const jsonObjectTwa = JSON.parse(WebApp.initData, (key, value) => {
        //     if (key === 'first_name') {
        //         WebApp.showAlert(value)
        //     }
        //     return value;
        // });
        const initString=WebApp.initData
        const initArray= initString.split("&")
        setInitData(parseInitData(initString)?.user)
    }
    
    return (
        <div className=" mt-3  w-full text-center">
        {/* <button className="mt-3 mx-auto p-1 bg-blue-300 text-black font-bold rounded-full"
        onClick={()=>{twaTest();}}> </button> */}

        <Button onClick={handleOpen} variant="gradient" color="blue">
            Test Telegram Response
        </Button>
      <Dialog open={open} handler={handleOpen} className=" secondarycolor">
        <DialogHeader className=" text-white">User Info :</DialogHeader>
        <DialogBody className=" font-bold">
        <p className=" text-orange-600 w-full mx-3">First Name : {initData.firstName}</p>
        <p className=" text-orange-600 w-full mx-3">Last Name : {initData.lastName}</p>
        <p className=" text-orange-600 w-full mx-3">User Id : {initData.id}</p>
        <p className=" text-orange-600 w-full mx-3">Language : {initData.languageCode}</p>
        <p className=" text-orange-600 w-full mx-3">Premium : {initData.isPremium&&"Yes"}</p>
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
            <button className=" mx-2 text-red-500" 
            onClick={()=>WebApp.showPopup({title:"Pixi",message:"The first popup message from Pixi"})}>
                show PopUp
            </button>
        
    </div>
    );
}

export default TelegramTest;