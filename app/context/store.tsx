'use client'
import { createContext,Dispatch,SetStateAction,useState } from "react"
import { User } from "@telegram-apps/sdk"



interface UserContext{
    userData?:User
    setUserData:Dispatch<SetStateAction<User|undefined>>

}
export const TgContext = createContext<any>({})
const TgProvider = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    const [userData,setUserData] = useState<User>()
    const prop ={
        userData,
        setUserData
    }
    return (
    
        <TgContext.Provider value={{userData,setUserData}} >
                {children}
        </TgContext.Provider>
        
    );
}

export default TgProvider;