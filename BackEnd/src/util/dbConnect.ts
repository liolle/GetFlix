
import { createPool, Pool  } from "mysql2";
// import * as dotenv from "dotenv";
// dotenv.config();

abstract class DbConnect {
  protected connection:Pool;
  
  constructor() {
    // dotenv.config();
   
    this.connection = createPool({
        host: process.env.DATABASE_URL_LOCAL,
        user: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DATABASE,
        port: parseInt(process.env.PORT_NUM as string),
        connectionLimit :10,
        multipleStatements : true 
    });
    
  }

  abstract findAll(...params:any):any;
  abstract findOne(...params:any):any;
  abstract create(...params:any):boolean;
  abstract update(...params:any):boolean;
  abstract delete(...params:any):boolean;

  pollEnd() {
    this.connection.end();
  }

}
export default DbConnect;
