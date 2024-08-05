'use client'
import { TelegramContext } from "@/app/context/context";
import TasksContainer from "./TasksContainer";
import TaskUserStats from "./TaskUserStats";
import { useContext } from "react";
import { User } from "@telegram-apps/sdk";
import { TgContext } from "@/app/context/store";

const MainTaskPage = () => {
    const {userData,setUserData} = useContext(TgContext)
    return (
        <div>
            <TaskUserStats firstName={userData?.firstName} lastName={userData?.lastName}/>
            <div id="TaskAchievementToggle"
            className="  w-[70%] mt-4 grid grid-cols-2 text-gray-300 text-center py-1 secondarycolor rounded-xl mx-auto"
            >
                <button className=" text-gray-800 bg-blue-gray-100 w-[90%] py-1 mx-auto rounded-xl font-semibold">Tasks</button>
                <button>Achievements</button>
            </div>


            <div className=" w-[85vw] mt-4 mx-auto ">
                <h1 className=" text-white font-bold  text-xl  ">Tasks</h1>
                <p className=" text-gray-300   text-sm w-[95%]   ">
                Complete Tasks, Earn Points for Pixi Tokens in the Upcoming Airdrop !
                </p>
            </div>
            <div className=" w-[85vw] mt-4 mx-auto ">
                <h1 className=" text-white   text-xl  ">New Tasks</h1>
                
                <TasksContainer />
                
            </div>
        </div>
    );
}

export default MainTaskPage;