"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Verif = void 0;
const dbConnect_1 = __importDefault(require("../util/dbConnect"));
class Verif extends dbConnect_1.default {
    email;
    vToken;
    type;
    timeout;
    constructor(email, timeout, vToken = "", type = 1) {
        if (!email || email.length < 1) {
            throw new Error('Email is required and must not be empty');
        }
        super();
        this.email = email;
        this.timeout = timeout;
        this.vToken = vToken;
        this.type = type;
    }
    findAll() {
        //TODO
    }
    //'2023-03-05 20:59:00'
    static getTimeStamp(date = new Date(), dateStyle = 'yyyy-mm-dd', delimiter = "-") {
        function pad(number) {
            if (number < 10) {
                return '0' + number;
            }
            return `${number}`;
        }
        const formatDate = (y, m, d, dateStyle = 'yyyy-mm-dd') => {
            switch (dateStyle) {
                case "dd-mm-yyyy":
                    return pad(d) + delimiter + pad(m) + delimiter + pad(y);
                case "dd-yyyy-mm":
                    return pad(d) + delimiter + pad(y) + delimiter + pad(m);
                case "mm-yyyy-dd":
                    return pad(m) + delimiter + pad(y) + delimiter + pad(d);
                case "mm-dd-yyyy":
                    return pad(m) + delimiter + pad(d) + delimiter + pad(y);
                case "yyyy-dd-mm":
                    return pad(y) + delimiter + pad(d) + delimiter + pad(m);
                default:
                    return pad(y) + delimiter + pad(m) + delimiter + pad(d);
            }
        };
        let timeStamp = formatDate(date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate(), dateStyle);
        timeStamp += ' ';
        timeStamp += pad(date.getUTCHours());
        timeStamp += ':';
        timeStamp += pad(date.getUTCMinutes());
        timeStamp += ':';
        timeStamp += pad(date.getUTCSeconds());
        return timeStamp;
    }
    static generateToken(len) {
        var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var token = '';
        for (var i = 0; i < len; i++) {
            token += chars[Math.floor(Math.random() * chars.length)];
        }
        return token;
    }
    async findOne() {
        return new Promise((resolve, reject) => {
            this.connection.query(`SELECT * FROM verificaton WHERE vToken = "${this.vToken}"`, (err, rows, fields) => {
                if (err) {
                    reject(err['sqlMessage']);
                }
                if (!rows) {
                    reject("no user found");
                }
                resolve(rows);
            });
        });
    }
    async addStatusFromVf(key, mask) {
        return new Promise((resolve, reject) => {
            let sqlQuery = `
                UPDATE user U SET U.status = U.status | ${mask} WHERE U.email IN (SELECT email FROM verification V WHERE V.vToken = '${key}');
            
            `;
            let sqlDelQuery = `
            DELETE FROM verification WHERE vToken = '${key}';
        
            `;
            this.connection.query(sqlQuery, (err, rows, fields) => {
                if (err) {
                    console.log(err);
                    reject(err['sqlMessage']);
                    return;
                }
                if (!rows || rows.length === 0) {
                    resolve(false);
                    return;
                }
                this.connection.query(sqlDelQuery, (err, rows, fields) => {
                    if (err) {
                        console.log(err);
                        reject(err['sqlMessage']);
                        return;
                    }
                    if (!rows || rows.length === 0) {
                        resolve(false);
                        return;
                    }
                    resolve(true);
                });
            });
        });
    }
    async removeStatus(email, mask) {
        return new Promise((resolve, reject) => {
            let sqlQuery = `
                UPDATE user SET status = status & (~${mask})
                WHERE email = "${email}";
            
            `;
            this.connection.query(sqlQuery, (err, rows, fields) => {
                if (err) {
                    console.log(err);
                    reject(err['sqlMessage']);
                }
                if (!rows || rows.length === 0) {
                    resolve(false);
                }
                resolve(true);
            });
        });
    }
    async create(vToken) {
        return new Promise((resolve, reject) => {
            /*
            
             vToken types : 1 => email verificaiton
                            2 => pwd reset
                            ...
            
            */
            let timeStamp = Verif.getTimeStamp();
            let sql = `
            INSERT INTO verification (email,vToken,timeout,type)
            VALUES('${this.email}','${vToken}',TIMESTAMP('${timeStamp}','0:15:0'),${this.type})
            `;
            this.connection.query(sql, (err, rows, fields) => {
                if (err) {
                    reject(err['sqlMessage']);
                }
                resolve("OK");
            });
        });
    }
    update() {
        return new Promise((resolve, reject) => {
            resolve(false);
        });
    }
    delete() {
        return new Promise((resolve, reject) => {
            let sql = `DELETE from verification 
            WHERE vToken = '${this.vToken}'`;
            this.connection.query(sql, (err, rows, fields) => {
                if (err) {
                    reject(err['sqlMessage']);
                }
                resolve(true);
            });
        });
    }
}
exports.Verif = Verif;
