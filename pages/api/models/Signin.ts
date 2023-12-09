import mongoose from "mongoose";

const signSchema = new mongoose.Schema(
  {
    email: { type: String, default: "" },
    password: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

const Signin =
  mongoose.models["Signin"] || mongoose.model("Signin", signSchema);

export default Signin;
