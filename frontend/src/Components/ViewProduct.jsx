


import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useCart } from "../Context/CartContext";
import  axios  from "axios";

const ViewProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { isLogged } = useAuth();
  const { cartItems, addToCart, removeFromCart } = useCart();

  const isAdded = cartItems.some(item => item._id === product?._id);

  const handleAddToCart = async () => {
    if (!isLogged) {
      alert("Please log in first.");
      return;
    }

  
    try {
      const token = localStorage.getItem("token"); // assuming you store JWT
      if (!token) {
  alert("No token found. Please log in again.");
  return;
}
    console.log("Token being sent:", token);

      await axios.post(
        "http://localhost:5000/api/cart/add",
        { productId: product._id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Added to cart!");
    } catch (err) {
      console.error("Add to cart failed", err);
      alert("Failed to add to cart.");
    }
  };
  const handleRemoveFromCart = () => {
    removeFromCart(product._id);
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/products/${id}`);
        if (!response.ok) throw new Error("Failed to fetch product details");
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="Card-Details">
      <img className="Card-image" src={product.image} alt={product.name} />
      <div className="Card-text">
        <h1 className="Card-name">{product.name}</h1>
        <p className="Card-price"><b>₹{product.price}</b></p>
        <p className="Card-mrpPrice"><s>₹{product.mrpPrice}</s></p>
        <p className="Card-percentage">
          {((product.mrpPrice - product.price) / product.mrpPrice * 100).toFixed(1)}%
        </p>
        <p className="Card-rating">{product.rating}★</p>
        <p className="Card-description">{product.description || "No description available"}</p>
        <button>Place Order Now</button>

        {!isAdded ? (
          <button onClick={handleAddToCart}>Add To Cart</button>
        ) : (
          <button onClick={handleRemoveFromCart}>Remove from Cart</button>
        )}
      </div>
    </div>
  );
};

export default ViewProduct;
