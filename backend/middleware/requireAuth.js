// const jwt = require("jsonwebtoken");
// const User = require("../models/User.js");

// const requireAuth = async (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(401).json({ message: "Unauthorized - No token provided" });
//   }

//   const token = authHeader.split(" ")[1];
//   console.log("🔐 Incoming token:", token);

//   try {
//     const decoded = jwt.verify(token, "your_jwt_secret"); // Ensure this matches your login signing secret
//     console.log("✅ Decoded token:", decoded);

//     const user = await User.findById(decoded.userId || decoded.id);

//     if (!user) {
//       return res.status(401).json({ message: "Unauthorized - User not found" });
//     }

//     req.user = user;
//     next();
//   } catch (err) {
//     console.error("❌ JWT verification failed:", err.message);
//     return res.status(401).json({ message: "Invalid Token" });
//   }
// };

// module.exports = { requireAuth };

// require("dotenv").config(); // Load env variables
// const jwt = require("jsonwebtoken");
// const User = require("../models/User.js");

// const requireAuth = async (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1];

//   if (!token) {
//     return res.status(401).json({ message: "Unauthorized: Token missing" });
//   }

//   console.log("🔐 Incoming token:", token);
//   console.log("🧪 JWT_SECRET in use (middleware):", process.env.JWT_SECRET);

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET); // ✅ Use env secret
//     req.user = await User.findById(decoded.userId);             // ✅ Use userId
//     if (!req.user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     next();
//   } catch (err) {
//     console.log("❌ JWT verification failed:", err.message);
//     res.status(401).json({ message: "Invalid Token" });
//   }
// };

// module.exports = { requireAuth };


require("dotenv").config(); // Load env variables
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const requireAuth = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: Token missing" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Incoming token:", req.headers.authorization);

    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user; // Attach user to the request object
    next();
  } catch (err) {
    console.error("JWT verification failed:", err.message);
    return res.status(401).json({ message: "Invalid Token" });
  }
};

module.exports = { requireAuth };
