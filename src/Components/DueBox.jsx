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
    <div className='my-7 space-y-3 bg-blue-300 mx-2 rounded-xl px-2 py-5'>
      <div className='flex justify-between mx-5 items-center text-center'>
        <div className='font-bold text-xl'>{props.month}</div>
        <div className='text-red-800 text-lg font-semibold'>{props.stats}</div>
      </div>
      <div className='flex justify-between mx-5 items-center text-center'>
        <div className='text-sm'>{props.dop}</div>
        <div
          className='bg-blue-600 text-white py-2 px-4 rounded-xl font-semibold text-center cursor-pointer'
          onClick={handleButtonClick}
        >
          {props.buttonText}
        </div>
      </div>
    </div>
  );
};

export default DueBox;
