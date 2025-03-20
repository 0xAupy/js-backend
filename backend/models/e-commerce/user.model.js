import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username is required"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      min: [6, "password must be at least 6 characters"],
      max: [20, "password must be at most 20 characters"],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
