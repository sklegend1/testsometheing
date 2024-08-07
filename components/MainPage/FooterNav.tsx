
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
const FooterNav = () => {
    const t = useTranslations('NavFooter')
    return (
        <nav className=" fixed bottom-0 secondarycolor w-full h-[100px] grid grid-cols-3 content-center text-center">
            <Link href="/" className=" ">
            <Image 
                    src="/icons/nav/Wallet.png"
                    width={25}
                    height={25}
                    alt="wallet link icon"
                    className="max-h-[45px] mx-auto"
                
                />
                <h2 className=" text-gray-500 text-sm  mt-1">{t('Wallet')}</h2>
            </Link>
            <Link href="/" className=" ">
            <Image 
                    src="/icons/nav/Home.png"
                    width={25}
                    height={25}
                    alt="Home link icon"
                    className="max-h-[45px] mx-auto"
                
                />
                <h2 className=" text-white text-sm  mt-1">{t('Home')}</h2>
            </Link>
            <Link href="/leaderboard" className=" ">
            <Image 
                    src="/icons/nav/Ranking.png"
                    width={25}
                    height={25}
                    alt="Ranking link icon"
                    className="max-h-[45px] mx-auto"
                
                />
                <h2 className=" text-gray-500 text-sm  mt-1">{t('Ranking')}</h2>
            </Link>


        </nav>
    );
}

export default FooterNav;