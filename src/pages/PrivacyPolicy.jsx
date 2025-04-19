import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-white text-gray-800">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-8 underline decoration-green-300">Privacy Policy</h2>
      <div className="max-w-4xl mx-auto space-y-6 text-lg">
        <p>At MedSupply, we value your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and store your information.</p>
        
        <h3 className="text-2xl font-semibold">Information Collection</h3>
        <p>We collect information you provide such as name, email, and order details to fulfill your purchase.</p>

        <h3 className="text-2xl font-semibold">Data Usage</h3>
        <p>Your data is used only to provide services, process orders, and improve customer experience.</p>

        <h3 className="text-2xl font-semibold">Data Security</h3>
        <p>We implement security measures to ensure your data is protected from unauthorized access.</p>

        <p>For any concerns, you can contact us at: <span className="text-blue-600">privacy@medsupply.com</span></p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
