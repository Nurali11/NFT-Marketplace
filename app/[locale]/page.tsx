import Category from "@/modules/Categories";
import Collections from "@/modules/Collections";
import Creators from "@/modules/Creators";
import Hero from "@/modules/Hero";
import Join from "@/modules/Join";
import MagicMushrooms from "@/modules/MagicMushrooms";
import NFTMore from "@/modules/NFT_More";
import Works from "@/modules/Works";
import { getRequest } from "@/service/getRequest";
import { get } from "http";
import Image from "next/image";
import React from "react";

export default async function Home() {
  const auctions = await getRequest("/auctions");
  const auctionsResults = await getRequest("/auction-results");
  const artists = await getRequest("/user?role=ARTIST");
  const collections = await getRequest("/collections?limit=3");
  const categories = await getRequest("/categories");
  const nft = await getRequest("/nfts?limit=3");

  return (
    <>
      <Hero
        actions={auctions}
        artists={artists}
        actionResults={auctionsResults}
      />
      <Collections collection={collections} />
      <Creators artists={artists} />
      <Category categories={categories} />
      <NFTMore nft={nft} />
      <MagicMushrooms />
      <Works />
      <Join />
    </>
  );
}
