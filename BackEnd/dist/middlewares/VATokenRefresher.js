"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const token_1 = require("../util/token");
const VATokenRefresher = (req, res, next) => {
    const { VRToken, VAToken } = req.cookies;
    if (!VAToken) {
        return next();
    }
    const { payload, expired } = (0, token_1.verifyJWT)(VAToken);
    // For a valid access token
    if (payload) {
        // @ts-ignore
        req.user = payload;
        return next();
    }
    // expired but valid access token
    if (expired && VRToken) {
        //refresh 
        const { payload, expired } = (0, token_1.verifyJWT)(VRToken);
        if (payload) {
            // @ts-ignore
            const newVAToken = (0, token_1.signJWT)({ "email": payload.email }, process.env.ACCESS_TOKEN_TTL);
            res.cookie("VAToken", newVAToken, { httpOnly: true, maxAge: 20 * 60 * 1000, sameSite: "none", secure: true });
            // @ts-ignore
            req.user = (0, token_1.verifyJWT)(newVAToken).payload;
            return next();
        }
    }
};
exports.default = VATokenRefresher;
