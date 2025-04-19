import React, { useEffect, useState } from "react";
import { loadScript } from "../utils/loadScript"; // Helper function to load Razorpay script

const Cart = ({ cartItems, setCartItems }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [address, setAddress] = useState("");

  // Calculate total price when cartItems change
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
  }, [cartItems]);

  // Remove item from cart
  const handleRemoveItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Handle payment with Razorpay
  const handlePayment = async () => {
    if (!address) {
      alert("Please enter your address before placing an order!");
      return;
    }

    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load. Please check your internet connection.");
      return;
    }

    const options = {
      key: "YOUR_RAZORPAY_KEY", // Replace with your Razorpay API Key
      amount: totalPrice * 100, // Razorpay works in paise (₹1 = 100 paise)
      currency: "INR",
      name: "MedSupply",
      description: "Purchase Medical Essentials",
      image: "/logo.png", // Add your brand logo
      handler: function (response) {
        alert(`Payment successful! Order ID: ${response.razorpay_payment_id}`);
        setCartItems([]); // Clear cart after payment
        setAddress(""); // Reset address
        localStorage.removeItem("cart");
      },
      prefill: {
        name: "Aakash Deep", // Fetch user name dynamically if needed
        email: "aakashdeep@example.com",
        contact: "9999999999",
      },
      notes: {
        address: address,
      },
      theme: {
        color: "#2294ed",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-6">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          <div className="grid md:grid-cols-2 gap-4">
            {cartItems.map((item, index) => (
              <div key={index} className="bg-white p-4 shadow-lg rounded-lg flex justify-between items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                <div className="flex-grow ml-4">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="text-gray-600">₹{item.price}</p>
                </div>
                <button
                  onClick={() => handleRemoveItem(index)}
                  className="bg-red-600 hover:cursor-pointer text-white px-3 py-1 rounded hover:bg-red-700 transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Address Input */}
          <div className="mt-6">
            <label className="block text-lg font-medium text-gray-700">Enter Delivery Address:</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your full address"
            ></textarea>
          </div>

          {/* Total Price */}
          <h3 className="text-2xl font-bold mt-6">Total: ₹{totalPrice}</h3>

          {/* Order Now Button */}
          <button
            onClick={handlePayment}
            className="mt-4 w-48 bg-[#2294ed] hover:cursor-pointer text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1d69a3] transition-all duration-300"
          >
            Order Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
