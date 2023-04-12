import { IRootState } from "@base/pages/types/main";
import React from "react";
import { useSelector } from "react-redux";
import { CheckBadgeIcon, XMarkIcon } from "@heroicons/react/24/solid";



function CheckMark({active}: any){
    return (
      <div className={`${active && "text-red-500"}`}><CheckBadgeIcon/></div>
    )
  }


function Activities() {
    const { activities } = useSelector((state: IRootState) => state.userData);
  return (
    <>
      {activities.map((item) => {
        return (
          <div className="row-center space-x-3">
            <div className="h-[50px] col-center bg-orange bg-gray-300 shadow-md hover:cursor-pointer px-5 rounded-lg">
                <div className=" hover:cursor-pointer font-bold  min-w-[35px] text-center max-w-[35px] hover:text-red-300"><CheckMark active={item.checked}/></div>
              </div>
            <input
              placeholder={item.activity}
              className="h-[50px] flex-grow text-black text-center w-full rounded-lg bg-gray-100 shadow-md"
            />
            <div className="h-[50px] col-center bg-green-500 px-5 rounded-lg">
              <p className="text-white hover:cursor-pointer">Save</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Activities;
