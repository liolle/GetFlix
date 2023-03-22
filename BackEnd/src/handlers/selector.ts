const { json } = require('express')
import {Movies} from "../model/movie";
import { Request, Response } from "express";
import console from "console";
import dotenv from "dotenv";
dotenv.config();

//types=t1,t2,...&title=x&composition=union|inter&keyword=x



const getSelection = async (req: Request, res: Response): Promise<void> =>{

    let title = req.query.title as string || "" 
    let types = req.query.types as string || "" 
    let composition = req.query.composition as string || "AND" 
    let keyword = req.query.keyword as string || "" 

    let movie = new Movies(-1,"","",title,"",types)

    try {
        let dbres = await movie.findSelection(composition,keyword)

        dbres.forEach((element:any) => {
            if (element['name']) {
                let image = "https://image.tmdb.org/t/p/w500" + element['name']
                Object.assign(element,{image:image})
            }
            
        });
        res.status(200).json(dbres)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal Server Error"})
    }
    finally{
        movie.pollEnd()

    }

}

export default  getSelection