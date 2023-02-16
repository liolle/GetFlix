import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const createToken = (email:string)=>{

    const accessToken = jwt.sign(
        {"email": email},
        process.env.ACCESS_TOKEN_S as string,
        {expiresIn:process.env.ACCESS_TOKEN_TTL}
    )

    const refreshToken = jwt.sign(
        {"email": email},
        process.env.REFRESH_TOKEN_S as string,
        {expiresIn:process.env.REFRESH_TOKEN_TTL}
    )

    return {
        access:accessToken,
        refresh:refreshToken
    }

}

export default {createToken};
