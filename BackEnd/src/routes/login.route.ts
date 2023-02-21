import express from 'express';
const router = express.Router();
import login  from "../handlers/login";
import auth  from "../handlers/auth";
          
router.post('/',login)
router.post('/auth',auth)


module.exports = router