import React from "react";

const About = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-20 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-8 underline decoration-green-300">
        About MedSupply
      </h2>

      <div className="max-w-5xl mx-auto space-y-8 text-gray-700 text-lg leading-relaxed">
        <section>
          <h3 className="text-2xl font-semibold text-green-800 mb-2">Who We Are</h3>
          <p>
            MedSupply is your trusted online health essentials provider, delivering medical supplies and hygiene products directly to your doorstep. We are committed to making healthcare more accessible, affordable, and convenient for every individual and family.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green-800 mb-2">Our Mission</h3>
          <p>
            Our mission is to ensure that everyone has access to high-quality medical products with just a few clicks. Whether it's a digital thermometer, face mask, or a complete first aid kit — MedSupply has you covered.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green-800 mb-2">Why Choose Us?</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Wide range of health and hygiene products</li>
            <li>Trusted brands and certified medical equipment</li>
            <li>Secure online payments and fast delivery</li>
            <li>Responsive customer support</li>
            <li>Serving both individuals and healthcare institutions</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green-800 mb-2">Meet the Team</h3>
          <p>
            We are a passionate group of developers, designers, and healthcare professionals working together to improve lives through technology and reliable health solutions.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
