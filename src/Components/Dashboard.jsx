import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyCheckDollar, faInbox } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-between mx-2 h-[40vh] items-center">
        <Link
          to="/dues"
          className="bg-blue-500 text-white font-bold px-7 py-6 text-sm h-[80px] rounded-md w-[45%] text-center "
        >
          <div className=" text-center flex flex-col justify-center items-center">
            <span>
              <FontAwesomeIcon icon={faMoneyCheckDollar} className="text-2xl" />
            </span>
            <span> Dues</span>
          </div>
        </Link>
        <Link
          to="/complains"
          className="bg-blue-500 text-white font-bold px-7 py-6 text-sm h-[80px] rounded-md w-[45%] text-center "
        >
          <div className=" text-center flex flex-col justify-center items-center">
            <span>
              <FontAwesomeIcon icon={faInbox} className="text-2xl" />
            </span>
            <span> Complains</span>
          </div>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center space-y-3 my-3 text-center">
        <Link to="/paymentHistory" className="bg-blue-300 text-black font-bold px-7 py-3 rounded-md w-[90%] items-center">
          Payment History
        </Link>
        <Link to="/electricityBill" className="bg-blue-300 text-black font-bold px-7 py-3 rounded-md w-[90%] items-center">
          Electricity Bill
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
