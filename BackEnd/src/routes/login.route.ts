import express from 'express';
const router = express.Router();
import login  from "../handlers/login";

router.post('/',login)

module.exports = router