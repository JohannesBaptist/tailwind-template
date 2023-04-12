import React from 'react'
import Header from "@components/Header"
import Footer from "@base/components/Footer"
import SideMenu from './SideMenu'


function Layout({children}: any) {
  return (
    <main className='w-screen h-screen dark:bg-black flex flex-col' >
    <Header/>
    <div className='flex-grow flex '>
    <SideMenu/>
    {children}
    </div>
    </main>
  )
}

export default Layout