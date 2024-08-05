'use client'

import ApiTest from "./ApiTest";

const ApiTestButton = () => {
    return (
        <button className=" text-white" onClick={()=>{ApiTest("Text for Test")}}>Test Api</button>
    );
}

export default ApiTestButton;