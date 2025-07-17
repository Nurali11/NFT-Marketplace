"use client"
import { ArtistType } from '@/@types/ArtistType'
import { RankingsType } from '@/@types/RankingsType'
import Heading from '@/components/Heading'
import NestedPages from '@/components/NestedPages'
import RankingsCard from '@/components/RankingsCard'
import Text from '@/components/Text'
import React, { FC, useState } from 'react'

const RankingsContent: FC<{rankings: RankingsType[], artist: ArtistType[]}> = ({rankings, artist}) => {
  const [active, setActive] = useState<"all time" | "today" | "this week" | "this month">("all time")
      const routeList = [
        {id:1,title:"All Time", count:-1},
        {id:2,title:"Today",count:-1},
        {id:3,title:"This Week",count:-1},
        {id:4,title:"This Month",count:-1}
    ]
    return (
        <div className='pt-[80px]'>
            <div className='containers'>
                <Heading tag='h1' classList='!text-[51px] !mb-[10px]'>Top Creators</Heading>
                <Text classList='!text-[22px] !mb-[80px]'>Check out top ranking NFT artists on the NFT Marketplace.</Text>
                <NestedPages setPeriod={setActive} period={active} routeList={routeList} />
            </div>
            <div className='containers'>
                <div className='flex mt-[40px] border-[1px] border-[#3B3B3B]  py-[12px] rounded-[20px] gap-[60px] px-[20px]'>
                    <div className='flex pr-[320px]'>
                        <Text classList='!text-[#858584] pr-[30px]'>#</Text>
                        <Text classList='!text-[#858584]'>Artist</Text>
                    </div>
                    <div className='flex pl-[90px]'>
                        <Text classList='!text-[#858584] pr-[100px]'>Change</Text>
                        <Text classList='!text-[#858584] pr-[100px]'>NFTs Sold</Text>
                        <Text classList='!text-[#858584]'>Volume</Text>
                    </div>
                </div>
                <div className='mt-[30px] !space-y-[20px] mb-[40px]'>
                    {rankings.sort((a: RankingsType, b: RankingsType) => a.growth - b.growth).map((item: RankingsType, index: number) => <RankingsCard item={item} key={item.artistId} artist={artist} index={index}/>)}
                </div>
            </div>
        </div>
    )
}

export default RankingsContent