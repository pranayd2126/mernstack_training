import { Schema ,model } from "mongoose";
const userSchema = new Schema({
// defining fields
//field1: dataType
    username:{
        type:String,
        required:[true, "Username is required"],
        maxLength:[20, "Username cannot exceed 20 characters"],
    },
    password:{
        type:String,
        required:[true, "Password is required"],

    },
    age:{
        type:Number,
        min:[18, "Age should be at least 18"],
        max:[120, "age shoud be less then25"],
    },

},{
strict: "throw",
timestamps:true,
});
//model creation 
 export const UserModel = model("user", userSchema);