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
        res.status(200).json({
            msg: "Unauthorized"
        })
        return
    }  
    
    const token = authHeader.split(' ')[1];
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_S as string,
        (err, decoded) => {
            if (err){
                res.status(200).json({
                    msg: "Invalid token"
                })
                return 
            }
            console.log(decoded)
            // req.email = decoded.email;
            console.log(decoded)
            res.status(200).json({
                msg: "Access granted"
            })        
        }
    );

}

const tokenConnect = (email:string, req: Request, res:Response)=>{
    verifyJwt(req, res)
    return
}


const basicConnect = async (user:User,hashedPwd:string,req: Request, res: Response)=>{
    //TODO
    const {pwd} = req.body
    
    if(bcrypt.compareSync(pwd,hashedPwd)){
        //Creat token and sent it
        const accessToken = jwt.sign(
            {"email": user.email},
            process.env.ACCESS_TOKEN_S as string,
            {expiresIn:process.env.ACCESS_TOKEN_TTL}
        )

        const refreshToken = jwt.sign(
            {"email": user.email},
            process.env.REFRESH_TOKEN_S as string,
            {expiresIn:process.env.REFRESH_TOKEN_TTL}
        )

        try {
            user.update("","",refreshToken)
            .then((data)=>{
                console.log(data)
            })
            .catch((err)=>{
                console.log(err)
            })
            res.cookie("VRToken",refreshToken,{httpOnly:true,maxAge:24*60*60*1000})
            res.status(200).json({
                msg: "Connection succeeded",
                token:accessToken
            })
            // copy token in db
        } catch (error) {
            res.status(500).json({msg: "Connection issues"})
        }

    }
    else{
        res.status(400).json({msg: "email or pwd incorrect"})
        return
    }
}

const login = async (req: Request, res: Response): Promise<void> =>{
    const {email,pwd} = req.body

    const authHeader = req.headers['authorization'];

    if (!email){
        res.status(400).json({message: "One of the entry required entry is missing"})
        return
    }

    if(!authHeader && (!email || !pwd) ){
        res.status(400).json({message: "One of the entry required entry is missing"})
        return
    } 
    
    let user = new User(email)
    
    if (email && pwd){
        
        try {
            let dbRes = await user.findOne()
            basicConnect(user,dbRes[0]['pwd'],req,res)
            
        } catch (error) {
            res.status(400).json({message: error})
            return
        }
        
    }
    else if(email && authHeader){
        
        try {
            let dbRes = await user.findOne()
            tokenConnect(dbRes[0]['pwd'],req,res)
            
        } catch (error) {
            
        }
    }
    else {
        
    }

}

export default  login