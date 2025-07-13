import { MenuIcon, UserIcon } from '@/assets/icons'
import Button from '@/components/Button'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import LangConfig from './LangConfig'

const Heder = () => {
    const t = useTranslations("HeadersContent")
  return (
    <header className='containers w-full lg:px-0 flex items-center justify-between mx-auto !py-y'>
      <Link href={'/'}>
        <Image className='w-[182px] h-[24px] lg:w-[243px] lg:h-[32px]' priority src={"/logo.svg"} alt='logo.im' width={243} height={32}/>
      </Link>
      <nav className='hidden lg:flex items-center gap-2.5'>
        <Link className='text-[16px] leading-[140%] font-semibold text-[#ffff] inline-block py-3 px-5' href={'/marketplace'}>{t("navItem1")}</Link>
        <Link className='text-[16px] leading-[140%] font-semibold text-[#ffff] inline-block py-3 px-5' href={'/rankings'}>{t("navItem2")}</Link>
        <Link className='text-[16px] leading-[140%] font-semibold text-[#ffff] inline-block py-3 px-5' href={'/connect-wallet'}>{t("navItem3")}</Link>
        <LangConfig/>
        <Button title={t("button")} icon={<UserIcon/>} iconPosition='left' type='button' variant='filled'/>
      </nav>
        <button className='lg:hidden'><MenuIcon/></button>
    </header>
  )
}

export default Heder