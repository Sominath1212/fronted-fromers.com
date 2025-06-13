import React, { useContext, useEffect } from "react";
import bannerImage from "../../assets/images/1.png";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import { ProductContext } from "../../context/productContext";
import defaultProductImage from "../../assets/images/farmproduct.jpg";
const LandingPage = () => {
  const { fetchData, products } = useContext(ProductContext);

  useEffect(() => {
    fetchData();
  }, []);
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
          <div className="flex overflow-x-auto space-x-6 px-4 py-6 max-w-6xl mx-auto  hide-scrollbar">
            {products.map((product, i) => (
              <div
                className="w-50 h-70 bg-white rounded-2xl shadow-lg overflow-hidden relative group flex-shrink-0"
                key={i}
              >
                {/* Product Image */}
                <img
                  src={product.image ? product.image : defaultProductImage}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-[rgb(0,0,0,.5)] bg-opacity-70 flex flex-col justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 items-center gap-y-5">
                  <h2 className="text-[#c4f254] text-xl font-semibold text-center">
                    {product.name}
                  </h2>

                  <p className="text-white text-sm text-center">
                    {product.description}
                  </p>

                  <button className="bg-[#c4f254] text-black font-semibold py-2 rounded hover:bg-[#b4e244] transition px-4 cursor-pointer">
                    Add to Cart
                  </button>
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
