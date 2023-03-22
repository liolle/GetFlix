
import { createPool, Pool  } from "mysql2";
const mysql = require('mysql2')
import * as dotenv from "dotenv";
 dotenv.config();

abstract class DbConnect {
  protected connection;
  
  constructor() {
    // dotenv.config();
   
    // this.connection = createPool({
    //     host: process.env.MYSQLHOST,
    //     user: process.env.MYSQLUSER,
    //     password: process.env.MYSQLPASSWORD,
    //     database: process.env.DATABASE,
        
    //     connectionLimit :10,
    //     waitForConnections: true,
    //     // multipleStatements: true 
    // });
    this.connection = mysql.createConnection(process.env.DATABASE_URL);
    // console.log(`Connected to ${process.env.DATABASE} on Port ${parseInt(process.env.PORT_NUM as string)}`)
    
  }

  abstract findAll(...params:any):Promise<any>;
  abstract findOne(...params:any):Promise<any>;
  abstract create(...params:any):Promise<any>;
  abstract update(...params:any):Promise<any>;
  abstract delete(...params:any):Promise<any>;

  pollEnd() {

    setTimeout(()=>{
      this.connection.end();
    },500)
  }

}
export default DbConnect;
