import express from 'express';
const router = express.Router();
import getSelection from "../handlers/selector";
import getTypes from "../handlers/types";
import getRandom from "../handlers/random";


// take parameter /select?type=t1,t2,...&title=x&composition=union|inter&keyword=x          
router.get('/movies/select',getSelection)
router.get('/movies/types',getTypes)
router.get('/movies/random',getRandom)

module.exports = router