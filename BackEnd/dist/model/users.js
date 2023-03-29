"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const dbConnect_1 = __importDefault(require("../util/dbConnect"));
const bcrypt_1 = __importDefault(require("bcrypt"));
/*

CREATE TABLE user (
    email varchar(128) PRIMARY KEY NOT NULL,
    pwd varchar(128) NOT NULL,
    username varchar(128) ,
    status varchar(128),
    token varchar(256)
);

*/
class User extends dbConnect_1.default {
    email;
    pwd;
    username;
    status;
    token;
    constructor(email, pwd = "", username = "", status = 0, token = "") {
        if (!email || email.length < 1) {
            throw new Error('Email is required and must not be empty');
        }
        super();
        this.email = email;
        this.pwd = pwd;
        this.username = username;
        this.status = status;
        this.token = token;
    }
    async validatePwd(pwd) {
        return new Promise(async (resolve, reject) => {
            this.findOne()
                .then((data) => {
                resolve(bcrypt_1.default.compareSync(pwd, data[0]['pwd']));
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
    findAll() {
        //TODO
    }
    async findOne() {
        return new Promise((resolve, reject) => {
            this.connection.query(`SELECT * FROM gf_user WHERE email = "${this.email}"`, (err, rows, fields) => {
                if (err) {
                    reject(err['sqlMessage']);
                    console.log(err);
                    return;
                }
                if (!rows) {
                    reject("no user found");
                    return;
                }
                resolve(rows);
            });
        });
    }
    async create(pwd) {
        const hashedPwd = await bcrypt_1.default.hash(pwd, 10);
        return new Promise((resolve, reject) => {
            let sql = `INSERT INTO gf_user (email,pwd,username,status,token)
            VALUES ('${this.email}', '${hashedPwd}', '',0,'')`;
            this.connection.query(sql, (err, rows, fields) => {
                if (err) {
                    console.log("QUERY");
                    console.log(err);
                    reject(err['sqlMessage']);
                    return;
                }
                resolve(true);
            });
        });
    }
    update(username = '', status = 0, token = 'x') {
        const updateString = (username = '', status = 0, token = 'x') => {
            let res = "";
            if (username)
                res += `username = '${username}'`;
            if (status)
                res == "" ? res += ` status = '${status}'` : res += `, status = '${status}'`;
            if (token != 'x')
                res == "" ? res += ` token = '${token}'` : res += `, token = '${token}'`;
            return res;
        };
        return new Promise((resolve, reject) => {
            if (username == '' && status == 0 && token == 'x')
                reject("missing update argument");
            let sql = `UPDATE gf_user SET ${updateString(username, status, token)} WHERE email = '${this.email}'`;
            this.connection.query(sql, (err, rows, fields) => {
                if (err) {
                    reject("Request error: " + err['sqlMessage']);
                }
                resolve(true);
            });
        });
    }
    delete() {
        return new Promise((resolve, reject) => {
            let sql = `DELETE from gf_user 
            WHERE email = '${this.email}'`;
            this.connection.query(sql, (err, rows, fields) => {
                if (err) {
                    reject(err['sqlMessage']);
                }
                resolve(true);
            });
        });
    }
}
exports.User = User;
