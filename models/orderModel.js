const mongoose = require("mongoose");
const orderSchema = mongoose.Schema(
  {
    userid: {
      type: String,
      require,
    },
    name: {
      type: String,
      require,
    },
    email: {
      type: String,
      require,
    },
    orderItems: [
      {
        name: { type: String, require },
        quantity: { type: Number, require },
        _id: { type: String, require },
        price: { type: Number, require },
      },
    ],
    shippingaddress: {
      address: { type: String, require },
      city: { type: String, require },
      postalCode: { type: String, require },
      CountQueuingStrategy: { type: String, require },
    },
    orderAmount: { type: Number, require },
    transactionId: { type: String, require },
    isDelievered: { type: Boolean, require },
  },
  {
    timestamps: true,
  }
);

const OrderModel = mongoose.model("orders", orderSchema);
module.exports = OrderModel;
