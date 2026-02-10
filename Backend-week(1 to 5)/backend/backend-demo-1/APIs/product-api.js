// import exp from "express";
// export const ProductApi = exp.Router();


// // In-memory array to store products
// let products = [];

// // Get all products
// ProductApi.get("/products", (req, res) => {
//   res.status(200).send({ message: "products ", payload: products });
// });
// ProductApi.get("/products-id/:id", (req, res) => {
//   let productId = Number(req.params.id);
//   let product = req.body;
//   // find product by id
  
//   let productIndex = products.findIndex((p) => p.id === productId);
//   if (productIndex == -1) {
//     return res.status(404).send({ message: "not found" });
//   }

//   res.status(200).send({ message: "products fpund", payload: productIndex });
// });

// // Get products by brand
// ProductApi.get("/products-brand/:brand", (req, res) => {
//   let productBrand = req.params.brand;
//   // find products by brand
//   let productByBrand = products.find((p) => p.brand === productBrand);
//   if (productByBrand == -1) {
//     return res.status(404).send({ message: "not found" });
//   }
//   res.status(200).send({ message: "produts brands", payload: productByBrand });
// });
// // Create a new product
// ProductApi.post("/products", (req, res) => {
//   let product = req.body;
//   products.push(product);
//   res.status(200).send({ message: "product add succesly", payload: product });
// });
// // Update a product
// ProductApi.put("/products/:id", (req, res) => {
//   let productId = Number(req.params.id);
//   let product = req.body;
//   // find index of product to be updated
//   let productIndex = products.findIndex((prod) => prod.id === productId);

//   if (productIndex === -1) {
//     return res.status(404).send({ message: "product not found" });
//   }
//   let deleted = products.splice(productIndex, 1, product);
//   res
//     .status(200)
//     .send({ message: "product updated succesly", payload: deleted });
// });
// // Delete a product

// ProductApi.delete("/products/:id", (req, res) => {
//   let productId = Number(req.params.id);
//   // find index of product to be deleted
//   let productIndex = products.findIndex((p) => p.id === productId);
//   if (productId === -1) {
//     return res.status(404).send({ message: "product not found" });
//   }

//   let deleted = products.splice(productIndex, 1);
//   res
//     .status(200)
//     .send({ message: "prodyect deleted succedopy", payload: deleted });
// });


import exp from "express"
export const ProductApi=exp.Router();
import { ProductModel } from "../models/ProductModels.js";

// Get all products
ProductApi.get("/products" ,async (req,res)=>{
  // fetch all products from db
  const products= await ProductModel.find();
  //SEND RESPONSE
  res.status(200).send({message:"all prodycts",payload: products})
})


//post products

ProductApi.post("/products",async (req,res)=>{
  // read product from req body
  const product= req.body;
  // create new product model
  const newProduct= new ProductModel(product)
  // save to db
  await newProduct.save();
  // send response
  res.status(201).json({message:"product created succesfully",payload:newProduct})

})

//GET BY ID

ProductApi.get("/products/:id" ,async (req,res)=>{
  // read product id from req params
  const productId= (req.params.id)
  // fetch product from db by id

  let productObj= await ProductModel.findById(productId)
  // send response

   res.status(200).json({ message: "product found", payload: productObj });

})


//put bu id

ProductApi.put("/products/:id" ,async (req,res)=>{
  // read product id from req params
    const productId = req.params.id
    // validate product id
    if (!productId) {
      return res.status(400).send({ message: "Product ID is required" });
    }
    // read product from req body
    const product= req.body
    // update product in db
    let productObj = await ProductModel.findByIdAndUpdate(
       productId ,
      { $set: { ...product } },
      { new: true,runValidators:true },
    );
    // send response
    res.status(200).send({message:"updates",payload:productObj})
})


// deleter by id
ProductApi.delete("/products/:id" ,async (req,res)=>{
  // read product id from req params
  const productId=req.params.id
  const product = req.body
  // delete product from db
  let deletedUser=await ProductModel.findByIdAndDelete(productId)
  // send response
  res.status(200).json({ message: "product deleted successfully", payload: deletedUser });


})