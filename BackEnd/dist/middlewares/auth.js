"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyJwt = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
        res.status(401).json("Unauthorized");
        return;
    }
    const token = authHeader.split(" ")[1];
    jsonwebtoken_1.default.verify(token, process.env.ACCESS_TOKEN_S, (err, decoded) => {
        if (err) {
            res.status(403).json("Invalid token");
            return;
        }
        // req.email = decoded.email;
        console.log("Check succeeded");
        next();
    });
};
exports.default = verifyJwt;
