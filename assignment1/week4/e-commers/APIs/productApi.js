 import exp from "express"


import { ProductModel } from "../models/ProductModel.js";
 export const ProductApi= exp.Router();
 
//route to creat a new product


ProductApi.post("/product", async(req ,res)=>{
    //get the user input
    let product = req.body;

    let newProduct=new ProductModel(product);
    //save
    await newProduct.save();
    //SEND RESPOMCE
    res.status(201).send({message:"product created succesfully",payload:newProduct})
})






