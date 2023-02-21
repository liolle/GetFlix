const { json } = require('express')
import {Movies} from "../model/movie";
import { Request, Response } from "express";
import console from "console";
require('dotenv').config()

//types=t1,t2,...&title=x&composition=union|inter&keyword=x



const getSelection = async (req: Request, res: Response): Promise<void> =>{

    let title = req.query.title as string || "" 
    let types = req.query.types as string || "" 
    let composition = req.query.composition as string || "AND" 
    let keyword = req.query.keyword as string || "" 

    //Movies(movieId: -1, name?: string, videoLink?: string, title?: string, description?: string, types?: string, view?: number): Movies
    let movie = new Movies(-1,"","",title,"",types)

    try {
        let dbres = await movie.findSelection(composition,keyword)
        res.status(200).json(dbres)
        return 
        
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"})
        return
    }


}

export default  getSelection