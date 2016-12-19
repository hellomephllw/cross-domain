/**
 * Created by Administrator on 2016/5/22.
 */
var koa = require("koa"),
    serve = require("koa-static"),
    app = koa();

app.listen(3000);
console.log("web服务器在3000端口开启！");

app.use(serve(__dirname + "/static"));