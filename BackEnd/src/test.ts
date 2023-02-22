import {User} from "./model/users";
import {Movies} from "./model/movie";
require('dotenv').config()

let user = new User("test2@test.com")

let movie = new Movies(-1,"","","","","action,thriller")

movie.findRandom(5)
.then((data)=>{
    console.log(data)

})
.catch((err)=>{
    console.log(err)
})

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