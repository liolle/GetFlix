import { signJWT } from "../util/token";
import  {User}  from "../model/users";
import  bcrypt  from "bcrypt";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();



const basicConnect = async (user:User,hashedPwd:string,req: Request, res: Response)=>{

    const {pwd} = req.body
    
    if(bcrypt.compareSync(pwd,hashedPwd)){

        const accessToken = signJWT({"email": user.email}, process.env.ACCESS_TOKEN_TTL as string);
        const refreshToken = signJWT({"email": user.email}, process.env.REFRESH_TOKEN_TTL as string);

        try {
            // await user.update("",0,refreshToken)
                
            res.cookie("VRToken",refreshToken,{httpOnly:true,maxAge:24*60*60*1000, sameSite:"none" ,secure:true})
            res.cookie("VAToken",accessToken,{httpOnly:true,maxAge:20*60*1000, sameSite:"none" ,secure:true})

            res.status(200).json({
                message: "Access granted"
            })
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