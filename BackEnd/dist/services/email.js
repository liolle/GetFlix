"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendmail = exports.EMAIL_VALIDATION_MODEL1 = void 0;
const google_auth_library_1 = require("google-auth-library");
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const oAuth2Client = new google_auth_library_1.OAuth2Client(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URI);
oAuth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
});
const EMAIL_VALIDATION_MODEL1 = (resetLink) => {
    return `
    <body style="background-color: darkgrey; display: flex; flex-direction: 
    column; padding: 10px; justify-content: center; 
    align-items: center;">
    
        <div style=" display: flex; justify-content: center; 
        align-items: center; flex-direction: column; height: 700px;">
        
            <section style="display: flex; justify-content: center; flex: 1; 
            border-radius: 8px; padding: 5%; 
            ">
    
                <div style="display: flex; flex-direction: column; 
                gap: 10px; align-items: center; background-color: beige;
                height: fit-content; padding: 5%; border-radius: 8px; 
                font-size: x-large; font-weight: 600; font-family:monospace;">
                    Thank you for signing up to our service! In order to get started, 
                    we need to verify your email address. 
                    
                    <a href="${resetLink}" target="_blank"
                    style="width: 50%; cursor: pointer; padding: 10px;
                    border-radius: 8px; border-width: 0px; text-align: center;
                    background-color: #0C4A6E; font-weight: 700; color: beige;
                    text-decoration: none;"> 
                    Verify my email 
                    </a>
              
                </div>
            </section>
        </div>
    </body>
    `;
};
exports.EMAIL_VALIDATION_MODEL1 = EMAIL_VALIDATION_MODEL1;
const sendmail = async (recipient, htmlMessage, subject) => {
    return new Promise(async (resolve, reject) => {
        try {
            const tokenRes = await oAuth2Client.getAccessToken();
            const accestoken = tokenRes.token;
            const transporter = nodemailer_1.default.createTransport({
                host: 'smtp.gmail.com',
                secure: true,
                port: 465,
                auth: {
                    type: 'OAuth2',
                    user: process.env.USER_EMAIL,
                    clientId: process.env.CLIENT_ID,
                    clientSecret: process.env.CLIENT_SECRET,
                    refreshToken: process.env.REFRESH_TOKEN,
                    accessToken: accestoken,
                },
            });
            const mailOptions = {
                from: `VISUALIZE <${process.env.USER_EMAIL}>`,
                to: recipient,
                subject: subject,
                html: htmlMessage
            };
            transporter.sendMail(mailOptions, (error, result) => {
                if (error) {
                    reject({
                        status: "Failed",
                        message: error
                    });
                }
                else {
                    resolve({
                        status: "OK",
                        message: result.response
                    });
                }
                transporter.close();
            });
        }
        catch (error) {
            reject({
                status: "Failed",
                message: error
            });
        }
    });
};
exports.sendmail = sendmail;
