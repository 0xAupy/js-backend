import mongoose from "mongoose";

//mini model
const OrderSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
}); // no need to export this as it is only being used here

const orderSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    orderItems: {
      type: [OrderSchema],
    },
    address: { // we can also create a minimodel for this which will include street, city, state, zipcode
      type: String,
      required: true,
    },
    Status:{
        type: String,
        enum : ["PENDING", "COMPLETED", "CANCELLED"],
        default: "pending",
    }
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
