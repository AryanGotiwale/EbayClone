// const express = require("express");
// const DeliveryDetails = require("../models/DeliveryDetails");

// const router = express.Router();
// // POST /api/delivery
// router.post("/delivery", authenticateUser, async (req, res) => {
//     const { name, phone, address } = req.body;
//     const userId = req.user.id;
  
//     // Save to DB (example with Mongoose)
//     await DeliveryDetails.create({
//       userId,
//       name,
//       phone,
//       address,
//     });
  
//     res.status(200).json({ message: "Delivery details saved." });
//   });
  

// module.exports = router;


// const express = require("express");
// const router = express.Router();
// const DeliveryDetails = require("../models/DeliveryDetails");
// const { authenticateUser } = require("../middleware/auth"); // your auth middleware

// // POST /api/delivery
// router.post("/api/delivery", authenticateUser, async (req, res) => {
//   try {
//     const { name, phone, address } = req.body;

//     const delivery = new DeliveryDetails({
//       userId: req.user.id,
//       name,
//       phone,
//       address,
//     });

//     await delivery.save();

//     res.status(201).json({ message: "Delivery details saved successfully." });
//   } catch (error) {
//     console.error("❌ Error saving delivery:", error.message);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// module.exports = router;




const express = require("express");
const router = express.Router();
const { requireAuth } = require("../middleware/requireAuth");
const Delivery = require("../models/DeliveryDetails");

// @route   POST /api/delivery
// @desc    Submit delivery person details
// @access  Private
router.post("/", requireAuth, async (req, res) => {
  try {
    const { name, phone, address } = req.body;

    const delivery = new Delivery({
      userId: req.user._id, // ✅ Match this to the schema (was `user` before)
      name,
      phone,
      address,
    });

    const savedDelivery = await delivery.save();
    res.status(201).json(savedDelivery);
  } catch (err) {
    console.error("Error saving delivery details:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
