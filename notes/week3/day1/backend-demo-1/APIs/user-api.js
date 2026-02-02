    //  import exp from 'express';

    //  export const userApi = exp.Router();


    // let users=[]

    //     // Get all users
    //     userApi.get('/users',( req,res)=>{
    //         res.status(200). json({message:'Get all users',payload:users});

    //     })

    //     userApi.post('/users',( req,res)=>{
    //         //get user reqeast from user
    //         const user=req.body;
    //         //insert new user into users array
    //         users.push(user);
    //         res.status(201). json({message:'User created successfully',payload:user});

    //     })

    //     userApi.put('/users/:id',( req,res)=>{
    //         //updating the uzzser
    //         //get modifoed user from user
    //         const modifiedUser=req.body;
    //         //console.log(modifiedUser)
    //         //find the user exits in array
    //         let userIndex=  users.findIndex(userObj=>userObj.id=== modifiedUser.id)

    //         //if user is not found send res "user not fiund"
    //         if(userIndex===-1){
    //           return res.json({message:"user not foude"})
    //         }else{
    //         let deletedUser = users.splice(userIndex, 1, modifiedUser);
    //         res.status(200).json({message:"done"})
    //     }
    //         //if user found ,thrn modeifu the user

    //     })

    //     userApi.delete('/users/:id',( req,res)=>{

    //         const userId=Number(req.params.id)
    //         const user= users.findIndex((userObj)=>(userObj.id===users.id))
    //        if (!user) {
    //          return res.status(404).json({ message: "user not found" });
    //        }
    //        let deleteUser=users.slice(user,1)
    //        res.status(200).json({message:"user deletd"  })
    //     })
    //     userApi.get('/users/:id',( req,res)=>{
    //         const userId =  Number(req.params.id);
    //         const user= users.find(userObj=> userObj.id=== userId);
    //         if(!user){
    //             return res.status(404).json({message:"user not found"})
    //         }
    //         res.status(200).json({message:"user found",payload:user});
    //     })


    import exp from 'express';
    import { UserModel } from '../models/UserModel.js';
    import { hash,compare} from 'bcryptjs';
    import jwt from 'jsonwebtoken';

    export const userApi = exp.Router();

    //READ uSERS

    userApi.get('/users',async ( req,res)=>{
        try{
            const users = await UserModel.find({},{username:1,age:1,password:0});   
            res.status(200). json({message:'Get all users',payload:users});
        }catch(err){
            res.status(500).json({message:"err in fetching users",error:err.message});
        }


    })
    //CREATE USER
    userApi.post('/users',async ( req,res)=>{
        //get new user from req
        let newUser=req.body;
        //hashing the passoer
        let hashedPass= await hash (newUser.password,12);
        //Console.log(newUser)
        //
        newUser.password=hashedPass;
        //
        //create new user in document
        let  newUserDoc=new UserModel(newUser);
        await newUserDoc.save();

        res.status(201).json({message:"User created successfully",payload:newUserDoc});
    })

    //user authentication (login)
    userApi.post('/auth',async ( req,res)=>{
        let userCred= req.body;
        //find user by username
        let userObj= await UserModel.findOne({username:userCred.username});
        if(userObj=== null){
            return res.status(404).json({message:"user not found"});
        }
        //compare password
    const status=await compare(userCred.password,userObj.password);
        if(status===false){
            return res.status(401).json({message:"invalid credentials"});
        }
        //crate sighrnf tken
         let signedToken = jwt.sign({usename:userCred.username},'abcdef',{expiresIn:30});
         //save token in httponlu cookie 

         res.cookie('token',signedToken,{httpOnly:true,
         secure:false, //set to true if using https
         sameSite:'lax',
         });


         //send response
            res.status(200).json({message:"login success"});
        
    });

    //read user by object id
    userApi.get('/users/:id',async ( req,res)=>{
        //get object id from req
        const objId=req.params.id;
        //find user by id
        let userObj= await UserModel.findById(objId);
        //
        res.status(200).json({message:"user found",payload:userObj});
    })


    //UPDATE USER by object id


    userApi .put("/users/:id",async(req,res)=>{
        //gte objectId from url param
        let objId=req.params.id
        //get modified 
        let modifiedUser=req.body
        //update user in document
       let lastUser = await UserModel.findByIdAndUpdate(objId,{$set:{...modifiedUser} },{new:true});
       //send resouurce 
        res.status(200).json({message:"user updated successfully",payload:lastUser});



    })
    //DELETE USER by object id

    userApi.delete("/users/:id",async(req,res)=>{
        //get object id from url param
        let objId=req.params.id;
        //delete user from document
      let deletd= await UserModel.findByIdAndDelete(objId);
        //send resourse
        res.status(200).json({message:"user deleted successfully" ,payload:deletd});
    })