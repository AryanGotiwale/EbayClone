// import { useCart } from '../Context/CartContext';

// const Cart = () => {
//   const { cartItems, decreaseQuantity, removeFromCart, getTotalPrice } = useCart();

//   return (
//     <div>
//       <h2>Cart</h2>
//       {cartItems.map((item) => (
//         <div key={item._id}>
//           <h4>{item.title}</h4>
//           <p>₹{item.price} x {item.quantity}</p>
//           <button onClick={() => decreaseQuantity(item._id)}>-</button>
//           <button onClick={() => removeFromCart(item._id)}>Remove</button>
//         </div>
//       ))}
//       <h3>Total: ₹{getTotalPrice()}</h3>
//     </div>
//   );
// };

// export default Cart;
// import React from "react";
// import { useCart } from "../Context/CartContext";

// const Cart = () => {

    
//   const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();

//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await axios.get("http://localhost:5000/api/cart/get", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setCartItems(res.data);
//       } catch (error) {
//         console.error("Error fetching cart:", error);
//       }
//     };

//     fetchCart();
//   }, []);

//   return (
//     <div className="cart-page" style={{ padding: "20px", background: "#f4fff4" }}>
//       <h2>🛒 Cart</h2>

//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         cartItems.map((item) => (
//           <div key={item._id} style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
//             <img src={item.image} alt={item.name} style={{ width: "100px", marginRight: "20px" }} />
//             <div>
//               <h3>{item.name}</h3>
//               <p>₹{item.price} x {item.quantity}</p>

//               <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "5px" }}>
//                 <button onClick={() => updateQuantity(item._id, item.quantity - 1)} disabled={item.quantity <= 1}>
//                   ➖
//                 </button>
//                 <span>{item.quantity}</span>
//                 <button onClick={() => updateQuantity(item._id, item.quantity + 1)}>
//                   ➕
//                 </button>
//                 <button onClick={() => removeFromCart(item._id)} style={{ marginLeft: "15px", backgroundColor: "red", color: "#fff" }}>
//                   Remove
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))
//       )}

//       <h3>Total: ₹{getTotalPrice()}</h3>
//     </div>
//   );
// };

// export default Cart;


// import React, { useEffect } from "react";
// import axios from "axios";
// import { useCart } from "../Context/CartContext";

// const Cart = () => {
//   const {
//     cartItems,
//     setCartItems,
//     removeFromCart,
//     updateQuantity,
//     getTotalPrice,
//   } = useCart();

//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const token = localStorage.getItem("token");

//         if (!token) {
//           console.error("No token found. Please login first.");
//           return;
//         }

//         const res = await axios.get("http://localhost:5000/api/cart/get", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         console.log("✅ Cart fetched:", res.data);
//         setCartItems(res.data);
//       } catch (error) {
//         console.error("❌ Error fetching cart:", error.response?.data || error.message);
//       }
//     };

//     fetchCart();
//   }, []); // no need for setCartItems in deps unless it's coming from props

//   return (
//     <div className="cart-page" style={{ padding: "20px", background: "#f4fff4" }}>
//       <h2>🛒 Cart</h2>

//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         cartItems.map((item) => (
//           <div
//             key={item._id}
//             style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
//           >
//             <img
//               src={item?.productId?.image || "https://via.placeholder.com/100"}
//               alt={item?.productId?.name || "Product"}
//               style={{ width: "100px", marginRight: "20px" }}
//             />
//             <div>
//               <h3>{item?.productId?.name}</h3>
//               <p>₹{item?.productId?.price} x {item.quantity}</p>

//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "10px",
//                   marginTop: "5px",
//                 }}
//               >
//                 <button
//                   onClick={() => updateQuantity(item._id, item.quantity - 1)}
//                   disabled={item.quantity <= 1}
//                 >
//                   ➖
//                 </button>
//                 <span>{item.quantity}</span>
//                 <button
//                   onClick={() => updateQuantity(item._id, item.quantity + 1)}
//                 >
//                   ➕
//                 </button>
//                 <button
//                   onClick={() => removeFromCart(item._id)}
//                   style={{ marginLeft: "15px", backgroundColor: "red", color: "#fff" }}
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))
//       )}

//       <h3>Total: ₹{getTotalPrice()}</h3>
//     </div>
//   );
// };

// export default Cart;


// import React, { useEffect } from "react";
// import axios from "axios";
// import { useCart } from "../Context/CartContext";


// const Cart = () => {
//   const {
//     cartItems,
//     setCartItems,
//     removeFromCart,
//     updateQuantity,
//     getTotalPrice,
//   } = useCart();

//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const token = localStorage.getItem("token");

//         if (!token) {
//           console.error("No token found. Please login first.");
//           return;
//         }

//         const res = await axios.get("http://localhost:5000/api/cart", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         console.log("✅ Cart fetched:", res.data);
//         setCartItems(res.data.products || []);
//       } catch (error) {
//         console.error("❌ Error fetching cart:", error.response?.data || error.message);
//       }
//     };

//     fetchCart();
//   }, []);

