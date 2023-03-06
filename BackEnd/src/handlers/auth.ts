const { json } = require('express')

import  {User}  from "../model/users";
import jwt from "jsonwebtoken";
import  bcrypt  from "bcrypt";
import { Request, Response, NextFunction } from "express";
import console from "console";
require('dotenv').config()


const verifyJwt = (req: Request, res:Response)=>{

    const authHeader = req.headers['authorization'];

    if (!authHeader){
        res.status(401).json({
            message: "Unauthorized"
        })
        return
    }  
    
    const token = authHeader.split(' ')[1];
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_S as string,
        (err, decoded) => {
            if (err){
                res.status(401).json({
                    message: "Unauthorized"
                })
                return 
            }
            // req.email = decoded.email;
            let dec = decoded as jwt.JwtPayload
            if (dec['email'] != req.body['email']){
                res.status(401).json({
                    message: "Unauthorized"
                    
                }) 
                return 
            }

            res.status(200).json({
                message: "Access granted"
            })
            return 
        }
    );

}

const tokenConnect = (email:string, req: Request, res:Response)=>{
    verifyJwt(req, res)
    return
}

const auth = async (req: Request, res: Response): Promise<void> =>{
    const {email,pwd} = req.body

    const authHeader = req.headers['authorization'];

    if(!authHeader || !email ){
        res.status(400).json({message: "One of the entry required entry is missing"})
        return
    } 
    
    let user = new User(email)
    try {
        let dbRes = await user.findOne()
        tokenConnect(dbRes[0]['pwd'],req,res)
        
    } catch (error) {
        res.status(401).json({message: "Unauthorized"})
    }
    finally{
        user.pollEnd()
    }

}

export default  auth