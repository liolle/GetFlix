import express from 'express';
const router = express.Router();
import login  from "../handlers/login";
import auth  from "../handlers/auth";
          
router.post('/auth',auth)
router.post('/',login)


module.exports = router