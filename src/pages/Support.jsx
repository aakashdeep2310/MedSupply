import React from "react";

const Support = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-white text-gray-800">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-8 underline decoration-green-300">Support</h2>
      <div className="max-w-3xl mx-auto space-y-4 text-lg">
        <p>If you are facing issues with your orders, payments, or anything else, feel free to reach out to our support team.</p>
        <p>Email: <span className="text-blue-600">support@medsupply.com</span></p>
        <p>Phone: +91-9876543210</p>
        <p>We are available Monday to Saturday, 9 AM to 6 PM.</p>
      </div>
    </div>
  );
};

export default Support;
