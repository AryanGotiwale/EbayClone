


import { createContext, useContext, useState } from "react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const token = localStorage.getItem("token");
  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const updateQuantity = async (productId, quantity) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/cart/update/${productId}`,
        { quantity },
        axiosConfig
      );
      setCartItems(res.data.products); // update local state
    } catch (error) {
      console.error("Error updating quantity:", error.response?.data || error.message);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/cart/remove/${productId}`,
        axiosConfig
      );
      setCartItems(res.data.products); // update local state
    } catch (error) {
      console.error("Error removing item:", error.response?.data || error.message);
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (acc, item) => acc + item?.productId?.price * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        updateQuantity,
        removeFromCart,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
