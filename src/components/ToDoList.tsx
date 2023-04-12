
import React from "react";
import Activities from "./Activities";



function ToDoList() {
  return (
    <div className="flex-grow bg-orange-200 h-[calc(100vh_-_10vh)] py-[100px] flex px-[200px]">
      <div className="bg-white w-full h-full overflow-scroll rounded-2xl p-[50px]">
        <div className="rounded-lg col-center">
          <p className="text-3xl font-bold">
            <span className="text-pink-500">TO </span>
            <span className="text-blue-300">DO </span>
            <span className="text-green-300">LIST</span>
          </p>
          <div className="py-[20px] px-[50px] w-full space-y-3">
            <div className="row-center space-x-3">
              <input
                placeholder="Add Activities"
                className="h-[50px] flex-grow text-black text-center w-full rounded-lg bg-gray-100 shadow-md"
              />
              <div className="h-[50px] col-center bg-orange-500 px-5 rounded-lg">
                <p className="text-white hover:cursor-pointer min-w-[35px] text-center max-w-[35px]">Add</p>
              </div>
              
            </div>
            <Activities/>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
