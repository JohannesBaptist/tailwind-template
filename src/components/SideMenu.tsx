import IRootState from "@base/components/types/main";
import {
  ArrowLeftCircleIcon,
  BoltIcon,
  HeartIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

function SideMenu() {
  const router = useRouter()
  const { active } = useSelector((state: IRootState) => state.userData);

  return (
    <div className="h-full w-[250px] border-r-[2px] flex flex-col py-[70px] relative border-gray-200">
      <p className="text-xl font-bold text-center font-[arial]">Test Application</p>
      <div className="py-[80px] pl-[60px] space-y-7">
        <div onClick={() => router.push("/")} className={`text-black text-md py-2 border-r-[5px] flex space-x-2 hover:cursor-pointer items-center hover:border-orange-200 ${active == "userInfo" ? "border-orange-500" : "hover:border-orange-200"}`}>
          <div className="w-6 h-6 dark:text-orange-500">
            <UserIcon />
          </div>
          <p>User Info</p>
        </div>
        <div onClick={() => router.push("/activities")} className={`text-black text-md py-2 border-r-[5px] flex space-x-2  hover:cursor-pointer items-center ${active == "activities" ? "border-orange-500" : "hover:border-orange-200"}`}>
          <div  className="w-6 h-6 dark:text-orange-500 ">
            <BoltIcon />
          </div>
          <p>Activities</p>
        </div>
        <div onClick={() => router.push("/favorites")} className={`text-black text-md py-2 border-r-[5px] flex space-x-2 hover:cursor-pointer items-center ${active == "favorites" ? "border-orange-500" : "hover:border-orange-200"}`}>
          <div  className="w-6 h-6 dark:text-orange-500">
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
