const express = require("express");
const router = express.Router();
const multer = require("multer");
const Product = require("../models/Product");

// Setup image upload
const storage = multer.memoryStorage();
const upload = multer({ storage });

// POST route to add a product
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, price, mrpPrice, rating, description } = req.body;
    const image = req.file ? req.file.buffer.toString("base64") : null;

    const newProduct = new Product({
      name,
      price,
      mrpPrice,
      rating,
      description,
      image,
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; // ✅ This ensures you are exporting the router correctly
