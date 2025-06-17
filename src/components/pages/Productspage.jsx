import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

import { CardContext } from "../../context/cardContext";
import defaultProductImage from "../../assets/images/farmproduct.jpg";
import defautCategoryImage from "../../assets/images/categoryimage.jpg";

function Productspage() {
  const { add_to_cart } = useContext(CardContext);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/product/get-all-products", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch(() => toast.error("Failed to fetch products"));

    axios
      .get("http://localhost:5000/api/v1/category/get-categories", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setCategories(response.data.categories);
      })
      .catch(() => toast.error("Failed to fetch categories"));
  }, []);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.categoryId?.title === selectedCategory);

  return (
    <section className="py-8 px-4 relative md:top-10 sm:px-8 md:px-14 bg-gray-100 min-h-screen">
      {/* Category Scroll Bar */}
      <div className="flex space-x-4 overflow-x-auto pb-3 mb-4 scrollbar-thin scrollbar-thumb-gray-400">
        {categories.map((category, i) => (
          <div
            key={i}
            onClick={() =>
              selectedCategory === category.title
                ? setSelectedCategory("All")
                : setSelectedCategory(category.title)
            }
            className="min-w-[90px] flex flex-col items-center cursor-pointer"
          >
            <img
              src={category.image || defautCategoryImage}
              alt={category.title}
              className={`w-16 h-16 object-cover rounded-full border-2 ${
                selectedCategory === category.title
                  ? "border-green-500"
                  : "border-gray-300"
              } hover:border-green-500 transition`}
            />
            <p className="text-sm font-semibold text-center mt-1 whitespace-nowrap">
              {category.title}
            </p>
          </div>
        ))}
      </div>

      <hr className="mb-4" />

      {/* Section Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-6 text-center">
        Our Products
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredProducts.map((product, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg overflow-hidden relative group transition-transform transform hover:-translate-y-1"
          >
            <img
              src={product.image || defaultProductImage}
              alt={product.name}
              className="w-full h-48 sm:h-56 md:h-60 object-cover"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[rgb(0,0,0,0.5)] bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center gap-4 p-4 text-center">
              <h2 className="text-[#c4f254] text-lg font-semibold">
                {product.name}
              </h2>
              <p className="text-white text-sm line-clamp-1">
                {product.description || "No description"}
              </p>
              <Link to={`/productdetails/${product._id}`}>
                <button className="bg-[#c4f254] text-black font-semibold py-2 px-4 rounded hover:bg-[#b4e244] transition">
                  View Product
                </button>
              </Link>
              <button
                onClick={() => add_to_cart(product, 1)}
                className="bg-[#c4f254] text-black font-semibold py-2 px-4 rounded hover:bg-[#b4e244] transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Productspage;
