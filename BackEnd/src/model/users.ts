import DbConnect from "../util/dbConnect";
import bcrypt from "bcrypt";

/*

CREATE TABLE user (
	email varchar(128) PRIMARY KEY NOT NULL,
    pwd varchar(128) NOT NULL,
	username varchar(128) ,
    status varchar(128),
    token varchar(256)
);

*/

export class User extends DbConnect {
    email: string;
    pwd: string;
    username: string;
    status: number;
    token: string;

    constructor(
        email:string,
        pwd = "",
        username = "",
        status = 0,
        token = "",
    ) {

        if (!email || email.length < 1) {
            throw new Error('Email is required and must not be empty');
        }
        
        super();
        this.email = email;
        this.pwd = pwd;
        this.username = username;
        this.status = status;
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
                    console.log(err)
                    return
                }

                if (!rows) {
                    reject("no user found")
                    return
                }

                resolve(rows)
            })
        })
        
    }
    async create(pwd:string):Promise<boolean|string>{
        const hashedPwd =  await bcrypt.hash(pwd, 10)
        return new Promise<boolean>((resolve, reject) => {

            let sql = `INSERT INTO user (email,pwd,username,status,token)
            VALUES ('${this.email}', '${hashedPwd}', '',0,'')`
            
            this.connection.query(sql, (err:any, rows:any, fields:any)=>{
                if (err){
                    console.log("QUERY")
                    console.log(err)
                    reject(err['sqlMessage'])
                    return
                }
                resolve(true)
            })
        })
    }

    update(username='',status=0,token='x'):Promise<boolean>{

        const updateString = (username='',status=0,token='x')=>{
            let res = ""

            if(username) res+=`username = '${username}'`;
            if(status) res == ""? res+=` status = '${status}'`:res+=`, status = '${status}'`;
            if(token != 'x') res == ""? res+=` token = '${token}'`:res+=`, token = '${token}'`;

            return res
        }

        return new Promise<boolean>((resolve, reject) => {
            if (username ==''&&status==0&&token=='x') reject("missing update argument")
            let sql = `UPDATE user SET ${updateString(username,status,token)} WHERE email = '${this.email}'`
            
            this.connection.query(sql, (err:any, rows:any, fields:any)=>{
                if (err){
                    reject("Request error: "+err['sqlMessage'])
                }
                resolve(true)
            })
        })
    }
    delete():Promise<boolean>{
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
