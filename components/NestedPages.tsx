"use client"
import { RouteType } from '@/@types/RouteType'
import React from 'react'


const NestedPages = ({ routeList, period, setPeriod }: { routeList: RouteType[], period?:any, setPeriod?:any }) => {
    return (
        <div className='flex justify-between w-full'>
            {routeList.map((item: RouteType) => (
                <button onClick={() => setPeriod(item.title.toLowerCase())} style={{width:`${100 / routeList.length}%`}} key={item.id} className={`border-b-[2px] ${period == item.title.toLowerCase() ? "border-[#858584]" : "border-transparent"} !w-[${100 / routeList.length}%] flex items-center cursor-pointer !gap-[16px] justify-center py-[15px] text-center`}>
                    <span className='text-[22px] text-white leading-[140%]'>{item.title}</span>
                    {item.count >= 0 && <span className='bg-[#858584] text-white py-[5px] px-[10px] rounded-[20px]'>{item.count}</span>}
                </button>
            ))}
        </div>
    )
}

export default NestedPages