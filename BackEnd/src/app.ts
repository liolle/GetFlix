/* Package imports */
import express from 'express';
import cookieParser from "cookie-parser";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerDocument from "./api-doc.json"
/* Local imports */
import config from './util/config';
import  cookieCheck  from "./middlewares/cookieCheck"
// const verifyJwt = require('./middlewares/verifyJwt')
// const {connectDb} = require('./db_util')

// Extended: https://swagger.io/specification/#infoObject
const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Hello World',
        version: '1.0.0',
      },
    },
    host: `localhost:${config.PORT}`, // Host (optional)
    basePath: '/', // Base path (optional)
    apis: ['./src/**/*.ts'], // files containing annotations as above
  };
  
const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors());


app.use(cookieCheck)

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/register',require('./routes/register.route'))

app.use('/login',require('./routes/login.route'))

app.use('/api',require('./routes/api.route'))


///api/movies/select? type=t1,t2,...&title=x&composition=union|inter&keyword=x

/*
app.use('/refresh',require('./routes/refresh'))
app.use('/logout',require('./routes/logout'))
*/



const port  = config.PORT;
app.listen(port,() =>{
    console.log( `\nServer running on ---> http://localhost:${port}\n`)
});