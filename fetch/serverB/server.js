/**
 * Created by Administrator on 2016/5/17.
 */
var koa = require("koa"),
    serve = require("koa-static"),
    koaBody = require("koa-body"),
    router = require("koa-router")(),
    app = koa();

//为服务器开启监听
app.listen(3001);
console.log("web服务器在3001端口开启！");

/**加中间件【插件】*/
app.use(serve(__dirname + "/html"));//设置静态目录
app.use(router.routes());//设置路由

/**路由*/
router.post("/getJson", koaBody(), function *() {
    var username = this.request.body.username;
    var pwd = this.request.body.pwd;

    var json = {
        name: "my name is LiuXing!!"
    };

    this.set("Access-Control-Allow-Credentials", true);//允许设置cookie
    this.set("Access-Control-Allow-Origin", "http://localhost:3000");//如果使用*则不能使用cookie
    this.cookies.set('name', 'tobi');
    this.body = json;
});