//https://mui.com/material-ui/react-card/ *used third party library
// https://www.npmjs.com/package/@mui/material 
import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

const ProductCard = ({ title,  image }) => {
  return (
    
    <Card sx={{ maxWidth: 450, boxShadow: 3, borderRadius: 2 }}>
      <CardMedia component="img" height="150px" width="250px" image={image} alt={title} />
      <CardContent>
        <Typography variant="h6" component="div">{title}</Typography>
        <Typography variant="body1" color="text.secondary"></Typography>
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 1 }}>
          Buy Now
        </Button>
      </CardContent>
    </Card>
    
  );
};

export default ProductCard;
