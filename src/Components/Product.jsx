import React from "react";
import ProductCard from "./ProductCard";
import Electronicimg from "../assets/images/Electronics.jpg"
import Clothingimg from "../assets/images/Clothing.jpg"
import HomeAppliances from "../assets/images/HomeAppliances.jpg"
import Carsimg from "../assets/images/Cars.jpg"
import Bikesimg from "../assets/images/Bikes.jpg"
import MaterialCard from "./MaterialCard"
import Bag from "../assets/images/Bag.jpg"
import Pen from '../assets/images/Pen.png'
import lenvoIdeaPadGaming  from '../assets/images/lenvoIdeaPadGaming.webp'
import Ovenimg from '../assets/images/Ovenimg.jpg'


const products = [
  { id: 1, title: "Redmi Note 10 pro",  image: Electronicimg, price: "₹10,000", ActualPrice:"₹12,000", rating:'3.3★'},
  { id: 2, title: "lenvo Idea Pad Gaming 3",  image: lenvoIdeaPadGaming, price: "₹60,000", ActualPrice:"₹70,000", rating:'2.3★'   },
  { id: 3, title: "Oven",  image: Ovenimg, price: "₹5,050",ActualPrice:'₹9,000', rating:'3.6★'  },
  { id: 4, title: "College Bag",  image: Bag, price: "₹400", ActualPrice:"₹900" , rating:'6.5★' },
  { id: 5, title: "Pen",  image: Pen, price: "₹30", ActualPrice:"₹50" , rating:'6.1★'},

];

const Product = () => {
  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" ,marginTop:"20px", border:'none' }} className="Card">
      {products.map((product) => (
        <MaterialCard key={product.id} title={product.title} price={product.price} image={product.image} ActualPrice={product.ActualPrice} rating={product.rating} />
      ))}
    </div>
  );
};

export default Product;
