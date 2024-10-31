import { useState } from "react";

const PaymentHistory = () => {
  const [payments, setPayments] = useState([
    { id: 1, date: "2022-01-01", amount: 1000, status: "paid" },
    { id: 2, date: "2022-02-01", amount: 1000, status: "paid" },
    { id: 3, date: "2022-03-01", amount: 1000, status: "pending" },
  ]);

  const [selectedPayment, setSelectedPayment] = useState("all");

  const handleFilter = (e) => {
    setSelectedPayment(e.target.value);
    if (e.target.value === "all") {
      setPayments([
        { id: 1, date: "2022-01-01", amount: 1000, status: "paid" },
        { id: 2, date: "2022-02-01", amount: 1000, status: "paid" },
        { id: 3, date: "2022-03-01", amount: 1000, status: "pending" },
      ]);
    } else if (e.target.value === "paid") {
      setPayments([
        { id: 1, date: "2022-01-01", amount: 1000, status: "paid" },
        { id: 2, date: "2022-02-01", amount: 1000, status: "paid" },
      ]);
    } else if (e.target.value === "pending") {
      setPayments([
        { id: 3, date: "2022-03-01", amount: 1000, status: "pending" },
      ]);
    }
  };

  const print = () => {
    window.print();
  };

  return (
    <div className="p-4 space-y-4 max-w-4xl mx-auto">
      <div className="border rounded-lg shadow-lg">
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-4 rounded-t-lg">
          <h2 className="text-xl font-bold text-white">Payment History</h2>
          <p className="text-blue-100">Track your payment status</p>
        </div>

        <div className="p-4">
          <div className="flex justify-between mb-4 items-center">
            <select
              value={selectedPayment}
              onChange={handleFilter}
              className="w-44 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
            >
              <option value="all">All</option>
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
            </select>

            <button
              onClick={print}
              className="px-4 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-md hover:bg-green-500 focus:ring focus:ring-green-300"
            >
              Print
            </button>
          </div>

          <div className="overflow-x-auto">
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
                  <tr
                    key={payment.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="border border-gray-400 p-2 text-center">
                      {payment.date}
                    </td>
                    <td className="border border-gray-400 p-2 text-center">
                      ₹{payment.amount}
                    </td>
                    <td
                      className={`border border-gray-400 p-2 text-center font-bold ${
                        payment.status === "paid"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {payment.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-b-lg">
          <p>Total payments: {payments.length}</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
