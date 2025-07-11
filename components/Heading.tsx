import React, { Children, ReactNode } from 'react'

const Heading = ({children, classList}: {children: ReactNode, classList?:string}  ) => {
  return (
    <h2 className={`font-semibold text-[38px] text-white ${classList}`}>{children}</h2>
  )
}

export default Heading