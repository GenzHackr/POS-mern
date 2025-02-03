const mongoose = require("mongoose")

const billSchema = mongoose.Schema({
    CustomerName:{
        type: String,
        required : true
    },
    CustomerContact:{
        type: Number,
        required: true
    },
    subTotal:{
        type: Number,
        required: true
    },
    TotalAmount:{
        type: Number,
        required: true
    },
    Tax:{
        type: Number,
        required: true
    },
    PaymentMode:{
        type: String,
        required: true
    },
    cartItems: {
        type:Array,
        required: true
    },
    date: {
        type: Date,
        default: Date.now(),
      },


},
    {timestamp:true}
);

const Bills = mongoose.model("bills", billSchema);

module.exports = Bills;
