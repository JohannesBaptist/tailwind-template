import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "@base/pages/types/main";

import React from "react";
import {
  SunIcon,
  MoonIcon,
  ChevronDownIcon,
  BellIcon,
} from "@heroicons/react/24/solid";

export default function Header() {

  const [notifications, setNotifications] = useState(true)
  const { firstName, secondName } = useSelector(
    (state: IRootState) => state.userData.data
  );
  const { loading } = useSelector((state: IRootState) => state.userData);

  useEffect(() => {
    theme
      ? document.body.classList.add("dark", "bg-black")
      : document.body.classList.remove("dark", "bg-black");
  });

  const [theme, setTheme] = useState(false);
  return (
    <div className="flex items-center justify-between w-full bg-black dark:bg-white p-5 h-30px">
      <div
        onClick={() => setTheme(!theme)}
        className="bg-white space-x-1 dark:bg-black dark:text-white flex items-center justify-center text-black rounded-lg p-[7px] px-2 hover:cursor-pointer ease-in duration-200"
      >
        <p className="mr-1">Change theme</p>
        <div className="flex items-center justify-center space-x-1 bg-black dark:bg-white rounded-lg px-1">
          <div className="relative w-7 h-7 bg-black dark:bg-white text-yellow-500  dark:text-black hover:!text-yellow-500 rounded-lg p-1">
            <SunIcon />
          </div>
          <div className="relative w-7 h-7 bg-black dark:bg-white dark:text-black hover:!text-gray-500 text-gray-500 rounded-lg p-1">
            <MoonIcon />
          </div>
        </div>
      </div>
      <div className="row-center space-x-4 dark:text-black px-5 rounded-xl">
        <div className="w-[30px] aspect-square rounded-full bg-purple-200"></div>
        <div onClick={() => setNotifications(!notifications)} className="w-[33px] hover:cursor-pointer relative aspect-square">
          <BellIcon />
          <div className={`absolute w-2 h-2 aspect-square rounded-full ${notifications ? 'bg-green-500': 'bg-red-500' } top-1 right-1`}></div>
        </div>
        <div className="row-center space-x-2">
          {!loading && (
            <>
              <div>{`${secondName} ${firstName}`}</div>
              <div className="w-3 h-3 pt-[3px]">
                <ChevronDownIcon />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
