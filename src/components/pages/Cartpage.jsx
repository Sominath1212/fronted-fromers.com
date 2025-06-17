import { MdDelete } from "react-icons/md";
import defaultProductImage from "../../assets/images/farmproduct.jpg";
import { CardContext } from "../../context/cardContext";
import { useContext, useEffect, useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { toast } from "react-toastify";
import { Elements, useStripe } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
function Cartpage() {
  const [isreturn, setIsreturn] = useState(false);
  const { add_to_cart, cartItems, totalAmount, remove_from_cart } =
    useContext(CardContext);
   const userId= localStorage.getItem("userId");
  const public_key =
    "pk_test_51RaapMHJ79tYArTtXnybXzzsjRbXccqkAECTElcpfonwdNgp03KbQEs8Xfp8ACjpjrcIoDOaNLjOIvCD24uwYS1300yaUWcBoa";

  // console.log(cartItems);

  const stripePromise = loadStripe(public_key); // Replace with your test key
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
      console.log(response);

      window.location.href = data.url;
      // placeOrder();
    } catch (error) {
      console.error("Payment error:", error);
    }

    // setIsreturn(true);
  };

  // useEffect(() => {
  const placeOrder = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/order/add-order",
        {
          userId: userId,
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
  // }, [isreturn]);

  useEffect(() => {
    if (location.state?.fromSuccess) {
      placeOrder();
    }
  }, [location.state]);

  return (
    <Elements stripe={stripePromise}>
      <div className="relative pt-12 flex min-h-[100vh] ">
        <div className="w-[70%] px-5">
          <div className="flex items-center justify-evenly px-5 shadow h-20  ">
            <h3 className="w-[40%] font-bold uppercase ">product</h3>
            <h3 className="w-[20%] font-bold uppercase ">Price</h3>
            <h3 className="w-[20%] font-bold uppercase ">Quantity</h3>
            <h3 className="w-[20%] font-bold uppercase ">remove </h3>
          </div>

          {/* /product card making */}
          <div className="overflow-y-scroll h-[70%]">
            {cartItems.length !== 0 ? (
              cartItems.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="flex items-center justify-evenly p-5 shadow  "
                  >
                    <div className="w-[40%]  flex  p-2 space-x-2 items-center ">
                      <img src={defaultProductImage} className="h-28 " />

                      <div className="flex flex-col">
                        <h2 className="font-semibold text-xl">{item.name}</h2>
                        <p className="text-sm line-clamp-2 w-[70%]">
                          {item.item.description}
                        </p>
                      </div>
                    </div>
                    <div className="w-[20%] font-bold uppercase ">
                      {item.price.toFixed(2)}
                    </div>
                    <div className="w-[20%] font-bold text-2xl space-x-1 uppercase flex items-center ">
                      <GrSubtractCircle
                        className="cursor-pointer hover:text-[#cf4]"
                        onClick={() => {
                          remove_from_cart(item.item._id);
                        }}
                      />
                      {item.count}
                      <IoIosAddCircleOutline
                        className="cursor-pointer hover:text-[#cf4]"
                        onClick={() => add_to_cart(item.item)}
                      />
                    </div>
                    <div className="w-[20%] font-bold uppercase text-2xl ">
                      <MdDelete
                        className="cursor-pointer hover:text-[#cf4]"
                        // onClick={() => remove_from_card(item)}
                      />
                    </div>
                  </div>
                );
              })
            ) : (
              <h2 className="text-center  flex-col flex items-center justify-center h-[100%] text-4xl font-bold">
                No such Cart items present
              </h2>
            )}
          </div>
        </div>
        <hr className="w-4 h-full bg-gray-500" />
        <div className="w-[30%] h-screenflex text-center  space-y-5 flex-col px-12 py-2">
          <div className="flex shadow-2xl bg-white space-y-3 rounded   text-start font-semibold w-[100%]">
            <div className="flex space-y-3 flex-col p-5">
              <h2 className="font-bold">Apply Coupon</h2>
              <p>Using Promo Code</p>
              <div className="flex justify-between gap-5 ">
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#cf4] dark:border-black dark:placeholder-black dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Coupon code"
                  required
                />
                <button
                  type="submit"
                  className="text-white bg-[#cf4] hover:bg-[#d1e893] focus:ring-4 outline-none border-none focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 cursor-pointer dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-full space-y-5 p-5 items-start text-start flex-col shadow-2xl rounded-2xl">
            <h2 className="font-semibold text-xl">Total</h2>
            <hr className="text-black bg-black h-[0.5px] w-full" />
            <div className="flex items-start  flex-col w-full font-semibold">
              <h2 className="flex items-start justify-between   w-full ">
                <span>Total :</span> <span>₹{totalAmount.toFixed(2)}</span>
              </h2>
              <h2 className="flex items-start justify-between   w-full ">
                <span>Delivery :</span>
                <span> ₹{15}</span>
              </h2>
              <h2 className="flex items-start justify-between   w-full ">
                <span>Discount :</span>
                <span>₹{0}</span>{" "}
              </h2>
            </div>

            <hr className="text-black bg-black h-[0.5px] w-full" />

            <h2 className="flex items-start justify-between font-semibold   w-full ">
              <span>SubTotal :</span>{" "}
              <span>₹{(totalAmount + 15 + 0).toFixed(2)}</span>
            </h2>
            <hr />
            <button
              onClick={handleCheckout}
              className="text-white bg-[#cf4] hover:bg-[#d1e893] focus:ring-4 outline-none border-none focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 cursor-pointer dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
