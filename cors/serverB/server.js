/**
 * Created by Administrator on 2016/5/22.
 */
var koa = require("koa"),
    router = require("koa-router")(),
    koaBody = require("koa-body"),
    app = koa();

app.listen(3001);
console.log("web服务器在3001端口开启！");

app.use(router.routes());

router.post("/getJson", koaBody(), function *() {
    var username = this.request.body.username,
        password = this.request.body.password;
    console.info(username);
    console.info(password);

    var json = {
        name: "zhangsan",
        age: 18
    };

    this.set("Access-Control-Allow-Origin", "*");
    this.body = json;
});