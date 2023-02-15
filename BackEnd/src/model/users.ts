import DbConnect from "../util/dbConnect";
import bcrypt from "bcrypt";

/*

CREATE TABLE user (
	email varchar(128) PRIMARY KEY NOT NULL,
    pwd varchar(128) NOT NULL,
	username varchar(128) ,
    role varchar(128),
    token varchar(256)
);

*/

export class User extends DbConnect {
    email: string;
    pwd: string;
    username: string;
    role: string;
    token: string;

    constructor(
        email:string,
        pwd:string,
        username:string = "",
        role:string = "USER",
        token:string = "",
    ) {

        if (!email || email.length < 1) {
            throw new Error('Email is required and must not be empty');
        }
        
        super();
        this.email = email;
        this.pwd = pwd;
        this.username = username;
        this.role = role;
        this.token = token;
    }
    
    setPwd(pwd:string){
        
        if (!pwd || pwd.length < 1) {
            throw new Error('Password is required and must not be empty');
        }

        this.pwd = pwd
    }

    private validatePwd(pwd:string):boolean{

        // get hashedPwd from db
        let storedPwd = "azerty"

        return bcrypt.compareSync(pwd,storedPwd)
    }

    
    
    findAll():any{
        //TODO
    }
    findOne():Promise<[]>{
        console.log(this.email)
        this.connection.query(`SELECT * FROM user WHERE email = "${this.email}" `, (err:any, rows:any, fields:any)=>{
            return new Promise<[]>((resolve, reject) => {
                resolve(rows)
            })
        })
        return new Promise<[]>((resolve, reject) => {
            resolve([])
        })
    }
    create():boolean{
        //TODO
        return true;
    }
    update():boolean{
        //TODO
        return true;
    }
    delete():boolean{
        //TODO
        return true;
    }
}
