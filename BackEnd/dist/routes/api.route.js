"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const selector_1 = __importDefault(require("../handlers/selector"));
const types_1 = __importDefault(require("../handlers/types"));
const random_1 = __importDefault(require("../handlers/random"));
// take parameter /select?type=t1,t2,...&title=x&composition=union|inter&keyword=x   
router.get('/movies/select', selector_1.default);
router.get('/movies/types', types_1.default);
router.get('/movies/random', random_1.default);
module.exports = router;
