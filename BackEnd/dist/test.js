"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("./model/users");
const movie_1 = require("./model/movie");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// import {signJWT} from "./util/token"
let user = new users_1.User("test2@test.com");
let movie = new movie_1.Movies(-1, "", "", "", "", "action,thriller");
// movie.findRandom(5)
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })
// let verif1 = new Verif(
//     "test2@test.com",
//     Verif.getTimeStamp(),
//     "testToken01",
//     1
// );
// let vToken = Verif.generateToken(200)
// verif1.create(vToken)
// .then((msg)=>{
//     console.log(msg)
//     return
// })
// .catch((err)=>{
//     console.log(err)
//     return
// })
// sendmail("pofaf44477@luxeic.com",EMAIL_VALIDATION_MODEL1("https://google.com"),"Email verification")
(async () => {
    // try {
    //     let res = await verif1.addStatusFromVf("BcUEFqVxeiW613CX1wxC0UaPCwYlPquegfFRLns0CWXAjt1gLSHBozFnoUZZvFQSIuIMjH8p3qAHsQHBJDwgvquOkuOuWi5RaLdJ2HFtG7nCITVa0rXTqnu0HJNxHXqvRFssN2TXIfR9tsTDL73aGQAbN8dLdbWlneP844Y6unQj1be3TgHvzXNgajCl33JJpWcIgj38",2)
    //     console.log(res)
    // } catch (error) {
    //     console.log(error)
    // }
})();
/*
movie.findSelection("","")
.then((data)=>{
    console.log(data)

})
.catch((err)=>{
    console.log(err)
})


user.create("test")
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})

*/
/*
user.findOne()
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})
*/
/*
user.update("UpdateTest","VIP1","hkjhk$b2kjhk=µ")
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})
*/
/*
user.delete()
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})
*/
/*
user.validatePwd("test")
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})
*/ 
