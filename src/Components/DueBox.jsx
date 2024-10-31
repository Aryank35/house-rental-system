import React from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router for navigation

const DueBox = (props) => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleButtonClick = () => {
    if (props.buttonText === 'Pay') {
      navigate('/feesDescription');
    } else if (props.buttonText === 'view receipt') {
      navigate('/rentReceipt');
    }
  };

  return (
    <div className="my-7 bg-white shadow-lg rounded-xl p-5 mx-2 hover:shadow-xl transition-shadow duration-300 ease-in-out">
      {/* Month and Status */}
      <div className="flex justify-between items-center mb-4">
        <div className="font-bold text-2xl text-blue-700">{props.month}</div>
        <div className={`text-lg font-semibold ${props.stats === 'Due' ? 'text-red-600' : 'text-green-600'}`}>
          {props.stats}
        </div>
      </div>
      
      {/* Date and Button */}
      <div className="flex justify-between items-center">
        <div className="text-gray-600 text-sm">{props.dop}</div>
        <button
          onClick={handleButtonClick}
          className={`py-2 px-6 rounded-lg font-semibold text-white 
            ${props.buttonText === 'Pay' ? 'bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700' 
            : 'bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700'} 
            focus:outline-none shadow-md hover:shadow-lg transition-all duration-300`}
        >
          {props.buttonText}
        </button>
      </div>
    </div>
  );
};

export default DueBox;
