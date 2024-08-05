'use client'
import { createContext,Dispatch,SetStateAction,useState } from "react"
import { Locale } from "@/config"




export const LocaleContext = createContext<any>({})
const LocaleProvider = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    const [CurLocale,setCurLocale] = useState<Locale>("en")
    
    return (
    
        <LocaleContext.Provider value={{CurLocale,setCurLocale}} >
                {children}
        </LocaleContext.Provider>
        
    );
}

export default LocaleProvider;