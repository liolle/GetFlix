import express from 'express';
const router = express.Router();
import register  from "../handlers/register";

router.post('/',register)

// email verificaiton 
router.post('/vf',register)
router.post('/vfCheck',register)


module.exports = router