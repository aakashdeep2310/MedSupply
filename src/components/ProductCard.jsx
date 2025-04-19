import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white p-5 shadow-md rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-200">
      {/* Product Image */}
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-56 object-cover rounded-lg"
      />

      {/* Product Info */}
      <h3 className="text-lg font-semibold mt-3 text-[#183b56]">{product.name}</h3>
      <p className="text-[#577592] text-md font-medium">₹{product.price}</p>

      {/* Add to Cart Button */}
      <button 
        onClick={() => onAddToCart(product)}
        className="mt-3 w-full bg-[#2294ed] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#1d69a3] hover:cursor-pointer transition-all duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
