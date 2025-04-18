// import express from "express";
// import Cart from "../models/cartModel.js";
// import Product from "../models/productModel.js";
// import { requireAuth } from "../middleware/authMiddleware.js"; // you must create this if not already

// const router = express.Router();

// // Get user's cart
// router.get("/", requireAuth, async (req, res) => {
//   const cart = await Cart.findOne({ userId: req.user._id }).populate("products.productId");
//   res.json(cart || { products: [] });
// });

// // Add/update item in cart
// router.post("/add", requireAuth, async (req, res) => {
//   const { productId } = req.body;

//   let cart = await Cart.findOne({ userId: req.user._id });

//   if (!cart) {
//     cart = new Cart({ userId: req.user._id, products: [] });
//   }

//   const existingItem = cart.products.find((item) => item.productId.equals(productId));

//   if (existingItem) {
//     existingItem.quantity += 1;
//   } else {
//     cart.products.push({ productId, quantity: 1 });
//   }

//   await cart.save();
//   res.json(cart);
// });

// // Remove item
// router.post("/remove", requireAuth, async (req, res) => {
//   const { productId } = req.body;
//   const cart = await Cart.findOne({ userId: req.user._id });

//   cart.products = cart.products.filter((item) => !item.productId.equals(productId));

//   await cart.save();
//   res.json(cart);
// });

// // Update quantity
// router.post("/update", requireAuth, async (req, res) => {
//   const { productId, quantity } = req.body;
//   const cart = await Cart.findOne({ userId: req.user._id });

//   const item = cart.products.find((item) => item.productId.equals(productId));
//   if (item) {
//     item.quantity = quantity;
//   }

//   await cart.save();
//   res.json(cart);
// });

// export default router;

// const express = require("express");
// const Cart = require("../models/AddToCart");
// const Product = require("../models/Product");
// const { requireAuth } = require("../middleware/requireAuth");


// const router = express.Router();

// // Get user's cart
// router.get("/", requireAuth, async (req, res) => {
//   try {
//     const cart = await Cart.findOne({ userId: req.user._id }).populate("products.productId");
//     res.json(cart || { products: [] });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// router.get("/get", requireAuth, async (req, res) => {
//     try {
//       const cartItems = await Cart.find({ userId: req.user._id }).populate("productId");
//       res.json(cartItems);
//     } catch (error) {
//       console.error("Error fetching cart items:", error);
//       res.status(500).json({ message: "Server error" });
//     }
//   });

// // Add/update item in cart
// router.post("/add", requireAuth, async (req, res) => {
//   const { productId } = req.body;

//   try {
//     let cart = await Cart.findOne({ userId: req.user._id });

//     if (!cart) {
//       cart = new Cart({ userId: req.user._id, products: [] });
//     }

//     const existingItem = cart.products.find((item) => item.productId.equals(productId));

//     if (existingItem) {
//       existingItem.quantity += 1;
//     } else {
//       const product = await Product.findById(productId);
//       if (!product) return res.status(404).json({ message: "Product not found" });

//       cart.products.push({ productId, quantity: 1 });
//     }

//     await cart.save();
//     res.json(cart);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Remove item
// router.delete("/remove/:productId", requireAuth, async (req, res) => {
//   const { productId } = req.params;
//   try {
//     const cart = await Cart.findOne({ userId: req.user._id });
//     cart.products = cart.products.filter((item) => !item.productId.equals(productId));
//     await cart.save();
//     res.json(cart);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Update quantity
// router.put("/update/:productId", requireAuth, async (req, res) => {
//   const { productId } = req.params;
//   const { quantity } = req.body;

//   try {
//     const cart = await Cart.findOne({ userId: req.user._id });
//     const item = cart.products.find((item) => item.productId.equals(productId));

//     if (item) {
//       item.quantity = quantity;
//       await cart.save();
//       res.json(cart);
//     } else {
//       res.status(404).json({ message: "Item not found in cart" });
//     }
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;


// const express = require("express");
// const Cart = require("../models/AddToCart");
// const Product = require("../models/Product");
// const { requireAuth } = require("../middleware/requireAuth");

// const router = express.Router();

// // Get user's cart
// router.get("/", requireAuth, async (req, res) => {
//   try {
//     const cart = await Cart.findOne({ userId: req.user._id }).populate("products.productId");
//     res.json(cart || { products: [] });
//   } catch (err) {
//     console.error("Error fetching cart:", err);
//     res.status(500).json({ message: err.message });
//   }
// });

