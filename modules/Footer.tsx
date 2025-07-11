import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Text from '@/components/Text'
import { Discord, Instagram, Twitter, Youtube } from '@/assets/icons'
import Heading from '@/components/Heading'

const Footer = () => {
  return (
    <footer className='bg-[#3b3b3b] py-10'>
      <div className='containers'>
        <div className='flex justify-between'>
          <div className='w-[238px] space-y-[20px]'>
            <Link className='inline-block' href={'/'}>
              <Image src="/logo.svg" alt="no img" width={243} height={32}></Image>
            </Link>
            <Text classList='mt-[24px]'>NFT marketplace UI created with Anima for Figma.</Text>
            <div className='space-y-[15px]'>
              <Text>Join our community</Text>
              <div className='flex gap-[10px]'>
                <Link href={"/"}>
                  <Discord/>
                </Link>
                <Link href={"/"}>
                  <Youtube/>
                </Link>
                <Link href={"/"}>
                  <Twitter/>
                </Link>
                <Link href={"/"}>
                  <Instagram/>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <Heading>Explore</Heading>
            <Text classList='mt-[25px]'>Marketplace</Text>
            <Text classList='my-[20px]'>Rankings</Text>
            <Text>Connect a wallet</Text>
          </div>
          <div>
            <Heading>Join our weekly digest</Heading>
            <Text classList='w-[330px] mt-[25px]'>Get exclusive promotions & updates straight to your inbox.</Text>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer