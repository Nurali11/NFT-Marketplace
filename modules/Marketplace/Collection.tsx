import { CollectionType } from '@/@types/CollectionType'
import CollectionCard from '@/components/CollectionCard'
import React, { FC } from 'react'

const CollectionsData: FC<{collections: CollectionType[], search: string | null}> = ({collections, search}) => {
  return (
    <div className='flex flex-wrap pt-[60px] gap-[30px] justify-between'>
        { search ? collections.filter((item: CollectionType) => item.title.toLowerCase().includes(search.toLowerCase())).map((item: CollectionType) => <CollectionCard key={item.id} item={item}/>) : collections.map((item: CollectionType) => <CollectionCard key={item.id} item={item}/>) }
    </div>
  )
}

export default CollectionsData