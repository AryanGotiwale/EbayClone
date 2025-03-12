// const express = require("express");
// const router = express.Router();
// const multer = require("multer");
// const Product = require("../models/Product");

// // Setup image upload
// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// // POST route to add a product
// router.post("/", upload.single("image"), async (req, res) => {
//   try {
//     const { name, price, mrpPrice, rating, description } = req.body;
//     const image = req.file ? req.file.buffer.toString("base64") : null;

//     const newProduct = new Product({
//       name,
//       price,
//       mrpPrice,
//       rating,
//       description,
//       image,
//     });

//     await newProduct.save();
//     res.status(201).json(newProduct);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router; // ✅ This ensures you are exporting the router correctly
const express = require("express");
const router = express.Router();
const upload = require("../config/multerCloudinary");
const Product = require("../models/Product"); // Ensure Product model is correct

// Create Product with Image Upload

router.post("/", upload.single("image"), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "Image upload failed" });
      }
  
      const imageUrl = req.file.path; // Get the Cloudinary image URL
  
      // Save product details (adjust based on your MongoDB schema)
      const newProduct = new Product({
        name: req.body.name,
        price: req.body.price,
        image: imageUrl, // Save Cloudinary URL instead of binary
      });
  
      await newProduct.save();
      res.status(201).json({ message: "Product added successfully", imageUrl });
    } catch (error) {
      console.error("Error adding product:", error);
      res.status(500).json({ message: "Server error", error });
    }
  });
  
  module.exports = router; // ✅ Ensure you export the router