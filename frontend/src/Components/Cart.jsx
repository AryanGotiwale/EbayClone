
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
        if (!token) return;

        const res = await axios.get("http://localhost:5000/api/cart", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCartItems(res.data.products || []);
      } catch (error) {
        console.error("Error fetching cart:", error.message);
      }
    };

    fetchCart();
  }, []);

  const handleDeliveryChange = (e) => {
    setDeliveryDetails({ ...deliveryDetails, [e.target.name]: e.target.value });
  };

  const handleDeliverySubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const res = await axios.post(
        "http://localhost:5000/api/delivery",
        deliveryDetails,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("✅ Delivery details submitted successfully!");
      setDeliveryDetails({ name: "", phone: "", address: "" });
    } catch (error) {
      console.error("Error submitting delivery:", error.message);
      alert("❌ Failed to submit delivery details.");
    }
  };

  const styles = {
    container: {
      padding: "30px",
      backgroundColor: "#f9f9f9",
      fontFamily: "Arial, sans-serif",
      maxWidth: "1000px",
      margin: "0 auto",
    },
    section: {
      backgroundColor: "#fff",
      padding: "25px",
      borderRadius: "10px",
      marginBottom: "30px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    },
    heading: {
      fontSize: "24px",
      marginBottom: "15px",
      color: "#333",
    },
    cartItem: {
      display: "flex",
      gap: "20px",
      alignItems: "center",
      marginBottom: "20px",
      borderBottom: "1px solid #eee",
      paddingBottom: "15px",
    },
    productImage: {
      width: "100px",
      height: "100px",
      objectFit: "cover",
      borderRadius: "8px",
    },
    productInfo: {
      flex: 1,
    },
    quantityControl: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginTop: "10px",
    },
    button: {
      padding: "6px 14px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "14px",
    },
    removeButton: {
      marginLeft: "15px",
      backgroundColor: "#dc3545",
      color: "#fff",
    },
    input: {
      padding: "10px",
      fontSize: "16px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      width: "100%",
    },
    formGroup: {
      marginBottom: "15px",
    },
    submitButton: {
      padding: "10px 20px",
      backgroundColor: "#28a745",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "16px",
    },
  };

  return (
    <div style={styles.container}>
      {/* Cart Section */}
      <div style={styles.section}>
        <h2 style={styles.heading}>🛒 Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.productId?._id || item._id} style={styles.cartItem}>
              <img
                src={item?.productId?.image || "https://via.placeholder.com/100"}
                alt={item?.productId?.name || "Product"}
                style={styles.productImage}
              />
              <div style={styles.productInfo}>
                <h3 style={{ margin: 0 }}>{item?.productId?.name}</h3>
                <p style={{ margin: "5px 0" }}>
                  ₹{item?.productId?.price} x {item.quantity}
                </p>
                <div style={styles.quantityControl}>
                  <button
                    onClick={() =>
                      updateQuantity(item.productId._id, item.quantity - 1)
                    }
                    disabled={item.quantity <= 1}
                    style={{ ...styles.button, opacity: item.quantity <= 1 ? 0.6 : 1 }}
                  >
                    ➖
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      updateQuantity(item.productId._id, item.quantity + 1)
                    }
                    style={styles.button}
                  >
                    ➕
                  </button>
                  <button
                    onClick={() => removeFromCart(item.productId._id)}
                    style={{ ...styles.button, ...styles.removeButton }}
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

      {/* Delivery Details Section */}
      <div style={styles.section}>
        <h2 style={styles.heading}>📦 Delivery Details</h2>
        <form onSubmit={handleDeliverySubmit}>
          <div style={styles.formGroup}>
            <input
              type="text"
              name="name"
              value={deliveryDetails.name}
              onChange={handleDeliveryChange}
              placeholder="Name"
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <input
              type="number"
              name="phone"
              value={deliveryDetails.phone}
              onChange={handleDeliveryChange}
              placeholder="Phone Number"
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <textarea
              name="address"
              value={deliveryDetails.address}
              onChange={handleDeliveryChange}
              placeholder="Full Address"
              required
              style={{ ...styles.input, height: "80px", resize: "vertical" }}
            />
          </div>
          <button type="submit" style={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cart;
