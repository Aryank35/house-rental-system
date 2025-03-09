import React, { useState } from "react";

const Login = () => {
  const [role, setRole] = useState("user"); // Default role selection
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handleLogin = () => {
    if (mobile.length === 10) {
      setShowOtpInput(true);
    } else {
      alert("Please enter a valid 10-digit mobile number.");
    }
  };

  const handleOtpVerification = () => {
    if (otp.length === 4) {
      alert(`${role.toUpperCase()} logged in successfully!`);
      // Redirect based on role
      window.location.href = role === "admin" ? "https://house-rental-system-admin.vercel.app/" : "/user-dashboard";
    } else {
      alert("Invalid OTP. Please enter a 4-digit OTP.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-blue-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-gray-700">Login</h2>

        {/* Role Selection */}
        <label className="block mt-4 text-gray-600 font-medium">
          Select Role:
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </label>

        {/* Mobile Number Input */}
        {!showOtpInput && (
          <>
            <label className="block mt-4 text-gray-600 font-medium">
              Mobile Number:
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Enter your mobile number"
                className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                maxLength="10"
              />
            </label>
            <button
              onClick={handleLogin}
              className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition"
            >
              Get OTP
            </button>
          </>
        )}

        {/* OTP Input */}
        {showOtpInput && (
          <>
            <label className="block mt-4 text-gray-600 font-medium">
              Enter OTP:
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                maxLength="4"
              />
            </label>
            <button
              onClick={handleOtpVerification}
              className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition"
            >
              Verify OTP
            </button>
          </>
        )}

        <p className="mt-4 text-gray-500 text-sm">
          A One-Time Password (OTP) will be sent to your mobile number for verification.
        </p>
      </div>
    </div>
  );
};

export default Login;
