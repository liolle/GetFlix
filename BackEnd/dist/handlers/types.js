"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//types=t1,t2,...&title=x&composition=union|inter&keyword=x
const getTypes = async (req, res) => {
    // database option
    // TODO
    //---------------------------------
    // static option
    return new Promise((resolve, reject) => {
        res.status(200).json(["Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy",
            "History", "Horror", "Music", "Mystery", "Romance", "Science Fiction", "TV Movie", "Thriller", "War", "Western"]);
    });
};
exports.default = getTypes;
