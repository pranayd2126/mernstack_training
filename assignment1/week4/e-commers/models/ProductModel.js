import mongoose from "mongoose";

import { Schema ,model } from "mongoose";

const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: [true, "Product Name is required"],
    },
    price: {
      type: Number,
      required: [true, "Product Price is required"],
    },
    brand: {
      type: String,
      required: [true, "Product Brand is required"],
    },
  },
  {
    strict: "throw",
    timestamps: true,
    versionKey:false
  },
);



export const ProductModel = model("product",productSchema);