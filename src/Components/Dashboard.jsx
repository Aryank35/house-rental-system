import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyCheckDollar, faInbox, faHistory, faBolt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const DashboardCard = ({ link, icon, bgColor, text }) => {
  return (
    <Link
      to={link}
      className={`transition-transform transform hover:scale-105 ${bgColor} text-white font-bold px-7 py-6 text-sm sm:h-[140px] rounded-lg w-[90%] md:w-[40%] text-center shadow-lg hover:shadow-xl`}
    >
      <div className="flex flex-col justify-center items-center h-full">
        <FontAwesomeIcon icon={icon} className="text-4xl mb-3" />
        <span>{text}</span>
      </div>
    </Link>
  );
};

const Dashboard = () => {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleAdminRedirect = () => {
    setIsRedirecting(true);

    // Simulate delay before redirect
    setTimeout(() => {
      window.location.href = "https://house-rental-system-admin.vercel.app/";
    }, 2000); // 2 seconds delay for the animation
  };

  // Array of card data
  const cardsData = [
    {
      link: "/dues",
      icon: faMoneyCheckDollar,
      bgColor: "bg-gradient-to-r from-blue-500 to-indigo-500",
      text: "Dues",
    },
    {
      link: "/complains",
      icon: faInbox,
      bgColor: "bg-gradient-to-r from-pink-500 to-red-500",
      text: "Complains",
    },
    {
      link: "/paymentHistory",
      icon: faHistory,
      bgColor: "bg-gradient-to-r from-green-500 to-teal-500",
      text: "Payment History",
    },
    {
      link: "/electricityBill",
      icon: faBolt,
      bgColor: "bg-gradient-to-r from-yellow-500 to-orange-500",
      text: "Electricity Bill",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-5 relative">
      {/* Loading animation overlay */}
      {isRedirecting && (
        <div className="fixed inset-0 bg-white bg-opacity-75 z-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
          <p className="text-xl font-bold ml-4 text-gray-700">Redirecting to Admin Portal...</p>
        </div>
      )}

      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Manage all your tasks efficiently</p>
      </div>

      {/* Render the cards dynamically */}
      <div className="flex flex-wrap justify-center gap-5 items-center mx-auto">
        {cardsData.map((card, index) => (
          <DashboardCard
            key={index}
            link={card.link}
            icon={card.icon}
            bgColor={card.bgColor}
            text={card.text}
          />
        ))}
      </div>

      {/* Button to navigate to external URL */}
      <div className="flex justify-center mt-16">
        <button
          onClick={handleAdminRedirect}
          className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
        >
          Go to Admin Portal
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
