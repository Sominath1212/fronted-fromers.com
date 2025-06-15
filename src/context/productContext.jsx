import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
const productapi = "http://localhost:5000/api/v1/product/get-all-products";
const categoriesapi = "localhost:5000/api/v1/category/get-categories";
export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchData = () => {
    // console.log(`Bearer ${localStorage.getItem("token")}`);

    try {
      axios
        .get(productapi, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          console.log("Response:", response.data.products);
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
          console.log("category", repsonce.data.categories);
          setCategories(repsonce.data.categories);
        });
    } catch (error) {
      console.error("Unexpected error:", err);
      toast.error("Something went wrong in category");
    }
  };

  const values = {
    products,
    categories,
    fetchData,
  };

  //   console.log("Context:", products, categories);

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};
