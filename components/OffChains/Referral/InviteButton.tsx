import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";

const InviteButton = () => {
    return (
        <div>
        <div className=" mt-4  h-[40px] relative ">
            <button className=" bg-[#029E80] absolute left-0 w-[86%] h-[40px] py-1 rounded-lg font-bold text-lg ">Invite Friend</button>
            <button className=" mx-2 bg-[#029E80] w-[12%] absolute left-[86%] py-1 h-[40px] rounded-lg font-bold text-lg ">
                <DocumentDuplicateIcon className=" w-[8vw] mx-auto" />
            </button>
            
        </div>
        {/* <p className="mt-1 text-left text-gray-400">https://t.me/pixi/ref/1222358552</p> */}
        </div>
    );
}

export default InviteButton;