import React from "react";
import ProductCard from "../components/ProductCard";

// Assets
import handGloves from "../assets/handgloves.png";
import dettol from "../assets/dettol.png";
import mask from "../assets/mask.png";
import digitalThermometer from "../assets/digitalThermometer.png";
import firstAidKit from "../assets/firstAidKit.png";
import pulseOximeter from "../assets/pulseOximeter.png";
import bpMonitor from "../assets/bpMonitor.png";
import stethoscope from "../assets/stethoscope.png";
import surgicalGown from "../assets/surgicalGown.png";
import nebulizerMachine from "../assets/nebulizerMachine.png";
import n95Mask from "../assets/n95Mask.png";
import antisepticWipes from "../assets/antisepticWipes.png";
import vaporub from "../assets/vaporub.png";
import boroline from "../assets/boroline.png";
import ankleSupport from "../assets/ankleSupport.png";
import dettol2 from "../assets/dettol2.png";
import disprin from "../assets/disprin.png";
import kneeSupport from "../assets/kneeSupport.png";

const Products = ({ addToCart }) => {
  const products = [
    { id: 13, name: "Vaporub", price: 99, image: vaporub },
    { id: 14, name: "Boroline", price: 80, image: boroline },
    { id: 15, name: "Ankle Support", price: 400, image: ankleSupport },
    { id: 16, name: "Dettol Antiseptic", price: 150, image: dettol2 },
    { id: 17, name: "Disprin", price: 100, image: disprin },
    { id: 18, name: "Knee Support", price: 350, image: kneeSupport },
    { id: 1, name: "Hand Sanitizer", price: 199, image: dettol },
    { id: 2, name: "Face Mask", price: 99, image: mask },
    { id: 3, name: "Hand Gloves", price: 149, image: handGloves },
    { id: 4, name: "Digital Thermometer", price: 499, image: digitalThermometer },
    { id: 5, name: "First Aid Kit", price: 899, image: firstAidKit },
    { id: 6, name: "Pulse Oximeter", price: 1299, image: pulseOximeter },
    { id: 7, name: "Blood Pressure Monitor", price: 2199, image: bpMonitor },
    { id: 8, name: "Stethoscope", price: 1799, image: stethoscope },
    { id: 9, name: "Surgical Gown", price: 999, image: surgicalGown },
    { id: 10, name: "Nebulizer Machine", price: 2499, image: nebulizerMachine },
    { id: 11, name: "N95 Respirator Mask", price: 399, image: n95Mask },
    { id: 12, name: "Antiseptic Wipes", price: 299, image: antisepticWipes },
  ];

  return (
    <div className="bg-white py-10 px-4 md:px-10 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-10 underline decoration-green-300">
        Explore Our Health Essentials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
          >
            <ProductCard product={product} onAddToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
