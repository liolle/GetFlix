import {User} from "../model/users";
import {Verif} from "../model/verif";
import { Request, Response } from 'express';
import { sendmail , EMAIL_VALIDATION_MODEL1} from "../services/email";
require('dotenv').config()

const createLink = (key:string):string=>{
    return process.env.SERVER+`/register/vfCheck?key=${key}`
}

export const  createVerification = async (req: Request, res: Response)=>{

    const {email} = req.body
    if (!email ){
        res.status(400).json({message: "One of the entry required entry is missing"})
        return
    }
    
    let verif1 = new Verif(
        email,
        Verif.getTimeStamp(),
        "testToken01",
        1
        )
        
    try {
        let key = Verif.generateToken(50)
        await verif1.create(key)

        // sent email 
        await sendmail(email,EMAIL_VALIDATION_MODEL1(createLink(key)),"Email verification")

        res.status(200).json({
            message:"Email sent at: " + email
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({message: "Server issues"})
    }
    finally{
        verif1.pollEnd()
    }
    
}
  
export const checkEmailVf = async (req: Request, res: Response)=>{
    let key = req.query.key as string || "" 

    if (key == ""){
        res.status(400).json({message: "One of the entry required entry is missing"})
        return
    }
    
    let verif1 = new Verif(
        "test@test.com",
        Verif.getTimeStamp(),
        "testToken01",
        1
    )

    try {
        let checked = await verif1.addStatusFromVf(key as string,1)

        if (checked){


            res.status(200).json({
                message:"Email verified"
            })
        }
        else{

            res.status(400).json({
                message:"Key expired"
            })
        }
        
    } catch (err) {
        console.log(err)
        res.status(500).json({message: "Server issues"})
    }
    finally{
        verif1.pollEnd()
    }

}
  
  
  
  