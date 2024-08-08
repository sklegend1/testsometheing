import DetailContainer2 from "./DetailContainer2";

const MyReferrals = () => {
    return (
        <div onScroll={(e)=>e.preventDefault()} className=" overflow-y-scroll h-[60vh]   ">
            <div className=" pt-1 grid text-lg  grid-cols-2">
                    <div>Total Referrals</div>
                    <div className=" font-bold ">12 People</div>
                </div>
                <div className=" pt-1 text-lg grid my-2 grid-cols-2">
                    
                    <div>Active Referrals</div>
                    <div className=" font-bold ">5 People</div>
                </div>
                <div className=" col-span-2 text-lg pt-1">
                    {/* <hr className=" mb-1  border-gray-600"/> */}
                    <div className=" text-[4vw]  w-[90vw] rounded-lg mx-auto border-yellow-400 border-2 bg-gradient-to-r from-[#0C1230]  from-[30%] to-[#343B68]">
                        
                         You earned <b className=" text-yellow-500">{116}</b> Points from your referrals
                         </div>
                    {/* <div>
                    <div className="  inline-block bg-yellow-600 w-[12px] h-[12px] rounded-full
                 mx-1 shadow-[0px_0px_4px_rgba(200,200,0,0.8)] "></div>
                 <div className=" inline-block text-white font-bold">
                28 Points </div>
                <p className=" text-base">Directly from your referrals</p>
                    </div> */}
                </div>

                {/* <hr className=" my-2 border-gray-600"/> */}
                {/* <DetailContainer2 /> */}
        </div>
    );
}

export default MyReferrals;