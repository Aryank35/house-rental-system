import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonShelter } from "@fortawesome/free-solid-svg-icons";
const UserInfo = () => {
  const [userName, setuserName] = useState("Aryan kumar Mohapatra");
  const [roomNo, setroomNo] = useState(1);

  return (
    <>
      <div className="flex justify-between mx-[8px] my-[10px] h-[20vh] items-center ">
        <div className="w-[20%] mr-2">
          <FontAwesomeIcon icon={faPersonShelter} className="text-5xl ml-1" />
        </div>
        <div className="w-[80%] mx-auto" >
          <h2 className="font-bold text-lg">{userName}</h2>
          <p><span>Room no: </span>{roomNo}</p>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
