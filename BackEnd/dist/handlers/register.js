"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../model/users");
/*

{
    email   : test@test.com,
    pwd     : test
}

*/
const create = async (user, with_pwd, res) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await user.create(with_pwd);
            resolve("New user created");
        }
        catch (error) {
            console.log("REGISTER");
            console.log(error);
            reject(error);
        }
    });
};
const register = async (req, res) => {
    const { email, pwd } = req.body;
    if (!email || !pwd) {
        res.status(400).json({ message: 'One of the required entries is missing' });
        return;
    }
    let user = new users_1.User(email);
    try {
        await user.findOne();
        console.log("Before create");
        let message = await create(user, pwd, res);
        console.log("After create");
        res.status(200).json({ message: message });
    }
    catch (error) {
        if ((error == "no user found")) {
            create(user, pwd, res);
            try {
                let message = await create(user, pwd, res);
                res.status(200).json({ message: message });
            }
            catch (error) {
                let err = error.includes("Duplicate entry") ? "Email already exit" : "Bad request ";
                res.status(400).json({ message: err });
            }
        }
        else {
            console.log(error);
            console.log("HERE");
            // let err = (error as string).includes("Duplicate entry") ? "Email already exit" : "Bad request "
            res.status(400).json({ message: error });
        }
    }
    finally {
        user.pollEnd();
    }
};
exports.default = register;
