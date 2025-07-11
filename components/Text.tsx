import React, { ReactNode } from 'react'

const Text = ({children, classList}: {children: ReactNode, classList?:string}) => {
  return (
    <p className={`text-[#cccc] text-[16px] font-normal ${classList}`}>{children}</p>
  )
}

export default Text