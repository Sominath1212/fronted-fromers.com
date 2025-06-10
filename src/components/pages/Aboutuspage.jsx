import React from "react";

const Aboutuspage = () => {
  return (
    <section className="bg-black py-12 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#c4f254] mb-6">
          About Us
        </h2>
        <p className="text-white text-lg leading-relaxed">
          Welcome to{" "}
          <span className="font-semibold text-[#c4f254]">Formers.com</span> —
          your trusted online platform for buying and selling fresh, local farm
          products directly from farmers. Our mission is to connect rural
          farmers with consumers, eliminate middlemen, and ensure fair prices
          for both producers and buyers.
        </p>
        <div className="mt-8 text-left space-y-6">
          <h3 className="text-2xl font-semibold text-[#c4f254]">
            🌱 Who We Are
          </h3>
          <p className="text-white">
            We are a community-driven team focused on empowering farmers by
            providing a simple and effective way to showcase and sell their
            products online. Our platform helps bridge the gap between local
            producers and health-conscious customers.
          </p>

          <h3 className="text-2xl font-semibold text-[#c4f254]">
            🚜 What We Offer
          </h3>
          <ul className="list-disc list-inside text-white">
            <li>Fresh fruits, vegetables, grains, and organic products</li>
            <li>Direct-to-consumer delivery model</li>
            <li>Easy-to-use online store for farmers</li>
            <li>Fair pricing and secure payment options</li>
          </ul>

          <h3 className="text-2xl font-semibold text-[#c4f254]">
            🌍 Our Vision
          </h3>
          <p className="text-white">
            To build a sustainable agricultural economy by enabling digital
            access for every farmer in India. We believe in “Grow Local, Eat
            Local” and strive to support eco-friendly farming practices.
          </p>
        </div>

        <div className="mt-10">
          <p className="text-[#c4f254] font-semibold">
            Thank you for supporting local farmers and making healthier food
            choices!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutuspage;
