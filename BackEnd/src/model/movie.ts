import DbConnect from "../util/dbConnect";

/*

CREATE TABLE user (
	movieId int(11) PRIMARY KEY NOT NULL,
    name varchar(255) NOT NULL,
	videoLink varchar(255) ,
    title varchar(128),
    description text,
    types varchar(255)
    views
);

*/

export class Movies extends DbConnect {
    movieId: number;
    name: string;
    videoLink: string;
    title: string;
    description: string;
    types: string;
    view: number;

    constructor(
        movieId:-1,
        name = "",
        videoLink = "",
        title = "",
        description = "",
        types = "",
        view = 0
    ) {
        
        super();
        this.movieId = movieId;
        this.name = name;
        this.videoLink = videoLink;
        this.title = title;
        this.description = description;
        this.types = types;
        this.view = view;
    }
    
    
    findAll():any{
        //TODO
    }

    async findOne(){
        
        return new Promise<any>(async (resolve, reject) => {
            
            try {
                if (this.movieId != -1){
                    resolve( await this.findId_title("movieId",this.movieId))
                    return  
                } 
        
                if (this.title != ""){
                    resolve( await this.findId_title("title",this.title))
                    return  
                } 
                
            } catch (error) {
                console.log(error)
                reject(error)
            }
            
        })
        
    }

    async findSelection(composition = "",keyword = ""):Promise<any>{

        return new Promise<any>((resolve, reject) => {

            let sql = this.createFilter(composition,keyword)
            
            this.connection.query(sql, (err:any, rows:[], fields:any)=>{
                if (err ){
                    console.log(err)
                    reject(err['sqlMessage'])
                }

                if (!rows) {
                    reject("no user found")
                }

                resolve(rows)
            })
        })

    }

    async findRandom(n:number):Promise<any>{

        return new Promise<any>((resolve, reject) => {
            
            let sql = `SELECT * FROM movies 
            ORDER BY RAND ( )  
            LIMIT ${Math.sqrt(n*n)} `
            
            this.connection.query(sql, (err:any, rows:[], fields:any)=>{
                if (err ){
                    reject(err['sqlMessage'])
                }

                if (!rows) {
                    reject("no movies found")
                }

                resolve(rows)
            })
        })

    }

    async create(pwd:string):Promise<boolean|string>{
        return new Promise<boolean|string>((resolve, reject) => {
            resolve("TODO")
        })
        
    }

    createFilter(composition = "",keyword = ""){
        let sql_request = `SELECT * FROM movies `
    
        let title = this.title
        let types = this.types

        let filter = ""

        if (title){
            // just select by title and disregard the other query
            filter += `WHERE title = '${title}'`
            return sql_request + filter
        }
        else{
            let logic_op = composition == ""? " AND " : composition;

            if (types){
                // comma separated list of type (action,drama, ...)

                let types_array = types.split(',');

                types_array.forEach(elem=>{
                    if ( filter != "") filter += logic_op
                    filter += ` types LIKE "%${elem}%" `;
                })

                if (filter != "") filter = ` (${filter}) `
            }
        
            if (keyword != ""){
                if ( filter != "") filter += " AND ";
                filter += `(title LIKE "%${keyword}%" OR description LIKE "%${keyword}%") `;
                // look for keyword in title and description => Use LIKE (not optimized but work)
            }
        }

        if (filter != ""){
            sql_request += `WHERE (${filter})`;
            
        }
        
        sql_request += `LIMIT 50`

        return sql_request;
    }

    update(username='',role='',token='x'):Promise<boolean>{
        //TODO
        return new Promise<boolean>((resolve, reject) => {
            resolve(false)
        })
    }

    delete():Promise<boolean>{
        //TODO
        return new Promise<boolean>((resolve, reject) => {
            resolve(false)
        })
    }


    async findId_title(filter:string,value:string|number){
        return new Promise<boolean>((resolve, reject) => {

            let sql = `SELECT INTO movies (${filter})
            VALUES ('${value}')`
            
            this.connection.query(sql, (err:any, rows:any, fields:any)=>{
                if (err){
                    console.log(err)
                    reject(err['sqlMessage'])
                }
                resolve(true)
            })
        })

    }

}
