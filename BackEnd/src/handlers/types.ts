import {Movies} from "../model/movie";
import { Request, Response } from "express";
require('dotenv').config()

//types=t1,t2,...&title=x&composition=union|inter&keyword=x



const getTypes = async (req: Request, res: Response): Promise<void> =>{

    // database option
    // TODO

    //---------------------------------
    // static option
    return new Promise<void>((resolve, reject) => {
        res.status(200).json(["Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", 
            "History", "Horror", "Music", "Mystery", "Romance", "Science Fiction", "TV Movie", "Thriller", "War", "Western"])
    })
    
}

export default  getTypes