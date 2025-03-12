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

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // Load .env file

const app = express();
app.use(express.json()); // Enable JSON data parsing
app.use(cors()); // Allow frontend to connect

const listingRoutes = require("./routes/ListingRoutes");
app.use("/api/listings", listingRoutes);

const productRoutes = require("./routes/products");
app.use("/api/products", productRoutes);

app.use("/uploads", express.static("uploads"));


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI,    
)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

// Test API route
app.get("/", (req, res) => {
    res.send("API is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
