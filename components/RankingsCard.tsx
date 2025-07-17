import { RankingsType } from '@/@types/RankingsType'
import React, { FC } from 'react'
import Text from '@/components/Text'
import { ArtistType } from '@/@types/ArtistType'
import Image from 'next/image'
import { API } from '@/hooks/getEnv'

const RankingsCard: FC<{item: RankingsType, index: number, artist: ArtistType[]}> = ({item, index, artist}) => {
  let artistData = artist.filter((artist: ArtistType) => artist.id === item.artistId)
  console.log(artistData[0].image);
  
  return (
    <div className='containers bg-[#3B3B3B] rounded-[20px] !pl-[10px] h-[70px] flex items-center gap-[60px]'>
        <div className='flex py-[12px] gap-[15px] relative w-[430px] pr-[500px]'>
          <div className='rounded-full bg-[#2B2B2B] px-[13px] py-[5px]'>
            <Text classList='!text-[#858584] font-monoSpace'>{index + 1}</Text>
          </div>
          <div className='absolute left-[50px] top-[5px]'>
            <Image className='w-[50px] h-[50px] rounded-full' src={`${API}/file/${artistData[0].image}`} alt='Creator img' width={50} height={50} priority />
          </div>
            <Text classList='!font-semibold !text-[22px] ml-[70px] !text-white'>{item.artistName}</Text>
        </div>
        <div className='flex w-[380px] gap-[150px]'> 
          <Text classList='!text-[#00AC4F]'>+{item.growth}%</Text>
          <Text>{item.nftSold}</Text>
          <Text>{item.totalRevenue}</Text>
        </div>
    </div>
  )
}

export default RankingsCard