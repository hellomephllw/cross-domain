/**
 * Created by Administrator on 2016/5/22.
 */
var koa = require("koa"),
    serve = require("koa-static"),
    koaBody = require("koa-body"),
    router = require("koa-router")(),
    querystring = require("querystring"),
    httpClient = require(__dirname + "/lib/httpClient"),
    app = koa();

app.listen(3000);
console.log("web服务器在3000端口开启！");

app.use(serve(__dirname + "/static"));
app.use(router.routes());

router.post("/getJson", koaBody(), function *() {
    //获取参数
    var username = this.request.body.username,
        password = this.request.body.password;

    //包装需要通过本代理服务器传递到所需服务器的参数
    var postData = querystring.stringify({
        username: username,
        password: password
    });
    //所需服务器的信息
    var options = {
        hostname: "127.0.0.1",
        port: 3001,
        path: "/getJson",
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Content-Length": postData.length
        }
    };
    //获取信息
    var info = yield httpClient.sendRequest(postData, options);

    //响应
    this.body = info;
});