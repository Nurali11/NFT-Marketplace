"use client"
import { CollectionType } from '@/@types/CollectionType'
import { MetaType } from '@/@types/MetaType'
import CollectionCard from '@/components/CollectionCard'
import Heading from '@/components/Heading'
import Text from '@/components/Text'
import { getQueryData } from '@/lib/getQueryData'
import { useTranslations } from "next-intl";
import React, { FC } from "react";

interface CollectionPageType {
  collection: { data: CollectionType[]; meta: MetaType };
}

const Collections: FC<CollectionPageType> = ({ collection }) => {
  const {
    data: collections,
    isLoading,
    error,
  } = getQueryData("/collections?limit=3", collection, "collections");
  const t = useTranslations("Collection");

  return (
    <section className="py-[80px]">
      <div className="containers">
        <Heading classList="!mb-[10px]" tag="h2">
          {t("title")}
        </Heading>
        <Text classList="!text-[22px] !mb-[60px]">{t("desc")}</Text>
        <div className="flex justify-between">
          {collections.data.map((item: CollectionType) => (
            <CollectionCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections