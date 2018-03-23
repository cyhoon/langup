exports.getTest = async (ctx) => {
    console.log('Hello World!');
    ctx.status = 200;
    ctx.body = 'Hello, world';
};