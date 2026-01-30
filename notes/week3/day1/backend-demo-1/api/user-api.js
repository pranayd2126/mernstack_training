 import exp from 'express';

 export const userApi = exp.Router();


let users=[]

    // Get all users
    userApi.get('/users',( req,res)=>{
        res.status(200). json({message:'Get all users',payload:users});

    })

    userApi.post('/users',( req,res)=>{
        //get user reqeast from user
        const user=req.body;
        //insert new user into users array
        users.push(user);
        res.status(201). json({message:'User created successfully',payload:user});

    })

    userApi.put('/users/:id',( req,res)=>{
        //updating the uzzser
        //get modifoed user from user
        const modifiedUser=req.body;
        //console.log(modifiedUser)
        //find the user exits in array
        let userIndex=  users.findIndex(userObj=>userObj.id=== modifiedUser.id)

        //if user is not found send res "user not fiund"
        if(userIndex===-1){
          return res.json({message:"user not foude"})
        }else{
        let deletedUser = users.splice(userIndex, 1, modifiedUser);
        res.status(200).json({message:"done"})
    }
        //if user found ,thrn modeifu the user

    })

    userApi.delete('/users/:id',( req,res)=>{

        const userId=Number(req.params.id)
        const user= users.findIndex((userObj)=>(userObj.id===users.id))
       if (!user) {
         return res.status(404).json({ message: "user not found" });
       }
       let deleteUser=users.slice(user,1)
       res.status(200).json({message:"user deletd"  })
    })
    userApi.get('/users/:id',( req,res)=>{
        const userId =  Number(req.params.id);
        const user= users.find(userObj=> userObj.id=== userId);
        if(!user){
            return res.status(404).json({message:"user not found"})
        }
        res.status(200).json({message:"user found",payload:user});
    })
