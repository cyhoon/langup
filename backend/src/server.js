import dotenv from 'dotenv';
dotenv.config();

import Koa from 'koa';
import cors from 'koa-cors';
import koaBody from 'koa-body';
koaBody({ multipart: true, strict: false });

import router from './api';

const { PORT: port } = process.env;
const app = new Koa();

class Server {

    constructor(port) {
        this.port = port;
        this.middleware();
    }

    middleware() {
        app.use(router.routes())
        .use(router.allowedMethods());
    }

    listen() {
        app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}

const server = new Server(port).listen();
