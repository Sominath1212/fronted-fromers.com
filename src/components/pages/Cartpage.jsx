import { MdDelete } from "react-icons/md";
import defaultProductImage from "../../assets/images/farmproduct.jpg";
import { CardContext } from "../../context/cardContext";
import { useContext, useEffect, useState } from "react";
function Cartpage() {
  const { add_to_card, cardItems, totalAmount, remove_from_card } =useContext(CardContext);

  useEffect(() => {
    console.log(totalAmount);
    console.log(cardItems);
  }, []);

  const product = {
    _id: "684901f7258f741da7d2b0a4",
    name: "AgroBoost Fertilizers",
    price: 406.59,
    image: null,
    categoryId: {
      _id: "6846e78483e94d4c3b2f1a62",
      title: "Fertilizers",
      image: null,
    },
    stock: 96,
    description:
      "AgroShield Plus is a highly effective broad-spectrum systemic pesticide formulated to provide long-lasting protection against a wide range of chewing and sucking pests. Engineered using advanced chemical technology, it penetrates plant tissues and is translocated throughout the plant, offering comprehensive protection from root to leaf.\n\nIts dual action formula acts both by contact and ingestion, ensuring quick knockdown and prolonged residual activity. AgroShield Plus is ideal for use in vegetables, fruits, cotton, rice, pulses, and ornamental plants.",
    weight: "250g",
  };
  return (
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
          <div className="flex items-center justify-evenly px-5 py-1 shadow  ">
            <div className="w-[40%]  flex  p-2 space-x-2 items-center ">
              <img src={defaultProductImage} className="h-28 " />

              <div className="flex flex-col">
                <h2 className="font-semibold text-xl">{product.name}</h2>
                <p className="text-sm line-clamp-2">{product.description}</p>
              </div>
            </div>
            <div className="w-[20%]  font-bold uppercase ">{product.price}</div>
            <div className="w-[20%]  font-bold uppercase ">{1}</div>
            <div className="w-[20%]  font-bold uppercase text-2xl cursor-pointer">
              <MdDelete />
            </div>
          </div>
          <div className="flex items-center justify-evenly p-5 shadow  ">
            <div className="w-[40%]  flex  p-2 space-x-2 items-center ">
              <img src={defaultProductImage} className="h-28 " />

              <div className="flex flex-col">
                <h2 className="font-semibold text-xl">{product.name}</h2>
                <p className="text-sm line-clamp-2">{product.description}</p>
              </div>
            </div>
            <div className="w-[20%] font-bold uppercase ">{product.price}</div>
            <div className="w-[20%] font-bold uppercase flex items-center ">
              {1}
            </div>
            <div className="w-[20%] font-bold uppercase text-2xl ">
              <MdDelete />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[30%] h-screen bg-red-300 flex text-center justify-center flex-col"></div>
    </div>
  );
}

export default Cartpage;
