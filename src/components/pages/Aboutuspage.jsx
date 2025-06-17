import React from "react";
import banner from "../../assets/images/background1.jpg";

const Aboutuspage = () => {
  return (
    <section className="relative min-h-screen w-full">
      {/* Background Image */}
      <img
        src={banner}
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center px-4 md:px-20 py-10">
        <div className="text-white text-center max-w-4xl">
          <h2 className="text-2xl md:text-4xl font-bold text-[#c4f254] mb-6">
            About Us
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-8">
            Welcome to{" "}
            <span className="font-semibold text-[#c4f254]">Formers.com</span> —
            your trusted online platform for buying and selling fresh, local
            farm products directly from farmers. Our mission is to connect rural
            farmers with consumers, eliminate middlemen, and ensure fair prices
            for both producers and buyers.
          </p>

          <div className="text-left space-y-6">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-[#c4f254]">
                🌱 Who We Are
              </h3>
              <p>
                We are a community-driven team focused on empowering farmers by
                providing a simple and effective way to showcase and sell their
                products online. Our platform helps bridge the gap between local
                producers and health-conscious customers.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-[#c4f254]">
                🚜 What We Offer
              </h3>
              <ul className="list-disc list-inside">
                <li>Fresh fruits, vegetables, grains, and organic products</li>
                <li>Direct-to-consumer delivery model</li>
                <li>Easy-to-use online store for farmers</li>
                <li>Fair pricing and secure payment options</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-[#c4f254]">
                🌍 Our Vision
              </h3>
              <p>
                To build a sustainable agricultural economy by enabling digital
                access for every farmer in India. We believe in “Grow Local, Eat
                Local” and strive to support eco-friendly farming practices.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-[#c4f254] font-semibold">
              Thank you for supporting local farmers and making healthier food
              choices!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutuspage;
