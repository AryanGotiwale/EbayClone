// const mongoose = require('mongoose');

// const deliveryDetailsSchema = new mongoose.Schema({
//     name : {type : String, required : true},
//     number : { type : Number, required : true},
//     addres : { type : String, required : true}
// })

// module.exports = mongoose.model("Delivery", deliveryDetailsSchema);


const mongoose = require("mongoose");

const DeliveryDetailsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // assuming you have a User model
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart", // assuming you have a User model
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("DeliveryDetails", DeliveryDetailsSchema);
