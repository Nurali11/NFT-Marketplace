import { MenuIcon, UserIcon } from '@/assets/icons'
import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Heder = () => {
  return (
    <header className='w-[1180px] px-[30px] lg:px-[0] mx-auto py-5 flex items-center justify-between '>
      <Link href={'/'}>
        <Image className='w-[182px] h-[24px] lg:w-[243px] lg:h-[32px]' src={"/logo.svg"} alt='logo.im' width={243} height={32}/>
      </Link>
      <nav className='hidden lg:flex items-center gap-[25px]'>
        <Link className='text-[16px] leading-[140%] font-semibold text-[#ffff] inline-block py-3 ' href={'/marketplace'}>Marketplace</Link>
        <Link className='text-[16px] leading-[140%] font-semibold text-[#ffff] inline-block py-3 ' href={'/rankings'}>Marketplace</Link>
        <Link className='text-[16px] leading-[140%] font-semibold text-[#ffff] inline-block py-3 ' href={'/connect-wallet'}>Connect a wallet</Link>
        <Button title='Sign Up' icon={<UserIcon/>} iconPosition='left' type='button' variant='filled'/>
      </nav>
        <button className='lg:hidden'><MenuIcon/></button>
    </header>
  )
}

export default Heder