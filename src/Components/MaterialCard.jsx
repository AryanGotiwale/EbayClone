import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const MaterialCard = ({ title,  image, price, ActualPrice, rating }) => {
  return (
    
    <Card sx={{  boxShadow: 3, borderRadius: 2, width:220, transition:" 0.3s ease-in-out" , ":hover":{boxShadow: 6, backgroundColor:"#f7f1fe",
        transform: "scale(1.05)",}}} className="Card">
        <CardMedia component="img" height="150px" width="250px" image={image} alt={title} />
        <CardContent>
          <Typography variant="overline" component="div" >{title}</Typography>
        <Typography variant="h5" style={{fontWeight:"bold", color:"green"}} component="div">{price}   <Typography variant='caption' style={{color:"Red", width:'20px' }} component='s'>{ActualPrice}</Typography>  </Typography>
     <Typography variant="caption" component='p' className="rating-class">{rating}</Typography>
          <Typography variant="body1" color="text.secondary"></Typography>
         <span style={{display:'flex', justifyContent:'center'}}>
          <button variant="contained" className="Card-Button"  fullWidth sx={{ mt: 1 }} >
            View Product
          </button>
          </span>
         
          {/* <Link style={{ textDecoration: 'none', color:'purple', display:'flex', justifyContent:'center'}}> <p style={{}}>Show More</p></Link> */}
        </CardContent>
      </Card>
      
      
    );
  
}

export default MaterialCard
