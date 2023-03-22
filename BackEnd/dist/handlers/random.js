"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const movie_1 = require("../model/movie");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const getRandom = async (req, res) => {
    let movie = new movie_1.Movies(-1);
    let n_string = parseInt(req.query.n);
    let n = Number.isNaN(n_string) ? 1 : n_string;
    try {
        let dbres = await movie.findRandom(n);
        dbres.forEach((element) => {
            if (element['name']) {
                let image = "https://image.tmdb.org/t/p/w500" + element['name'];
                Object.assign(element, { image: image });
            }
        });
        res.status(200).json(dbres);
        return;
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
        return;
    }
    finally {
        movie.pollEnd();
    }
};
exports.default = getRandom;
