import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "@base/pages/types/main";
import {
  changeFirstName,
  changeEmail,
  changeLocation,
  changePhone,
  changePostalCode,
  changeSecondName,
} from "@base/store/changeDataSlice";
import { setUserData } from "@base/store/userDataSlice";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

function UserInfo() {
  const dispatch = useDispatch();
  const data = useSelector((state: IRootState) => state.userData.data);
  const { loading } = useSelector((state: IRootState) => state.userData);

  const newData = useSelector((state: IRootState) => state.changeUserData);
  console.log("newData:", newData);

  return (
    <div className="flex-grow flex flex-col px-[150px] pt-[70px] overflow-hidden">
      { loading? <div className="w-full h-full row-center">
        <div className="w-[50px] h-[50px] relative animate-spin text-orange-500"><ArrowPathIcon/></div></div> :
        <>
          <div className="flex items-center space-x-10">
            <div className="w-[150px] h-[150px] rounded-full bg-orange-500"></div>
            <div>
              <p className="text-xl font-[400]">{`${data.firstName} ${data.secondName}`}</p>
              <p className="text-gray-500 text-[14px] font-light">
                {data.location}
              </p>
              <p className="text-gray-500 text-[12px] font-light">
                {data.email}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-[5rem] gap-y-[1.5rem] py-[50px] w-full">
            <div className="h-[70px] space-y-1 flex flex-col rounded-xl">
              <p>First Name</p>
              <input
                onChange={(e) => dispatch(changeFirstName(e.target.value))}
                placeholder={data.firstName}
                className="input-box flex-grow"
              ></input>
            </div>
            <div className="h-[70px] space-y-1 flex flex-col rounded-xl">
              <p>Last Name</p>
              <input
                onChange={(e) => dispatch(changeSecondName(e.target.value))}
                placeholder={data.secondName}
                className="input-box flex-grow"
              ></input>
            </div>

            <div className="h-[70px] space-y-1 flex flex-col rounded-xl">
              <p>Email</p>
              <input
                onChange={(e) => dispatch(changeEmail(e.target.value))}
                placeholder={data.email}
                className="input-box flex-grow"
              ></input>
            </div>

            <div className="h-[70px] space-y-1 flex flex-col rounded-xl">
              <p>Postal Code</p>
              <input
                onChange={(e) => dispatch(changePostalCode(e.target.value))}
                placeholder={data.postalCode}
                className="input-box flex-grow"
              ></input>
            </div>

            <div className="h-[70px] space-y-1 flex flex-col rounded-xl">
              <p>Address</p>
              <input
                onChange={(e) => dispatch(changeLocation(e.target.value))}
                placeholder={data.location}
                className="input-box flex-grow"
              ></input>
            </div>
            <div className="h-[70px] space-y-1 flex flex-col rounded-xl">
              <p>Phone</p>
              <input
                onChange={(e) => dispatch(changePhone(e.target.value))}
                placeholder={data.phone}
                className="input-box flex-grow"
              ></input>
            </div>
          </div>
          <div
            onClick={() => dispatch(setUserData(newData))}
            className="row-center hover:cursor-pointer"
          >
            <p className="saveButton">Save Data</p>
          </div>
      
      </>}
    </div>
  );
}

export default UserInfo;
