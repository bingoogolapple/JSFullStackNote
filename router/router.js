/**
 * Created by bingoogolapple on 16/6/23.
 */

var formidable = require("formidable");

// 暂时先存到内存中
var comments = [];


exports.getComments = function (req, res, next) {
    res.json(comments);
};

exports.addComment = function (req, res, next) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        if (comments.length > 10) {
            res.json({
                code: -1,
                msg: "最多只能添加10条"
            });
            return;
        }

        var author = fields.author;
        var text = fields.text;
        if (author.length == 0) {
            res.json({
                code: -1,
                msg: "用户名不能为空"
            });
            return;
        }
        if (text.length == 0) {
            res.json({
                code: -2,
                msg: "内容不能为空"
            });
            return;
        }
        comments = comments.concat({author, text, date: new Date()});

        res.json({
            code: 0,
            data: comments
        });
    });
};

exports.notFound = function (req, res) {
    res.json({
        code: 404,
        msg: "Go Home, You Are Drunk"
    });
};