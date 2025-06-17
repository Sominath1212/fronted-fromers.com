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

function ProductDetails() {
  const { add_to_cart, cartItems } = useContext(CardContext);
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/product/get-product/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response) {
          setProduct(response.data.product[0]);
        }
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  }, [id]);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <div className="relative min-h-screen py-6 px-4 md:px-20 flex flex-col items-center justify-start">
      <div className="w-full flex flex-col md:flex-row gap-6 items-start">
        {/* Product Image */}
        <div className="w-full md:w-1/3">
          <img
            src={product.image ? product.image : defaultProductImage}
            alt={product.name}
            className="w-full h-full max-h-[300px] object-cover rounded-2xl p-2"
          />
        </div>

        {/* Product Info */}
        <div className="w-full md:w-2/3 flex flex-col gap-4 text-start p-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            {product.name}
          </h2>

          {/* Category */}
          <div className="flex items-center space-x-3 text-lg">
            <img
              src={
                product?.categoryId?.image
                  ? product?.categoryId?.image
                  : categoryDefautImage
              }
              alt={product?.categoryId?.title}
              className="w-10 h-10 rounded-full border-2 border-[#c4f254] object-cover"
            />
            <h2 className="font-medium">{product?.categoryId?.title}</h2>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-xl font-semibold mb-1">Description:</h2>
            <p className="max-h-[80px] overflow-y-auto pr-1 text-sm sm:text-base text-gray-100">
              {product.description}
            </p>
          </div>

          {/* Price */}
          <div className="flex items-center text-lg sm:text-xl">
            <IoIosPricetag className="mr-3 text-[#c4f254]" />
            <span>₹{product.price}</span>
          </div>

          {/* Weight */}
          <div className="flex items-center text-lg sm:text-xl">
            <FaWeightHanging className="mr-3 text-[#c4f254]" />
            <span>{product.weight}</span>
          </div>

          {/* Stock */}
          <div className="flex items-center text-lg sm:text-xl">
            <LuBoxes className="mr-3 text-[#c4f254]" />
            <span>{product.stock}</span>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => add_to_cart(product, 1)}
            className="mt-4 w-full sm:w-auto bg-[#c4f254] text-black font-semibold py-2 px-6 rounded hover:bg-green-500 transition"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
