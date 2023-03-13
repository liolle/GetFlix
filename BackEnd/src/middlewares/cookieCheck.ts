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

  console.log(payload)

  // expired but valid access token
/*/
  const { payload: refresh } =
    expired && VRToken ? verifyJWT(VRToken) : { payload: null };

  if (!refresh) {
    return next();
  }

  /*
  const session = getSession(refresh.email);

  if (!session) {
    return next();
  }

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