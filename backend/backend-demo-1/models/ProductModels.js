import mongoose from "mongoose";
import { Schema ,model } from "mongoose";

const productSchema = new Schema({

    productId:{
        type: Number,
        required: [true, "Product ID is required"],
        unique: true,

    },
    name:{
        type: String,
        required: [true, "Product name is required"],

    }
    ,price:{
        type: Number,
        required: [true, "Product price is required"],

    },
    brand:{
        type: String,
        required: [true, "Product brand is required"],
    }

}
,{
    strict:"throw",
    timestamps:true,
}
);


export const ProductModel = model("product",productSchema);




