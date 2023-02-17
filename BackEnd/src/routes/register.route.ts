import express from 'express';
const router = express.Router();
import register  from "../handlers/register";

router.post('/',register)


module.exports = router