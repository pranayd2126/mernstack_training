import exp from "express"
import  {UserModel} from "../models/UserModel.js";
import {hash ,compare} from "bcryptjs"

export const userApi= exp.Router();


//CARETE user
userApi.post('/users',async (req,res)=>{
    const user= req.body;
   // console.log(user)
    let hashpass= await hash(user.password,8)
     user.password=hashpass;
    let newUser= new UserModel(user)

    await newUser.save();
    res.status(200).send({message:"user saevd"})

})

//app product to user,s cart








