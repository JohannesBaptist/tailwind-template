import {
  ArrowLeftCircleIcon,
  HeartIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

function SideMenu() {
  return (
    <div className="h-full w-[250px] border-r-[2px] flex flex-col py-[70px] relative border-gray-200">
      <p className="text-2xl font-bold text-center font-[arial]">My Profile</p>
      <div className="py-[80px] pl-[60px] space-y-7">
        <div className="text-black text-md py-2 border-r-[5px] flex space-x-2 hover:cursor-pointer items-center border-orange-500">
          <div className="w-6 h-6 relaitve">
            <UserIcon />
          </div>
          <p>User Info</p>
        </div>
        <div className="text-black text-md py-2 border-r-[5px] flex space-x-2  hover:cursor-pointer items-center ">
          <div className="w-6 h-6 relaitve">
            <ShoppingBagIcon />
          </div>
          <p>Orders</p>
        </div>
        <div className="text-black text-md py-2 border-r-[5px] flex space-x-2  hover:cursor-pointer items-center ">
          <div className="w-6 h-6 relaitve">
            <HeartIcon />
          </div>
          <p>Favorites</p>
        </div>
      </div>
      <div className="flex flex-row items-center space-x-3 cursor-pointer justify-center w-full absolute bottom-[80px]">
        <div className="w-7 h-7 text-orange-500 ">
          <ArrowLeftCircleIcon />
        </div>
        <p>Log Out</p>
      </div>
    </div>
  );
}

export default SideMenu;
