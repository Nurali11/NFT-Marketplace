import { ArtistType } from '@/@types/ArtistType';
import { RankingsType } from '@/@types/RankingsType';
import RankingsContent from '@/modules/Rankings';
import { getRequest, getRequestServer } from '@/service/getRequest'
import React from 'react'

const RankingsLayout = async () => {
  const rankings:{data: RankingsType[]} = await getRequestServer("/ranking/rankings")
  const artistData = []
  for(let i of rankings.data) {
    let artist:ArtistType = await getRequest(`/user/${i.artistId}`)
    artistData.push(artist)
  }
  console.log(artistData);
  
  return (
    <RankingsContent rankings={rankings.data} artist={artistData}/>
  )
}

export default RankingsLayout