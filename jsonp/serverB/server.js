/**
 * Created by Administrator on 2016/5/22.
 */
var koa = require("koa"),
    router = require("koa-router")(),
    app = koa();

app.listen(3001);
console.log("web服务器在3001端口开启！");

app.use(router.routes());

router.get("/getJson", function *() {
    var callback = this.query.callback,//跨域请求的回调函数
        username = this.query.username;//其他普通参数
    console.info(callback);
    console.info(username);

    var json = {
        name: "zhangsan",
        age: 18
    };

    //设置响应的消息体，为该回调函数传参
    this.body = callback + "(" + JSON.stringify(json) + ")";
});