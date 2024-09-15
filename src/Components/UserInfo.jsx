import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonShelter } from "@fortawesome/free-solid-svg-icons";

const UserInfo = () => {
  const [userName, setuserName] = useState("Aryan kumar Mohapatra");
  const [roomNo, setroomNo] = useState(1);

  return (
    <>
      <div className="flex justify-center mx-[8px] md:mx-aut0 my-[10px] h-[20vh] md:h-[30vh] items-center ">
        <div className="w-[20%] md:w-[40%] md:text-center mx-auto mr-2 ">
          <FontAwesomeIcon
            icon={faPersonShelter}
            className="text-6xl ml-1 md:text-[6rem]"
          />
          
        </div>
        <div className="w-[80%] md:w-[60%] md:text-start mx-auto">
          <h2 className="font-bold text-xl">{userName}</h2>
          <p>
            <span>Room no: </span>
            {roomNo}
          </p>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
