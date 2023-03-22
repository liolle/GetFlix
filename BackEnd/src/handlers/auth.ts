import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();
import { verifyJWT } from "../util/token";

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