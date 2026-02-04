import exp from "express"
import  {UserModel} from "../models/UserModel.js";
import {hash ,compare} from "bcryptjs"
import {ProductModel} from "../models/ProductModel.js";

export const userApi= exp.Router();


//CARETE user
userApi.post('/users',async (req,res)=>{
//     const user= req.body;
//    // console.log(user)
//     let hashpass= await hash(user.password,8)
//      user.password=hashpass;
//     let newUser= new UserModel(user)

//     await newUser.save();
//     res.status(200).send({message:"user saevd"})

let newUser=req.body;
//validate newUser
new UserModel(newUser).validate();
//hash the password
let   hashpass= await hash(newUser.password,8)
    newUser.password=hashpass;

    //create user model
    let newDoc=await UserModel.create(newUser);
    res.status(200).send({message:"user created",payload:newDoc})



})

//app product to user,s cart
//  Add "quantity" filed  along with productId in user cart. Set the initial value of "quantity" field is 1 by default. When user adding a product to cart, it should check that product is already there in cart. If it is there , increment count by 1. If product is not there, then add new product to cart with quantity as 1

//  userApi.put('/user-cart/:userid/:uid/productid/:pid',async (req,res)=>{
//     // raduid and pid from url paramantr
//     let {uid,pid}=req.params;//{ uid:"", ,pid}
//     let user = await UserModel.findById(uid);
//  if( !user) {
//      return res.status(404).send({message:"user not found"})
    
//  }
//  let product=await ProductModel.findById(pid);
//  if(!product){
//     return res.status(404).send({message:"product not found"})
//  }
//     let updatedUser=await UserModel.findByIdAndUpdate(
//         uid,
//         {$push:{"cart":{product:pid}}},
//         {new :true}
//     )
//     //perform hte update
//     res.status(200).send({message:"product added to cart",user:updatedUser})
//  });


userApi.put('/user-cart/:userid/:uid/productid/:pid',async (req,res)=>{
    // raduid and pid from url paramantr
    let {uid,pid}=req.params;//{ uid:"", ,pid}

    let user = await UserModel.findById(uid);
 if( !user) {
     return res.status(404).send({message:"user not found"})

    }
    let product=await ProductModel.findById(pid);
    if(!product){
       return res.status(404).send({message:"product not found"})
    }
    //check if product is already in cart


   //if product exit then incremnet
   let updatedUser= await UserModel.findOneAndUpdate({_id: uid, "cart.product": pid},{
        $inc: { "cart.$.quantity": 1 } },{ new: true });

    //if product not exit then add new product with quantity 1
    if(!updatedUser){
        updatedUser=await UserModel.findByIdAndUpdate(
            uid,
            {$push:{"cart":{product:pid, quantity: 1}}},
            {new :true}
        )
    }

    res.status(200).send({message:"product added to cart",user:updatedUser})

});
// read user by id

userApi.get('/users/:uid', async(req,res)=>{
    let {uid}=req.params;
    let user= await UserModel.findById(uid).populate("cart.product");
    if(!user){
        return res.status(404).send({message:"user not found"})
    }
    res.status(200).send( { message:"user found", payload:user})
})



 