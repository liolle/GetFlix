import {User} from "./model/users";
import * as dotenv from "dotenv";
dotenv.config();

let user = new User("test@test.com","test")


user.findOne()
.then((data)=>{
    console.log(data)

})
