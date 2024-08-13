'use client'
import { createContext,Dispatch,SetStateAction,useState } from "react"





export const TonContext = createContext<any>({})
const TonProvider = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    const [tonPrice,setTonPrice] = useState<number>(0)
    
    return (
    
        <TonContext.Provider value={{tonPrice,setTonPrice}} >
                {children}
        </TonContext.Provider>
        
    );
}

export default TonProvider;