// // Add or update item in cart
// router.post("/add", requireAuth, async (req, res) => {
//   const { productId } = req.body;

//   try {
//     let cart = await Cart.findOne({ userId: req.user._id });

//     if (!cart) {
//       cart = new Cart({ userId: req.user._id, products: [] });
//     }

//     const existingItem = cart.products.find((item) => item.productId.equals(productId));

//     if (existingItem) {
//       existingItem.quantity += 1;
//     } else {
//       const product = await Product.findById(productId);
//       if (!product) return res.status(404).json({ message: "Product not found" });

//       cart.products.push({ productId, quantity: 1 });
//     }

//     await cart.save();
//     res.json(cart);
//   } catch (err) {
//     console.error("Error adding to cart:", err);
//     res.status(500).json({ message: err.message });
//   }
// });

// // Remove item from cart
// router.delete("/remove/:productId", requireAuth, async (req, res) => {
//   const { productId } = req.params;
//   try {
//     const cart = await Cart.findOne({ userId: req.user._id });
//     cart.products = cart.products.filter((item) => !item.productId.equals(productId));
//     await cart.save();
//     res.json(cart);
//   } catch (err) {
//     console.error("Error removing item from cart:", err);
//     res.status(500).json({ message: err.message });
//   }
// });

// // Update quantity of item in cart
// router.put("/update/:productId", requireAuth, async (req, res) => {
//   const { productId } = req.params;
//   const { quantity } = req.body;

//   try {
//     const cart = await Cart.findOne({ userId: req.user._id });
//     const item = cart.products.find((item) => item.productId.equals(productId));

//     if (item) {
//       item.quantity = quantity;
//       await cart.save();
//       res.json(cart);
//     } else {
//       res.status(404).json({ message: "Item not found in cart" });
//     }
//   } catch (err) {
//     console.error("Error updating cart item:", err);
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;


const express = require("express");
const Cart = require("../models/AddToCart");
const Product = require("../models/Product");
const { requireAuth } = require("../middleware/requireAuth");

const router = express.Router();

// GET: Fetch user's cart
router.get("/", requireAuth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user._id }).populate("products.productId");
    res.status(200).json(cart || { products: [] });
  } catch (err) {
    console.error("Error fetching cart:", err);
    res.status(500).json({ message: "Failed to fetch cart" });
  }
});

// POST: Add or update product in cart
router.post("/add", requireAuth, async (req, res) => {
  const { productId } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    let cart = await Cart.findOne({ userId: req.user._id });

    if (!cart) {
      cart = new Cart({ userId: req.user._id, products: [] });
    }

    const existingItem = cart.products.find(item => item.productId.equals(productId));

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.products.push({ productId, quantity: 1 });
    }

    await cart.save();
    const updatedCart = await cart.populate("products.productId");
    res.status(200).json(updatedCart);
  } catch (err) {
    console.error("Error adding to cart:", err);
    res.status(500).json({ message: "Failed to add product to cart" });
  }
});

// DELETE: Remove product from cart
router.delete("/remove/:productId", requireAuth, async (req, res) => {
  const { productId } = req.params;

  try {
    const cart = await Cart.findOne({ userId: req.user._id });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.products = cart.products.filter(item => !item.productId.equals(productId));
    await cart.save();

    const updatedCart = await cart.populate("products.productId");
    res.status(200).json(updatedCart);
  } catch (err) {
    console.error("Error removing item from cart:", err);
    res.status(500).json({ message: "Failed to remove item from cart" });
  }
});

// PUT: Update quantity of product in cart
router.put("/update/:productId", requireAuth, async (req, res) => {
  const { productId } = req.params;
  const { quantity } = req.body;

  if (quantity < 1) {
    return res.status(400).json({ message: "Quantity must be at least 1" });
  }

  try {
    const cart = await Cart.findOne({ userId: req.user._id });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const item = cart.products.find(item => item.productId.equals(productId));
    if (!item) return res.status(404).json({ message: "Item not found in cart" });

    item.quantity = quantity;
    await cart.save();

    const updatedCart = await cart.populate("products.productId");
    res.status(200).json(updatedCart);
  } catch (err) {
    console.error("Error updating cart item:", err);
    res.status(500).json({ message: "Failed to update cart item" });
  }
});

module.exports = router;
