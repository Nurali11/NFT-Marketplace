import { ArtistType } from '@/@types/ArtistType'
import { API } from '@/hooks/getEnv'
import Image from 'next/image'
import React, { FC } from 'react'
import Heading from './Heading'
import Text from './Text'

const ArtistsCard: FC<{ item: ArtistType; index: number; t: any }> = ({
  item,
  index,
  t,
}) => {
  return (
    <div className="w-[270px] relative flex flex-col items-center p-5 h-[250px] rounded-[20px] bg-[#3B3B3B]">
      <Image
        className="w-[120px] rounded-full h-[120px] mb-[20px]"
        src={`${API}/file/${item.image}`}
        alt="Artist img"
        width={120}
        height={120}
        priority
      />
      <Heading classList="!mb-[5px] line-clamp-1" tag="h3">
        {item.username}
      </Heading>
      <Text classList="pt-[10px]">
        {t("totalSales")}:{" "}
        <span className="text-[16px] text-white">34.53 ETH</span>
      </Text>
      <button className="w-[30px] h-[30px] flex items-center justify-center bg-[#2B2B2B] text-[16px] text-[#858584] absolute top-[18px] left-[20px] rounded-full">
        {index + 1}
      </button>
    </div>
  );
};

export default ArtistsCard