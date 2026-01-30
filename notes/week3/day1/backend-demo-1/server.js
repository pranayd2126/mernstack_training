// crete http server using express js
import express from 'express';
import { ProductApi } from './api/product-api.js';
import { userApi } from './api/user-api.js';
const app = express();

const PORT=3000;
// Middleware to parse JSON bodies
app.use(express.json());

// function Middleware1(req, res, next) {
//     console.log('Middleware 1 executed');
//     next();
// }
// //to exetute middleware
//app.use(Middleware1);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// Mounting the routers
app.use('/product-api', ProductApi);
app.use('/user-api', userApi);



app.get('/',( req,res)=>{
    res.send('Hello World from Express.js');
    console.log('Request received at /');




    
})