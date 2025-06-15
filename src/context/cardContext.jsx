import { toast } from "react-toastify";
import { createContext, useEffect, useState } from "react";
import Cartpage from "../components/pages/Cartpage";
export const CardContext = createContext();

export const CardContextProvider = ({ children }) => {
  const [cardItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const add_to_card = (item) => {
    const ispresent = cardItems.some((Cart) => Cart.item._id === item._id);
    // console.log(ispresent);

    if (!ispresent) {
      setCartItems((prev) => [
        ...prev,
        { item: item, price: item.price, count: 1 },
      ]);
      setTotalAmount(totalAmount + item.price);
      toast.success("new added");
    } else {
      for (let i = 0; i < cardItems.length; i++) {
        if (cardItems[i].item._id == item._id) {
          cardItems[i].count = cardItems[i].count + 1;
          cardItems[i].price = cardItems[i].count * item.price;
          setTotalAmount(totalAmount + item.price);
          toast.success("Quantity incressed");
        }
      }
    }
  };
  const remove_from_card = (item) => {
    for (let i = 0; i < cardItems.length; i++) {
      if (cardItems[i].item._id === item._id) {
        cardItems[i].count = cardItems[i].count - 1;
        cardItems[i].price = cardItems[i].price - item.price;
        setTotalAmount(totalAmount - item.price);
        toast.info("Descress");
      }
    }
  };

  const value = { remove_from_card, totalAmount, add_to_card, cardItems };
  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};
