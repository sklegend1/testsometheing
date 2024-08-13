'use client'
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
const FooterNav = () => {
    const curPath= usePathname()
    const t = useTranslations('NavFooter')
    return (
        <nav className=" fixed bottom-0  text-gray-500 secondarycolor w-full h-[100px] grid grid-cols-3 content-center text-center">
            <Link href="/wallet" className=" ">
            <Image 
                    src={"/icons/nav/"+(curPath==="/wallet"?"Wallet.png":"Wallet0.png")}
                    width={25}
                    height={25}
                    alt="wallet link icon"
                    className="max-h-[25px] mx-auto"
                
                />
                <h2 className={`text-sm  mt-1 ${(curPath==="/wallet"&&" text-white font-bold")}`}>{t('Wallet')}</h2>
            </Link>
            <Link href="/" className=" ">
            <Image 
                    src={"/icons/nav/"+(curPath==="/"?"Home.png":"Home0.png")}
                    width={25}
                    height={25}
                    alt="Home link icon"
                    className="max-h-[25px] mx-auto"
                
                />
                <h2 className={`text-sm  mt-1 ${(curPath==="/"&&" text-white font-bold")}`}>{t('Home')}</h2>
            </Link>
            <Link href="/leaderboard" className=" ">
            <Image 
                    src={"/icons/nav/"+(curPath==="/leaderboard"?"leaderboard.png":"leaderboard0.png")}
                    width={25}
                    height={25}
                    alt="Ranking link icon"
                    className="max-h-[25px] mx-auto"
                
                />
                <h2 className={`text-sm  mt-1 ${(curPath==="/leaderboard"&&" text-white font-bold")}`}>{t('Ranking')}</h2>
            </Link>


        </nav>
    );
}

export default FooterNav;