const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  mrpPrice: { type: Number },
  rating: { type: Number },
  description: { type: String },
  image: { type: String }, // Store image as base64 or URL
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
