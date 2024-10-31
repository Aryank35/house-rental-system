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
    <div className="max-w-md mx-auto py-8 h-full bg-white rounded-lg flex flex-col justify-center items-center shadow-lg border border-gray-200">
      <div className="text-center text-xl font-semibold mb-4 text-gray-700">
        Thank you for your payment.
      </div>

      <div className="sm:text-center text-lg font-semibold mb-4 text-green-600">
        Payment Status: Paid
      </div>

      <div className="border border-gray-300 rounded-lg p-4 w-full bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50">
        <div className="text-center text-2xl mb-4 font-bold text-indigo-600">
          Rent Payment Receipt
        </div>

        <div className="text-center flex flex-col justify-center items-center font-medium mb-6 text-gray-500">
          <span>Receipt for rent payment made on</span>
          <span className="text-lg text-indigo-500">{paymentDetails.date}</span>
        </div>

        <div className="flex justify-between mb-4">
          <span className="text-lg font-medium text-gray-600">Landlord:</span>
          <span className="text-lg font-medium text-indigo-500">
            {paymentDetails.landlord}
          </span>
        </div>

        <div className="flex justify-between space-x-2 mb-4">
          <span className="text-lg font-medium text-gray-600">Address:</span>
          <span className="text-lg font-medium text-indigo-500">
            {paymentDetails.address}
          </span>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col">
            <span className="text-lg font-medium text-gray-600">
              Rent Amount:
            </span>
            <p className="text-sm text-gray-500">
              (Fine: ₹{paymentDetails.fine})
            </p>
          </div>
          <span className="text-lg font-semibold text-green-600">
            ₹{paymentDetails.rent + paymentDetails.fine}
          </span>
        </div>

        <div className="flex justify-between mb-6">
          <span className="text-lg font-medium text-gray-600">
            Payment Method:
          </span>
          <span className="text-lg font-medium text-indigo-500">
            {paymentDetails.paymentMethod}
          </span>
        </div>

        <button
          type="button"
          onClick={print}
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 transition duration-300"
        >
          Print Receipt
        </button>
      </div>
    </div>
  );
}
