import {Movies} from "../model/movie";
import { Request, Response } from "express";
require('dotenv').config()

const getRandom = async (req: Request, res: Response) =>{
    
    let movie = new Movies(-1)
    let n_string = parseInt(req.query.n as string )
    let n = Number.isNaN(n_string) ? 1:n_string

    try {
        let dbres = await movie.findRandom(n)

        dbres.forEach((element:any) => {
            if (element['name']) {
                let image = "https://image.tmdb.org/t/p/w500" + element['name']
                Object.assign(element,{image:image})
            }
        });
        res.status(200).json(dbres)
        return 
        
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"})
        return
    }

}

export default  getRandom