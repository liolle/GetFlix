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
        pwd = "",
        username = "",
        role = "USER",
        token = "",
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

    async validatePwd(pwd:string):Promise<boolean|string>{

        return new Promise<boolean>(async (resolve, reject) => {
            
            this.findOne()
            .then((data)=>{
                resolve( bcrypt.compareSync(pwd,data[0]['pwd']))
            })
            .catch((err)=>{
                reject(err)
            })
            

        })

    }


    
    
    
    findAll():any{
        //TODO
    }

    async findOne(){
        return new Promise<any>((resolve, reject) => {
            
            this.connection.query(`SELECT * FROM user WHERE email = "${this.email}"`, (err:any, rows:[], fields:any)=>{
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
        const hashedPwd =  await bcrypt.hash(pwd, 10)
        return new Promise<boolean>((resolve, reject) => {

            let sql = `INSERT INTO user (email,pwd,username,role,token)
            VALUES ('${this.email}', '${hashedPwd}', '','USER','')`
            
            this.connection.query(sql, (err:any, rows:any, fields:any)=>{
                if (err){
                    reject(err['sqlMessage'])
                }
                resolve(true)
            })
        })
    }

    update(username='',role='',token='x'):Promise<boolean>{
        //TODO

        const updateString = (username='',role='',token='x')=>{
            let res = ""

            if(username) res+=`username = '${username}'`;
            if(role) res == ""? res+=` role = '${role}'`:res+=`, role = '${role}'`;
            if(token != 'x') res == ""? res+=` token = '${token}'`:res+=`, token = '${token}'`;

            return res
        }

        return new Promise<boolean>((resolve, reject) => {

            if (username ==''&&role==''&&token=='x') reject("missing update argument")

            let sql = `UPDATE user SET ${updateString(username,role,token)} WHERE email = '${this.email}'`
            
            this.connection.query(sql, (err:any, rows:any, fields:any)=>{
                if (err){
                    reject("Request error: "+err['sqlMessage'])
                }
                resolve(true)
            })
        })
    }
    delete():Promise<boolean>{
        //TODO
        return new Promise<boolean>((resolve, reject) => {

           

            let sql = `DELETE from user 
            WHERE email = '${this.email}'`
            
            this.connection.query(sql, (err:any, rows:any, fields:any)=>{
                if (err){
                    reject(err['sqlMessage'])
                }
                resolve(true)
            })
        })
    }
}
