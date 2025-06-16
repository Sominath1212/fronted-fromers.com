import { toast } from "react-toastify";
import { createContext, useEffect, useState } from "react";

export const CardContext = createContext();

export const CardContextProvider = ({ children }) => {
  const [totalAmount, setTotalAmount] = useState(0);

  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const add_to_cart = (item, count = 1) => {
    const isPresent = cartItems.some((i) => i.item._id === item._id);

    if (isPresent) {
      const updatedCart = cartItems.map((ele) => {
        if (ele.item._id === item._id) {
          const updatedCount = ele.count + 1;
          setTotalAmount(totalAmount + item.price);
          return {
            ...ele,
            count: updatedCount,
            price: updatedCount * item.price,
          };
        }
        return ele;
      });
      setCartItems(updatedCart);
      toast.info("Item count incremented");
    } else {
      setCartItems((prev) => [...prev, { item, count, price: item.price }]);
      toast.success("Item added to cart");
    }
  };

  useEffect(() => {
    const total = cartItems.reduce((acc, curr) => acc + curr.price, 0);
    setTotalAmount(total);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const remove_from_cart = (id) => {
    const updatedCart = cartItems
      .map((ele) => {
        if (ele.item._id === id) {
          const updatedCount = ele.count - 1;
          if (updatedCount <= 0) {
            toast.warning("Item removed");
            return null; // remove item if count is 0
          }
          return {
            ...ele,
            count: updatedCount,
            price: updatedCount * ele.item.price,
          };
        }
        return ele;
      })
      .filter(Boolean); // removes null items

    setCartItems(updatedCart);
  };

  // 🚪 Clear cart on order or logout
  const clear_cart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
    toast.success("Cart cleared");
  };

  const value = {
    remove_from_cart,
    totalAmount,
    add_to_cart,
    clear_cart,
    cartItems,
  };
  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};
