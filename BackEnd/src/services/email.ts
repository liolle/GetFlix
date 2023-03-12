
import { google } from "googleapis";
import nodemailer from "nodemailer";
import * as dotenv from "dotenv";
dotenv.config();

const OAuth2 = google.auth.OAuth2
const USER_EMAIL = process.env.USER_EMAIL
const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REFRESH_TOKEN = process.env.REFRESH_TOKEN
const REDIRECT_URI = process.env.REDIRECT_URI
const OAuth2_client = new OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI)
OAuth2_client.setCredentials({refresh_token:REFRESH_TOKEN})


export const EMAIL_VALIDATION_MODEL1 = (resetLink:string):string =>{
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
                    Thank you for signing up for our service! To get started, 
                    we need to verify your email address. 
    
                    <form method="get" action="${resetLink}" style=" width: 100%; display: 
                    flex; justify-content: center;" >
                        <input type="submit" value="Verify my email" 
                        style="width: 50%; cursor: pointer; padding: 10px;
                        border-radius: 8px; border-width: 0px;  
                        background-color: #0C4A6E; font-weight: 700; color: beige;"/>
                    </form>
                    </button>
                </div>
            </section>
        </div>
    </body>
    `
}


export const sendmail = async (recipient:string,htmlMessage:string,subject:string)=>{

    return new Promise<{status:string,message:string}>(async (resolve, reject) => {
        
        try {
            const tokenRes = await  OAuth2_client.getAccessToken()
            const accestoken = tokenRes.token as string
    
            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                secure: true,
                port: 465,
                auth: {
                    type: 'OAuth2',
                    user: USER_EMAIL,
                    clientId: CLIENT_ID,
                    clientSecret: CLIENT_SECRET,
                    refreshToken: REFRESH_TOKEN,
                    accessToken: accestoken,
                },
            });
    
            const mailOptions = {
                from: `VISUALIZE <${USER_EMAIL}>`,
                to : recipient,
                subject: subject,
                html: htmlMessage
            }
            
            transporter.sendMail(mailOptions,(error,result)=>{
                if (error){
                    reject({
                        status:"Failed",
                        message:error
                    })
                }
                else{
                    resolve({
                        status:"OK",
                        message:result.response
                    })
                }
                transporter.close()
            })
    
        } catch (error) {
            reject({
                status:"Failed",
                message:error
            })
            
        }
    })




}