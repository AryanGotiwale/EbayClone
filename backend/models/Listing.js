const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
},{ timestamps: true });


module.exports = mongoose.model("Listing", listingSchema);
