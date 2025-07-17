import Heading from '@/components/Heading'
import Text from '@/components/Text'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React, { use } from 'react'

const Works = () => {
    const  t = useTranslations('Works')
  return (
    <section className='py-[80px]'>
        <div className='containers space-y-[48px]'>
            <div className='space-y-[10px]'>
                <Heading tag="h2">{t("title")}</Heading>
                <Text classList='!text-[22px]'>{t("desc")}</Text>
            </div>
            <div className='flex gap-[30px]'>
                <div className='bg-[#3B3B3B] w-[330px] rounded-[20px] px-[40px] pb-[30px] text-center space-y-[20px]'>
                    <Image src={"/icon1.png"} className='icon' width={250} height={250} alt="icon"/>
                    <div className='space-y-[10px]  w-[270px] '>
                        <Text classList='!text-[22px] !font-semibold'>{t("item1")}</Text>
                        <Text>{t("item1desc")}</Text>
                    </div>
                </div>
                <div className='bg-[#3B3B3B] w-[330px] rounded-[20px] px-[40px] pb-[30px] text-center space-y-[20px]'>
                    <Image src={"/icon2.png"} className='icon' width={250} height={250} alt="icon"/>
                    <div className='space-y-[10px]  w-[270px] '>
                        <Text classList='!text-[22px] !font-semibold'>{t("item2")}</Text>
                        <Text>{t("item2desc")}</Text>
                    </div>
                </div>
                <div className='bg-[#3B3B3B] w-[330px] rounded-[20px] px-[40px] pb-[30px] text-center space-y-[20px]'>
                    <Image src={"/icon3.png"} className='icon' width={250} height={250} alt="icon"/>
                    <div className='space-y-[10px]  w-[270px] '>
                        <Text classList='!text-[22px] !font-semibold'>{t("item3")}</Text>
                        <Text>{t("item3desc")}</Text>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Works