import { Schema,model } from "mongoose";

//cart shcea, 

const cartSchmea= new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:"product",
        required:true
    }
})



const userSchema = new Schema({

    name :{
        type:String,
        required:[true,"name is required"]

    },
    email:{
        type:String,
        required:[true,"email reqired"],
        unique:true   // add to index 

    },
    password:{
        type:String,
        required:[true ,"pass is requrre"]
    },
    cart:{
        type:[cartSchmea]

    }
    
})


export const UserModel=model("user",userSchema)