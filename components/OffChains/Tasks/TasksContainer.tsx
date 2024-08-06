'use client'
import { useState } from "react";
import TaskCard from "./TaskCard";
import TaskDialog from "./TaskDialog";


const TasksContainer = () => {
    const [isDialog,setIsDialog] = useState(false)
    const toggleDialog=()=>{
        setIsDialog(!isDialog)
    }
    return (
        
        <div>
            <div onClick={()=>setIsDialog(true)}>
            <TaskCard title="Join us on Telegram" point={10} img="/icons/taskpage/telegram.jpg"   />
            </div>
            <TaskCard title="Subscribe us on YouTube" point={20} img="/icons/taskpage/youtube.png" />
            <TaskCard title="Follow us on X" point={15} img="/icons/taskpage/xsocial.webp" />
            {isDialog&&<TaskDialog  title="Join us on Telegram" point={10} img="/icons/taskpage/telegram.jpg" isOpen={toggleDialog}/>}
        </div>
    );
}

export default TasksContainer;
