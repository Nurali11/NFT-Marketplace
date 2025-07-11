import React, {FC} from 'react'
import {ButtonType} from "@/@types/ButtonType"

const Button:FC<ButtonType> = ({icon, iconPosition, title, type, extraClass, variant}) => {
  return (
    <button className={`cursor-pointer py-[15px] px-[20px] bg-[#A259FF] border-[2px] ${variant == "outlined" ? "border-[#A259FF]" : "border-transparent"} text-white rounded-[20px] font-semibold text-[16px] flex items-center gap-3 ${extraClass}`}>
        {iconPosition == "left" && icon}
        {title}
        {iconPosition == "right" && icon}
    </button>
  )
}

export default Button