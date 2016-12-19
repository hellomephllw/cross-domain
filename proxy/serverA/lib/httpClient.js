/**
 * Created by Administrator on 2016/5/23.
 */
var http = require("http");

module.exports = {
    sendRequest: function (postData, options) {
        return function(callback) {
            //获取request
            var req = http.request(options, function(res) {
                var getData = "";
                res.setEncoding("utf-8");
                res.on("data", function(chunk) {//获取所需服务器返回响应的消息体
                    getData = chunk;
                });
                res.on("end", function() {//接受完消息体后触发
                    callback(null, getData);
                });
            });
            //包装请求参数
            req.write(postData);
            //发送request请求至所需服务器
            req.end();
        };

    }
}