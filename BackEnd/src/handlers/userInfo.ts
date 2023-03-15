import { User} from "../model/users";

import { signJWT } from "../util/token";
import  bcrypt  from "bcrypt";
import { Request, Response, NextFunction } from "express";
require('dotenv').config()

const getUser = async (req: Request, res: Response): Promise<void> =>{
    //@ts-ignore
    const {email} = req.user || {email: undefined}
    
    if (!email ){
        res.status(401).json({message: "Unauthorized"})
        return
    }
    
    let user = new User(email)
    
    try {
        let dbRes = await user.findOne()
        // basicConnect(user,dbRes[0]['pwd'],req,res)

        res.status(200).json({
            email : dbRes[0]['email'],
            username : dbRes[0]['username'],
            status : dbRes[0]['status']
        })
        
    } catch (error) {
        res.status(400).json({message: "Bad request"})
    }
    finally{
        user.pollEnd()
    }

}

export default  getUser