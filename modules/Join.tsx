import { GmailIcon } from '@/assets/icons'
import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Text from '@/components/Text'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const Join = () => {
    const t = useTranslations('Join')
  return (
    <section className='mb-[80px]'>
        <div className='containers '>
            <div className=' bg-[#3b3b3b] rounded-[20px] p-[60px] flex items-center justify-between gap-[30px]'>
                <Image className='!w-[425px]' src={"/kosmos.svg"} width={425} height={310} alt="Kosmos"/>
                <div  className='w-[425px] space-y-[10px]'>
                    <Heading tag='h2'>{t("title")}</Heading>
                    <Text>{t("desc")}</Text>
                    <div className="flex items-center relative ">
                <input
                    className="bg-white py-[15px] w-[420px] h-[60px] outline-none px-[20px] rounded-[20px] text-black"
                    type="email"
                    placeholder={t("placeholder")}
                />
                <Button
                    extraClass="absolute left-75 !py-[18px]"
                    title={t("button")}
                    type="button"
                    variant="filled"
                    icon={<GmailIcon/>}
                    iconPostion='left'
                />
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Join