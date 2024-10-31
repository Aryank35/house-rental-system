import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonShelter } from "@fortawesome/free-solid-svg-icons";

const UserInfo = () => {
  const [userName, setuserName] = useState("Aryan Kumar Mohapatra");
  const [roomNo, setroomNo] = useState(101);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center sm:mx-[8px] md:mx-auto my-[20px] h-[20vh] md:h-[30vh]">
        <div className="w-[30%] md:w-[40%] flex justify-center mb-4 md:mb-0">
          <FontAwesomeIcon
            icon={faPersonShelter}
            className="text-6xl text-blue-500 md:text-[6rem]"
          />
        </div>
        <div className="w-[70%] md:w-[60%] text-center md:text-left">
          <h2 className="font-bold text-xl md:text-3xl">{userName}</h2>
          <p className="text-gray-700 mt-2">
            <span className="font-semibold">Room no: </span>{roomNo}
          </p>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
