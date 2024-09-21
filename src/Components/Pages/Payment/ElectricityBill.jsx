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
    <div className="max-w-md mx-auto p-8 mt-12 bg-slate-100 rounded-lg shadow-md">
      <h2 className=" text-xl md:text-3xl font-bold mb-4 ">Electricity Bill Detail - {bill.month} {bill.year}</h2>
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between">
          <p className="text-lg font-bold ">Total Consumption (kWh)</p>
          <p className="text-lg font-bold">{bill.totalConsumption}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-lg font-bold ">Rate per Unit </p>
          <p className="text-lg font-bold">₹{bill.ratePerUnit}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-lg font-bold ">Total Bill</p>
          <p className="text-lg font-bold">₹{bill.totalConsumption * bill.ratePerUnit}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-lg font-bold ">Payment Status</p>
          <p className={bill.paymentStatus === 'Paid' ? 'text-green-600' : 'text-red-600'}>{bill.paymentStatus}</p>
        </div>
      </div>
      {bill.paymentStatus === 'Unpaid' && (
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mt-5" type="button" onClick={handlePayment}>Pay Now</button>
      )}
    </div>
  );
};

export default ElectricityBill;