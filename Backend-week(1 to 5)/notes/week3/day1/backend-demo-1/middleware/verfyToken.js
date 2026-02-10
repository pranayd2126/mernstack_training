import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";


export function verifyToken(req,res,next)
{
    //token verification logic
            // npm cookie-parser
    let signedToken=req.cookies.token;
    if(!signedToken){
        return res.status(401).json({message:"Access denied. No token provided"});
    // verfiatcion n the toekn}
    }
 let decodedToken =   jwt.verify(signedToken,'abcdef')
// console.log(decodedToken)    ;
next();

}