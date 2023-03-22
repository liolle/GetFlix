"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkEmailVf = exports.createVerification = void 0;
const verif_1 = require("../model/verif");
const email_1 = require("../services/email");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const createLink = (key) => {
    return process.env.SERVER + `/register/vfCheck?key=${key}`;
};
const createVerification = async (req, res) => {
    const { email } = req.body;
    if (!email) {
        res.status(400).json({ message: "One of the entry required entry is missing" });
        return;
    }
    let verif1 = new verif_1.Verif(email, verif_1.Verif.getTimeStamp(), "testToken01", 1);
    try {
        let key = verif_1.Verif.generateToken(50);
        await verif1.create(key);
        // sent email 
        await (0, email_1.sendmail)(email, (0, email_1.EMAIL_VALIDATION_MODEL1)(createLink(key)), "Email verification");
        res.status(200).json({
            message: "Email sent at: " + email
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server issues" });
    }
    finally {
        verif1.pollEnd();
    }
};
exports.createVerification = createVerification;
const checkEmailVf = async (req, res) => {
    let key = req.query.key || "";
    if (key == "") {
        res.status(400).json({ message: "One of the entry required entry is missing" });
        return;
    }
    let verif1 = new verif_1.Verif("test@test.com", verif_1.Verif.getTimeStamp(), "testToken01", 1);
    try {
        let checked = await verif1.addStatusFromVf(key, 1);
        if (checked) {
            res.status(200).json({
                message: "Email verified"
            });
        }
        else {
            res.status(400).json({
                message: "Key expired"
            });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server issues" });
    }
    finally {
        verif1.pollEnd();
    }
};
exports.checkEmailVf = checkEmailVf;
