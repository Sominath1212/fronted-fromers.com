import { use, useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/productContext";
import defaultProductImage from "../../assets/images/farmproduct.jpg";
import defautCategoryImage from "../../assets/images/categoryimage.jpg";
import { Link } from "react-router-dom";
function Productspage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { products, categories } = useContext(ProductContext);
  console.log(products);
  console.log(categories);

  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);

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
                className={`w-25 h-25 object-fill rounded-full border-2 hover:border-green-500 ${
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

                <p className="text-white text-sm text-center">
                  {product.description}
                </p>
                <Link to={`/productdetails/${product._id}`}>
                  <button className="bg-[#c4f254] text-black font-semibold py-2 rounded hover:bg-[#b4e244] transition px-4 cursor-pointer group ">
                    View Product
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Productspage;
