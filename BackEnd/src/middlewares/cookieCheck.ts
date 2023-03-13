import dotenv from "dotenv";
dotenv.config();

import { NextFunction, Request, Response } from "express";
import { signJWT, verifyJWT } from "../util/token";

const cookieCheck = (req: Request, res: Response, next: NextFunction) =>{
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

      res.cookie("VAToken",newVAToken,{httpOnly:true,maxAge:20*60*1000})
      // @ts-ignore
      req.user = verifyJWT(newVAToken).payload;

      return next();
    }
  }
  
  // console.log(expired)
  // const { payload: refresh } = expired && VRToken ? verifyJWT(VRToken) : { payload: null };
  
  // if (!refresh) {
  //   console.log("NOT")
  //   return next();
  // }
  
  /*

  const newVAToken = signJWT(session, "5s");

  res.cookie("accessToken", newAccessToken, {
    maxAge: 300000, // 5 minutes
    httpOnly: true,
  });

  // @ts-ignore
  req.user = verifyJWT(newAccessToken).payload;

  return next();
  */
}

export default cookieCheck;