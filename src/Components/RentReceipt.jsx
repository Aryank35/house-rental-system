import { useState } from "react";

export default function RentReceipt() {
  const paymentDetails = {
    date: "01-02-2024",
    rent: 5500,
    fine: 300,
    paymentMethod: "Bank Transfer",
    landlord: "Manas Mohapatra",
    address: "Near Surya filling station Talcher",
  };
  const print = () => {
    window.print();
  };
  return (
    <div className="max-w-md mx-auto py-4  h-full bg-white rounded-lg flex flex-col justify-center items-center shadow-md">
      <div className="text-center text-lg font-medium mb-4 text-gray-500">
        Thank you for your payment.
      </div>

      <div className="sm:text-center text-lg font-medium mb-4 text-blue-500">
        Payment Status: Paid
      </div>
      <div className="border p-2 w-[95%] bg-slate-100">
        <div className="text-center text-xl mb-2 sm:text-2xl font-bold sm:mb-4 text-blue-500 ">
          Rent Payment Receipt
        </div>
        <div className="text-center sm:text-lg flex flex-col justify-center items-center font-medium mb-4 text-gray-500">
          <span>Receipt for rent payment made on</span>{" "}
          <span>{paymentDetails.date}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="text-lg font-medium text-gray-500">Landlord:</span>
          <span className="sm:text-lg font-medium text-blue-500">
            {paymentDetails.landlord}
          </span>
        </div>
        <div className="flex justify-between space-x-2 mb-4">
          <span className="text-lg font-medium text-gray-500">Address:</span>
          <span className="sm:text-lg font-medium text-blue-500">
            {paymentDetails.address}
          </span>
        </div>
        <div className="flex space-x-4 mb-4">
          <div className="flex flex-col justify-center items-center">
            <span className="text-lg font-medium text-gray-500">
              Rent Amount:
            </span>
            <span>
              <p className="text-sm sm:text-md">
                (Fine: {paymentDetails.fine})
              </p>
            </span>
          </div>

          <span className="sm:text-lg font-medium text-green-500">
            ₹{paymentDetails.rent + paymentDetails.fine}
          </span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="text-lg font-medium text-gray-500">
            Payment Method:
          </span>
          <span className="sm:text-lg font-medium text-blue-500">
            {paymentDetails.paymentMethod}
          </span>
        </div>
        <button
          type="button"
          onClick={print}
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
        >
          Print Slip
        </button>
      </div>
    </div>
  );
}
