import React, { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";
import axios from "axios";

import handGloves from "../assets/handgloves.png";
import dettol from "../assets/dettol.png";
import mask from "../assets/mask.png";

const featuredProducts = [
  { id: 1, name: "Hand Sanitizer", price: 199, image: dettol },
  { id: 2, name: "Face Mask", price: 99, image: mask },
  { id: 3, name: "Hand Gloves", price: 149, image: handGloves },
];

const Home = ({ addToCart }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      sender: "bot",
      text: "Hello! How can I assist you with medical queries today?",
    },
  ]);

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    const newMessages = [...chatMessages, { sender: "user", text: userInput }];
    setChatMessages(newMessages);
    setUserInput("");

    try {
      const response = await axios.post("http://localhost:5000/api/auth/chat", {
        messages: [
          { role: "system", content: "You are a helpful AI-powered medical assistant." },
          ...newMessages.map((msg) => ({
            role: msg.sender === "user" ? "user" : "assistant",
            content: msg.text,
          })),
        ],
      });

      const botReply = response.data.reply;
      setChatMessages([...newMessages, { sender: "bot", text: botReply }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setChatMessages([
        ...newMessages,
        { sender: "bot", text: "Sorry, I couldn't process your request." },
      ]);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">Welcome to MedSupply</h1>
        <p className="mt-3 text-lg">Your one-stop shop for medical essentials</p>
        <Link
          to="/products"
          className="mt-6 inline-block bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Shop Now
        </Link>
      </section>

      {/* Carousel Section */}
      <section className="mt-10 px-4">
        <Carousel />
      </section>

      {/* Featured Products */}
      <section className="mt-10 px-4">
        <h2 className="text-3xl font-bold text-center text-green-800">
          Featured Products
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6 container mx-auto">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>
      </section>

      {/* Chatbot Toggle Button */}
      <button
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        💬
      </button>

      {/* AI Chatbot Box */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-6 w-80 bg-white shadow-lg p-4 rounded-lg border border-gray-300 z-50">
          <div className="flex justify-between items-center border-b pb-2">
            <h3 className="text-lg font-bold text-green-700">
              AI Medical Chatbot
            </h3>
            <button
              className="text-red-500"
              onClick={() => setIsChatOpen(false)}
            >
              ✖
            </button>
          </div>
          <div className="h-64 overflow-y-auto p-2 space-y-2">
            {chatMessages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg text-sm ${
                  msg.sender === "user"
                    ? "bg-blue-100 text-blue-900 text-right ml-auto"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="border-t pt-2 flex">
            <input
              type="text"
              className="flex-1 p-2 border rounded-l"
              placeholder="Ask a medical question..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button
              className="bg-green-600 text-white px-4 rounded-r"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}


      <footer className="bg-gradient-to-t from-gray-200 to-white py-10 mt-12">
        <div className="container mx-auto grid md:grid-cols-5 gap-6 px-4 text-gray-700">
          <div>
            <h3 className="font-bold text-gray-900">COMPANY</h3>
            <ul className="mt-3 space-y-2">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/support">Customers Speak</Link></li>
              <li><Link to="#">Career</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900">OUR POLICIES</h3>
            <ul className="mt-3 space-y-2">
              <li><Link to="#">Terms and Conditions</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="#">Shipping & Refund Policy</Link></li>
              <li><Link to="#">Editorial Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900">SUBSCRIBE TO OUR NEWSLETTER</h3>
            <p className="text-sm text-gray-600 mt-2">Get free health tips and latest offers.</p>
            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="p-2 border rounded-l w-full"
              />
              <button className="bg-green-600 text-white px-4 rounded-r">Subscribe</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
  

export default Home;
