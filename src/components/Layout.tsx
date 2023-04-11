import React from 'react'
import Header from "@components/Header"
import Footer from "@base/components/Footer"


function Layout({children}: any) {
  return (
    <>
    <Header/>
    <>{children}</>
    <Footer/>
    </>
  )
}

export default Layout