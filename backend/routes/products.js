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

// module.exports = router; 
const express = require("express");
const router = express.Router();
const upload = require("../config/multerCloudinary");
const Product = require("../models/Product"); 



router.post("/", upload.single("image"), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "Image upload failed" });
      }
  
      const imageUrl = req.file.path; 
  
      // Save product details (adjust based on your MongoDB schema)
      const newProduct = new Product({
        name: req.body.name,
        price: req.body.price,
        mrpPrice: req.body.mrpPrice,
        description: req.body.description,
        rating: req.body.rating,
        category:req.body.category,
        image: imageUrl, 
      });
  
      await newProduct.save();
      res.status(201).json({ message: "Product added successfully", imageUrl });
    } catch (error) {
      console.error("Error adding product:", error);
      res.status(500).json({ message: "Server error", error });
    }
  });

  
// GET all products
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log("Error im get");
        
    }
});
//Delete Product
router.delete("/:id", async (req, res) => {
    try {
      console.log("Received productId:", req.params.id); // Debug log
  
      if (!req.params.id) {
        return res.status(400).json({ message: "Product ID is required" });
      }
  
      const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  
      if (!deletedProduct) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting product", error });
    }
  });
  
  router.put("/:id", async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedProduct) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json({ message: "Error updating product", error });
    }
  });

  router.get("/:id", async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: "Error fetching product details", error });
    }
  });
  
  
  
  module.exports = router; 