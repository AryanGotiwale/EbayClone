// import React from "react";
// import ProductCard from "./ProductCard";
// import Electronicimg from "../assets/images/Electronics.jpg"
// import Clothingimg from "../assets/images/Clothing.jpg"
// import HomeAppliances from "../assets/images/HomeAppliances.jpg"
// import Carsimg from "../assets/images/Cars.jpg"
// import Bikesimg from "../assets/images/Bikes.jpg"
// import MaterialCard from "./MaterialCard"
// import Bag from "../assets/images/Bag.jpg"
// import Pen from '../assets/images/Pen.png'
// import lenvoIdeaPadGaming  from '../assets/images/lenvoIdeaPadGaming.webp'
// import Ovenimg from '../assets/images/Ovenimg.jpg'
// import { useEffect } from "react";


// const products = [
//   { id: 1, title: "Redmi Note 10 pro",  image: Electronicimg, price: "₹10,000", ActualPrice:"₹12,000", rating:'3.3★'},
//   { id: 2, title: "lenvo Idea Pad Gaming 3",  image: lenvoIdeaPadGaming, price: "₹60,000", ActualPrice:"₹70,000", rating:'2.3★'   },
//   { id: 3, title: "Oven",  image: Ovenimg, price: "₹5,050",ActualPrice:'₹9,000', rating:'3.6★'  },
//   { id: 4, title: "College Bag",  image: Bag, price: "₹400", ActualPrice:"₹900" , rating:'6.5★' },
//   { id: 5, title: "Pen",  image: Pen, price: "₹30", ActualPrice:"₹50" , rating:'6.1★'},
//   { id: 5, title: "Pen",  image: Pen, price: "₹30", ActualPrice:"₹50" , rating:'6.1★'},
//   { id: 5, title: "Pen",  image: Pen, price: "₹30", ActualPrice:"₹50" , rating:'6.1★'},
//   { id: 5, title: "Pen",  image: Pen, price: "₹30", ActualPrice:"₹50" , rating:'6.1★'},

// ];


// const Product = () => {
//   return (
//     <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" ,marginTop:"20px", border:'none' }} className="Card">
//       {products.map((product) => (
//         <MaterialCard key={product.id} title={product.title} price={product.price} image={product.image} ActualPrice={product.ActualPrice} rating={product.rating} />
//       ))}
//     </div>
//   );
// };

// export default Product;
import React, { useEffect, useState } from "react";
import MaterialCard from "./MaterialCard";
import { Link, Links } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]); // State to store products
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products"); // Fetch data from backend
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data); // Update state with fetched products
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap", marginTop: "20px", border: "none" }} className="Card">
      {loading && <p>Loading products...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {products.length > 0 ? (
        products.map((product) => (
          <Link to={`/product/${product._id}`} key={product._id} style={{ textDecoration: "none", color: "inherit" }} target="blank">
          <MaterialCard 
            key={product._id} 
            title={product.name} 
            price={`₹${product.price}`} 
            image={product.image} 
            ActualPrice={`₹${product.mrpPrice}`} 
            rating={`${product.rating}★`} 
          />
         </Link>
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default Product;
