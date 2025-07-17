import { NftType2 } from '@/@types/NftType'
import NftCard from '@/components/NftCard'
import React, { FC } from 'react'

const NFTsData: FC<{nfts: NftType2[], search: string | null}> = ({nfts, search}) => {
    console.log(search);
  return (
    <div className='flex flex-wrap pt-[60px] gap-[30px] justify-between'>
        {search ? nfts.filter((item: NftType2) => item.title.toLowerCase().includes(search.toLowerCase())).map((item: NftType2) => <NftCard key={item.id} name={item.creator.username} item={item}/>) : nfts.map((item: NftType2) => <NftCard key={item.id} name={item.creator.username} item={item}/>)}
    </div>
  )
}

export default NFTsData