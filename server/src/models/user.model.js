import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "first_name is required"],
    },
    last_name: {
      type: String,
      required: [true, "last_name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: [true, "user already exists with provided email"],
    },
    password: {
      type: String,
      minLength: 6,
      required: [true, "password is required"],
    },
  },
  { timestamps: true },
);

//! model
const User = mongoose.model("user", userSchema);
export default User