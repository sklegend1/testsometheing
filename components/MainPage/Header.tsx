import ToggleMenuIcon from "@/public/icons/toggleMenu";


const Header = () => {
    return (
        <div className=" grid grid-cols-3 text-white text-xl w-full  text-center px-5 pt-3">
            <div className=" text-left text-sm content-center  ">Close</div>
            <div>Pixi</div>
            <div className=" relative   ">
                <div className=" absolute right-0 w-7 h-7 rounded-full text-center  ">
                    <ToggleMenuIcon />
                </div>
            </div>
        </div>
    );
}

export default Header;