import express from 'express';
import config from './util/config';
const app = express();




const port  = config.PORT;
app.listen(port,() =>{
    console.log( `\nServer running on ---> http://localhost:${port}\n`)
});