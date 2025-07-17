import MarketPlace from '@/modules/Marketplace/MarketPlace'
import { getRequestServer } from '@/service/getRequest'
import React from 'react'

const MarketPlaceNFTs = async () => {
    const collection = await getRequestServer("/collections")
    const nfts = await getRequestServer("/nfts")
    return <MarketPlace nfts={nfts.data} collections={collection.data}/>
}

export default MarketPlaceNFTs