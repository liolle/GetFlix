import {User} from "../model/users";
import { Request, Response } from 'express';

/*

{
    email   : test@test.com,
    pwd     : test
}

*/

const create = async (user:User, with_pwd:string, res: Response)=>{

    return new Promise<string>( async (resolve, reject) => {
        try {
            const result = await user.create(with_pwd);
            resolve("New user created")
        } catch (error) {
            reject(error)
        }
    })

}

const register = async (req: Request, res: Response): Promise<void> => {
    const { email, pwd } = req.body;
  
    if (!email || !pwd) {
      res.status(400).json({ message: 'One of the required entries is missing' });
      return;
    }
  
    let user = new User(email)
    
    try {
        await user.findOne() 
        let message = await create(user,pwd,res)
        res.status(200).json({message: message});
        
    } catch (error) {
        if ((error == "no user found")){
            create(user,pwd,res);
            try {
                let message = await create(user,pwd,res)
                res.status(200).json({message: message});
            } catch (error ) {
                let err = (error as string).includes("Duplicate entry") ? "Email already exit" : "Bad request "
                res.status(400).json({ message: err });
            }
        }
        else {
            let err = (error as string).includes("Duplicate entry") ? "Email already exit" : "Bad request "
            res.status(400).json({ message: err });
        }
    }
    finally{
        user.pollEnd()
    }
  
};
  
export default register;
  
  
  
  