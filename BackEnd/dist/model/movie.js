"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movies = void 0;
const dbConnect_1 = __importDefault(require("../util/dbConnect"));
/*

CREATE TABLE user (
    movieId int(11) PRIMARY KEY NOT NULL,
    name varchar(255) NOT NULL,
    videoLink varchar(255) ,
    title varchar(128),
    description text,
    types varchar(255)
    views
);

*/
class Movies extends dbConnect_1.default {
    movieId;
    name;
    videoLink;
    title;
    description;
    types;
    view;
    constructor(movieId, name = "", videoLink = "", title = "", description = "", types = "", view = 0) {
        super();
        this.movieId = movieId;
        this.name = name;
        this.videoLink = videoLink;
        this.title = title;
        this.description = description;
        this.types = types;
        this.view = view;
    }
    findAll() {
        //TODO
    }
    async findOne() {
        return new Promise(async (resolve, reject) => {
            try {
                if (this.movieId != -1) {
                    resolve(await this.findId_title("movieId", this.movieId));
                    return;
                }
                if (this.title != "") {
                    resolve(await this.findId_title("title", this.title));
                    return;
                }
            }
            catch (error) {
                console.log(error);
                reject(error);
            }
        });
    }
    async findSelection(composition = "", keyword = "") {
        return new Promise((resolve, reject) => {
            let sql = this.createFilter(composition, keyword);
            this.connection.query(sql, (err, rows, fields) => {
                if (err) {
                    console.log(err);
                    reject(err['sqlMessage']);
                }
                if (!rows) {
                    reject("no user found");
                }
                resolve(rows);
            });
        });
    }
    async findRandom(n) {
        return new Promise((resolve, reject) => {
            let rand = Math.floor(Math.random() * 10000);
            let sql = `SELECT * FROM gf_movies 
            ORDER BY RAND (${rand})  
            LIMIT ${n} `;
            this.connection.query(sql, (err, rows, fields) => {
                if (err) {
                    reject(err['sqlMessage']);
                }
                if (!rows) {
                    reject("no movies found");
                }
                resolve(rows);
            });
        });
    }
    async create(pwd) {
        return new Promise((resolve, reject) => {
            resolve("TODO");
        });
    }
    createFilter(composition = "", keyword = "") {
        let sql_request = `SELECT * FROM gf_movies `;
        let title = this.title;
        let types = this.types;
        let filter = "";
        if (title) {
            // just select by title and disregard the other query
            filter += `WHERE title = '${title}'`;
            return sql_request + filter;
        }
        else {
            let logic_op = composition == "" ? " AND " : composition;
            if (types) {
                // comma separated list of type (action,drama, ...)
                let types_array = types.split(',');
                types_array.forEach(elem => {
                    if (filter != "")
                        filter += logic_op;
                    filter += ` types LIKE "%${elem}%" `;
                });
                if (filter != "")
                    filter = ` (${filter}) `;
            }
            if (keyword != "") {
                if (filter != "")
                    filter += " AND ";
                filter += `(title LIKE "%${keyword}%" OR description LIKE "%${keyword}%") `;
                // look for keyword in title and description => Use LIKE (not optimized but work)
            }
        }
        if (filter != "") {
            sql_request += `WHERE (${filter})`;
        }
        sql_request += `LIMIT 50`;
        return sql_request;
    }
    update(username = '', status = '', token = 'x') {
        //TODO
        return new Promise((resolve, reject) => {
            resolve(false);
        });
    }
    delete() {
        //TODO
        return new Promise((resolve, reject) => {
            resolve(false);
        });
    }
    async findId_title(filter, value) {
        return new Promise((resolve, reject) => {
            let sql = `SELECT INTO gf_movies (${filter})
            VALUES ('${value}')`;
            this.connection.query(sql, (err, rows, fields) => {
                if (err) {
                    console.log(err);
                    reject(err['sqlMessage']);
                }
                resolve(true);
            });
        });
    }
}
exports.Movies = Movies;
