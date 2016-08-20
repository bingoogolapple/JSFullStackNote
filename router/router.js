/**
 * Created by bingoogolapple on 16/6/23.
 */

var formidable = require("formidable");
var Comment = require("../models/Comment");


exports.getComments = function (req, res, next) {
    Comment.find({}, function (err, result) {
        if (err) {
            console.log("获取评论列表失败");
            return res.json({
                code: -2,
                msg: "获取评论列表失败" + err
            });
        }
        console.log("获取评论列表成功");
        // result就是所有Comment数组
        res.json({
            code: 0,
            data: result
        });
    });
};

exports.addComment = function (req, res, next) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var author = fields.author;
        var text = fields.text;
        if (author.length == 0) {
            return res.json({
                code: -1,
                msg: "用户名不能为空"
            });
        }
        if (text.length == 0) {
            return res.json({
                code: -1,
                msg: "内容不能为空"
            });
        }

        Comment.create({author, text}, function (err, doc) {
            if (err) {
                return res.json({
                    code: -2,
                    msg: "添加评论失败" + err
                });
            }
            console.log("添加评论成功");

            Comment.find({}, function (err, result) {
                if (err) {
                    console.log("获取评论列表失败");
                    return res.json({
                        code: -2,
                        msg: "获取评论列表失败" + err
                    });
                }
                console.log("获取评论列表成功");
                // result就是所有Comment数组
                res.json({
                    code: 0,
                    data: result
                });
            });

        });
    });
};

exports.notFound = function (req, res) {
    res.json({
        code: 404,
        msg: "Go Home, You Are Drunk"
    });
};