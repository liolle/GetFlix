import {User} from "../model/users";
import { Request, Response } from 'express';

/*

{
    email   : test@test.com,
    pwd     : test
}

*/

const create = async (user:User, with_pwd:string, res: Response)=>{

    try {
        const result = await user.create(with_pwd);
        res.status(200).json({ msg: 'New user created' });
      } catch (error) {
        console.log("HERE: "+error)
        res.status(500).json({ error });
      }
      

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
        create(user,pwd,res)
        
    } catch (err) {
        if ((err == "no user found")){
            create(user,pwd,res);
        }
        else {
            res.status(400).json({ error: err });
        }
    }
    finally{
        user.pollEnd()
    }
  
};
  
export default register;
  
  
  
  