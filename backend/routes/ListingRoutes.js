const express = require("express");
const Listing = require("../models/Listing");

const router = express.Router();

// GET all listings
router.get("/", async (req, res) => {
    try {
        const listings = await Listing.find();
        res.json(listings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST a new listing
router.post("/", async (req, res) => {
    try {
        const newListing = new Listing(req.body);
        await newListing.save();
        res.status(201).json(newListing);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
