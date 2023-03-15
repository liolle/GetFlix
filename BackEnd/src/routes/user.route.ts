import express from 'express';
const router = express.Router();
import getUser  from "../handlers/userInfo";
          
router.post('/one',getUser)


module.exports = router