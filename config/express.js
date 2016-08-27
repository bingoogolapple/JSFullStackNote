/**
 * Created by bingoogolapple on 16/8/20.
 */

var express = require("express");
var config = require("./config")

module.exports = function () {
    console.log('init express...');

    var app = express();

    // 设置静态资源目录
    app.use(express.static("./public/dist"));

    require('../app/router/CommentRouter')(app);

    // 404
    app.use(function (req, res) {
        res.status(404);

        // 防止重复返回，try catch包裹一下
        try {
            return res.json({
                code: 404,
                msg: "Go Home, You Are Drunk"
            });
        } catch (e) {
            console.error('404 set header after sent');
        }
    });

    // 500
    app.use(function (err, req, res, next) {
        if (!err) {
            return next()
        }

        res.status(500);

        // 防止重复返回，try catch包裹一下
        try {
            return res.json({
                code: 500,
                msg: err.message || "server error"
            });
        } catch (e) {
            console.error('500 set header after sent');
        }
    })

    app.listen(config.port, function() {
        console.log('init express success, listening on port:', config.port);
    });

    return app;
}