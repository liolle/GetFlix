"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const token_1 = require("../util/token");
const auth = async (req, res) => {
    const { VAToken } = req.cookies;
    if (!VAToken) {
        res.status(401).json({ message: "Unauthorized" });
        return;
    }
    const { payload } = (0, token_1.verifyJWT)(VAToken);
    if (!payload) {
        res.status(401).json({ message: "Unauthorized" });
        return;
    }
    res.status(200).json({ message: "Access granted" });
};
exports.default = auth;
