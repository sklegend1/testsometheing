'use client'
import { createContext, useContext,useState } from "react";
import { User } from "@telegram-apps/sdk";
import React from "react";





export const TelegramContext = createContext(null)

export const context = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    
    const [userData,setUserData] = useState<User>()

    return(
        TelegramContext.Provider
    );
}

