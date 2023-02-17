import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const verifyJwt = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    res.status(401).json("Unauthorized");
    return;
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_S as string, (err, decoded) => {
    if (err) {
      res.status(403).json("Invalid token");
      return;
    }

    req.email = decoded.email;
    console.log("Check succeeded");
    next();
  });
};

export default verifyJwt;




