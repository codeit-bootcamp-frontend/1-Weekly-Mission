import mongoose from "mongoose";

const signUpSchema = new mongoose.Schema(
  {
    email: { type: String, default: "" },
    password: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

const Signin =
  mongoose.models["Signup"] || mongoose.model("Signup", signUpSchema);

export default Signin;
