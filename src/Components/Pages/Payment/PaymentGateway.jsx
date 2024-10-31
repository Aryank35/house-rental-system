import React, { useState } from "react";

const PaymentGateway = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");

  // Function to simulate payment processing
  const handlePayment = (e) => {
    e.preventDefault();
    // Simulate payment processing here
    alert("Payment Successful!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl shadow-lg w-[90%] md:w-[40%]">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Demo Payment Gateway
        </h1>
        <form onSubmit={handlePayment}>
          {/* Cardholder Name */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Cardholder Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Card Number */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Card Number
            </label>
            <input
              type="text"
              placeholder="XXXX XXXX XXXX XXXX"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              maxLength="16"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Expiry Date */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Expiry Date
            </label>
            <input
              type="text"
              placeholder="MM/YY"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
              maxLength="5"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* CVV */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              CVV
            </label>
            <input
              type="password"
              placeholder="123"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              maxLength="3"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Pay Now Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-200"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentGateway;
