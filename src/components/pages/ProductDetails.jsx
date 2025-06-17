import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/productContext";

import { useParams } from "react-router-dom";
import defaultProductImage from "../../assets/images/farmproduct.jpg";
import { toast } from "react-toastify";
import axios from "axios";
import { LuBoxes } from "react-icons/lu";
import { IoIosPricetag } from "react-icons/io";
import { FaWeightHanging } from "react-icons/fa";
import categoryDefautImage from "../../assets/images/categoryimage.jpg";

import { CardContext } from "../../context/cardContext";
import Cartpage from "./Cartpage";
function ProductDetails() {
  const { add_to_cart, cartItems } = useContext(CardContext);

  const { products } = useContext(ProductContext);
  // console.log(products);
  const [product, setProduct] = useState({});

  useEffect(() => {
    try {
      axios
        .get(`http://localhost:5000/api/v1/product/get-product/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((responce) => {
          if (responce) {
            setProduct(responce.data.product[0]);
            // console.log(responce.data.product[0]);
          }
        });
    } catch (err) {
      toast.error("somethig happened");
    }
  }, []);
  const { id } = useParams();

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  return (
    <div className="relative top-15 min-h-[98%]  flex flex-col items-center justify-center">
      <div className="  flex  h-[70%]  w-full relative px-20">
        <div className="w-[30%]  h-[50%] rounded-2xl">
          {" "}
          <img
            src={product.image ? product.image : defaultProductImage}
            alt={product.name}
            className="w-full h-full rounded-2xl p-5 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="w-[70%] h-auto flex text-start  flex-col justify-start gap-2  p-5">
          <h2 className="text-5xl font-bold ">{product.name}</h2>
          <div className="flex items-center space-x-2 text-xl font-semibold">
            <img
              src={
                product?.categoryId?.image
                  ? product?.categoryId?.image
                  : categoryDefautImage
              }
              alt={product?.categoryId?.title}
              className="w-12 h-12  rounded-full  border-2 border-[#c4f254]  object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <h2 className="font-semibold">{product?.categoryId?.title}</h2>
          </div>

          <div className="flex  items-start flex-col ">
            <h2 className=" w-auto text-3xl">Description:</h2>
            <h2 className="overflow-y-scroll h-20 ">{product.description}</h2>
          </div>
          <div className="flex  items-start justify-start text-3xl">
            <IoIosPricetag className="relative top-1 m-5" />
            <h2>₹{product.price}</h2>
          </div>
          <div className="flex  items-start justify-start text-3xl">
            <FaWeightHanging className="relative top-1 m-5" />
            <h2 className="text-3xl">{product.weight}</h2>
          </div>
          <div className="flex  items-start justify-start text-3xl">
            <LuBoxes className="relative top-1 m-5" />
            <h2 className="text-3xl">{product.stock}</h2>
          </div>

          <button
            onClick={() => add_to_cart(product, 1)}
            className="bg-[#c4f254] text-black font-semibold py-2 rounded hover:bg-green-500 transition  px-4 cursor-pointer group "
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
