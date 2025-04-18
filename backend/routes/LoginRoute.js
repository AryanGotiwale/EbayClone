// const express = require("express");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User"); // Your user model
// const router = express.Router();

// // router.post("/login", async (req, res) => {
// //   const { email, password } = req.body;

// //   try {
// //     const user = await User.findOne({ email });
// //     if (!user) return res.status(400).json({ message: "User not found" });

// //     const isMatch = await bcrypt.compare(password, user.password);
// //     if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

// //     const token = jwt.sign({ userId: user._id }, "your_secret_key", { expiresIn: "1h" });

// //     res.json({ token, userId: user._id });
// //   } catch (error) {
// //     res.status(500).json({ message: "Server error" });
// //   }
// // });

// // module.exports = router;

// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: "User not found" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//     const token = jwt.sign({ userId: user._id }, "your_secret_key", { expiresIn: "1h" });

//     // ✅ Include `name` in the response
//     res.json({
//       token,
//       user: {
//         id: user._id,
//         name: user.name,  // Ensure `name` is included
//       }
//     });

//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

