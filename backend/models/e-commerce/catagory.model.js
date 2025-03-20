import mongoose from "mongoose";

const catagorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: True,
    },
    description: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Catagory = mongoose.model("Catagory", catagorySchema);
