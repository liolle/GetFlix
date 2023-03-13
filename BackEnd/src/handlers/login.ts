const { json } = require('express')

import  {User}  from "../model/users";
import jwt from "jsonwebtoken";
import  bcrypt  from "bcrypt";
import { Request, Response, NextFunction } from "express";
import console from "console";
require('dotenv').config()



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
                message: "Access granted",
                token:accessToken
            })
            // copy token in db
        } catch (error) {
            res.status(500).json({message: "Internal Server Error"})
        }

    }
    else{
        res.status(400).json({message: "email or pwd incorrect"})
        return
    }
}

const login = async (req: Request, res: Response): Promise<void> =>{
    const {email,pwd} = req.body

    if (!email || !pwd){
        res.status(400).json({message: "One of the entry required entry is missing"})
        return
    }
    
    let user = new User(email)
    
    try {
        let dbRes = await user.findOne()
        basicConnect(user,dbRes[0]['pwd'],req,res)
        
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"})
        
    }
    finally{
        user.pollEnd()
    }

}

export default  login