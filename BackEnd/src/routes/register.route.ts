import express from 'express';
const router = express.Router();
import register  from "../handlers/register";
import { createVerification,checkEmailVf}  from "../handlers/verification";

router.post('/',register)

router.post('/vf',createVerification)
router.get('/vfCheck',checkEmailVf)


module.exports = router