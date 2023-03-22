"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../model/users");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const getUser = async (req, res) => {
    //@ts-ignore
    const { email } = req.user || { email: undefined };
    if (!email) {
        res.status(401).json({ message: "Unauthorized" });
        return;
    }
    let user = new users_1.User(email);
    try {
        let dbRes = await user.findOne();
        // basicConnect(user,dbRes[0]['pwd'],req,res)
        res.status(200).json({
            email: dbRes[0]['email'],
            username: dbRes[0]['username'],
            status: dbRes[0]['status']
        });
    }
    catch (error) {
        res.status(400).json({ message: "Bad request" });
    }
    finally {
        user.pollEnd();
    }
};
exports.default = getUser;
