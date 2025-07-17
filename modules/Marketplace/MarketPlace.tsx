"use client"
import { CollectionType } from '@/@types/CollectionType'
import { NftType2 } from '@/@types/NftType'
import { SearchIcon } from '@/assets/icons'
import Heading from '@/components/Heading'
import Input from '@/components/Input'
import NestedPages from '@/components/NestedPages'
import Text from '@/components/Text'
import React, { FC, FormEvent, useState } from 'react'
import NFTsData from './NFTs'
import CollectionsData from './Collection'

const MarketPlace: FC<{nfts: NftType2[], collections: CollectionType[]}> = ({nfts, collections}) => {
    const PageList = [
        { id: 1, title: "NFTs", count: nfts.length },
        { id: 2, title: "Collections", count: collections.length }
    ]
    const [active, setActive] = useState<"nfts" | "collections">("nfts")
    const [search, setSearch] = useState<string | null>(null)

    function handleChange(e: FormEvent) {
      const target = e.target as HTMLInputElement
      setTimeout(() => setSearch(target.value), 1000)
    }
  return (
    <>
        <div className='containers !pt-[80px] space-y-[10px]'>
                <Heading tag='h1' classList='!text-[51px] !leading-[130%]'>Browse Marketplace</Heading>
                <Text classList='!text-[22px]'>Browse through more than 50k NFTs on the NFT Marketplace.</Text>
                <div onChange={(e) => handleChange(e)} className='relative mt-[40px] border-[1px] border-[#3B3B3B] rounded-[20px]'>
                    <Input placeholder={active == "nfts" ? 'Search yout favourite NFTs' : 'Search yout favourite Collections'} classList='!bg-transparent !w-[100%] pr-[50px] ' inputClass='!text-[#858584] !pl-[20px] !w-[2000px]' type='text'/>
                    <button className='absolute right-4 top-[20px]'><SearchIcon /></button>
                </div>
                <div className='mt-[90px]'>
                  <NestedPages routeList={PageList} period={active} setPeriod={setActive}/>
                </div>
        </div>
        <div>
          <div className='bg-[#3B3B3B] px-[115px] py-[60px] border-b-[2px] border-[#2B2B2B]'>
            {active == "nfts" ? <NFTsData search={search} nfts={nfts}/> : <CollectionsData search={search} collections={collections}/>}
          </div>
        </div>
    </>
  )
}

export default MarketPlace