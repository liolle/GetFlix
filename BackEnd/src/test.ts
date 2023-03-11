import {User} from "./model/users";
import {Movies} from "./model/movie";
import {Verif} from "./model/verif";
import { sendmail, EMAIL_VALIDATION_MODEL1 } from "../src/services/email";
require('dotenv').config()

let user = new User("test2@test.com")

let movie = new Movies(-1,"","","","","action,thriller")

// movie.findRandom(5)
// .then((data)=>{
//     console.log(data)

// })
// .catch((err)=>{
//     console.log(err)
// })

// let verif1 = new Verif(
//     "test@test.com",
//     Verif.getTimeStamp(),
//     "testToken01",
//     1
// )

// verif1.create("testToken01")
// .then((msg)=>{
    
//     console.log(msg)
// })

sendmail("pofaf44477@luxeic.com",EMAIL_VALIDATION_MODEL1("https://google.com"),"Email verification")




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