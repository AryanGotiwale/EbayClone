// import { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   // Add product or increase quantity
//   const addToCart = (product) => {
//     setCartItems((prev) => {
//         const existing = prev.find((item) => item._id === product._id);
//         if (existing) {
//           return prev.map((item) =>
//             item._id === product._id
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           );
//         }
//         return [...prev, { ...product, quantity: 1 }];
//       });
//   };

//   // Update quantity directly (+ / -)
//   const updateQuantity = (productId, quantity) => {
//     setCartItems((prev) =>
//       prev
//         .map((item) =>
//           item._id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   };

//   // Remove item completely
//   const removeFromCart = (productId) => {
//     setCartItems((prev) => prev.filter((item) => item._id !== productId));
//   };

//   // Calculate total price
//   const getTotalPrice = () => {
//     return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         removeFromCart,
//         updateQuantity,
//         getTotalPrice,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
// import { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems((prev) => {
//       const existing = prev.find((item) => item._id === product._id);
//       if (existing) {
//         return prev.map((item) =>
//           item._id === product._id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
//       return [...prev, { ...product, quantity: 1 }];
//     });
//   };

//   const decreaseQuantity = (productId) => {
//     setCartItems((prev) =>
//       prev
//         .map((item) =>
//           item._id === productId
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   };

//   const updateQuantity = (productId, newQty) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item._id === productId ? { ...item, quantity: newQty } : item
//       )
//     );
//   };

//   const removeFromCart = (productId) => {
//     setCartItems((prev) => prev.filter((item) => item._id !== productId));
//   };

//   const getTotalPrice = () => {
//     return cartItems.reduce(
//       (acc, item) => acc + item.price * item.quantity,
//       0
//     );
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         decreaseQuantity,
//         removeFromCart,
//         updateQuantity,
//         getTotalPrice,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);

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
