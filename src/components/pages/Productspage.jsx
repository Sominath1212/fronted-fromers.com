import { use, useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/productContext";
import defaultProductImage from "../../assets/images/farmproduct.jpg";
import defautCategoryImage from "../../assets/images/categoryimage.jpg";
import { Link } from "react-router-dom";
import { CardContext } from "../../context/cardContext";
import axios from "axios";
function Productspage() {
  const categoriesapi = "localhost:5000/api/v1/category/get-categories";
  const productapi = "http://localhost:5000/api/v1/product/get-all-products";
  const { add_to_card } = useContext(CardContext);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // const { categories } = useContext(ProductContext);
const [categories,setCategories]=useState([])
  const [products, setProducts] = useState([]);
  // console.log(products);
  // console.log(categories);

  useEffect(() => {
    try {
      axios
        .get(productapi, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          // console.log("Response:", response.data.products);
          setProducts(response.data.products);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          toast.error("Failed to fetch products");
        });
    } catch (err) {
      console.error("Unexpected error:", err);
      toast.error("Something went wrong");
    }

    try {
      axios
        .get("http://localhost:5000/api/v1/category/get-categories", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((repsonce) => {
          // console.log("category", repsonce.data.categories);
          setCategories(repsonce.data.categories);
        });
    } catch (error) {
      console.error("Unexpected error:", err);
      toast.error("Something went wrong in category");
    }
  });

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.categoryId.title === selectedCategory);

  return (
    <section className="relative top-13  border p-5 ">
      <div className="flex space-x-3 overflow-x-scroll px-14 items-start justify-center text-center">
        {categories.map((category, i) => {
          return (
            <div
              onClick={() => {
                selectedCategory === category.title
                  ? setSelectedCategory("All")
                  : setSelectedCategory(category.title);
              }}
              className="  min-w-40 flex flex-col items-center  cursor-pointer  justify-center"
            >
              <img
                src={category.image ? category.image : defautCategoryImage}
                alt=""
                className={`w-18 h-18 object-fill rounded-full border-2 hover:border-green-500 ${
                  selectedCategory === category.title ? "border-green-500" : ""
                }`}
              />
              <p className="font-semibold text-sm">{category.title}</p>
            </div>
          );
        })}
      </div>
      <hr />
      <h1 className="font-bold text-4xl uppercase my-3">Our Products</h1>
      <div className="grid grid-col-5 md:grid-cols-4 sm:grid-cols-2">
        {filteredProducts.map((product, i) => {
          return (
            <div
              className="w-50 h-70 my-3 bg-white rounded-2xl shadow-lg overflow-hidden relative group flex-shrink-0 group"
              key={i}
            >
              {/* Product Image*/}

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

                <p className="text-white text-sm text-center line-clamp-1">
                  {product.desiption}
                </p>
                <Link to={`/productdetails/${product._id}`}>
                  <button className="bg-[#c4f254] text-black font-semibold py-2 rounded hover:bg-[#b4e244] transition px-4 cursor-pointer group ">
                    View Product
                  </button>
                </Link>
                <button
                  onClick={() => add_to_card(product, 1)}
                  className="bg-[#c4f254] text-black font-semibold py-2 rounded hover:bg-[#b4e244] transition px-4 cursor-pointer group "
                >
                  Add TO Card
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Productspage;
