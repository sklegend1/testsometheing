'use client'
import Image from "next/image";
import { User } from "@telegram-apps/sdk";

interface userProps{
    id?:string
    firstName?:string
    lastName?:string

}

const TaskUserStats = (props:userProps) => {
    return (
        <div className=" w-[90%] mx-auto text-center mt-10  text-white ">
            <div className="  mx-auto">
                <Image
                    src="/icons/Avatar.png"
                    width={70}
                    height={70}
                    alt="Avatar Image"
                    className=" mx-auto"

                />
            </div>
            <h2 className="  text-xl mt-2">{props.firstName} {props.lastName}</h2>
            <div className=" w-[50%] mt-2 text-gray-400 text-center py-0 secondarycolor rounded-md mx-auto ">
                <div className=" inline-block bg-yellow-600 w-[12px] h-[12px] rounded-full
                 mx-2 shadow-[0px_0px_4px_rgba(200,200,0,0.8)] "></div>
                852 Points
            </div>
        </div>
    );
}

export default TaskUserStats;