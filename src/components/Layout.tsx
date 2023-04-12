import React from 'react'
import Header from "@components/Header"
import Footer from "@base/components/Footer"


function Layout({children}: any) {
  return (
    <div className='w-screen h-screen dark:bg-black flex flex-col' >
    <Header/>
    <div className='flex-grow flex '>
    {children}
    </div>
    </div>
  )
}

export default Layout