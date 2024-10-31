import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FeesDescription = () => {
  const [Amount, setAmount] = useState(5000);
  const [Fine, setFine] = useState(100);

  const navigate = useNavigate();  // React Router's hook for navigation

  // Function to handle payment redirection
  const handlePayment = () => {
    // Simulate redirecting to payment gateway URL
    window.location.href = "/paymentGateway"; // Replace with actual gateway URL
  };

  return (
    <>
      <div className="w-full">
        <div className="bg-[#38B2AC] w-[90%] md:w-[50%] h-full py-[50px] my-20 mx-auto rounded-3xl shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="flex flex-col">
            <div className="Title-date w-full flex justify-between mx-5 my-4 items-center">
              <div className="feesTitle w-[40%]">
                <h1 className="text-[#FAF0CA] font-extrabold text-3xl md:text-4xl text-center">
                  Fees Title
                </h1>
                <p className="text-white font-semibold text-xl md:text-2xl text-center mt-1">
                  October
                </p>
              </div>
              <div className="due-date w-[60%]">
                <h1 className="text-[#FAF0CA] font-extrabold text-3xl md:text-4xl text-center">
                  Pay Before
                </h1>
                <p className="text-white font-semibold text-xl md:text-2xl text-center mt-1">
                  14/10/24
                </p>
              </div>
            </div>

            <div className="Amount-fine w-full flex flex-col justify-center items-center my-12">
              <div className="Amount flex space-x-4 md:space-x-8 items-center justify-center">
                <h1 className="text-[#FAF0CA] font-bold text-2xl md:text-3xl">
                  Amount:
                </h1>
                <p className="text-white font-semibold text-2xl md:text-3xl">
                  ₹{Amount}
                </p>
              </div>
              <div className="Fine flex space-x-4 md:space-x-8 items-center justify-center my-4">
                <h1 className="text-[#FAF0CA] font-bold text-2xl md:text-3xl">
                  Fine:
                </h1>
                <p className="text-white font-semibold text-2xl md:text-3xl">
                  ₹{Fine}
                </p>
              </div>
              <div className="Total flex space-x-4 md:space-x-8 items-center justify-center">
                <h1 className="text-[#FAF0CA] font-bold text-2xl md:text-3xl">
                  Total Fees:
                </h1>
                <p className="text-white font-semibold text-2xl md:text-3xl">
                  ₹{Amount + Fine}
                </p>
              </div>
            </div>
          </div>

          {/* Pay Now Button */}
          <div
            className="bg-[#0c5c4c] hover:bg-[#16A085] text-white py-4 px-6 w-[70%] md:w-[50%] mx-auto rounded-full font-semibold text-center cursor-pointer shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110"
            onClick={handlePayment}  // Calling the payment handler
          >
            Pay Now
          </div>
        </div>
      </div>
    </>
  );
};

export default FeesDescription;
