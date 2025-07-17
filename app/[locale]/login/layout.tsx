import { Footer, Header } from '@/modules'
import React, { ReactNode } from 'react'

const Authorization = ({children}: {children: ReactNode}) => {
  return (
    <>
        <Header/>
        {children}
        <Footer/>
    </>
  )
}

export default Authorization