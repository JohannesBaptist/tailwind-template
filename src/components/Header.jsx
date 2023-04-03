import { useEffect, useState } from "react"
import React from 'react'
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";



export default function Header() {
  useEffect(() => {
   theme? document.body.classList.add("dark", "bg-black") : document.body.classList.remove("dark", "bg-black")  ;
  })
  const [theme, setTheme] = useState(false)
  return (
    <div className='sticky top-0 flex items-center justify-start w-full bg-black dark:bg-white p-5 h-50px'>
        <div onClick={() => setTheme(!theme)} className='bg-white space-x-1 dark:bg-black dark:text-white flex items-center justify-center text-black rounded-lg p-[7px] px-2 hover:cursor-pointer ease-in duration-200'>
            <p className="mr-1">Change theme</p>
            <div className="flex items-center justify-center space-x-1 bg-black dark:bg-white rounded-lg px-1">
            <div className="relative w-7 h-7 bg-black dark:bg-white text-yellow-500  dark:text-black hover:!text-yellow-500 rounded-lg p-1">
                <SunIcon/>
            </div>
            <div className="relative w-7 h-7 bg-black dark:bg-white dark:text-black hover:!text-gray-500 text-gray-500 rounded-lg p-1">
                <MoonIcon/>
            </div>
            </div>
        </div>
    </div>
  )
}


