import {User} from "./model/users";
import {Movies} from "./model/movie";
import {Verif} from "./model/verif";
import { sendmail, EMAIL_VALIDATION_MODEL1 } from "../src/services/email";
require('dotenv').config()

import {signJWT} from "./util/token"
// import {signJWT} from "./util/token"

let user = new User("test2@test.com")

let movie = new Movies(-1,"","","","","action,thriller");

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


 (async ()=>{

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