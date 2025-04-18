// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();
// app.use(express.json());
// app.use(cors());

// mongoose.connect(process.env.MONGO_URI, {
   
// }).then(() => console.log("MongoDB Connected"))
//   .catch(err => console.error(err));

// app.use("/api/listings", require("./routes/user.routes"));

// app.listen(5000, () => console.log("Server running on port 5000"));

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config(); 

// const app = express();
// app.use(express.json()); 
// app.use(cors()); 

// const listingRoutes = require("./routes/ListingRoutes");
// app.use("/api/listings", listingRoutes);

// const productRoutes = require("./routes/products");
// app.use("/api/products", productRoutes);

// app.use("/uploads", express.static("uploads"));


// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI,    
// )
//     .then(() => console.log("MongoDB Connected"))
//     .catch((err) => console.log(err));

// // Test API route
// app.get("/", (req, res) => {
//     res.send("API is running...");
// });



// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const cartRoutes = require("./routes/cartRoutes"); // ✅ import the cart routes
// app.use("/api/cart", cartRoutes); // ✅ mount the cart routes with prefix


// require("dotenv").config();

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true })); // ✅ Add this
// app.use(cors());
// app.use(cors({ origin: "*", methods: "GET,POST,PUT,DELETE", allowedHeaders: "Content-Type,Authorization" }));


// // Import Routes
// const listingRoutes = require("./routes/ListingRoutes");
// const productRoutes = require("./routes/products");
// const authRoutes = require("./routes/AuthRoutes"); // Added authentication routes

// // Use Routes
// app.use("/api/listings", listingRoutes);
// app.use("/api/products", productRoutes);
// app.use("/api/auth", authRoutes); // Added authentication route

// // Serve static files (for uploaded images)
// app.use("/uploads", express.static("uploads"));

// // Connect to MongoDB
// const MONGO_URI = process.env.MONGO_URI;
// if (!MONGO_URI) {
//   console.error("Error: MONGO_URI is not defined in .env file");
//   process.exit(1);
// }

// mongoose
//   .connect(MONGO_URI, )
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => {
//     console.error("MongoDB Connection Error:", err);
//     process.exit(1);
//   });

// // Test API route
// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(cors({ origin: "*", methods: "GET,POST,PUT,DELETE", allowedHeaders: "Content-Type,Authorization" }));

// Import Routes
const listingRoutes = require("./routes/ListingRoutes");
const productRoutes = require("./routes/products");
const authRoutes = require("./routes/AuthRoutes");
const cartRoutes = require("./routes/cartRoutes"); // ✅ NEW
const deliveryRoutes = require("./routes/DeliveryRoutes");


// Use Routes
app.use("/api/listings", listingRoutes);
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes); // ✅ NEW
app.use("/api/delivery", deliveryRoutes);



// Serve static files (for uploaded images)
app.use("/uploads", express.static("uploads"));

// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.error("Error: MONGO_URI is not defined in .env file");
  process.exit(1);
}

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
    process.exit(1);
  });

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
