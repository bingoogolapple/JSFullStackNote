/**
 * Created by bingoogolapple on 16/8/20.
 */

var formidable = require("formidable");

var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');

module.exports = {
    create: function (req, res, next) {
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
    },
    list: function (req, res, next) {
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
    },
    clear: function (req, res, next) {
        Comment.remove({},function(err){
            if (err) {
                console.log("清空评论失败");
                return res.json({
                    code: -2,
                    msg: "清空评论失败" + err
                });
            }
            console.log("清空评论成功");
            res.json({
                code: 0,
                msg: "清空评论成功"
            });
        });
    }
}