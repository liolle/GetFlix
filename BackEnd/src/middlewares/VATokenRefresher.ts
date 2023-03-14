import dotenv from "dotenv";
dotenv.config();

import { NextFunction, Request, Response } from "express";
import { signJWT, verifyJWT } from "../util/token";

const VATokenRefresher = (req: Request, res: Response, next: NextFunction) =>{
  const { VRToken, VAToken } = req.cookies;
  
  if (!VAToken) {
    return next();
  }

  const { payload, expired } = verifyJWT(VAToken);
  // For a valid access token
  if (payload) {
    // @ts-ignore
    req.user = payload;
    return next();
  }
  
  // expired but valid access token

  if (expired && VRToken){
    //refresh 
    const { payload, expired } = verifyJWT(VRToken);
    
    if (payload) {
      // @ts-ignore
      const newVAToken = signJWT({"email": payload.email}, process.env.ACCESS_TOKEN_TTL as string);
      res.cookie("VAToken",newVAToken,{httpOnly:true,maxAge:20*60*1000, sameSite:"none" ,secure:true})

      // @ts-ignore
      req.user = verifyJWT(newVAToken).payload;
      return next();
    }
  }
  
}

export default VATokenRefresher;