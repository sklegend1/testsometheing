import cardProps from "@/public/testprops";
import OffchainItemCard from "../OffChains/OffchainItemCard";
import { useTranslations } from "next-intl";



const OffchainsContainer = () => {
    const t = useTranslations('Home')
    return (
        <div className=" w-[92%] mx-auto mt-5  text-white px-0  text-lg ">
            <h2 className="ml-2 ">{t("OffTitle")}</h2>
            <div className=" w-full mx-auto flex flex-wrap gap-1    ">
                <OffchainItemCard title={t('Challenges')} description={t('ChallengesDes')} image={cardProps[0].image} link="/challenges" />
                <OffchainItemCard title={t('Tasks')} description={t('TasksDes')} image={cardProps[1].image} link="/tasks" />
                <OffchainItemCard title={t('Refferals')} description={t('RefferalsDes')} image={cardProps[2].image} link="/referral" />
                <OffchainItemCard title={t('Manual')} description={t('ManualDes')} image={cardProps[3].image} link="/" />
                
                

            </div>
            
        </div>
    );
}

export default OffchainsContainer;