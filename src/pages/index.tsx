import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>New Project</title>
        <meta name="description" content="A blank Tailwind template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <button/>
      </main>
    </>
  )
}