/* Package imports */
import express from 'express';
import cookieParser from "cookie-parser";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./api-doc.json"
/* Local imports */
import config from './util/config';
import  VATokenRefresher  from "./middlewares/VATokenRefresher"


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


const  whitelist = ['https://liolle.github.io','http://localhost']

var corsOptions = {
  credentials: true,
  origin: function (origin :any, callback :any) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
  
const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions));

app.use(VATokenRefresher)

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/register',require('./routes/register.route'))
app.use('/login',require('./routes/login.route'))
app.use('/api',require('./routes/api.route'))

/*
app.use('/logout',require('./routes/logout'))
*/

const port  = config.PORT;
app.listen(port,() =>{
    console.log( `\nServer running on ---> http://localhost:${port}\n`)
});