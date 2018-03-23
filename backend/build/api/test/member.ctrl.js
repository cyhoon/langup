'use strict';

exports.getTest = async function (ctx) {
    console.log('Hello World!');
    ctx.status = 200;
    ctx.body = 'Hello, world';
};