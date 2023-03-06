import express from 'express';
const router = express.Router();
import register  from "../handlers/register";
import { checkVerification, createVerification}  from "../handlers/verification";

router.post('/',register)

// email verificaiton 
router.post('/vf',createVerification)
router.post('/vfCheck',checkVerification)


module.exports = router