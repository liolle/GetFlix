const { json } = require('express')

import  {User}  from "../model/users";
import jwt from "jsonwebtoken";
import  bcrypt  from "bcrypt";
import { Request, Response, NextFunction } from "express";
import console from "console";
require('dotenv').config()
import { verifyJWT } from "../util/token";


// const verifyJwt = (req: Request, res:Response)=>{

//     const authHeader = req.headers['authorization'];

//     if (!authHeader){
//         res.status(401).json({
//             message: "Unauthorized"
//         })
//         return
//     }  
    
//     const token = authHeader.split(' ')[1];
//     jwt.verify(
//         token,
//         process.env.ACCESS_TOKEN_S as string,
//         (err, decoded) => {
//             if (err){
//                 res.status(401).json({
//                     message: "Unauthorized"
//                 })
//                 return 
//             }
//             // req.email = decoded.email;
//             let dec = decoded as jwt.JwtPayload
//             if (dec['email'] != req.body['email']){
//                 res.status(401).json({
//                     message: "Unauthorized"
                    
//                 }) 
//                 return 
//             }

//             res.status(200).json({
//                 message: "Access granted"
//             })
//             return 
//         }
//     );

// }

// const tokenConnect = (email:string, req: Request, res:Response)=>{
//     verifyJwt(req, res)
//     return
// }

const auth = async (req: Request, res: Response): Promise<void> =>{
    const {VAToken} = req.cookies

    if (!VAToken) {
        res.status(401).json({message: "Unauthorized"}) 
        return
    }

    const { payload } = verifyJWT(VAToken);

    if (!payload){
        res.status(401).json({message: "Unauthorized"}) 
        return
    }

    res.status(200).json({message: "Access granted"}) 

}

export default  auth