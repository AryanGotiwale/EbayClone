import React from "react";
import { Fade, Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import img1 from "../assets/images/image1.jpg";
import img2 from "../assets/images/image2.jpg";
import img3 from "../assets/images/image3.jpg";
import img4 from "../assets/images/image4.jpg";
import img5 from "../assets/images/image5.jpg";
import ProductList from "../Components/ProductList";

import MaterialCard from "../Components/MaterialCard";
import Product from "../Components/Product";

const slideImages = [img1, img2, img3, img4, img5];

const Home = () => {
    return (
        <div style={{width:'100%'}} >
          
          
          <Fade autoplay={true} duration={2000} arrows={true} >
            {slideImages.map((image, index) => (
              <div key={index} className="container-images">
                <img src={image} alt={`Slide ${index + 1}`} className="images"  />
              </div>
            ))}
          </Fade>
          <ProductList /><br />
          <hr style={{margin:"0"}}/>
          
            <div style={{backgroundColor:'white', padding:'20px'}}>
              <h1 style={{display:'flex', justifyContent:'center',textDecoration:'underline',width:'100%', margin:'0' }}>Electronic Products</h1>
            <Product/>
            </div>
          </div>
        
      );

};

export default Home;

