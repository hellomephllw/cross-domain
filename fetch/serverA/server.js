/**
 * Created by Administrator on 2016/5/22.
 */
var koa = require("koa"),
    serve = require("koa-static"),
    koaBody = require("koa-body"),
    router = require("koa-router")(),
    app = koa();

app.listen(3000);
console.log("web服务器在3000端口开启！");

app.use(serve(__dirname + "/static"));
app.use(router.routes());

router.post("/getJson", koaBody(), function *() {
    //获取参数
    var username = this.request.body.username,
        password = this.request.body.password;

    console.info(username, password);

    //响应
    this.body = "abc";
});