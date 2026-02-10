
// //create http server
import exp from 'express';
import mongoose from 'mongoose';
import { userApi } from './APIs/userApi.js';
import { ProductApi } from './APIs/productApi.js';




const PORT = 3000;
//connert to mongoDb dtatabase
const app= exp();
//middleware
app.use (exp.json());


async function connectDB(){
     try{
          await mongoose.connect("mongodb://127.0.0.1:27017/e-com");
            console.log("DB Connected Success");
            app.listen(PORT,()=>{
                console.log(`Running ${PORT}`);
            });

     } catch(err){
        console.log("Err in DB connection",err);
     }
}
connectDB();



app.use('/product-api',ProductApi);
app.use('/user-api',userApi);

app.get('/',(req,res)=>{
    res.send("Hello World from Express.js");
})





//use boady parser midleaew

//forword req to specify API

//erroe handing middleae
function errorHandler(err,req,res,next){
    console.error (err.stack);

    res.status(500).send({message:err.message});
}
app.use (errorHandler)