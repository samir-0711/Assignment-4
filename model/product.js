import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    id: {
      type: String,
      require: [true, "ID is Required"],
      maxlength: 5,
      unique: true,
    },
    name: {
      type: String,
      require: [true, "Name is Required"],
      maxlength: 140,
    },
    email: {
      type: String,
      maxlength: 50,
    },
    location: {
      type: String,
      maxlength: 30,
    },
  },
  { timestamps: true }
);

const productModel = mongoose.model("Product", productSchema);
export default productModel;
