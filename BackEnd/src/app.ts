/* Package imports */
import express from 'express';
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";

/* Local imports */
import config from './util/config';
// const verifyJwt = require('./middlewares/verifyJwt')
// const {connectDb} = require('./db_util')

dotenv.config()

const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors());


// Connect to db 


/*
    TODO
    -login route
    -logout route
    -refresh route
    -register route 
*/

app.use('/register',require('./routes/register.route'))
/*
app.use('/login',require('./routes/login'))
app.use('/refresh',require('./routes/refresh'))
app.use('/logout',require('./routes/logout'))
*/


const port  = config.PORT;
app.listen(port,() =>{
    console.log( `\nServer running on ---> http://localhost:${port}\n`)
});