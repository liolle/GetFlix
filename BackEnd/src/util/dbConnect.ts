
import { createPool, Pool  } from "mysql2";
const mysql = require('mysql2')
import * as dotenv from "dotenv";
 dotenv.config();

abstract class DbConnect {
  protected connection;
  
  constructor() {
    
    this.connection = mysql.createConnection(process.env.DATABASE_URL);
    // this.connection = mysql.createConnection("mysql://root:root@localhost/planetscale");
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
