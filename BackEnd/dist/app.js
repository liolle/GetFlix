"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* Package imports */
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const api_doc_json_1 = __importDefault(require("./api-doc.json"));
/* Local imports */
const config_1 = __importDefault(require("./util/config"));
const VATokenRefresher_1 = __importDefault(require("./middlewares/VATokenRefresher"));
// Extended: https://swagger.io/specification/#infoObject
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Hello World',
            version: '1.0.0',
        },
    },
    host: `localhost:${config_1.default.PORT}`,
    basePath: '/',
    apis: ['./src/**/*.ts'], // files containing annotations as above
};
const whitelist = ['https://liolle.github.io', 'http://localhost:5173', 'http://localhost:4173'];
var corsOptions = {
    credentials: true,
    origin: whitelist
};
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)(corsOptions));
app.use(VATokenRefresher_1.default);
app.use('/api-doc', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(api_doc_json_1.default));
app.use('/register', require('./routes/register.route'));
app.use('/api', require('./routes/api.route'));
app.use('/users', require('./routes/user.route'));
app.use('/login', require('./routes/login.route'));
/*
app.use('/logout',require('./routes/logout'))
*/
const port = config_1.default.PORT;
app.listen(port, () => {
    console.log(`\nServer running on ---> http://localhost:${port}\n`);
});
