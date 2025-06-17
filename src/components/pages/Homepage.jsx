import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import { ProductContext } from "../../context/productContext";
import defaultProductImage from "../../assets/images/farmproduct.jpg";
import defautCategoryImage from "../../assets/images/categoryimage.jpg";
import banner1 from "../../assets/images/background1.jpg";
import banner2 from "../../assets/images/background2.jpg";
import banner3 from "../../assets/images/background3.jpg";
import banner4 from "../../assets/images/background4.jpg";

const LandingPage = () => {
  const bannerImages = [banner1, banner2, banner3, banner4];
  const { fetchData, products, categories } = useContext(ProductContext);

  useEffect(() => {
    fetchData();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === bannerImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-[#c4f254] text-black">
      <div className="w-full h-screen relative overflow-hidden">
        <img
          src={bannerImages[currentIndex]}
          alt="Banner"
          className="w-full h-full object-cover transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.1)] flex flex-col items-center justify-center text-black text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Grow More with Organic Fertilizers!
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl">
            Welcome to Formers.com – your one-stop solution for high-quality,
            eco-friendly fertilizers and pesticides that ensure healthy crops
            and better yields.
          </p>
          <Link to="/products">
            <button className="border border-black font-semibold cursor-pointer bg-[#c4f254] hover:bg-[#d5ef93] text-black px-6 py-3 rounded-lg shadow-lg transition-all duration-300">
              Shop Now
            </button>
          </Link>
        </div>
      </div>

      <section className="py-16 px-4 md:px-0 text-center">
        <h2 className="text-3xl font-semibold mb-6">Popular Products</h2>
        <div className="flex justify-end pr-6 md:pr-10">
          <Link to="/products">
            <p className="text-black text-lg md:text-xl font-bold hover:text-[#7fd794e7] cursor-pointer">
              See All
            </p>
          </Link>
        </div>
        <div className="flex overflow-x-auto space-x-6 py-8 max-w-6xl mx-auto px-4 hide-scrollbar">
          {products.map((product, i) => (
            <Link
              to={`/productdetails/${product._id}`}
              key={i}
              className="flex-shrink-0"
            >
              <div className="w-64 h-72 bg-white rounded-2xl shadow-lg overflow-hidden relative group">
                <img
                  src={product.image || defaultProductImage}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] flex flex-col justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 items-center gap-y-3">
                  <h2 className="text-[#c4f254] text-lg font-semibold text-center">
                    {product.name}
                  </h2>
                  <button className="bg-[#c4f254] text-black font-semibold py-1.5 px-4 rounded hover:bg-[#b4e244] transition">
                    View Product
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 text-black text-center">
        <h2 className="text-3xl font-semibold mb-8">Popular Categories</h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-white px-6 py-4 shadow-md rounded-lg text-base md:text-lg font-medium hover:bg-green-100 transition"
            >
              {cat.title}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default LandingPage;
