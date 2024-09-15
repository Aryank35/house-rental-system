import React, { useState } from "react";

const FeesDescription = () => {
    const [Amount, setAmount] = useState(5000)
    const [Fine, setFine] = useState(100)
  return (
    <>
      <div className="w-full">
        <div className="bg-[#178eba] w-[90%] md:w-[60%] h-full py-[50px] my-20 mx-auto">
          <div className="flex flex-col">
            <div className="Title-date w-full flex justify-between mx-5 my-2 items-center">
              <div className="feesTitle w-[40%]">
                <h1 className="text-[#FAF0CA] font-bold text-2xl md:text-3xl text-center">
                  Fees Title
                </h1>
                <p className="text-white font-bold text-xl md:text-2xl text-center">
                  October
                </p>
              </div>
              <div className="due-date w-[60%]">
                <h1 className="text-[#FAF0CA] font-bold text-2xl md:text-3xl text-center">
                  Pay Before
                </h1>
                <p className="text-white font-bold text-xl md:text-2xl text-center">
                  14/10/24
                </p>
              </div>
            </div>
            <div className="Amount-fine w-full flex flex-col justify-center items-center my-9">
              <div className="Amount flex space-x-5 mx-10 items-center justify-center">
                <h1 className="text-[#FAF0CA] font-bold text-2xl md:text-3xl text-center">
                  Amount:
                </h1>
                <p className="text-white font-bold text-xl md:text-2xl text-center">
                  {`${Amount}`}
                </p>
              </div>
              <div className="Amount flex space-x-5 mx-10 items-center justify-center">
                <h1 className="text-[#FAF0CA] font-bold text-2xl md:text-3xl text-center">
                  Fine:
                </h1>
                <p className="text-white font-bold text-xl md:text-2xl text-center">
                  {`${Fine}`}
                </p>
              </div>
              <div className="Amount flex space-x-5 mx-10 items-center justify-center">
                <h1 className="text-[#FAF0CA] font-bold text-2xl md:text-3xl text-center">
                  Total fees:
                </h1>
                <p className="text-white font-bold text-xl md:text-2xl text-center">
                  {`${Amount+Fine}`}
                </p>
              </div>
            </div>
          </div>
          <div
          className='bg-blue-600 text-white py-4 px-6 w-[50%] mx-auto rounded-xl font-semibold text-center cursor-pointer'
        //   onClick={handleButtonClick}
        >
          Pay Now
        </div>
        </div>
      </div>
    </>
  );
};

export default FeesDescription;
