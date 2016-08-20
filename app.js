/**
 * Created by bingoogolapple on 16/6/23.
 */
var express = require("express");
var app = express();
var router = require("./router/router.js");
var db = require("./models/db.js");

// 设置静态资源目录
app.use(express.static("./public"));

// 获取评价列表
app.get("/comment", router.getComments);

// 添加评论
app.post("/comment", router.addComment);

//404
app.use(router.notFound);

app.listen(3000);