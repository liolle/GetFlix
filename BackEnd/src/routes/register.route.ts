import express from 'express';
const router = express.Router();
import register  from "../handlers/register";
import { checkEmailVf, createVerification}  from "../handlers/verification";

router.post('/',register)

// email verificaiton 
router.post('/vf',createVerification)
router.get('/vfCheck',checkEmailVf)


module.exports = router