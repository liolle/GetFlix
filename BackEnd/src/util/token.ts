import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import crypto from "crypto";
dotenv.config();

export const createToken = (email:string)=>{

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

const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIICXQIBAAKBgQCzoGAzykC0ESYkNADUSaOnIT9ZvVHI3u3Vrcd9BCBxb70jfdMI
xR9gNnpUzJQ/PEaFAclYn+karK25OW+ukDnoBAP5P+lmfStbSlozHIfCrZ6zRz8O
z8Pqy939Y5LDrf7l3I95PQ03ABYLClcedNpDnaWWS0zGvx9R29oJK6tALQIDAQAB
AoGASWFqC55DYoxi7YVFFXRj48HkVG/P+mR/+rv8c+j8q/q+5MHhNYL5918qCHxu
z4p7MJjzPT5OhzQl4DZDlqeaz6of95cNADGA89lmZaWeK8muyuCzAo45MOoj7jg+
yLjkWWQIovfEzqN/mq5WnkD9h2EE6slcTk0lkQNuhaG0/G0CQQD0sgzo+Q4ueFNU
+fK49VyoFssyybOl5w85ymCxf70p3IClW6JqbGbRyr5wBAk5+iol6zPa+ssU5gbK
OcRAK5kXAkEAu+zFWJtFSLZTmV6KHGA7qfX6O7OQLo9d8Y2qe22dbLno+/AQiMsm
NzQXQfhQ4+cV7yJGsALQYjILNvXFV93zWwJBAOxwt2TOc1OX1P3BXzY1cEjDbakv
mTVvpRi0YuZghgpTFMOzXab0BA4nmAho/flVrzBgqwSnXWBePKVfWDChcBUCQBog
2W9wZzms4AK6+kjnuGPxJ1GVrb5LgKxNHh77JqAvWQ1uW14poK6cN3+cnuKRBqOx
CFMAkSiV/Kkvkricy3ECQQCudgxvoGevO1B+kcNzags0K14CHNtx2acLydsudxuv
ojPDhpVkNXQ8aWSrAwK95wks7GwfgJjNOwGKrKbTUNtX
-----END RSA PRIVATE KEY-----`

const publicKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCzoGAzykC0ESYkNADUSaOnIT9Z
vVHI3u3Vrcd9BCBxb70jfdMIxR9gNnpUzJQ/PEaFAclYn+karK25OW+ukDnoBAP5
P+lmfStbSlozHIfCrZ6zRz8Oz8Pqy939Y5LDrf7l3I95PQ03ABYLClcedNpDnaWW
S0zGvx9R29oJK6tALQIDAQAB
-----END PUBLIC KEY-----`


// sign jwt
export function signJWT(payload: object, expiresIn: string | number) {
    return jwt.sign(payload, process.env.PRK || privateKey, { algorithm: "RS256", expiresIn });
  }
  
// verify jwt
export function verifyJWT(token: string) {
    try {
        const decoded = jwt.verify(token, process.env.PK || publicKey);
        return { payload: decoded, expired: false };
    } catch (error) {
        //@ts-ignore
        return { payload: null, expired: error.message.includes("jwt expired") };
    }
}




