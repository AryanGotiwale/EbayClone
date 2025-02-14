import React from "react";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, title: "Electronic",  image: "/images/iphone12.jpg" },
  { id: 2, title: "Clothings",  image: "/images/macbook.jpg" },
  { id: 3, title: "Home Appliances",  image: "/images/headphones.jpg" },
  { id: 4, title: "Cars",  image: "/images/headphones.jpg" },
  { id: 5, title: "Bikes",  image: "/images/headphones.jpg" },
  { id: 6, title: "Arts",  image: "/images/headphones.jpg" },
];

const ProductList = () => {
  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" ,marginTop:"20px" }}>
      {products.map((product) => (
        <ProductCard key={product.id} title={product.title} price={product.price} image={product.image} />
      ))}
    </div>
  );
};

export default ProductList;
