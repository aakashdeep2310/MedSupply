import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-white text-gray-800">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-8 underline decoration-green-300">Contact Us</h2>
      <div className="max-w-3xl mx-auto">
        <form className="space-y-6">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-md" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-md" />
          <textarea placeholder="Your Message" rows={5} className="w-full p-3 border rounded-md" />
          <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
