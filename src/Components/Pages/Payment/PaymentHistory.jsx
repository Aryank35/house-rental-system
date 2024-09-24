import { useState } from 'react';

const PaymentHistory = () => {
  const [payments, setPayments] = useState([
    { id: 1, date: '2022-01-01', amount: 1000, status: 'paid' },
    { id: 2, date: '2022-02-01', amount: 1000, status: 'paid' },
    { id: 3, date: '2022-03-01', amount: 1000, status: 'pending' },
  ]);

  const [selectedPayment, setSelectedPayment] = useState('');

  const handleFilter = (e) => {
    setSelectedPayment(e.target.value);
    if (e.target.value === 'all') {
      setPayments([
        { id: 1, date: '2022-01-01', amount: 1000, status: 'paid' },
        { id: 2, date: '2022-02-01', amount: 1000, status: 'paid' },
        { id: 3, date: '2022-03-01', amount: 1000, status: 'pending' },
      ]);
    } else if (e.target.value === 'paid') {
      setPayments([
        { id: 1, date: '2022-01-01', amount: 1000, status: 'paid' },
        { id: 2, date: '2022-02-01', amount: 1000, status: 'paid' },
      ]);
    } else if (e.target.value === 'pending') {
      setPayments([{ id: 3, date: '2022-03-01', amount: 1000, status: 'pending' }]);
    }
  };

  const print = () => {
    // Logic to download payment data as CSV can be implemented here
    window.print();
  };

  return (
    <div className="p-4 space-y-4">
      <div className="border rounded-lg shadow-lg">
        <div className="bg-gray-100 p-4 rounded-t-lg">
          <h2 className="text-xl font-bold">Payment History</h2>
          <p className="text-gray-600">Your Payment Status</p>
        </div>
        <div className="p-4">
          <div className="flex justify-between mb-4">
            <select
              value={selectedPayment}
              onChange={handleFilter}
              className="w-44 p-2 border border-gray-300 rounded-md"
            >
              <option value="all">All</option>
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
            </select>
            <button
              onClick={print}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Print
            </button>
          </div>
          <table className="w-full table-auto border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-400 p-2">Date</th>
                <th className="border border-gray-400 p-2">Amount</th>
                <th className="border border-gray-400 p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.id}>
                  <td className="border border-gray-400 p-2">{payment.date}</td>
                  <td className="border border-gray-400 p-2">₹{payment.amount}</td>
                  <td className="border border-gray-400 p-2">{payment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-gray-100 p-4 rounded-b-lg">
          <p>Total payments: {payments.length}</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
