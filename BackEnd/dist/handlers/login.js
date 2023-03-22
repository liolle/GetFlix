"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = require("../util/token");
const users_1 = require("../model/users");
const bcrypt_1 = __importDefault(require("bcrypt"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const basicConnect = async (user, hashedPwd, req, res) => {
    const { pwd } = req.body;
    if (bcrypt_1.default.compareSync(pwd, hashedPwd)) {
        const accessToken = (0, token_1.signJWT)({ "email": user.email }, process.env.ACCESS_TOKEN_TTL);
        const refreshToken = (0, token_1.signJWT)({ "email": user.email }, process.env.REFRESH_TOKEN_TTL);
        try {
            // await user.update("",0,refreshToken)
            res.cookie("VRToken", refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000, sameSite: "none", secure: true });
            res.cookie("VAToken", accessToken, { httpOnly: true, maxAge: 20 * 60 * 1000, sameSite: "none", secure: true });
            res.status(200).json({
                message: "Access granted"
            });
        }
        catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
    else {
        res.status(400).json({ message: "email or pwd incorrect" });
        return;
    }
};
const login = async (req, res) => {
    const { email, pwd } = req.body;
    if (!email || !pwd) {
        res.status(400).json({ message: "One of the entry required entry is missing" });
        return;
    }
    let user = new users_1.User(email);
    try {
        let dbRes = await user.findOne();
        basicConnect(user, dbRes[0]['pwd'], req, res);
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
    finally {
        user.pollEnd();
    }
};
exports.default = login;
