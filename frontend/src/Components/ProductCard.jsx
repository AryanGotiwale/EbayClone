//https://mui.com/material-ui/react-card/ *used third party library
// https://www.npmjs.com/package/@mui/material 
import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ title,  image }) => {
  return (
   
    <Card sx={{  boxShadow: 3, borderRadius: 2, width:200, transition:" 0.3s ease-in-out" , ":hover":{boxShadow: 6, backgroundColor:"#f7f1fe",
      transform: "scale(1.05)",}}} className="Card">
      <CardMedia component="img" height="150px" width="250px" image={image} alt={title} />
      <CardContent>
        <Typography variant="h6" component="div">{title}</Typography>
        <Typography variant="body1" color="text.secondary"></Typography>
        {/* <Button variant="contained" className="Card-Button" style={{ color:'white', backgroundColor:"rebeccapurple"}} fullWidth sx={{ mt: 1 }} >
          More
        </Button> */}
       
        <Link> <p>Show More</p></Link>
      </CardContent>
    </Card>
    
    
  );
};

export default ProductCard;
