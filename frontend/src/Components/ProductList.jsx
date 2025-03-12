import React from "react";
import ProductCard from "./ProductCard";
import Electronicimg from "../assets/images/Electronics.jpg"
import Clothingimg from "../assets/images/Clothing.jpg"
import HomeAppliances from "../assets/images/HomeAppliances.jpg"
import Carsimg from "../assets/images/Cars.jpg"
import Bikesimg from "../assets/images/Bikes.jpg"
import { Link } from "react-router-dom";


const products = [
  { id: 1, title: "Electronic",  image: Electronicimg },
  { id: 2, title: "Clothings",  image: Clothingimg  },
  { id: 3, title: "Home Appliances",  image: HomeAppliances },
  { id: 4, title: "Cars",  image: Carsimg },
  { id: 5, title: "Bikes",  image: Bikesimg },
];

const ProductList = () => {
  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" ,marginTop:"20px" }} className="Card">
      {products.map((product) => (
 
         <ProductCard key={product.id} title={product.title} price={product.price} image={product.image} />
         
         

       
      ))}
      <Link style={{ marginTop:'100px', marginRight:"-70px"}}><p>More</p></Link>
      
    </div>
  );
};

export default ProductList;
