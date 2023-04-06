import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from "@base/components/Header"


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Base Project - Sample-IT</title>
        <meta name="description" content="A blank Tailwind template made by Sample-IT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='dark:bg-black w-screen h-screen'> 
      </main>  
    </>
  )
}
