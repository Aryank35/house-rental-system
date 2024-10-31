import { useState } from 'react';

const ElectricityBill = () => {
  const [bill, setBill] = useState({
    month: 'January',
    year: 2024,
    totalConsumption: 500,
    ratePerUnit: 4.15,
    paymentStatus: 'Unpaid'
  });

  const handlePayment = () => {
    setBill((prevBill) => ({ ...prevBill, paymentStatus: 'Paid' }));
  };

  return (
    <div className="max-w-md mx-auto p-8 mt-12 bg-white rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-600 text-center">
        Electricity Bill - {bill.month} {bill.year}
      </h2>
      <div className="flex flex-col space-y-6">
        <div className="flex justify-between">
          <p className="text-lg font-semibold text-gray-700">Total Consumption (kWh)</p>
          <p className="text-lg font-semibold text-gray-700">{bill.totalConsumption}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-lg font-semibold text-gray-700">Rate per Unit</p>
          <p className="text-lg font-semibold text-gray-700">₹{bill.ratePerUnit}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-lg font-semibold text-gray-700">Total Bill</p>
          <p className="text-lg font-semibold text-gray-700">
            ₹{(bill.totalConsumption * bill.ratePerUnit).toFixed(2)}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-lg font-semibold text-gray-700">Payment Status</p>
          <p className={bill.paymentStatus === 'Paid' ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
            {bill.paymentStatus}
          </p>
        </div>
      </div>
      {bill.paymentStatus === 'Unpaid' && (
        <button
          className="w-full mt-6 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold rounded-md shadow-lg hover:from-green-500 hover:to-green-700 transition duration-300 ease-in-out"
          type="button"
          onClick={handlePayment}
        >
          Pay Now
        </button>
      )}
    </div>
  );
};

export default ElectricityBill;
