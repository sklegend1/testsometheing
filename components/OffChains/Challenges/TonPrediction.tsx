'use client'
import { useState,useEffect } from "react";
import CountDown from "./CountDown";
import PredMonitor from "./PredMonitor";
import Lottie from "lottie-web";
import TonWinDialog from "./TonWinDialog";


const losedesc = "Oops! Looks like you took a wrong turn at the crossroads of destiny. But hey, nobody's perfect, right? Try again, hero! Your next adventure awaits!"
const windesc = "Congratulations! You chose the right path at the crossroads of destiny and won! As a reward, you've earned a shiny 1 Point. Well done, hero! More adventures await you!"
const TonPrediction = () => {
    const roundTime = 10
    const [price,setPrice] = useState(6)
    const [locked,setLocked] = useState(0)
    const [isWaiting,setIsWaiting] = useState(false)
    const [nextPred,setNextPred] = useState(0)
    const [curPred,setCurPred] = useState(0)
    const [timeLeft,setTimeLeft] = useState(roundTime)
    const [isPlaying,setIsPlaying] = useState(false)
    const [WinAnim,setWinAnim]= useState(0)
    const [isDialog,setIsDialog] = useState(false)
    const [winState,setWinState] = useState(false)
    const toggleDialog=()=>{
        setIsDialog(!isDialog)
    }
    useEffect(() => {
        //Implementing the setInterval method
        const interval = setInterval(() => {
            let fakeprice = Math.random()-0.5 
            setPrice(fakeprice+6);
        }, 1000);
 
        //Clearing the interval
        return () => clearInterval(interval);
    }, []);

    useEffect(()=>{

        const anim = Lottie.loadAnimation({
            container: (document.getElementById("PredTonWin") as Element), // the dom element that will contain the animation
            renderer: 'svg',
            loop: 1,
            autoplay: true,
            path: '/winanim.json' // the path to the animation json
          });
          
        const timeOut = setTimeout(() => {
            setTimeLeft(timeLeft-1)
        }, 1000);
        if(timeLeft<roundTime-2){
            setWinAnim(0)
        }
        if(timeLeft<1){
            
               
            setTimeLeft(roundTime)
            setLocked(price)

           if(isPlaying){   
            if((price*curPred)>(locked*curPred)){
                    setWinState(true)
                    setWinAnim(1)
                    toggleDialog()
                     // alert("You Win !")
                }
                else{
                    // setWinAnim(-1)
                    setWinState(false)
                    toggleDialog()
                    
                }
            setIsPlaying(false)
            setCurPred(0)
        }  
            if(isWaiting){
            setIsPlaying(true)
            setIsWaiting(false)
            
            setCurPred(nextPred)
            setNextPred(0)
        }
        }
        return () => clearTimeout(timeOut);
    },[timeLeft])

    return (
        <div className="lottie w-[100vw] text-center relative">
            {WinAnim==1&&<div id="PredTonWin"  className=" absolute z-10 w-full h-ful">
                {/* <div className="fixed left-[15vw] text-white bg-green-800 mt-[50vw] text-[8vw] flex items-center w-[70vw] h-[30vw] rounded-lg bg-opacity-60 mx-auto font-bold justify-center"> You Won<br/>30 Points !</div> */}
                </div>}

              

            <CountDown pValue={timeLeft*100/roundTime} dValue={timeLeft} />
            <br/>
        <PredMonitor lockedPrice={locked.toPrecision(4)} price={price.toPrecision(4)} state={curPred }
            bgImg={isPlaying?(curPred==-1?"/icons/tonpred/down.png":"/icons/tonpred/up.png"):"/icons/tonpred/off2.png"} />

            <div className="text-center text-white text-[4vw] font-bold mt-[8vw]" >Choose your option for Next Round!</div>
            {isWaiting&&<div className=" w-[70vw] mx-auto grid grid-cols-2 mb-[1vw] mt-[3vw]  ">
                <div className=" text-left text-white text-[4vw] ">
                    Your Next Position :
                </div>
                <div className=" flex  w-full justify-end  ">
                    <div className={" flex items-center justify-center font-bold text-white text-[3vw] h-[6vw] text-center rounded-lg  w-[15vw]" + (nextPred==1?" bg-[#029e84]":" bg-[#f83b4a]")}>
                        {nextPred==1?"UP":"DOWN"}
                    </div>
                    
                </div>
            </div>}
            <div >
            <button 
            onClick={()=>{ setIsWaiting(true) ; setNextPred(1)}}
            disabled={isWaiting} className=" bg-[#029e84] disabled:bg-blue-gray-700 h-[10vw]  p-[0.5vw] text-[5vw] font-bold w-[70vw] mt-[5vw] rounded-lg text-white">Enter UP</button>
            <button 
            onClick={()=>{ setIsWaiting(true) ; setNextPred(-1)}}
            disabled={isWaiting} className=" bg-[#f83b4a] h-[10vw]  disabled:bg-blue-gray-700 p-[0.5vw] text-[5vw] font-bold w-[70vw] mt-[3vw] rounded-lg text-white">Enter Down</button>
            </div>
            {isDialog&&<TonWinDialog state={winState}  title={winState?"You Won " +35+ " Points !":"Your prediction was wrong !"} 
            point={10} img={winState?"/icons/tonpred/Winmsg.png":"/icons/tonpred/Failedmsg.png"} 
            desc={winState?windesc:losedesc} isOpen={toggleDialog} />}
            
        </div>
    );
}

export default TonPrediction;