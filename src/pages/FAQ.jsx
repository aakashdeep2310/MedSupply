import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "How can I track my order?",
      answer: "You can track your order from the 'My Orders' section once you are logged in.",
    },
    {
      question: "Do you offer returns?",
      answer: "Yes, we have a 7-day return policy for unused and unopened items.",
    },
    {
      question: "Is my payment information safe?",
      answer: "Yes, all transactions are securely processed with encryption.",
    },
  ];

  return (
    <div className="min-h-screen px-6 py-12 bg-white text-gray-800">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-8 underline decoration-green-300">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx}>
            <h4 className="text-xl font-semibold">{faq.question}</h4>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
