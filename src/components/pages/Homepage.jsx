import React from "react";
import bannerImage from "../../assets/images/1.png";
import { Link } from "react-router-dom";
import Footer from "../Footer";

const LandingPage = () => {
  return (
    <main className="bg-[#c4f254] text-white">
      {" "}
      <div className="w-full h-screen relative">
        {/* Banner Image */}
        <img
          src={bannerImage}
          alt="Fertilizer Banner"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#c4f254] bg-opacity-50 flex flex-col items-center justify-center text-black text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Grow More with Organic Fertilizers!
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl">
            Welcome to Formers.com – your one-stop solution for high-quality,
            eco-friendly fertilizers and pesticides that ensure healthy crops
            and better yields.
          </p>
          <Link to={"/product"}>
            {" "}
            <button className="border border-black font-semibold cursor-pointer bg-[#c4f254] hover:bg-[#d5ef93] text-black px-6 py-3 rounded-lg shadow-lg transition-all duration-300">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
      <div>
        {/* Popular Products Section */}
        <section className="py-16 text-center ">
          <h2 className="text-3xl font-semibold mb-10">Popular Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
            {[
              {
                name: "Organic Urea",
                price: "₹499",
                img: "https://via.placeholder.com/150",
              },
              {
                name: "Compost Mix",
                price: "₹299",
                img: "https://via.placeholder.com/150",
              },
              {
                name: "Neem Cake Fertilizer",
                price: "₹399",
                img: "https://via.placeholder.com/150",
              },
            ].map((product, i) => (
              <div
                key={i}
                className="bg-white text-black shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-[#c4f254] font-bold">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Categories Section */}
        <section className="py-16 text-white text-center">
          <h2 className="text-3xl font-semibold mb-10">Popular Categories</h2>
          <div className="flex flex-wrap justify-center gap-6 px-4">
            {[
              "Organic Fertilizers",
              "Liquid Fertilizers",
              "Plant Growth Boosters",
              "Pesticides",
              "Soil Conditioners",
            ].map((cat, i) => (
              <div
                key={i}
                className="bg-white text-black px-6 py-4 shadow-md rounded-lg text-lg font-medium hover:bg-green-100 transition"
              >
                {cat}
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
};

export default LandingPage;
