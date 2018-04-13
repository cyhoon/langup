'use strict';

require('dotenv').config();
const { PORT: port } = process.env;

/**
 * Module dependencies.
 */

const Koa = require('koa');
const KoaBody = require('koa-body')({ multipart: true, strict: false });
const KoaCors = require('koa-cors');
const KoaRouter = require('koa-router');
const KoaServe = require('koa-static');
const models = require('./models');

/**
 * API Moudle dependencies.
 */

 const api = require('./api');

/**
 * Rest Server
 * 
 * @api public
 */

class RestServer {
    /**
     * @constructor
     * @param {http.port} port port: number
     * @api public
     * 
     */

    constructor(port) {
        this.port = port;
        this.app = new Koa();
        this.router = new KoaRouter();

        this.configration();
        this.middleware();
    }

    /**
     * Configration Rest Server
     */

    configration() {
        this.app.use((ctx, next) => {
            ctx.set('Access-Control-Allow-Credentials', true);
            ctx.set('Access-Control-Allow-Headers', 'Origin, x-access-token, X-Requested-With, Content-Type, Accept, x-timebase, Link');
            ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            ctx.set('Access-Control-Allow-Origin', '*');
            ctx.set('Access-Control-Expose-Headers', 'Link');

            return next();
        });
        this.app.use(KoaBody);
        this.app.use(this.router.routes());
        this.app.use(this.router.allowedMethods());
    }

    /**
     * Configration Rest Server Router
     */

    middleware() {
        this.router.use(api.routes());
    }

    /**
     * Rest Server port binding
     */

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}

const restServer = new RestServer(port).listen();
