import { timeStamp } from "console";
import DbConnect from "../util/dbConnect";


export class Verif extends DbConnect {
    private email: string;
    private vToken: string;
    private type: number;
    private timeout: string;
    

    constructor(
        email:string,
        timeout:string,
        vToken:"",
        type:1
    ) {

        if (!email || email.length < 1) {
            throw new Error('Email is required and must not be empty');
        }
        
        super();
        this.email = email;
        this.timeout = timeout;
        this.vToken = vToken;
        this.type = type;
        
    }

    
    findAll():any{
        //TODO
    }

    //'2023-03-05 20:59:00'
    static getTimeStamp( date = new Date()):string{

        let timeStamp =date.toISOString().slice(0, 19).replace('T', ' ')

        return timeStamp
    }

    async findOne(){
        return new Promise<any>((resolve, reject) => {
            
            this.connection.query(`SELECT * FROM verificaton WHERE vToken = "${this.vToken}"`, (err:any, rows:[], fields:any)=>{
                if (err ){
                    reject(err['sqlMessage'])
                }

                if (!rows) {
                    reject("no user found")
                }

                resolve(rows)
            })
        })
        
    }
    async create(pwd:string):Promise<boolean|string>{
        
        return new Promise<boolean>((resolve, reject) => {

            // let sql = `INSERT INTO user (email,vToken,type,timeout)
            // VALUES ('${this.email}', '${this.vToken}', '${this.type}','${this.timeout}')`

            /*
            
             vToken types : 1 => email verificaiton
                            2 => pwd reset
                            ...
            
            */

            let sql = `
            INSERT INTO verification (email,vToken,timeout,type)
            VALUES('${this.email}','${this.vToken}',TIMESTAMP('2023-03-05 20:34:00','0:15:0'),'${this.type}');
            `
            
            this.connection.query(sql, (err:any, rows:any, fields:any)=>{
                if (err){
                    reject(err['sqlMessage'])
                }
                resolve(true)
            })
        })
    }

    update(username='',role='',token='x'):Promise<boolean>{

        return new Promise<boolean>((resolve, reject) => {
            resolve(false)
        })
    }

    delete():Promise<boolean>{
        return new Promise<boolean>((resolve, reject) => {

            let sql = `DELETE from verification 
            WHERE vToken = '${this.vToken}'`
            
            this.connection.query(sql, (err:any, rows:any, fields:any)=>{
                if (err){
                    reject(err['sqlMessage'])
                }
                resolve(true)
            })
        })
    }
}
