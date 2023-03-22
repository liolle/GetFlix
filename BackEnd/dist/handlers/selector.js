"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { json } = require('express');
const movie_1 = require("../model/movie");
const console_1 = __importDefault(require("console"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//types=t1,t2,...&title=x&composition=union|inter&keyword=x
const getSelection = async (req, res) => {
    let title = req.query.title || "";
    let types = req.query.types || "";
    let composition = req.query.composition || "AND";
    let keyword = req.query.keyword || "";
    let movie = new movie_1.Movies(-1, "", "", title, "", types);
    try {
        let dbres = await movie.findSelection(composition, keyword);
        dbres.forEach((element) => {
            if (element['name']) {
                let image = "https://image.tmdb.org/t/p/w500" + element['name'];
                Object.assign(element, { image: image });
            }
        });
        res.status(200).json(dbres);
    }
    catch (error) {
        console_1.default.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
    finally {
        movie.pollEnd();
    }
};
exports.default = getSelection;
