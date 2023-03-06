import {User} from "../model/users";
import {Verif} from "../model/verif";
import { Request, Response } from 'express';


const createLink = (key:string):string=>{
    return `https://getflix-production-8eb4.up.railway.app/register/vfCheck?key=${key}`
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
        let key = Verif.generateToken(200)
        await verif1.create(key)
        res.status(200).json({
            link:createLink(key)
        })
    } catch (err) {
        res.status(500).json({msg: "Server issues"})
    }
    finally{
        verif1.pollEnd()
    }
    
}
  
export const checkVerification = async (req: Request, res: Response)=>{
    const {key} = req.body

    if (!key ){
        res.status(400).json({msg: "One of the entry required entry is missing"})
        return
    }

    let verif1 = new Verif(
        "test@test.com",
        Verif.getTimeStamp(),
        "testToken01",
        1
    )

    try {
        let checked = await verif1.checkToken(key)

        if (checked){

            res.status(200).json({
                message:"Cache hit"
            })
        }
        else{

            res.status(400).json({
                message:"Cache miss"
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
  
  
  
  