import { MdDelete } from "react-icons/md";
import defaultProductImage from "../../assets/images/farmproduct.jpg";
import { CardContext } from "../../context/cardContext";
import { useContext, useEffect, useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { toast } from "react-toastify";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";

function Cartpage() {
  const public_key =
    "pk_test_51RaapMHJ79tYArTtXnybXzzsjRbXccqkAECTElcpfonwdNgp03KbQEs8Xfp8ACjpjrcIoDOaNLjOIvCD24uwYS1300yaUWcBoa";

  const [isreturn, setIsreturn] = useState(false);
  const { add_to_cart, cartItems, totalAmount, remove_from_cart } =
    useContext(CardContext);
  const userId = localStorage.getItem("userId");

  const stripePromise = loadStripe("your_public_key_here"); // Replace with your test key
  const location = useLocation();

  const handleCheckout = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/payment/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cartItems }),
        }
      );
      const data = await response.json();
      window.location.href = data.url;
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  const placeOrder = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/order/add-order",
        {
          userId,
          items: cartItems,
          totalAmount: totalAmount + 15,
          paymentMethod: "UPI",
          paymentStatus: "Paid",
          orderStatus: "Processing",
          shippingAddress: {
            name: null,
            phone: null,
            pincode: null,
            locality: null,
            address: null,
            city: null,
            state: null,
          },
          deliveryDate: new Date().toISOString(),
          notes: "Leave the package at the doorstep if not available.",
          orderDate: new Date().toISOString(),
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (res.status === 200) {
        toast.success("Order placed successfully!");
        localStorage.removeItem("cartItems");
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Order error:", error);
      toast.error("Unable to place order, please try again later.");
    }
  };

  useEffect(() => {
    if (location.state?.fromSuccess) {
      placeOrder();
    }
  }, [location.state]);

  return (
    <Elements stripe={stripePromise}>
      <div className="pt-12 flex flex-col lg:flex-row min-h-screen gap-5 px-4 md:px-10">
        {/* Left Side - Cart Items */}
        <div className="w-full lg:w-[70%] space-y-4">
          <div className="hidden md:flex items-center justify-evenly px-5 shadow h-20 bg-white rounded">
            <h3 className="w-[40%] font-bold uppercase">product</h3>
            <h3 className="w-[20%] font-bold uppercase">Price</h3>
            <h3 className="w-[20%] font-bold uppercase">Quantity</h3>
           
          </div>

          <div className="overflow-y-auto max-h-[60vh] space-y-4">
            {cartItems.length !== 0 ? (
              cartItems.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row items-center justify-evenly p-4 shadow rounded bg-white gap-4"
                >
                  <div className="w-full md:w-[40%] flex items-center gap-3">
                    <img src={defaultProductImage} className="h-24 rounded" />
                    <div>
                      <h2 className="font-semibold text-lg">{item.name}</h2>
                      <p className="text-sm line-clamp-2">
                        {item.item.description}
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-[20%] font-bold text-center">
                    ₹{item.price.toFixed(2)}
                  </div>
                  <div className="w-full md:w-[20%] flex items-center justify-center space-x-2 text-xl">
                    <GrSubtractCircle
                      className="cursor-pointer hover:text-[#cf4]"
                      onClick={() => remove_from_cart(item.item._id)}
                    />
                    <span>{item.count}</span>
                    <IoIosAddCircleOutline
                      className="cursor-pointer hover:text-[#cf4]"
                      onClick={() => add_to_cart(item.item)}
                    />
                  </div>
                  {/* <div className="w-full md:w-[20%] text-center text-2xl">
                    <MdDelete className="cursor-pointer hover:text-[#cf4]" />
                  </div> */}
                </div>
              ))
            ) : (
              <h2 className="text-center text-2xl font-bold py-20">
                No Cart Items Present
              </h2>
            )}
          </div>
        </div>

        {/* Right Side - Summary & Coupon */}
        <div className="w-full lg:w-[30%] space-y-5">
          {/* Coupon Box */}
          <div className="bg-white shadow-lg rounded-lg p-5 space-y-3">
            <h2 className="font-bold">Apply Coupon</h2>
            <p>Using Promo Code</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                className="flex-1 border border-gray-300 text-sm rounded-lg px-4 py-2"
                placeholder="Coupon code"
              />
              <button className="bg-[#cf4] hover:bg-[#d1e893] text-white px-5 py-2 rounded-lg">
                Apply
              </button>
            </div>
          </div>

          {/* Price Summary */}
          <div className="bg-white shadow-lg rounded-lg p-5 space-y-4">
            <h2 className="font-semibold text-xl">Total</h2>
            <hr />
            <div className="space-y-2 font-medium">
              <div className="flex justify-between">
                <span>Total:</span>
                <span>₹{totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery:</span>
                <span>₹15</span>
              </div>
              <div className="flex justify-between">
                <span>Discount:</span>
                <span>₹0</span>
              </div>
            </div>
            <hr />
            <div className="flex justify-between font-bold">
              <span>Subtotal:</span>
              <span>₹{(totalAmount + 15).toFixed(2)}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-[#cf4] hover:bg-[#d1e893] text-white py-2 rounded-lg mt-2"
            >
              Check Order
            </button>
          </div>
        </div>
      </div>
    </Elements>
  );
}

export default Cartpage;
