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
  {
    timestamps: true,
  }
); //mongoose.Schema takes an object as an argument, the object is the schema

export const User = mongoose.model("User", userSchema); //mongoose.model takes two arguments, the name of the model and the schema

//when this model gets saved in the mongodb database, it will be saved as a collection with the name "users"
//mongodb saves collection as plural and in lowercase