//   return (
//     <div>
//     <div className="cart-page" style={{ padding: "20px", background: "#f4fff4" }}>
//       <h2>🛒 Cart Items</h2>
//   <hr />
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         cartItems.map((item) => (
            
//           <div 
//             key={item.productId?._id || item._id}
//             style={{ display: "flex", alignItems: "center", marginBottom: "20px",  }} 
//           > 
//             <img
//               src={item?.productId?.image || "https://via.placeholder.com/100"}
//               alt={item?.productId?.name || "Product"}
//               style={{ width: "100px", marginRight: "20px" }}
//             />
//             <div>
//               <h3>{item?.productId?.name}</h3>
//               <p>₹{item?.productId?.price} x {item.quantity}</p>

//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "10px",
//                   marginTop: "5px",
//                 }}
//               >
//                 <button
//                   onClick={() =>
//                     updateQuantity(item.productId._id, item.quantity - 1)
//                   }
//                   disabled={item.quantity <= 1}
//                 >
//                   ➖
//                 </button>
//                 <span>{item.quantity}</span>
//                 <button
//                   onClick={() =>
//                     updateQuantity(item.productId._id, item.quantity + 1)
//                   }
//                 >
//                   ➕
//                 </button>
//                 <button
//                   onClick={() => removeFromCart(item.productId._id)}
//                   style={{
//                     marginLeft: "15px",
//                     backgroundColor: "red",
//                     color: "#fff",
//                   }}
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))
//       )}

//       <h3>Total: ₹{getTotalPrice()}</h3>
//     </div>
       
//        <div className="cart-page" style={{ padding: "20px", background: "#f4fff4" }}>  
//         <h2> 👨🏻‍💼 Delivery Person Details</h2>
//         <hr />
//          <form action="">
//         <div className="delivery-details">
//             <input type="text"
//              placeholder="delivery Person Name"
//              style={{width:'600px'}} />
//             <input type="number" placeholder="delivery Person Number" />
//             <textarea name="" id="" placeholder="Address" style={{width:'600px', height:'70px', fontSize:"20px" }}></textarea>
//             <button type="submit"> Submit</button>
          
//         </div>
//         </form>
//        </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../Context/CartContext";

const Cart = () => {
  const {
    cartItems,
    setCartItems,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
  } = useCart();

  const [deliveryDetails, setDeliveryDetails] = useState({
    name: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.error("No token found. Please login first.");
          return;
        }

        const res = await axios.get("http://localhost:5000/api/cart", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("✅ Cart fetched:", res.data);
        setCartItems(res.data.products || []);
      } catch (error) {
        console.error(
          "❌ Error fetching cart:",
          error.response?.data || error.message
        );
      }
    };

    fetchCart();
  }, []);

  const handleDeliveryChange = (e) => {
    setDeliveryDetails({
      ...deliveryDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleDeliverySubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No token found.");
        return;
      }

      const res = await axios.post(
        "http://localhost:5000/api/delivery",
        deliveryDetails,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("🚚 Delivery details saved:", res.data);
      alert("Delivery details submitted successfully!");
      setDeliveryDetails({ name: "", phone: "", address: "" });
    } catch (error) {
      console.error(
        "❌ Error submitting delivery:",
        error.response?.data || error.message
      );
      alert("Failed to submit delivery details.");
    }
  };

  return (
    <div>
      <div className="cart-page" style={{ padding: "20px", background: "#f4fff4" }}>
        <h2>🛒 Cart Items</h2>
        <hr />
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.productId?._id || item._id}
              style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
            >
              <img
                src={item?.productId?.image || "https://via.placeholder.com/100"}
                alt={item?.productId?.name || "Product"}
                style={{ width: "100px", marginRight: "20px" }}
              />
              <div>
                <h3>{item?.productId?.name}</h3>
                <p>₹{item?.productId?.price} x {item.quantity}</p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginTop: "5px",
                  }}
                >
                  <button
                    onClick={() =>
                      updateQuantity(item.productId._id, item.quantity - 1)
                    }
                    disabled={item.quantity <= 1}
                  >
                    ➖
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      updateQuantity(item.productId._id, item.quantity + 1)
                    }
                  >
                    ➕
                  </button>
                  <button
                    onClick={() => removeFromCart(item.productId._id)}
                    style={{
                      marginLeft: "15px",
                      backgroundColor: "red",
                      color: "#fff",
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
        <h3>Total: ₹{getTotalPrice()}</h3>
      </div>

      <div className="cart-page" style={{ padding: "20px", background: "#f4fff4" }}>
        <h2>👨🏻‍💼 Delivery Person Details</h2>
        <hr />
        <form onSubmit={handleDeliverySubmit}>
          <div className="delivery-details" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <input
              type="text"
              name="name"
              value={deliveryDetails.name}
              onChange={handleDeliveryChange}
              placeholder="Delivery Person Name"
              required
              style={{ width: "600px", padding: "10px" }}
            />
            <input
              type="number"
              name="phone"
              value={deliveryDetails.phone}
              onChange={handleDeliveryChange}
              placeholder="Delivery Person Number"
              required
              style={{ width: "600px", padding: "10px" }}
            />
            <textarea
              name="address"
              value={deliveryDetails.address}
              onChange={handleDeliveryChange}
              placeholder="Address"
              required
              style={{ width: "600px", height: "70px", fontSize: "16px", padding: "10px" }}
            />
            <button type="submit" style={{ width: "150px", padding: "10px", background: "green", color: "#fff" }}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cart;
